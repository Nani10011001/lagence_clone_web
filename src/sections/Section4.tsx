import { useScroll, useTransform,motion } from "framer-motion"
import StickyScale from "../assets/sticky-img.jpg"
import { useRef } from "react"

const Section4 = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    
    target: container,
    offset:["start end","center center"]
  })
  const scale = useTransform(scrollYProgress,[0,1],[0,1])
  return (
    <section  ref={container} className='relative w-full  h-[350vh] bg-surface'>
      
  
      
      <div  className='flex w-full h-[100vh] sticky top-0 justify-center items-center'>

<div className="mt-10">
 <motion.img
 style={{
  scale:scale,
  transformOrigin:"center"
 }}
 src={StickyScale} className="h-[560px] w-[800px] object-cover "alt="" />
</div>
      </div>
    <div className=" absolute top-0 z-40 md:relative  flex gap-2  flex-col px-11">
<h3 className="font-bold text-sm">For whom</h3>
<p className="font-playfair text-4xl md:max-w-[400px]">Beauty, wellness, food and lifestyle brands that need a <em>website that truly serves</em> them .</p>
<p className="uppercase font-light text-sm font-lexend md:max-w-[450px] ">We help you move from a website that 
  exists to a website that works for you.</p>
  <p className="font-syne text-[12px] md:max-w-[300px] leading-4">
    ❊ You are launching your project and want to start on solid foundations, with an image and a website designed to last, not just for today.

❊ Your offer has become more precise, your vision has become more refined, but your site no longer reflects you and hinders you more than it helps you.

❊ You want to take a new direction and rethink your image to support your next ambition, without starting from scratch with each evolution.
  </p>
      </div>
      <div className="relative flex gap-2 flex-col items-end px-11 ">
<div>
  <h3 className="font-bold text-sm">For whom</h3>
<p className="font-playfair text-4xl md:max-w-[400px]">Beauty, wellness, food and lifestyle brands that need a <em>website that truly serves</em> them .</p>
<p className="uppercase font-light text-sm font-lexend md:max-w-[450px] ">We help you move from a website that 
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
