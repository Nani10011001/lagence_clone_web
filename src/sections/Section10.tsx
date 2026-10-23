import logoFooter from "../assets/Logo-2026.svg"
const SectionArray:string[] = ["Offers","Expertise","Méthod","achievements","about","contact","resources"]
const Section10 = () => {
  return (
    <section className="min-h-[130vh] px-4 md:relative bg-surface md:py-60 md:px-11  ">
      <div>
        <img src={logoFooter} className="w-[400px]" />
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 my-13">
            {
SectionArray.map((context:string,i:number)=>{
    return <p key={i} className="uppercase text-[12px] scale-y-90">
{context}
    </p>
})
            }
        </div>
        <div>
            <p>Book a strategic call →</p>
            <p className="text-[10px]">Response within 24 hours – no obligation</p>
        </div>
      </div>
    </section>
  )
}

export default Section10
