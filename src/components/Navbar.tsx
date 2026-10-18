import { motion, useTransform, type MotionValue } from "framer-motion"
import logo from "../assets/Logo-2.svg"
type NavbarProps = {
  heroProgress: MotionValue<number>
}

const Navbar = ({ heroProgress }: NavbarProps) => {
  const color = useTransform(heroProgress, [0, 1], ["#ffffff", "#000000"])
  const logoFilter = useTransform(
    heroProgress,
    [0, 1],
    ["brightness(0) invert(1)", "brightness(0) invert(0)"],
  )

  return (
    <header className=" w-full overflow-hidden fixed inset-x-0 top-0  z-[55] px-11 py-3 ">
      <motion.nav style={{ color }} className="flex items-center justify-between">
        <motion.img
          src={logo}
          alt="company logo"
          className="w-[100px] md:w-[170px]"
          style={{ filter: logoFilter }}
        />
        <motion.p
          style={{ color }}
          className="uppercase text-[10px] md:text-[13px] lg:text-[13px] font-playfair"
        >
          menu
        </motion.p>
      </motion.nav>
    </header>
  )
}

export default Navbar
