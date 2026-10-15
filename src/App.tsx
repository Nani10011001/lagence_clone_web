import Lenis from "lenis";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  const lenis = new Lenis();

  useEffect(()=>{

function raf(time:number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  },[])

  return (
    <main>
      <HomePage/>
    </main>
  )
}

export default App
