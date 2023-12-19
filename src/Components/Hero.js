import { motion } from 'framer-motion'
import React from 'react'




const Hero = () => {
  const animations = {
    h2: {
      initial: {
        y: "+100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 0.4
      },
      
     
    }, 
     
  }
  return (
    <div className="Section" id="#hero" style={{padding:"0",flexdirection: "row"}}>
<div className="LeftSection"> 
 
        <motion.h2 style={{alignItems:"center"}} {...animations.h2}>
          Hi , Welcome To My<br />Porfolio
        </motion.h2>
        <div className="SectionText"  > 
          Goal-oriented Web Developer brings strong commitment to collaboration and solutions-oriented problem-solving. Use various web design packages to develop custom-crafted, customer-focused websites and designs. Committed to high standards of user experience. Lends detailed knowledge of SEO to increase visibility.
        </div>
        <a href="https://github.com/AnasAAhmed" target='main'><button className="pol" >Learn More</button></a>

</div>
      </div>
  )
}

export default Hero
