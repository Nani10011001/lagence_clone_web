import garmentGirl from "../assets/gramentGril.png"
import blendedBeauty from "../assets/Bendry-Paris-Peeling-marin-visage (1).jpeg"
import phoneShorts from "../assets/phone-shots.jpg"
import coffePhone from "../assets/coffe-phone.jpg"
import perfume from "../assets/perfume.jpg"
import laptopImage from  "../assets/laptop.jpg"
import { useScroll, useTransform,motion } from "framer-motion"
import { useRef } from "react"

const Section7 = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target:container,
    offset:["start end","center center"]
  })
  const clip = useTransform(scrollYProgress,[0,1],["inset(0 0 0 100%)"," inset(0 0 0 0%)"])
  return (
    <section ref={container} className='bg-surface md:relative py-20 md:py-5 w-full px-4 md:px-11 min-h-[230vh]'>
        <div className='flex flex-col items-center gap-2 '>
            <p className='font-lexend  text-[10px]  md:text-xs tracking-tight uppercase my-2'>Achievements</p>
            <p className='font-playfair text-[25px] leading-7 md:text-[40px]  tracking-tight md:leading-10 text-center md:max-w-[50rem]'>Some of the <em> brands</em> and <em>companies</em> we have worked with.</p>
            <p className="text-lexend uppercase text-[13px] font-light text-center md:max-w-[50rem]">We work for different sectors, but we have particular expertise in the beauty and wellness, food and lifestyle sectors.</p>
        </div>



     <div className="flex w-full mt-20  justify-center h-full ">  

        <div className='flex w-full max-w-[1090px] flex-col gap-10 h-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
        
         <div className="flex flex-col gap-20">

    <div className="flex flex-col gap-1" >
          <motion.img style={{clipPath:clip}} src={garmentGirl} alt="" className="md:h-[300px] h-[300px] w-full md:w-[500px] object-cover" />
   <div className="flex justify-between">
           <p className="uppercase text-[13px]">Aestech School</p>
    <a href="" className="uppercase underline text-[15px] text-redish-dark">view the project</a>
   </div>
    </div>
    <div className="flex flex-col gap-1" >
           <motion.img style={{clipPath:clip}}  src={phoneShorts} alt="" className="md:h-[300px] h-[300px] w-full object-cover" />
   <div className="flex justify-between">
           <p className="uppercase text-[13px]">The new guard</p>
    <a href="" className="uppercase underline text-[15px] text-redish-dark">view the project</a>
   </div>
    </div>
   
    
         </div>
         
         <div className="flex flex-col gap-1" >
<motion.img style={{clipPath:clip}}  src={blendedBeauty} alt="" className="md:h-[700px] h-[300px] w-full  object-cover" />
<div className="flex justify-between">
           <p className="uppercase text-[13px] ">The new guard</p>
    <a href="" className="uppercase underline text-[15px] text-redish-dark">view the project</a>
   </div>

          </div>

          


          </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-[1.7fr_1fr] md:gap-15 gap-5">
        <div className="flex flex-col min-w-0 gap-1">
          <motion.img style={{clipPath:clip}}  src={coffePhone} alt="" className="md:h-[480px] h-[300px] w-full object-cover" />
          <div className="flex justify-between">
            <p className="uppercase text-[13px]">ELLE.be</p>
            <a href="" className="uppercase underline text-[15px] text-redish-dark">view the project</a>
          </div>
        </div>
        <div className="flex flex-col gap-15">
          <div className="flex flex-col gap-1  md:min-w-[350px]">
          <motion.img style={{clipPath:clip}}  src={perfume} alt="" className="h-[300px] md:h-[200px] md:w-[350px] w-full object-cover" />
          <div className="flex justify-between">
            <p className="uppercase text-[13px]">Darphin x Estelle</p>
            <a href="" className="uppercase underline text-[15px] text-redish-dark">view the project</a>
          </div>
        </div>
        <div className="flex flex-col h-full gap-1">
          <div className="flex flex-col gap-2 h-full md:min-w-[350px]">
<motion.img style={{clipPath:clip}}  src={laptopImage} alt="" className="h-[300px] md:h-[300px] md:w-[350px] w-full object-cover" />
          <div className="flex justify-between">
            <p className="uppercase text-[13px] ">Goat Workshop</p>
            <a href="" className="uppercase underline text-[15px] text-redish-dark">view the project</a>
          </div>
          </div>
          
        </div>
        </div>
      </div>

      </div>
     
      </div>
    </section>
  )
}

export default Section7
