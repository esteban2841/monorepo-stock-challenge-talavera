'use client'

import { StockContext } from "@/context"
import { useContext, useEffect, useState } from "react"
import { CustomText } from "./CustomText"
import AntDTable from "@/molecules/AntDTable"

const MyHoldings = ({holdings}) => {


    return (
        <div className="w-full justify-center items-center flex-col">
            <div className="w-full">
                <CustomText type='catalog' content="My holdings"/>
            </div>
            <div className="w-full" >
                <AntDTable data={holdings}/>
            </div>
        </div>
    )
}

export default MyHoldings
