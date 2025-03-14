'use client'
import localFont from 'next/font/local';
import { StockContext } from "@/context"
import { useContext } from "react"


const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface CustomTextsProps {
  type: 'alert' | 'error' | 'primary' | 'secondary' | 'shadowTitle' | 'subtitle' | 'catalog' | 'subtitleSection'
  colorText?: string
  bold?: boolean
  content: string
  classes?: string
  position?: 'right' | 'center' | 'left'
  args?: any
  action?: 'toggleSideBarMenu' | 'toggleRotation'
}
const template = (type: string, colorText?: string, bold?: boolean) : string => {
  const styles : any = {
    shadowTitle: `${geistSans.className} uppercase text-6xl text-${colorText} text-shadow drop-shadow-xl ${bold ? 'font-bold': ''}`,
    subtitle: `${geistSans.className} text-4xl text-${colorText} drop-shadow-xl ${bold ? 'font-bold': ''}`,
    subtitleSection: `afacad-flux text-3xl text-${colorText} drop-shadow-xl ${bold ? 'font-bold': ''}`,
    error: `${geistSans.className} text-base text-red pointer underline underline-offset-4 decoration-1 ${bold ? 'font-bold': ''}`,
    primary: `${geistMono.className} text-2xl text-${colorText} ${bold ? 'font-bold': ''}`,
    secondary: `${geistMono.className} text-2xl text-${colorText} opacity-60 ${bold ? 'font-bold': ''}`,
    catalog: `afacad-flux text-2xl opacity-90 text-${colorText} tracking-widest ${bold ? 'font-bold': ''}`,
    alert: `afacad-flux text-md opacity-90 text-${colorText} tracking-widest ${bold ? 'font-bold': ''}`,
  }
  return styles[type]
}


export const CustomText = ({type, colorText, bold, content, classes, position, args, action}: CustomTextsProps) => {
  const store = useContext(StockContext)
  const actionExecuter = (args?: any, action?: string) => {
    if(action){
      const actionCb = store[action]
      actionCb(args)
    }
  }
  if(type === 'error' ) return <div onClick={()=>actionExecuter(args, action)} className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`} ><p className={`${template(type, colorText, bold)} ${classes} text-${position}  flex`}>{content}</p></div>
  if(type === 'primary') return <div className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`} ><p className={`${template(type, colorText, bold)} ${classes} text-${position}  flex`}>{content}</p></div>
  if(type === 'secondary') return <div className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`}><h3 className={`${template(type, colorText, bold)} ${classes} text-${position} ${position} flex`}>{content}</h3></div>
  if(type === 'shadowTitle') return <div className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`}><h1 className={`${template(type, colorText, bold)} ${classes} text-${position} ${position} flex`}>{content}</h1></div>
  if(type === 'subtitle') return <div className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`}><h3 className={`${template(type, colorText, bold)} ${classes} text-${position} ${position} flex`}>{content}</h3></div>
  if(type === 'catalog') return <div className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`}><h3 className={`${template(type, colorText, bold)} ${classes} text-${position} ${position} flex`}>{content}</h3></div>
  if(type === 'subtitleSection') return <div className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`}><h3 className={`${template(type, colorText, bold)} ${classes} text-${position} ${position} flex`}>{content}</h3></div>
  if(type === 'alert') return <div className={`flex flex-row items-center ${position == 'left' && 'justify-start'} ${position == 'center' && 'justify-center'} ${position == 'right' && 'justify-end'}`}><h3 className={`${template(type, colorText, bold)} ${classes} text-${position} ${position} flex`}>{content}</h3></div>
}
