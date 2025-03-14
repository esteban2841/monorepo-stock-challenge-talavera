import { NavBar } from "@/molecules"
import axios from "axios"
import { notFound } from "next/navigation"
import { Suspense } from "react"
const defaultUrl = process.env.PROD_DOMAIN
? `https://${process.env.PROD_DOMAIN}`
: process.env.NEXT_PUBLIC_CLIENT_KEY_DEVELOPMENT_URI;
const Page = async ({params}: {params : {symbol: string}}) => {
    const symbol = params.symbol
    
    if(!symbol) notFound()
    const url : string = `${process.env.NEXT_PUBLIC_CLIENT_KEY_BACKEND_URI + '/api/stock/history/' + symbol}`

    const SymbolStockHistory = await axios.get(url) 
    

  return (
    <div className='flex flex-col w-full justify-center items-center py-20'>              
      <Suspense fallback={
        <nav className="flex w-full bg-black h-[50px]">

        </nav>
      }>
        <NavBar baseUrl={defaultUrl} />
      </Suspense>
    </div>
  )
}

export default Page