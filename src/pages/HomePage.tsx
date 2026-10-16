import Navbar from "../components/Navbar"
import Herosection from "../sections/Herosection"
import Section2 from "../sections/Section2"
import Pagereveal from "../sections/Pagereveal"

const HomePage = () => {
  return (
    <div className=" font-syne">
      <Pagereveal/>
      <Navbar/>
      <Herosection/>
     <section id="projects">
       <Section2/>
     </section>
    </div>
  )
}

export default HomePage
