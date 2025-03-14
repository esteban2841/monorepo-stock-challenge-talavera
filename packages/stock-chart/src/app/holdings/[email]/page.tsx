import MyHoldings from "@/atoms/MyHoldings";
import { NavBar } from "@/molecules"
import { UserInterface } from "@/types";
import axios, { AxiosResponse } from "axios";
import { unstable_noStore } from "next/cache"
import { Suspense } from "react"
const defaultUrl = process.env.PROD_DOMAIN
? `https://${process.env.PROD_DOMAIN}`
: "http://localhost:3000";


const Page = async ({params}: {params : {email: string}}) => {
  
  unstable_noStore()
  
  const email = params.email.replace('%40', '@')
  const url : string = `${'http://localhost:3001/api/user/retrieve'}`

  const res : AxiosResponse<UserInterface> = await axios.post(url,{
    email
  } 
    
  )
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
        <MyHoldings holdings={data.holdings}/>
      </div>
    </div>
  )
}

export default Page
