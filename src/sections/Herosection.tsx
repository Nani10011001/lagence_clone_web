import frontsection from "../assets/frontImage.png"

const Herosection = () => {
  return (
    <section className="bg-cover w-full bg-no-repeat bg-center sticky h-screen" 
    style={{backgroundImage:`url(${frontsection})`}}>
     
   <div className="w-full h-screen flex flex-col  items-center">
  <div className="flex flex-col gap-7">
      <p className="uppercase mt-20 text-center text-surface text-xs tracking-[-0.02rem]">BRAND IMAGE AND WEB DESIGN</p>
    <p className="font-playfair text-center max-w-[60rem] tracking-[-0.05em] text-surface text-5xl  md:text-6xl">
      
    We create websites for{" "}
  <em>beauty</em>, <em>wellness</em>, <em>food</em> and{" "}
  <em>lifestyle</em> brands that work for you.
  
   </p>
  </div>
   </div>

    </section>
  )
}

export default Herosection
