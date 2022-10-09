import React, {FC, Suspense, useRef, useState} from 'react'
import {OrbitControls } from '@react-three/drei'
import { Canvas, useFrame} from '@react-three/fiber'
import { Model } from '../components/RobotHead'

const Meme = () => {

  const [action, setAction] = useState('Idle');

  return (
    <div className="relative bg-black flex flex-row">
<div className="w-1/2 h-screen align-middle items-center">
    <div className="w-2/5 m-auto h-full flex flex-col gap-8 items-center justify-center">
    <h1 className="text-center text-3xl font-bold text-white">Take your customer experience to the next level.</h1>
    <button className="px-5 py-2 bg-blue-300 font-bold">Get Started</button>
    </div>
    </div>

    <div className="w-1/2 h-screen flex flex-cols justify-center items-center bg-red-500">
    <Canvas camera={{ fov: 100, position: [2,0.35,0]}}>
    <ambientLight intensity={1} position={[5,5,5]} />
    <directionalLight intensity={1} position={[1,1,1]}/>
    <Suspense fallback={null} >
    <Model action={action}/>

    </Suspense>
  </Canvas>
    </div>
    </div>
  )
}

export default Meme