import { CandlestickChart } from "@/atoms/CandleChart"
import { NavBar, StockPurchaseMenu } from "@/molecules"
import { StockHistory } from "@/types";
import axios, { AxiosResponse } from "axios";
import { unstable_noStore } from "next/cache"
import { Suspense } from "react"
const defaultUrl = process.env.PROD_DOMAIN
? `https://${process.env.PROD_DOMAIN}`
: process.env.NEXT_PUBLIC_CLIENT_KEY_DEVELOPMENT_URI;


const page = async () => {
  unstable_noStore()
  const url : string = `${process.env.NEXT_PUBLIC_CLIENT_KEY_BACKEND_URI + '/api/stock/history'}`
	console.log("TCL: page -> url", url)

  const res : AxiosResponse<StockHistory> = await axios.get(url)
	console.log("TCL: page -> res", res)
	const data = await res.data
 
  

  return (
    <div className="flex flex-col w-full justify-center items-center relative">
      <Suspense fallback={
        <nav className="flex w-full bg-black h-[50px]">

        </nav>
      }>
        <NavBar baseUrl={defaultUrl} />
      </Suspense>
      <div className="flex p-10 bg-black justify-between items-start w-full">
        <CandlestickChart data={data.slice(0,80)}  />
        <StockPurchaseMenu />
      </div>
    </div>
  )
}

export default page
