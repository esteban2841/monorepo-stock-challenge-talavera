
'use client'
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Background3DModel (props) {
  const { nodes, materials } = useGLTF('/models/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.083, 7.753, -4.487]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={[1.759, 1.759, 0.116]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#214_0'].geometry}
          material={materials.Material_214}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#212_0'].geometry}
          material={materials.Material_212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Retina-insertion-black_0'].geometry}
          material={materials['Retina-insertion-black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Retina-screen_0'].geometry}
          material={materials['Retina-screen']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Retina-body-screen-metal_0'].geometry}
          material={materials['Retina-body-screen-metal']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#213_0'].geometry}
          material={materials.Material_213}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#213_0_1'].geometry}
          material={materials.Material_213}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#213_0_2'].geometry}
          material={materials.Material_213}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#213_0_3'].geometry}
          material={materials.Material_213}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#213_0_4'].geometry}
          material={materials.Material_213}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#213_0_5'].geometry}
          material={materials.Material_213}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#215_0'].geometry}
          material={materials.Material_215}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle016_Material_#215_0_1'].geometry}
          material={materials.Material_215}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/scene.gltf')
