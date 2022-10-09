import React, {FC, Suspense, useRef, useState} from 'react'
import {OrbitControls } from '@react-three/drei'
import { Canvas, useFrame} from '@react-three/fiber'
import { Model } from '../components/RobotHead'

const Meme = () => {

  const [action, setAction] = useState('Idle');

  return (
    <>
    <div className="relative bg-black flex flex-row bg-blue-500">
<div className="w-1/2 h-screen align-middle items-center">
    <div className="w-2/5 m-auto h-full flex flex-col gap-8 items-center justify-center -mt-16">
    <h1 className="text-center text-3xl font-bold text-white">Take your AI experience to the next level.</h1>
    <button className="px-10 py-4 bg-blue-300 text-xl font-bold shadow-md rounded-xl">Get Started</button>
    </div>
    </div>
    
    <div className="w-1/2 h-screen flex flex-cols justify-center items-center ">
    <Canvas camera={{ fov: 100, position: [2,0.35,0]}}>
    <ambientLight intensity={1} position={[5,5,5]} />
    <directionalLight intensity={1} position={[1,1,1]}/>
    <Suspense fallback={null} >
    <Model action={action}/>

    </Suspense>
  </Canvas>
    </div>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-40 transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc"></stop><stop offset="95%" stop-color="#32ded4"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,133 0,133 C 90.26794258373204,115.02870813397129 180.53588516746407,97.05741626794257 287,107 C 393.4641148325359,116.94258373205743 516.1244019138757,154.79904306220098 623,170 C 729.8755980861243,185.20095693779902 820.9665071770335,177.7464114832536 906,162 C 991.0334928229665,146.2535885167464 1070.0095693779904,122.2153110047847 1158,116 C 1245.9904306220096,109.7846889952153 1342.9952153110048,121.39234449760765 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc"></stop><stop offset="95%" stop-color="#32ded4"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,266 0,266 C 97.75119617224877,248.51674641148324 195.50239234449754,231.03349282296648 287,247 C 378.49760765550246,262.9665071770335 463.7416267942584,312.38277511961724 559,312 C 654.2583732057416,311.61722488038276 759.5311004784687,261.4354066985646 865,260 C 970.4688995215313,258.5645933014354 1076.133971291866,305.8755980861244 1172,315 C 1267.866028708134,324.1244019138756 1353.933014354067,295.0622009569378 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="absolute transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
    </>
  )
}

export default Meme