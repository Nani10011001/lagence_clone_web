
import logo2 from "../assets/Logo-Clinique-noir.png"
import logo3 from "../assets/Logo-atelier-chevre.svg"
import logo4 from "../assets/Logo-noir-avec-baseline.svg"
import logo5 from "../assets/Logo-noir-horizontal.svg"
import logo6 from "../assets/Logo_lesFabricants_light-scaled.png"
import logo7 from "../assets/elle-logo.png"
import logo8 from "../assets/TonSurTon-Logo.png"
import logo9 from "../assets/OSORIATI-logo-final-noir.png"
const Section2 = () => {
  const imageArray = [logo2,logo3,logo4,logo5,logo6]
  return (
    <section className='h-screen relative w-full z-10  bg-surface'>
      <div className="py-15 w-full flex flex-col items-center text-center">
        <div className="w-full"><p className="  uppercase font-moda font-medium text-[12px] my-2 tracking-tight">
          Projects & collaborations
          </p></div>
          <div className="max-w-120 flex flex-col gap-4">
           <p className="font-playfair text-center tracking-tight leading-[0.95] lg:text-[44px] ">
             More than  <em>170 projects</em> delivered.
           </p>
           <p className="uppercase max-w-[] ">From young companies to established brands, on design and/or development projects.</p>
          </div>
          <div className="flex gap-4 ">
    {
      imageArray.map((context,i)=>{

        return    <img key={i} width={100} src={context} alt="" />
      })
    }
          </div>
      </div>
    </section>
  )
}

export default Section2
