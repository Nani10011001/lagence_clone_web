import Girls_eye from "../assets/girls-eyes.png"
import Grils_makeup from "../assets/eye-mask.webp"
import Makup_color from "../assets/makup-color.png"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {motion} from "framer-motion"
const Section3 = () => {
    const container = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:container,
             offset: ["start end", "center center"],
            
        }
        
    )
    const clip = useTransform(scrollYProgress,[0,1], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"])
    const clipTop = useTransform(scrollYProgress,[0,1],["inset(0 0 100%,0","inset(0 0 0% 0"])
  return (
    <div ref={container} className='md:h-[150vh] h-[200vh]  px-4 md:px-34 lg:px:34 bg-surface relative'>
      <div className="grid grid-col-1 md:grid-cols-2 gap-14 lg:grid-cols-2">
<div className="">
<motion.img src={Girls_eye}
style={{
    clipPath:clip
  
   
}}
alt="" className="object-cover max-w-full h-auto" />
</div>
<div className="flex relative flex-col my-[-10px]">
<motion.img src={Grils_makeup} style={{
    clipPath:clipTop
}} className="relative object-cover ml-10 max-w-full h-auto  hidden md:block" alt="" />
<motion.img style={{
    clipPath:clip
}} src={Makup_color} className=" lg:mr-14 max-w-full h-auto" alt="" />
</div>
      </div>
    </div>
  )
}

export default Section3
