import React from 'react'
import {motion} from "framer-motion"
const Pagereveal = () => {
  return (
    <motion.div
    initial={{y:0}}
    animate= {{
        y:"-100%",
        transition:{
            duration:1.5,
            ease:[0.76,0,0.24,1]
        }
    }}
    
    className='fixed inset-0 z-[100] h-screen bg-[#111]'>
      
    </motion.div>
  )
}

export default Pagereveal
