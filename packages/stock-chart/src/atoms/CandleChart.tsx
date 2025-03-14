/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'; // Mark this as a Client Component
import * as d3 from 'd3';
import io from 'socket.io-client'
import { RefObject, useContext, useEffect, useRef, useState } from 'react';
import { StockHistory } from '@/types';
import { StockContext } from '@/context';

interface CandleChartProps {
  data: StockHistory,
  height?: number
  width?: number
}

export const CandlestickChart = ({ data, width = 1200, height = 600 }: CandleChartProps) => {
  const chartRef : RefObject<SVGSVGElement> = useRef(null);

  const [currentData, setCurrentData] = useState<any>(data)
  const {setCurrentSymbolPrice} = useContext(StockContext)
  
  useEffect(() => {
    if (!currentData || currentData.length === 0) return;

    const socket = io('http://localhost:3002')
    // Listen for new prices from the server
    socket.on('symbolPriceUpdate', (newPrice) => {
      setCurrentData((prevPrices) => {
        const limitChartPoints = prevPrices.length <= 40
        if(limitChartPoints){
          setCurrentSymbolPrice && setCurrentSymbolPrice(newPrice)
          return [newPrice, ...prevPrices]
        }
        prevPrices.pop()
        setCurrentSymbolPrice && setCurrentSymbolPrice(newPrice)
        return [newPrice, ...prevPrices]
      }); // Add the new price to the list
    });

    socket.emit('getStockPrice')

    // Cleanup on component unmount
    
    // Clear previous chart
    d3.select(chartRef.current).selectAll('*').remove();
    
    // Set up SVG container
    const svg = d3.select(chartRef.current)
    .attr('width', '100%')
    .attr('height', '100%')
    .style('background', '#000')
    .style('border', '1px solid #000');
    
    // Set up scales
    const xScale = d3.scaleBand()
    .domain(currentData.map(d => new Date(d.date).toLocaleTimeString()))
    .range([0, width])
    .padding(0.2);
    
    const yScale = d3.scaleLinear()
    .domain([d3.min(currentData, d => Math.min(d.open, d.close)), d3.max(currentData, d => Math.max(d.open, d.close))])
      .range([height, 0]);

      // Draw candlesticks
      svg.selectAll('.candlestick')
      .data(currentData)
      .enter()
      .append('rect')
      .attr('class', 'candlestick')
      .attr('x', d => xScale(new Date(d.date).toLocaleTimeString()))
      .attr('y', d => yScale(Math.max(d.open, d.close)))
      .attr('width', xScale.bandwidth())
      .attr('height', d => Math.abs(yScale(d.open) - yScale(d.close)))
      .attr('fill', d => d.open > d.close ? 'red' : 'green');
      
    // Draw wicks (high-low lines)
    svg.selectAll('.wick')
    .data(currentData)
      .enter()
      .append('line')
      .attr('class', 'wick')
      .attr('x1', d => xScale(new Date(d.date).toLocaleTimeString()) + xScale.bandwidth() * 2)
      .attr('x2', d => xScale(new Date(d.date).toLocaleTimeString()) + xScale.bandwidth() * 2)
      .attr('y1', d => yScale(d.high))
      .attr('y2', d => yScale(d.low))
      .attr('stroke', 'black')
      .attr('stroke-width', 1);
      
      // Add X axis
      svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .attr('className', `interval-tags`)
      .call(d3.axisBottom(xScale).ticks(5))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-1.6em')
      .attr('dy', '0.30em')
      .attr('transform', 'rotate(-45)');
      
      // Add Y axis
      svg.append('g')
      .call(d3.axisLeft(yScale));
  
      return () => {
        socket.disconnect();
      };
    }, [currentData, width, height]);
    
    return (
      <figure className='w-full relative bg-black h-full flex-col flex justify-center items-center'>
      <svg className='chart' 
      style={{
        overflow: 'visible'
      }}
      
      ref={chartRef}></svg>
      <figcaption className=' flex items-center justify-center absolute top-0 w-full'>
        {
          currentData[0].symbol + ' price updates every 5 seconds'
        }
      </figcaption>
    </figure>
  );
};

