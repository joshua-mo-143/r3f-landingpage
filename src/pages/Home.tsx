import React, {FC, Suspense, useEffect, useRef, useState, useMemo} from 'react'
import {OrbitControls } from '@react-three/drei'
import { Canvas, useFrame} from '@react-three/fiber'
import { Model } from '../components/RobotHead'
import Navbar from '../components/Navbar'
import TeamCard from '../components/TeamCard'
import { useIntersection } from 'react-use'
import BenefitCard from '../components/BenefitCard'
export const Meme = () => {

  const DisableRender = () => useFrame(() => null, 1000)

const useInView = () => {
    const ref = useRef(null)
    const threshold = 0.05
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: '0px',
        threshold,
    })

    return {
        ref,
        inView: intersection && intersection.intersectionRatio > threshold,
    }
}

const {ref, inView} = useInView();

  return (
    <>
    <Navbar/>
    <section>
    <div className="relative bg-black flex flex-row hero h-96 lg:h-156">
<div className="w-1/2 lg:h-screen align-middle items-center">
    <div className="w-4/5 lg:w-4/5 m-auto h-full flex flex-col gap-8 items-center justify-center lg:-mt-16">
    <h1 className="text-center text-lg lg:text-6xl font-bold text-white">Take your AI journey to the next level.</h1>
    <a href="#intro"><button className="px-5 py-2 lg:px-10 lg:py-4 bg-purple-400 text-md lg:text-xl font-bold shadow-md rounded-xl">Get Started</button></a>
    </div>
    </div>
    
    <div className="w-1/2 lg:h-screen flex flex-cols justify-center items-center" ref={ref}>
    <Canvas camera={{ fov: 100, position: [2,0.35,0]}}>
    {!inView && <DisableRender />}
    <ambientLight intensity={1} position={[5,5,5]} />
    <directionalLight intensity={1} position={[1,1,1]}/>
    <Suspense fallback={null}>
    <Model/>
    
    </Suspense>
  </Canvas>
    </div>
    </div>
    </section>
    <section>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="-mt-38 transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,133 0,133 C 75.20577121264174,133.0831329440055 150.41154242528347,133.166265888011 228,130 C 305.58845757471653,126.833734111989 385.559601511508,120.41806939196151 444,108 C 502.440398488492,95.58193060803849 539.3500515286844,77.16145654414292 603,83 C 666.6499484713156,88.83854345585708 757.0401923737546,118.93610443146682 826,141 C 894.9598076262454,163.06389556853318 942.4891789762969,177.09412572998968 1006,165 C 1069.510821023703,152.90587427001032 1149.003091721058,114.68739264857437 1224,105 C 1298.996908278942,95.31260735142563 1369.498454139471,114.15630367571282 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 C 0,400 0,266 0,266 C 69.54517347990382,252.24321538990037 139.09034695980765,238.48643077980074 196,242 C 252.90965304019235,245.51356922019926 297.1837856406733,266.2974922706973 375,275 C 452.8162143593267,283.7025077293027 564.1745104774992,280.3236001374098 647,280 C 729.8254895225008,279.6763998625902 784.11817244933,282.4081071796633 836,277 C 887.88182755067,271.5918928203367 937.3527997251804,258.04397114393686 996,262 C 1054.6472002748196,265.95602885606314 1122.4706286499484,287.4160082445895 1198,291 C 1273.5293713500516,294.5839917554105 1356.7646856750257,280.2919958777053 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path></svg>
      <div className="p-5" id="intro">
        <h1 className="text-lg lg:text-5xl text-center pb-10 font-bold">Who are We?</h1>
        <p className="text-xs lg:text-2xl text-center lg:w-3/5 lg:m-auto">Spacenet is a team of problem solvers who add value to business by creating bespoke AI solutions.
      Through our expertise, we can build the vision that you want for your business, as well as assisting with process automation,
      allowing your employees to focus on the things that matter.
        </p>
        <h1 className="text-lg lg:text-5xl text-center pb-10 font-bold pt-10">Why Choose Us?</h1>
        <div className="flex md:flex-row flex-col justify-center gap-8"> 
      <BenefitCard/>
      <BenefitCard/>
      <BenefitCard/>
      </div>
      </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,133 0,133 C 73.58851674641147,118.4736842105263 147.17703349282294,103.94736842105262 252,109 C 356.82296650717706,114.05263157894738 492.88038277511964,138.6842105263158 594,155 C 695.1196172248804,171.3157894736842 761.3014354066986,179.31578947368422 862,161 C 962.6985645933014,142.68421052631578 1097.9138755980862,98.05263157894737 1200,89 C 1302.0861244019138,79.94736842105263 1371.043062200957,106.47368421052632 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#9900ef" fill-opacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,266 0,266 C 108.21052631578945,296.6124401913876 216.4210526315789,327.22488038277515 323,311 C 429.5789473684211,294.77511961722485 534.5263157894736,231.71291866028707 616,220 C 697.4736842105264,208.28708133971293 755.4736842105265,247.9234449760766 846,267 C 936.5263157894735,286.0765550239234 1059.5789473684208,284.59330143540666 1164,281 C 1268.4210526315792,277.40669856459334 1354.2105263157896,271.7033492822967 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#9900ef" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
    </section>
    <section className="p-5 meettheteam">
      <div className="meettheteam p-5 bg-purple-500">
      <h1 className="text-3xl lg:text-5xl text-center pb-10 font-bold">Meet the Team</h1>
      <div className="flex md:flex-row flex-col justify-center gap-4"> 
      <TeamCard gender="women" id="13"/>
      <TeamCard gender={"men"} id="17"/>
      <TeamCard gender="men" id="10"/>
      <TeamCard gender="women" id="1"/>
      </div>
      </div>
    </section>
    <section className="meettheteam p-5" id="contact">
    <h1 className="text-lg lg:text-5xl text-center pb-10 font-bold">Contact Us</h1>
    <form className="w-full md:w-4/5 h-128 lg:h-3/4 bg-white shadow-md m-auto text-center flex flex-col gap-8 py-5 rounded-xl shadow-md">
      <fieldset className="w-4/5 flex flex-col gap-8 justify-start m-auto h-1/5">
      <label htmlFor="email" className="flex flex-col lg:flex-row justify-start gap-4 md:gap-16"> <span>E-mail:</span>
        <input name="email" type="email" id="email" className="shadow-md border lg:w-3/4 p-2" required></input>
      </label>
      <label htmlFor="message" className="flex flex-col lg:flex-row justify-start gap-4 md:gap-12"> <span>Message:</span>
        <textarea name="message" id="message" className="shadow-md border w-full lg:w-3/4 p-2 h-64 lg:h-32" required></textarea>
      </label>
      </fieldset>
      <button className="w-4/5 m-auto px-5 py-2 lg:px-10 lg:py-4 bg-purple-400 text-md lg:text-xl font-bold shadow-md rounded-xl" type="submit">Submit</button>
    </form>
    </section>
    </>
    
  )
}

export default Meme