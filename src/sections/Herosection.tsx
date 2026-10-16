import frontsection from "../assets/frontImage.png"

const Herosection = () => {
  return (
    <section className="bg-cover w-full bg-no-repeat bg-center sticky top-0 z-0  h-screen" 
    style={{backgroundImage:`url(${frontsection})`}}>
     
   <div className="w-full py-10 md:py-0 h-screen flex flex-col gap-15 md:gap-4  items-center">
  <div className="flex flex-col gap-7">
      <p className="uppercase mt-20 text-center font-lexend text-surface text-xs tracking-[-0.02rem]">BRAND IMAGE AND WEB DESIGN</p>
    <p className="font-playfair text-center max-w-[60rem] tracking-[-0.05em] text-surface text-3xl  md:text-6xl lg:text-6xl">
      
    We create websites for{" "}
  <em>beauty</em>, <em>wellness</em>, <em>food</em> and{" "}
  <em>lifestyle</em> brands that work for you.
  
   </p>
  </div>
  <div>
    <p className=" text-surface md:text-2xl 
    
    text-center uppercase font-light tracking-tight max-w-4xl">A website aligned with your positioning,<br/>

ready to perform, and designed for your everyday use.</p>
  </div>
   </div>

    </section>
  )
}

export default Herosection
