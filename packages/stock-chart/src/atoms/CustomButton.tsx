/* eslint-disable @typescript-eslint/no-unsafe-function-type */
'use client'

import { StockContext } from "@/context"
import { ReactElement, useContext } from "react"
import styled from "styled-components"


interface CustomButtonProps {
  type: 'primary' | 'secondary' | 'close' | 'submit' | 'slider'
  content: string | ReactElement
  colorText?: string
  bg?: string
  hoverBg?: string
  hoverColor?: string
  size?: string
  args?: string | object
  action?: string | (()=> void)
  bold?: boolean
  classes?: string
  left?: string
  right?: string
  top?: string
  arg?: string
}

export interface CssProps{
  colorText?: string
  bg?: string
  hoverBg?: string
  hoverColor?: string
  size?: string
  left?: string
  right?: string
  top?: string
  
}

const CloseButtonContainer = styled.button<CssProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 50%;
  width: 40px;
  background-color: ${props => props.bg ? props.bg : '#000'};
  color: ${props => props.colorText ? props.colorText : '#fff'};
  &:hover{
    
    background-color: ${props => props.hoverBg ? props.hoverBg : '#fff'};
    color: ${props => props.hoverColor ? props.hoverColor : '#000'};
  }
`
const SubmitButtonContainer = styled.button<CssProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  background-color: ${props => props.bg ? props.bg : '#000'};
  color: ${props => props.colorText ? props.colorText : '#fff'};
  &:hover{
    
    background-color: ${props => props.hoverBg ? props.hoverBg : '#fff'};
    color: ${props => props.hoverColor ? props.hoverColor : '#000'};
  }
`
const SliderButtonContainer = styled.button<CssProps>`
  display: flex;
  position: absolute;
  z-index: 100;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  left: ${props => props.left && props.left };
  right: ${props => props.right && props.right };
  top: ${props => props.top ? props.top : '50%'};
  width:${props => props.size + 'px' ? props.size + 'px' : ''};
  height:${props => props.size + 'px' ? props.size + 'px' : ''};
  background-color: ${props => props.bg ? props.bg : '#000'};
  color: ${props => props.colorText ? props.colorText : '#fff'};
  &:hover{
    
    background-color: ${props => props.hoverBg ? props.hoverBg : '#fff'};
    color: ${props => props.hoverColor ? props.hoverColor : '#000'};
  }
`
export interface StylesTemplate {
  primary: string
  submit: string
  secondary: string
  close: string
  slider: string
}

const template = (type: string, colorText?: string, bg?: string, hoverBg?: string, hoverColor?: string, size?: string,  bold?: boolean,) : string => {
  const styles : StylesTemplate = {
    primary: ` rounded-lg  ${bold ? 'font-bold': ''} px-4 py-2 hover:px-6 hover:py-0 text-xl text-[${colorText}] bg-[${bg}] w-[${size || 'full'}]`,
    submit: ` rounded-lg  ${bold ? 'font-bold': ''} text-xl text-[${colorText}] bg-[${bg}] w-[${size || 'full'}]`,
    secondary: ` rounded-lg  ${bold ? 'font-bold': ''} text-xl  text-[${colorText}] bg-[${bg}] w-[${size || 'full'}]`,
    close: ` rounded-lg text-xl  ${bold ? 'font-bold': ''}  text-[${colorText}] bg-[${bg}] w-[${size || 'full'}]`,
    slider: ` rounded-lg text-xl  ${bold ? 'font-bold': ''}  text-[${colorText}] bg-[${bg}] w-[${size || 'full'}]`,
  }
  return styles[type]
}


export const CustomButton = ({type, colorText, bg, hoverBg, hoverColor, content, size, args, action, bold, classes, left, top, right}: CustomButtonProps) => {
  const store = useContext(StockContext)
  const actionExecuter = (args?: string | object, action?: string | Function ) => {
    let actionCb
    if(typeof action == 'function'){
      return action()
    }
    if(typeof action == 'string'){

      actionCb = store[action]
    }
    actionCb(args)
  }
  if(type === 'primary') return <button onClick={()=>actionExecuter(args, action)} className={`${classes} ${template(type, colorText, bg, hoverBg, hoverColor, size, bold)}`}>{content}</button>

  if(type === 'secondary' ) return <button onClick={()=>actionExecuter(args, action)} className={`${classes} ${template(type, colorText, bg, hoverBg, hoverColor, size, bold)}`}>{content}</button>

  if(type === 'close' ) return <CloseButtonContainer colorText={colorText} bg={bg} hoverBg={hoverBg} hoverColor={hoverColor} onClick={()=>actionExecuter(args, action)} className={`${classes} ${template(type, colorText, bg, hoverBg, hoverColor, size, bold)}`}>{content}</CloseButtonContainer>

  if(type === 'slider' ) return <SliderButtonContainer right={right} left={left} top={top} colorText={colorText} bg={bg} hoverBg={hoverBg} hoverColor={hoverColor} onClick={()=>actionExecuter(args, action)} className={`${classes} ${template(type, colorText, bg, hoverBg, hoverColor)}`}>{content}</SliderButtonContainer>

  if(type === 'submit' ) return <SubmitButtonContainer onClick={()=>actionExecuter(args, action)} type={type} colorText={colorText} bg={bg} hoverBg={hoverBg} hoverColor={hoverColor} className={`${classes} ${template(type, colorText, bg, hoverBg, hoverColor, size, bold)}`}>{content}</SubmitButtonContainer>
}
