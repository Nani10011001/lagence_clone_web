import type { Variants } from "framer-motion"
import {motion} from "framer-motion"
import frontsection from "../assets/frontImage.png"
const h1Animate:Variants = {
  offscreen:{
    y:150,
    
  },
  onscreen: {
y:0,
transition:{
  duration:2,
  delay:0.4,
  ease:[0.76,0,0.24,1]
}
  }
}
const Herosection = () => {
  return (
    <section className="bg-cover md:sticky lg:sticky  md:z-0 md:top-0 w-full bg-no-repeat  bg-center   before:absolute before:inset-0 before:bg-[#222222] before:h-screen before:opacity-20  h-screen" 
    style={{backgroundImage:`url(${frontsection})`}}>
     
   <div className="w-full  py-62  md:relative   md:py-20 lg:py-20 h-screen flex flex-col  md:gap-4  items-center">
  <div className="flex flex-col gap-4">
      <p className="uppercase  text-center font-lexend text-surface text-xs tracking-[-0.02rem]">BRAND IMAGE AND WEB DESIGN</p>
    <motion.h1 
    variants={h1Animate}
    initial="offscreen"
    whileInView="onscreen"
    className="font-playfair px-4 text-center max-w-[50rem] md:max-w-[60rem] lg:max-w-[60rem] tracking-[-0.05em] text-surface text-3xl  md:text-6xl lg:text-6xl">
      
    We create websites for{" "}
  <em>beauty</em>, <em>wellness</em>, <em>food</em> and{" "}
  <em>lifestyle</em> brands that work for you.
  
   </motion.h1>
  </div>
  <div>
    <p className=" text-surface my-3 md:text-2xl 
    
    text-center px-4 uppercase font-light tracking-tight max-w-4xl">A website aligned with your positioning,<br/>

ready to perform, and designed for your everyday use.</p>
  </div>
  <div className="flex flex-col gap-3 text-center mt-10">
    <a href="" className="uppercase cursor-pointer hover:scale-90 transition-all  text-surface underline">see our offers</a>
    <a href="" className="uppercase cursor-pointer hover:scale-90 transition-all  text-surface underline">Book an appointment</a>
  </div>
   </div>

    </section>
  )
}

export default Herosection
