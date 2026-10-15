import { useEffect, useState } from "react"
import logo from "../assets/Logo-2026.svg"
import { useScroll } from "framer-motion"
const Navbar = () => {
  const {scrollY} = useScroll()
  const [isDark,setDark] = useState<boolean>(false)
  useEffect(()=>{
 return scrollY.
  })
  return (
    <header className="w-full fixed z-55 px-11 py-3 ">
      <nav className="flex  items-center justify-between">
        <img src={logo} alt="company logo" className="brightness-0 invert w-[100px] md:w-[170px]"  />
        <button className="uppercase text-[10px] md:text-[13px] lg:text-[13px] font-playfair text-surface">menu</button>
      </nav>
    </header>
  )
}

export default Navbar
