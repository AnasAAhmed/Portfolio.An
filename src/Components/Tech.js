import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { motion } from 'framer-motion';
const Tech = () => {
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
    }, 
      p: {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
        transition: {
            delay: 0.2
          }
      }, 
      c1: {
        initial: {
            y: "+100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: {
            delay: 0.1
        }
    },
   c2: {
        initial: {
            y: "+100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: {
            delay: 0.2
        }
    }, c3: {
        initial: {
            y: "+100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        },
        transition: {
            delay: 0.3
        }
    },
  }
  return (
    <div>
       <div id="tech">
        <div className="Section" id="#tech">
       <div className="divider"></div>
          <div className="SectionDivider" />
          <br />
          <motion.h2  {...animations.h2}>
         Technologies
        </motion.h2>
          <motion.div className="SectionText" {...animations.p}>
            I've worked with a range a technologies in web development world with 4 + Month Experience.
            From Front-end to Back-end.
          </motion.div>
          <div className="List">
            <motion.div className="ListItem"{...animations.c1}>
              <DiReact size="3rem" />
              <div className="ListContainer">
                <div className="ListTitle">Front-end</div>
                <div className="ListParagraph">
                  Exprienced with <br />React.js
                </div>
              </div>
            </motion.div>
            <motion.div className="ListItem" {...animations.c2}>
              <DiFirebase size="3rem" />
              <div className="ListContainer">
                <div className="ListTitle">Back-end</div>
                <div className="ListParagraph">
                  Beginner with <br />Node.js and Mongodb
                </div>
              </div>
            </motion.div>
            <motion.div className="ListItem" {...animations.c3}>
              <DiZend size="3rem" />
              <div className="ListContainer">
                <div className="ListTitle">UI/UX</div>
                <div className="ListParagraph">
                  Exprienced with <br />Chakra-ui and Tailwind css
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Tech
