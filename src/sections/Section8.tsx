import awardLogo from "../assets/Awwards-logotype-2018.png"
import {motion} from 'framer-motion'
interface awardLogoInterferace {
    image:any;
    year:number;
    designStudio:string;
    awardStatus:string
}
const awardImagArray:awardLogoInterferace[]=[
    {
        image:awardLogo,
        year:2026,
        designStudio:"Design Studio Agency",
        awardStatus:"Honorable mention"
    },
    {
        image:awardLogo,
        year:2025,
        designStudio:"Design Studio Agency",
        awardStatus:"Nominee"
    },
    {
        image:awardLogo,
        year:2024,
        designStudio:"Design Studio Agency",
        awardStatus:"Nominee"
    },
    {
        image:awardLogo,
        year:2023,
        designStudio:"Angelique Damour Design Studio",
        awardStatus:"Honorable mention"
    },




]

const Section8 = () => {
  return (
    <div className="min-h-screen flex md:px-11 px-4 justify-center py-30  bg-surface md:relative">
      <div className="flex flex-col items-center   gap-10 w-full min-h-full">
<div className="text-center">
    <p className="font-lexend text-[12px] my-3 md:my-0 md:text-[12px] scale-y-90 tracking-[-0.03] uppercase">Awards&Recognition</p>
<p className="font-playfair text-[20px] leading-6 md:text-[40px] tracking-tight md:leading-12 max-w-[450px]">A studio recognized<br/>
for its <em>creative excellence .</em></p>
</div>
<div className="flex flex-col gap-10 md:flex-row md:gap-25  ">
    {
awardImagArray.map((context:awardLogoInterferace,i:number)=>{
    return <div className="flex flex-col  gap-5" key={i}>
   <motion.img
   initial={{
    scale:0,
    opacity:0
   }} 
   whileInView={{
    scale:1,
    opacity:1,
    transition:{
    duration:1,
    
   }
    

   }}

  viewport={{
    once:true
  }}
   
   src={context.image} alt="" className="w-[170px] md:w-[170px] mx-auto text-center" />
   <p 
   className=" flex flex-col leading-3 text-[12px] text-center scale-y-90 uppercase md:text-[13px]">{context.year} <span>{context.designStudio}</span></p>
   <p className="text-center uppercase  hover:scale-90 text-[14px] cursor-pointer transition-all underline md:text-[17px] scale-y-90">{context.awardStatus}</p>
    </div>
})
    }
</div>
      </div>
    </div>
  )
}

export default Section8
