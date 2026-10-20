import womenWalk from "../assets/women_walk.png"
import lipstickBag from "../assets/lipstcik.png"
import womenNeck from "../assets/neck-women.png"

import { useRef } from "react";
import { useScroll, useTransform ,motion} from "framer-motion";
interface imageGalleryInfo {
  image:any;
  type:string;
  name:string;
  context:string

}
const imageGalleryArray: imageGalleryInfo[] = [
  {
    image:womenWalk,
    type:"Presence",
    name:"The Springboard",
    context:"Create your first digital impression."
  },
  {
    image:lipstickBag,
    type:"Conversion",
    name:"The Showcase",
    context:"Embody your brand and convert."
  },
  {
    image:womenNeck,
    type:"sale",
    name:"The Shop",
    context:"Sell ​​and retain your customers."
  }
]

const Section6 = () => {
    const container = useRef(null)
    const {scrollYProgress} = useScroll({
      target:container,
      offset:["start end","center center"]

    })
    const clip = useTransform(scrollYProgress,[0,1],["inset(0 0 0 100% ) ","inset(0 0 0 0%"])
  return (
    <section ref={container} className="bg-surface h-[150vh] w-full py-6 px-4 md:px-11 md:relative">
      <div className="w-full flex flex-col gap-1 md:gap-2">
        <p className="uppercase text-sm  md:text-sm lg:text-sm">Our offers</p>
<p className="font-playfair text-2xl leading-6 md:leading-none md:text-5xl md:max-w-[680px]">No default offer.<br/>
An offer tailored to <em> your needs .</em></p>
<p className="uppercase text-xs  font-lexend font-light md:text-md tracking-tighter w-full md:max-w-[500px]">Whatever your needs, a website designed for your positioning, your performance, and your usage.</p>
      </div>
      <div
      className =  "mt-6 grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 " >

        
          {
            imageGalleryArray.map((text:imageGalleryInfo,i:number)=>{
                return <div key={i} className="flex flex-col md:max-w-100 lg:max-w-100 gap-1">

                  <motion.img style={{
                    clipPath:clip,
                    
                  }}  src={text.image} alt={text.type} className="h-[400px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:h-[300px] object-cover w-full  " />
                  <p className="text-xs">{text.type}</p>
                  <p className="font-playfair">{text.name}</p>
                  <p className="font-lexend uppercase font-light text-[10px] md:text-sm ">{text.context}</p>

                </div>
            })
          }
     
      </div>
      <div className="flex justify-center">
        <a href="" className="uppercase text-[#A43032] underline text-sm md:text-md font-lexend mt-8 scale-y-90">Discover the offers →</a>
      </div>
    </section>
  )
}

export default Section6
