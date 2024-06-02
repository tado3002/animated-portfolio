import React, { useRef } from 'react'
import {motion,useScroll,useSpring} from "framer-motion" 
import "./portfolio.scss"
import projects from '../../data/projects.js'
import Project from '../project/Project.jsx'

const Portfolio = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end","start start"]
  }) 
  const scaleX = useSpring(scrollYProgress,{
    damping: 30,
    stiffness: 100,
  })

  return (
    <div className='portfolio' >
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className='progressBar'></motion.div>
      </div>
      {projects.map((item,index)=>{
        return(
        <Project data={item} key={index} ref={ref}/>
        )
      })}
    </div>
  )
}

export default Portfolio
