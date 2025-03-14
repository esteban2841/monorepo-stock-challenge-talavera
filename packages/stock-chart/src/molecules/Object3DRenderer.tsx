'use client'

import {  OrbitControls, Stage } from "@react-three/drei";
import { Canvas} from "@react-three/fiber"
import styled from "styled-components";
import { Suspense, useRef } from "react";
import { Loader } from "@/atoms";

const ThreeDimentionContainerRenderer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  cursor: pointer;
`

interface Object3DRendererProps {
  children: React.ReactNode
  context: boolean
  name: string
}

export const Object3DRenderer = ({children, context, name}: Object3DRendererProps) => {
    const ref = useRef()
    const isContextNeeded = context
  return (
    <ThreeDimentionContainerRenderer className={name}>
        <Canvas dpr={[1, 10]} camera={{ fov: 1 }} frameloop={'always'}	>
        <Suspense fallback={<Loader/>}>
            <Stage
            preset="upfront" intensity={10}  
            environment="city">
                {children}
            </Stage>
        </Suspense>
        <OrbitControls ref={ref as any} makeDefault={!isContextNeeded} 
          autoRotate={true}  autoRotateSpeed={2}/>
        </Canvas>
    </ThreeDimentionContainerRenderer>
  )
}
