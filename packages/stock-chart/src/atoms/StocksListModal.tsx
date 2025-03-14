import dotenv from 'dotenv'
import { useRouter } from 'next/navigation'

dotenv.config()

const stockGainersList = {
    top_gainers: [
        {
            "ticker": "ACON",
            "price": "7.6",
            "change_amount": "4.25",
            "change_percentage": "126.8657%",
            "volume": "89318095"
        },
        {
            "ticker": "CCGWW",
            "price": "0.054",
            "change_amount": "0.024",
            "change_percentage": "80.0%",
            "volume": "84692"
        },
        {
            "ticker": "BTOG",
            "price": "0.3193",
            "change_amount": "0.1372",
            "change_percentage": "75.3432%",
            "volume": "276581569"
        },
        {
            "ticker": "BTAI",
            "price": "3.75",
            "change_amount": "1.59",
            "change_percentage": "73.6111%",
            "volume": "146572889"
        },
        {
            "ticker": "CDIOW",
            "price": "0.0617",
            "change_amount": "0.0252",
            "change_percentage": "69.0411%",
            "volume": "9102"
        },
        {
            "ticker": "ATLN",
            "price": "3.29",
            "change_amount": "1.18",
            "change_percentage": "55.9242%",
            "volume": "593440"
        },
        {
            "ticker": "CLRO",
            "price": "0.7861",
            "change_amount": "0.2691",
            "change_percentage": "52.0503%",
            "volume": "33099038"
        },
        {
            "ticker": "CREVW",
            "price": "0.0471",
            "change_amount": "0.0159",
            "change_percentage": "50.9615%",
            "volume": "1800"
        },
        {
            "ticker": "SVIIW",
            "price": "0.0899",
            "change_amount": "0.0299",
            "change_percentage": "49.8333%",
            "volume": "211"
        },
        {
            "ticker": "RVMDW",
            "price": "0.1233",
            "change_amount": "0.0373",
            "change_percentage": "43.3721%",
            "volume": "3962"
        },
        {
            "ticker": "RNWWW",
            "price": "0.1074",
            "change_amount": "0.0324",
            "change_percentage": "43.2%",
            "volume": "740"
        },
        {
            "ticker": "GWH+",
            "price": "0.1001",
            "change_amount": "0.03",
            "change_percentage": "42.796%",
            "volume": "300"
        },
        {
            "ticker": "ACONW",
            "price": "0.102",
            "change_amount": "0.0302",
            "change_percentage": "42.0613%",
            "volume": "370957"
        },
        {
            "ticker": "MDCXW",
            "price": "1.25",
            "change_amount": "0.37",
            "change_percentage": "42.0455%",
            "volume": "140"
        },
        {
            "ticker": "SYTAW",
            "price": "0.0698",
            "change_amount": "0.0191",
            "change_percentage": "37.6726%",
            "volume": "18395"
        },
        {
            "ticker": "NUVB+",
            "price": "0.3",
            "change_amount": "0.0796",
            "change_percentage": "36.1162%",
            "volume": "3713"
        },
        {
            "ticker": "LANV+",
            "price": "0.0269",
            "change_amount": "0.0069",
            "change_percentage": "34.5%",
            "volume": "100"
        },
        {
            "ticker": "DAVEW",
            "price": "0.2775",
            "change_amount": "0.0674",
            "change_percentage": "32.08%",
            "volume": "57698"
        },
        {
            "ticker": "CINGW",
            "price": "0.0352",
            "change_amount": "0.0085",
            "change_percentage": "31.8352%",
            "volume": "2000"
        },
        {
            "ticker": "OUSTW",
            "price": "0.0289",
            "change_amount": "0.0068",
            "change_percentage": "30.7692%",
            "volume": "5892"
        }
    ],
    top_losers: [
        {
            "ticker": "NOVA",
            "price": "0.5934",
            "change_amount": "-1.0666",
            "change_percentage": "-64.253%",
            "volume": "117768934"
        },
        {
            "ticker": "NVNI",
            "price": "0.3737",
            "change_amount": "-0.6363",
            "change_percentage": "-63.0%",
            "volume": "35641237"
        },
        {
            "ticker": "AGH",
            "price": "2.17",
            "change_amount": "-3.27",
            "change_percentage": "-60.1103%",
            "volume": "3748370"
        },
        {
            "ticker": "PLRX",
            "price": "1.38",
            "change_amount": "-2.06",
            "change_percentage": "-59.8837%",
            "volume": "19342395"
        },
        {
            "ticker": "AGMH",
            "price": "0.133",
            "change_amount": "-0.197",
            "change_percentage": "-59.697%",
            "volume": "8951608"
        },
        {
            "ticker": "LXRX",
            "price": "0.2926",
            "change_amount": "-0.4069",
            "change_percentage": "-58.1701%",
            "volume": "61254597"
        },
        {
            "ticker": "AIMDW",
            "price": "0.0931",
            "change_amount": "-0.1269",
            "change_percentage": "-57.6818%",
            "volume": "44610"
        },
        {
            "ticker": "LIXTW",
            "price": "0.0247",
            "change_amount": "-0.025",
            "change_percentage": "-50.3018%",
            "volume": "31"
        },
        {
            "ticker": "RDW+",
            "price": "1.65",
            "change_amount": "-1.54",
            "change_percentage": "-48.2759%",
            "volume": "209379"
        },
        {
            "ticker": "EU",
            "price": "1.35",
            "change_amount": "-1.17",
            "change_percentage": "-46.4286%",
            "volume": "21376573"
        },
        {
            "ticker": "SYRS",
            "price": "0.082",
            "change_amount": "-0.0612",
            "change_percentage": "-42.7374%",
            "volume": "18119916"
        },
        {
            "ticker": "BFRIW",
            "price": "0.058",
            "change_amount": "-0.0419",
            "change_percentage": "-41.9419%",
            "volume": "20137"
        },
        {
            "ticker": "RVSNW",
            "price": "0.08",
            "change_amount": "-0.0571",
            "change_percentage": "-41.6484%",
            "volume": "20031"
        },
        {
            "ticker": "PETWW",
            "price": "0.021",
            "change_amount": "-0.0138",
            "change_percentage": "-39.6552%",
            "volume": "5689"
        },
        {
            "ticker": "SAG",
            "price": "0.7414",
            "change_amount": "-0.4686",
            "change_percentage": "-38.7273%",
            "volume": "534809"
        },
        {
            "ticker": "STBX",
            "price": "0.89",
            "change_amount": "-0.518",
            "change_percentage": "-36.7898%",
            "volume": "600239"
        },
        {
            "ticker": "AISPW",
            "price": "0.835",
            "change_amount": "-0.475",
            "change_percentage": "-36.2595%",
            "volume": "264343"
        },
        {
            "ticker": "LUNRW",
            "price": "1.98",
            "change_amount": "-1.1",
            "change_percentage": "-35.7143%",
            "volume": "1346718"
        },
        {
            "ticker": "PCLA",
            "price": "3.13",
            "change_amount": "-1.72",
            "change_percentage": "-35.4639%",
            "volume": "1800969"
        },
        {
            "ticker": "ICON",
            "price": "0.143",
            "change_amount": "-0.074",
            "change_percentage": "-34.1014%",
            "volume": "9034230"
        }
    ]
}

