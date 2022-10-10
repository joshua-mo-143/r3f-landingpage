/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


// @ts-nocheck

import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.SkinnedMesh
    Eyes: THREE.SkinnedMesh
    Cube001: THREE.SkinnedMesh
    Cube001_1: THREE.SkinnedMesh
    Bone: THREE.Bone
    ArmL: THREE.Bone
    ArmR: THREE.Bone
    Bone_1: THREE.Bone
  }
  materials: {
    RobotBase: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Glass: THREE.MeshPhysicalMaterial
  }
}

type ActionName = 'Idle' | 'LeftArmWave' | 'RightArmWave' | 'EyesAction.001'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/robotHead.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)

  const [action, setAction] = useState('Idle');

  useFrame(({ clock }) => {
        group.current.rotation.y = clock.getElapsedTime()
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" scale={window.innerWidth/2000}>
        <group name="HeadArmature" position={[0, 0.01, 0]}>
          <primitive object={nodes.Bone} />
          <group name="Screen">
            <skinnedMesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.Glass} skeleton={nodes.Cube001.skeleton} />
            <skinnedMesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.RobotBase} skeleton={nodes.Cube001_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/robotHead.glb')
