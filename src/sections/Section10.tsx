import logoFooter from "../assets/Logo-2026.svg"
import kinsta from "../assets/Kinsta_black.png"
import barcodeImage from "../assets/barcodeImage.webp"

const SectionArray:string[] = ["Offers","Expertise","Méthod","achievements","about","contact","resources"]
const Section10 = () => {
  return (
    <section className="min-h-[100vh] px-4 py-13 md:relative bg-surface md:py-40 md:px-11  ">
      <div className="">
        <div className="w-full flex justify-center md:justify-start"><img src={logoFooter} className="w-[400px]   " /></div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6 my-13">
            {
SectionArray.map((context:string,i:number)=>{
    return <p key={i} className="uppercase text-[12px] scale-y-86">
{context}
    </p>
})
            }
        </div>
        <div className="flex flex-col items-center text-redish-dark md:items-start">
            <p className="uppercase scale-y-90 my-1 underline text-[14px] md:text-md text-center">Book a strategic call →</p>
            <p className="text-[10px]">Response within 24 hours – no obligation</p>
        </div>
        <div className="font-syne my-4 flex flex-col md:w-[450px]   gap-4">
          <p className="text-[12px] leading-4">L'AGENCE Design Studio designs bespoke visual identities and websites for brands and companies in the beauty, wellness, food and lifestyle 
            sectors who wish to assert their value.</p>
          <div>
            <p className="text-[12px]">contact@lagencedesignstudio.com</p>
            <p className="text-[12px]">+33(0)77773041</p>
          </div>
        </div>
        <div className="flex flex-col mt-14 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[12px]">The Design Studio Agency is affiliated with:</p>
         
       <div className="flex gap-6">
         <img src={kinsta} alt="" className="w-[4rem] h-[1.5rem]" />
        <img src={barcodeImage} className="w-[1.9rem]"/>
      {/*      <svg
           className="bg-black  text-surface px-0.5 py-0.5 rounded-full "
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12h1" />
  <path d="M3 19h1" />
  <path d="M3 5h1" />
  <path d="M8 12h13" />
  <path d="M8 19h13" />
  <path d="M8 5h13" />
</svg> */}
       </div>
          <p className="text-[12px]">©L'AGENCE Design Studio
All rights reserved
Legal notice
Privacy Policy
Terms and Conditions</p>
          </div>
          
        </div>
     
      </div>
    </section>
  )
}

export default Section10
