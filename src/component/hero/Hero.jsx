import React from 'react'
import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
  initial:{
    x: -500,
    opacity: 0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChilder: 0.1
    }
  },
  scrollButton:{
    opacity:0,
    y: 10,
    transition:{
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial:{
    x: 0,
  },
  animate:{
    x:"-820%",
    transition:{
      repeat: Infinity,
      repeatType:"mirror",
      duration:60
    }
  },
}



const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div 
          className='textContainer' 
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MUH. MURTADLO</motion.h2> 
          <motion.h1 variants={textVariants}>Web Programmer and Astronomy Addict</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img src='/scroll.png' alt='' animate="scrollButton" variants={textVariants} />
        </motion.div>
      </div>

      <motion.div 
        className='slidingTextContainer'
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programming🖥️ Astronomy🪐 Hiking🏔️
      </motion.div>

      <div className='imageContainer'>
        <img src='/hero.png' alt=''/>
      </div>
    </div>
  )
}

export default Hero 
