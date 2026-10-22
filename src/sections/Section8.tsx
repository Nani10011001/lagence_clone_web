import awardLogo from "../assets/Awwards-logotype-2018.png"
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
        designStudio:"Design Studio Agency",
        awardStatus:"Honorable mention"
    },




]

const Section8 = () => {
  return (
    <div className="min-h-screen flex md:px-11 px-4 justify-center py-30  bg-surface md:relative">
      <div className="flex flex-col items-center   gap-10 w-full min-h-full">
<div className="text-center">
    <p className="font-lexend ">Awards & Recognition</p>
<p className="font-playfair text-[40px] tracking-tight leading-12 max-w-[450px]">A studio recognized<br/>
for its <em>creative excellence .</em></p>
</div>
<div className="flex gap-35">
    {
awardImagArray.map((context:awardLogoInterferace,i:number)=>{
    return <div className="flex flex-col gap-5" key={i}>
   <img src={context.image} alt="" className="w-[150px]" />
   <p className=" flex flex-col leading-3 text-center uppercase text-[13px]">{context.year} <span>{context.designStudio}</span></p>
   <p className="text-center underline text-xl">{context.awardStatus}</p>
    </div>
})
    }
</div>
      </div>
    </div>
  )
}

export default Section8
