import Navbar from "../components/Navbar"
import Herosection from "../sections/Herosection"
import Section2 from "../sections/Section2"
import Pagereveal from "../sections/Pagereveal"
import Section3 from "../sections/Section3"
import { useScroll, useTransform } from "framer-motion"
import Section4 from "../sections/Section4"
import Section5 from "../sections/Section5"
import Section6 from "../sections/Section6"
import Section7 from "../sections/Section7"
import Section8 from "../sections/Section8"
import Section9 from "../sections/Section9"
import Section10 from "../sections/Section10"
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
      <Section5/>
      <Section6/>
    <section>
        <Section7/>
    </section>
    <Section8/>
    <Section9/>
    <Section10/>
    </div>
  )
}

export default HomePage
