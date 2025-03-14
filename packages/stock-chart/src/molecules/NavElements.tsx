'use client'

import React, { ReactNode, useContext } from 'react'
import styled from 'styled-components'
import {WrapperRowRouterRedirect } from '@/atoms'
import { usePathname } from 'next/navigation'
import { StockContext } from '@/context';

interface navBarData {
  children: ReactNode
  title: string,
  href?: string,
  sideBarMenu?: '' | 'carrito' | 'ingresar' | 'registrarse' | 'buscar' | 'menu'
}

interface titleProps {
  customSize?: string,
  color?: string,
  fontFamilyType?: string,
  weight?: number,
  data: Array<navBarData>
  hoverColor?: string, 
  baseUrl?: string,
  children?: ReactNode
}


const ListNavBar = styled.ul`
    display: flex;
    flex-direction: row;
    z-index: 5;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    &:hover{
      opacity: .7;
    }
    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      justify-content: center;
    }
  `
const ListItemNavBar = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    height: 100%;
    @media (max-width: 768px) {
      flex-direction: row;
      height: unset;
      gap: 20px;
    }
    .selected{
      color: #E84C1A;
    }
    .underline-compose{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
         li ~ a{
          opacity: 1;
        }
        
      }
      @media (max-width: 768px) {
        flex-direction: row;
        height: unset;
      }
    }
`

const SubTitleNavBar = styled.h1<titleProps>`
    display: flex;
    font-weight: ${props => props.weight ? props.weight : 800};
    text-decoration: none;
    font-style: normal;
    text-transform: capitalize;
    cursor: pointer;
    `

const IconContainer = styled.div<titleProps>`
  .nav-icon{
    fill: ${props => props.color ? props.color : '#fff'};
    transition: .8s;
    
    &:hover{
      fill: ${props => props.hoverColor ? props.hoverColor : '#fff'};
    }
  }
 
`


export const NavBarElements = ({customSize, color, fontFamilyType, weight, hoverColor, data, baseUrl}: titleProps) => {
  const pathName = usePathname()
  const { toggleSideBarMenu } = useContext(StockContext)
  return (
    <ListNavBar>
        <ListItemNavBar>
            {data.map((element, index)=>{
              return (
                
                element.href ?  
                <WrapperRowRouterRedirect key={index} baseUrl={baseUrl ||''} route={element.href} dynamicClasses='underline-compose'>
                  <SubTitleNavBar className={`${pathName == '/' + element.title ? 'selected' : ''}`} baseUrl='' data={data} customSize={customSize} color={color} fontFamilyType={fontFamilyType} weight={weight} hoverColor={hoverColor}>
                    
                    <IconContainer data={data} hoverColor={hoverColor} color={color} >
                      {element.children}
                    </IconContainer>
                  </SubTitleNavBar>
                </WrapperRowRouterRedirect> : 

                <SubTitleNavBar key={index} onClick={()=>toggleSideBarMenu && toggleSideBarMenu(element.sideBarMenu || '')} className={`${pathName == '/' + element.title ? 'selected' : ''}`} baseUrl='' data={data} customSize={customSize} color={color} fontFamilyType={fontFamilyType} weight={weight} hoverColor={hoverColor}>
                                  
                  <IconContainer  data={data} hoverColor={hoverColor} color={color} >
                    {element.children}
                  </IconContainer>
                </SubTitleNavBar>
                

              )
            })}
        </ListItemNavBar>
    </ListNavBar>
  )
}

