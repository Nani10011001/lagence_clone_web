import Navbar from "../components/Navbar"
import Herosection from "../sections/Herosection"
import Section2 from "../sections/Section2"
import Pagereveal from "../sections/Pagereveal"
import Section3 from "../sections/Section3"
import { useScroll, useTransform } from "framer-motion"
import Section4 from "../sections/Section4"
const HomePage = () => {
  const { scrollY } = useScroll()
  const heroProgress = useTransform(scrollY, [0, window.innerHeight], [0, 1])
  return (
   <div className="font-syne w-full min-h-screen">
      <Pagereveal />
      <Navbar heroProgress={heroProgress} />
      <Herosection />

      <section id="projects">
        <Section2 />
      </section>

      <section id="section3">
        <Section3 />
      </section>
      <Section4/>
    </div>
  )
}

export default HomePage