const StocksListModal = () => {
    // const { stockGainersList, setStockListGainers } = useContext(StockContext)
    const router = useRouter()
 
    const handleStockHistoryBroadcast = (symbol: string)=>{
        router.push(`/stock/${encodeURIComponent(symbol)}`);
    }

  return (
    <div className='flex flex-col md:w-[680px] w-full justify-start items-center bg-[#26262E] absolute top-14 left-16 p-4 m-0 rounded-lg'>
        <div className='flex w-full flex-row justify-center items-start'>
            <h1>Top Gainers</h1>

        </div>
        <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {
            stockGainersList?.top_gainers?.slice(0,10).map(stock=>{
                return (<div key={stock.ticker} onClick={()=>handleStockHistoryBroadcast(stock.ticker)} className='flex hover:bg-emerald-900 flex-col justify-center items-start w-[120px] p-2 rounded-md'>
                    <div className='bg-sky-950 w-full flex'>{stock.ticker}</div>
                    <div className='flex flex-col gap w-full '>
                        <div className='text-sm'>Max Profit</div>
                        <div className='text-sm'>{stock.change_percentage}</div>
                    </div>
                    <div className='flex justify-between text-sm w-full items-center'>
                        <div className='flex flex-col justify-between items-center p-2'>
                            <p>
                            Price

                            </p>
                            <p>
                            {(Number(stock.price) * Math.random()).toFixed(2)}

                            </p>
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            <p className='text-'>
                                5 min

                            </p>
                            <p>
                            {Number(stock.change_amount).toFixed(2)}

                            </p>
                        </div>
                    </div>
                </div>)
            })  
        }
        </div>
        <div className='flex w-full flex-row justify-center items-start'>
            <h1>Top Losers</h1>

        </div>
        <div className="w-full flex flex-row flex-wrap justify-center items-center">
        {
            stockGainersList?.top_losers?.slice(0,10).map(stock=>{
                return (<div key={stock.ticker} className='flex flex-col justify-center items-start w-[120px] p-2 rounded-md'>
                    <div className='bg-sky-950 w-full flex'>{stock.ticker}</div>
                    <div className='flex flex-col gap w-full '>
                        <div className='text-sm'>Max Profit</div>
                        <div className='text-sm'>{stock.change_percentage}</div>
                    </div>
                    <div className='flex justify-between text-sm w-full items-center'>
                        <div className='flex flex-col justify-between items-center p-2'>
                            <p>
                            Price

                            </p>
                            <p>
                            {Number(stock.change_amount).toFixed(2)}

                            </p>
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            <p className='text-'>
                                5 min

                            </p>
                            <p>
                            {(Number(stock.price) * Math.random()).toFixed(2)}

                            </p>
                        </div>
                    </div>
                </div>)
            })  
        }
        </div>
        
        
    </div>
  )
}

export default StocksListModal
