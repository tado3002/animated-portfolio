import {motion} from "framer-motion"

const variants = {
  open:{
    transition: {
      staggerChildren: 0.15
    }
  },
  closed:{
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}
 
const itemsVariants = {
  open: {
    y:0,
    opacity: 1
  },
  close: {      
     y:50,
     opacity: 0
  }
}

const Links = ({setOpen,open}) => {
  const items = [
    'Homepage',
    'Services',
    'Portfolio',
    'Contact',
    'About'
  ]
  return (
    <motion.div className='links' variants={variants} animate={open?"open":"closed"}>
      {items.map((item,index)=>(        
        <motion.a 
          href={`#${item}`} 
          key={index} 
          onClick={()=>setOpen(prev=>!prev)} 
          variants={itemsVariants}
          animate={open?"open":"closed"}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}
        >
          {item}
        </motion.a>)
      )
      }
    </motion.div>
  )
}

export default Links
