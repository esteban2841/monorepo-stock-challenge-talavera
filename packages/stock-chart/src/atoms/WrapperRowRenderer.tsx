'use client'
import React, { ReactElement } from 'react'
import Link from "next/link";

export interface RowRedirectProps {
  dynamicClasses?: string,
  route?: string,
  children: ReactElement,
  baseUrl: string, 
}


const WrapperRowRouterRedirect = ({children, dynamicClasses, route, baseUrl}: RowRedirectProps) => {
  return (
    <Link
    href={`${baseUrl}${route}`}
    className={`no-underline text-inherit ${dynamicClasses}`}
   >{children}</Link>
  )
}

export default WrapperRowRouterRedirect