import { useEffect, useState } from "react"
import logo from "../assets/Logo-2026.svg"

const Navbar = () => {
  
  const [isDark,setDark] = useState<boolean>(false)
  useEffect(()=>{
 const whiteSection = document.querySelector("#projects")
 if(!whiteSection) return;
 const observer = new IntersectionObserver(([entry])=>{
  setDark(entry.isIntersecting)
 },

{
  rootMargin: "-40px 0px -85% 0px",
  threshold: 0,
})
observer.observe(whiteSection)
return ()=> observer.disconnect()
  },[])
  return (
    <header className=" w-full fixed z-55 px-11 py-3 ">
      <nav className={`flex  items-center justify-between`}>
        <img src={logo} alt="company logo" className={`
            w-[100px] md:w-[170px] ${isDark? "text-black":" invert brightness-0"}`}  />
        <button className={`uppercase text-[10px] md:text-[13px] lg:text-[13px] font-playfair  ${isDark ? "text-black":"text-surface"}`}>menu</button>
      </nav>
    </header>
  )
}

export default Navbar
