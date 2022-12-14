/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// @ts-nocheck

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import {animated, useSpring, config} from '@react-spring/three'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial,
    Color: THREE.Color
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {

  const mesh = useRef<mesh>(null!);

  const [active, setActive] = useState(false);
  const {scale} = useSpring({ scale: active ? 1.2 : 0.8 , config: config.slow})

  useFrame(() => mesh.current.rotation.y += 0.01)
  
  const { nodes, materials } = useGLTF('/man.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <animated.mesh ref={mesh} geometry={nodes.Cube.geometry} material={materials.Material } scale={scale} 
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)} />
    </group>
  )
}

useGLTF.preload('/man.gltf')
