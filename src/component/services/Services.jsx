import React, { useRef } from 'react'
import {motion,useInView} from 'framer-motion'
import "./services.scss"

const variants = {
  initial:{
    x: -500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  }
}


const Services = () => {

  const ref = useRef()
  const isInView = useInView(ref,{
    margin:"-100px"
  })

  return (
    <motion.div 
      className='services'
      variants={variants} 
      initial="initial"
      ref={ref}
      animate={"animate" || {isInView}}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow
          <br/> and move forward
        </p><hr/>
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <motion.div className='title'>
          <img src='/people.webp'/>
          <h1>
            <b>Unique</b> Ideas
          </h1>
        </motion.div> 
        <motion.div className='title' variants={variants}>
          <h1>
            <b>For Your</b> Business. 
          </h1>
          <button>WHAT WE DO?</button>
        </motion.div> 
      </motion.div> 

      <motion.div className='listContainer' variants={variants} >

        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <button>Go</button>
        </motion.div>
        
        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>                       
           <h2>Branding</h2>
           <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
           </p>
           <button>Go</button>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray",color:"black"}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default Services
