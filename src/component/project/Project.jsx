import React, { useRef,} from 'react'
import {motion,useScroll,useTransform } from "framer-motion"
import "./project.scss"

const Project = ({data}) => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target: ref,
    //offset: ["start start","end start"]
  }) 
  const y = useTransform(scrollYProgress,[0,1],[-300,300])
  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={data.img} alt=''/>
          </div>
          <motion.div className='textContainer' style={{y}}>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Project
