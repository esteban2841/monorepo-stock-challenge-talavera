/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import { CustomText } from "@/atoms"
import { StockContext } from "@/context"
import axios from "axios"
import { useContext, useState } from "react"

export const StockPurchaseMenu = () => {
  const [staleQuantity, seStaleQuantity] = useState(10)

  const {usuario, currentSymbolPrice, setUserLogged} = useContext(StockContext)
  
  const quantityHandler = (e: React.MouseEvent<HTMLButtonElement>)=>{
    const ref = e.currentTarget.id
    const newStaleQuantity = ref == 'plus' ? staleQuantity + 10 : staleQuantity > 10 ? staleQuantity -10 : staleQuantity
    seStaleQuantity(newStaleQuantity)
  }
  
  const handlePurchase = async ()=>{
    const userModified = await axios.put(process.env.NEXT_PUBLIC_CLIENT_KEY_BACKEND_URI + '/api/user/purchase' || '',{
      userToAddStock: {
        ...usuario,
      },
      currentSymbolPrice,
      staleQuantity
    })

    const newUser = await userModified.data
    setUserLogged && setUserLogged(newUser)
  }

  return (
    <div className="w-[240px] bg-black h-screen flex flex-col justify-start items-center">
      <div className="flex z-50 gap-2 flex-col w-full justify-center items-start ">
        <div className="flex bg-[#26262e] rounded justify-start flex-col items-center w-full p-2">
            <div className="flex items-center justify-center p-2">
              <CustomText type="alert" content="Growth rate" />
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="flex items-center justify-center gap-2 border border-white rounded p-2">
                
                <CustomText type="alert" content="1%" />
              </span>
              <span className="flex items-center justify-center gap-2 border border-white rounded p-2">
                
                <CustomText type="alert" content="2%" />
              </span>
              <span className="flex items-center justify-center gap-2 border border-white rounded p-2">
                
                <CustomText type="alert" content="3%" />
              </span>
              <span className="flex items-center justify-center gap-2 border border-white rounded p-2">
                
                <CustomText type="alert" content="4%" />
              </span>
            </div>
            
        </div>
        <div className="flex z-50 bg-[#26262e] rounded justify-start flex-col items-center w-full p-2">
            <div className="flex items-center justify-center p-2">
              <CustomText type="alert" content="Stake" />
            </div>
            <div className="flex p-2 rounded bg-[#4bb4b3] w-full items-center justify-between gap-2 ">
              <span className=" w-full flex justify-between items-center">
                <button onClick={(e)=>quantityHandler(e)} id='less' className="w-8 hover:bg-white hover:text-[#4bb4b3] rounded p-2  ">{'-'}</button>
                <span className="w-8 hover:bg-white hover:text-[#4bb4b3] rounded p-2  ">{staleQuantity}</span>
                <button onClick={(e)=>quantityHandler(e)} id='plus' className="w-8 hover:bg-white hover:text-[#4bb4b3] rounded p-2">{'+'}</button>
              </span>
            </div>
            
        </div>
        <div className="flex z-50 rounded  w-full items-center justify-between gap-2 ">
          <button onClick={handlePurchase} className="w-full hover:bg-white bg-[#4bb4b3] hover:text-[#4bb4b3] rounded p-4  ">Buy</button>
        </div>
      </div>
    </div>
  )
}
