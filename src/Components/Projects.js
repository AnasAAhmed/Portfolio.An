import React from 'react'
import { projects   }from './constants';
import { motion } from 'framer-motion'
const Projects = () => {
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
      transition:{
        duration: 0.4
      }
      
    }, 
    card: {
      initial: {
        x: "+100%",
        opacity: 0,
      },
      whileInView: {
       x: 0,
        opacity: 1,
      },
      transition:{
        duration: 0.3
      }
      
    },
  }
  return (
    <div className="Section" id="#projects">
         <div className="divider"></div>
        <motion.h2  {...animations.h2}>
          Projects
        </motion.h2>
        <div className="GridContainer">
          {projects.map(({ title, description, image, tags, source, visit, id }) => (
            <motion.div className="BlogCard" key={id}{...animations.card}>
              <img className="Img" src={image} alt='ERROR'/>
              <div className="TitleContent">
                <h3 className="HeaderThree" >{title}</h3>
                <hr />
                <p className="CardInfo">{description}</p>
              </div>
              <div>
                <div className='TitleContent'>Frontend</div>
                <div className="TagList">
                  {tags.map((tags, i) => (
                    <div className="Tag" key={i}>{tags}</div>
                  ))}
                </div>
              </div>
              <div className="UtilityList">
                <a className="ExternalLinks"  href={visit} target='main'>Visit</a>
                <a className="ExternalLinks" href={source} target='main'>Source</a>
              </div>
            </motion.div>

          ))}
        </div>

      </div>
  )
}

export default Projects
