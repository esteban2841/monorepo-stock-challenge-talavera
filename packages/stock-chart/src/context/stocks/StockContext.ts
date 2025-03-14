/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { createContext } from 'react'

export interface User {
    name: string,
    username: string,
    password:string,
    email:string,
    balance?: number
}
export interface StockGainers {
    top_gainers: StockGainerObj[],
    top_losers: StockGainerObj[],
}

export interface StockType{
    date?: Date
    time?: number
    open: string
    close: string
    volume: string
    symbol: string
  }

export interface StockGainerObj {
    ticker: string,
    price: string,
    change_amount: string,
    change_percentage: string,
    volume: string
}

export interface StockContext {

    [key: string]: any;
    //sidebar actions
    activeSideBarMenu?: string
    stockGainersList?: StockGainers
    toggleSideBarMenu?: (payload: any) => void
    
    activeStockListModal?: boolean
    toggleStockListModal?: (payload: any) => void
    //user actions login and register
    user?: User
    fetchUsuario?: (payload: any) => void

    currentSymbolPrice: StockType
    setCurrentSymbolPrice?: (payload: any) => void
    //product details and cart state
    // filled from fetching the products from the product-data on app component to render catalog

    //cart actions
    setUserLogged?: (payload: any) => void
    setStockListGainers?: (payload: any) => void
    logout?: (payload: any) => void

    
}

export const StockContext = createContext({} as StockContext)