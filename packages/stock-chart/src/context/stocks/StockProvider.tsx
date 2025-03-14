'use client'
import React, { useReducer } from 'react'
import { StockContext } from './StockContext';
import { StockReducer } from './StockReducer';
import dotenv from 'dotenv';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { now } from 'mongoose';

dotenv.config({ path: './.env' });
export interface SectionRef {
    current: HTMLElement,
    name: string
}

const INITIAL_STATE: StockContext = {
    activeSideBarMenu: '',
    activeStockListModal: false,
    stockGainersList: {
        top_gainers:[],
        top_losers: []
    },
    currentSymbolPrice:{
        date: new Date(Date()),
        time: 0,
        open: '',
        close: '',
        volume: '',
        symbol: ''
    },
    user: {
        username: '',
        email: '',
        password: '',
        name: '',
        balance: 0,
    },
}

interface Props {
    children: React.ReactElement | React.ReactElement[] | React.ReactNode
  }

export const StockProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(StockReducer, INITIAL_STATE)

    const router = useRouter()
    const toggleSideBarMenu = (payload: StockContext) =>{
            
        dispatch({type:'toggleSideBarMenu', payload: payload})
    }
    const toggleStockListModal = (payload: StockContext) =>{
        dispatch({type:'toggleStockListModal', payload: payload})
    }
    
    const setUserLogged = async (payload: StockContext) =>{
       
        dispatch({type:'setUserLogged', payload: payload})
        
      
    }
    const setCurrentSymbolPrice = async (payload: StockContext) =>{
       
        dispatch({type:'setCurrentSymbolPrice', payload: payload})
        
      
    }
    const setStockListGainers = async (payload: StockContext) =>{
        const uri = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=' + process.env.ALPHA_API_KEY
        try {
            const respuesta = await axios.get(uri);
            dispatch({type:'setStockListGainers', payload: {
                top_gainers: respuesta.data.top_gainers,
                top_losers: respuesta.data.top_losers
            }})
        } catch (error) {
            console.error(error)

            }


        
      
    }
    const logout = async (payload: StockContext) =>{
        
        dispatch({type:'logout', payload: payload})
        
        router.push('/')
        
        
    }
    
    


    return (
        <StockContext.Provider value={{
            ...state,
            toggleSideBarMenu,
            toggleStockListModal,
            setUserLogged,
            logout,
            setStockListGainers,
            setCurrentSymbolPrice
        }}>
            {children}
        </StockContext.Provider>
    )
}


//name company

// safetyradar