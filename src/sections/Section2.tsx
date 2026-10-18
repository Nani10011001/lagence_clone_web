
import logo2 from "../assets/Logo-Clinique-noir.png"
import logo3 from "../assets/Logo-atelier-chevre.svg"
import logo4 from "../assets/Logo-noir-avec-baseline.svg"
import logo5 from "../assets/Logo-noir-horizontal.svg"
import logo6 from "../assets/Logo_lesFabricants_light-scaled.png"
import logo7 from "../assets/elle-logo.png"
import logo8 from "../assets/TonSurTon-Logo.png"
import logo9 from "../assets/OSORIATI-logo-final-noir.png"
import {motion} from "framer-motion"
const Section2 = () => {
  const imageArray = [logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9]
  return (
    <section className='h-screen relative w-full z-10  bg-surface'>
      <div className="py-20 w-full flex flex-col items-center text-center">
        <div className="w-full "><p className="  uppercase font-moda font-medium text-[12px] my-2 tracking-tight">
          Projects & collaborations
          </p></div>
          <div className=" flex w-full my-2 flex-col items-center gap-4">
           <p className="font-playfair max-w-120 text-center tracking-tight leading-[0.95] lg:text-[44px] ">
             More than  <em>170 projects</em> delivered.
           </p>
           <p className="uppercase max-w-[550px] ">From young companies to established brands, on design and/or development projects.</p>
          </div>
         <div
        className="w-full   overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 400%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 40%, black 70%, transparent)",
        }}
      >
       
          <motion.div 
          animate={{
            x:["0%","-50%"]
          }}
          transition={{
            duration:25,
            repeat:Infinity,
            ease:"linear"
          }}
          className="flex max-w items-center"
          >
    {
      [...imageArray, ...imageArray].map((context,i)=>{

        return   <div 
        key={i}
        className="flex shrink-0 w-38 justify-center overflow-hidden items-center px-6" >

           <img width={70} className="object-contain max-w-full max-h-10 " src={context} alt="" />
        </div>
      })
    }
          </motion.div>
        </div>
      </div>
     
     
     
   
    </section>
  )
}

export default Section2
