import { useScroll, useTransform,motion } from "framer-motion"
import StickyScale from "../assets/sticky-img.jpg"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

const Section4 = () => {
  const container = useRef(null)
  const smallScreen = useMediaQuery({
    maxWidth:768
  })
  const {scrollYProgress} = useScroll({
    
    target: container,
    offset:["start end","center center"]
  })
  const scale = useTransform(scrollYProgress,[0,1],[0,1])
  const smallScreenScale = useTransform(scrollYProgress,[0,1],["inset(0 0 0 100%)","inset(0 0 0 0%)"])
  return (
    <section  ref={container} className='relative w-full px-4 min-h-screen md:px-11  md:h-[350vh] bg-surface'>
      
  
      
      <div  className='flex w-full h-[300px] md:h-[100vh] md:sticky md:top-0 justify-center items-center'>

<div className="w-full md:w-auto md:mt-10">
 <motion.img
 style={smallScreen ? {clipPath:smallScreenScale } : {scale:scale,transformOrigin:"center"
 }}
 src={StickyScale} className="block w-full h-[330px] md:h-[560px] md:w-[800px] object-cover" alt="" />
</div>
      </div>
    <div className="hidden md:flex absolute top-[5%] z-40 md:relative gap-2 my-4 flex-col px-11">
<h3 className="font-bold text-sm">For whom</h3>
<p className="font-playfair  md:text-4xl  md:max-w-[400px]">Beauty, wellness, food and lifestyle brands that need a <em>website that truly serves</em> them .</p>
<p className="uppercase font-light md:text-sm font-lexend md:max-w-[450px] ">We help you move from a website that 
  exists to a website that works for you.</p>
  <p className="font-syne md:text-[12px]  md:max-w-[300px] leading-4">
    ❊ You are launching your project and want to start on solid foundations, with an image and a website designed to last, not just for today.

❊ Your offer has become more precise, your vision has become more refined, but your site no longer reflects you and hinders you more than it helps you.

❊ You want to take a new direction and rethink your image to support your next ambition, without starting from scratch with each evolution.
  </p>
      </div>
      <div className="relative  flex gap-2 flex-col items-end px-6 md:px-11 py-8 md:py-0 ">
<div className="">
  <h3 className="font-bold text-sm">For whom</h3>
<p className="font-playfair text-2xl  md:text-4xl md:max-w-[400px]">Beauty, wellness, food and lifestyle brands that need a <em>website that truly serves</em> them .</p>
<p className="uppercase font-light my-2 text-[13px] md:text-sm font-lexend md:max-w-[450px] ">We help you move from a website that 
  exists to a website that works for you.</p>
  <p className="font-syne text-[12px] md:max-w-[300px] leading-4">
    ❊ You are launching your project and want to start on solid foundations, with an image and a website designed to last, not just for today.

❊ Your offer has become more precise, your vision has become more refined, but your site no longer reflects you and hinders you more than it helps you.

❊ You want to take a new direction and rethink your image to support your next ambition, without starting from scratch with each evolution.
  </p>
</div>
      </div>
    </section>
  )
}

export default Section4
