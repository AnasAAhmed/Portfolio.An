import React from 'react'
import { TimeLineData } from './constants';
import { motion } from 'framer-motion';
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from 'react-scroll';


const About = () => {
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
                delay: 0.2
            }
        },
        h3: {
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
        p: {
            initial: {
                x: "+100%",
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
        c4: {
            initial: {
                y: "+100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.4
            }
        },

    }

    return (
        <div>
            <div className="Section" id="#about">
                <div className="divider"></div>
                < motion.h2 {...animations.h2}>
                    About Me
                </motion.h2>
                <motion.div className="SectionText" {...animations.p}>
                    Hardworking and passionate job seeker with strong organizational skills eager to secure entry-level [Web Development] position. Ready to help team achieve company goals.
                </motion.div>

                <ul className="CarouselContainer" >
                    <>
                        {TimeLineData.map((item, index) => (
                            <div className="CarouselMobileScrollNode" key={index}>
                                <div className="CarouselItem"
                                    index={index}


                                >
                                    <h4 className="CarouselItemTitle">
                                        {item.year}
                                        < svg className="CarouselItemImg"
                                            width="208"
                                            height="6"
                                            viewBox="0 0 208 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                                fill="url(#paint0_linear)"
                                                fillOpacity="0.33"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear"
                                                    x1="-4.30412e-10"
                                                    y1="0.5"
                                                    x2="208"
                                                    y2="0.500295"
                                                    gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="white" />
                                                    <stop
                                                        offset="0.79478"
                                                        stopColor="white"
                                                        stopOpacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </h4>
                                    <h6 className="CarouselItemTitleM">

                                        {item.Month}
                                    </h6>
                                    <p className="CarouselItemText">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </>
                </ul>
                <div className="CarouselButtons">
                    {
                        TimeLineData.map((item, index) => (
                            <div className="div"
                                key={index}
                                index={index}
                                type="Button"

                            >
                            </div>
                        ))}
                </div>
            </div>

            <div className="Section">
                <div className="divider"></div>
                < motion.h2 {...animations.h3}>
                    My-Acomplishments
                </motion.h2>
                <div className="Boxes">

                    <motion.div className="Box" {...animations.c1}>
                        <div className="BoxNum">6</div>
                        <div className="BoxText">Open Source Projects</div>
                    </motion.div>
                    <motion.div className="Box"{...animations.c2} >
                        <div className="BoxNum">0</div>
                        <div className="BoxText">Students</div>
                    </motion.div>
                    <motion.div className="Box" {...animations.c3}>
                        <div className="BoxNum">0</div>
                        <div className="BoxText">Github Followers</div>
                    </motion.div>
                    <motion.div className="Box"{...animations.c4}>
                        <div className="BoxNum">0</div>
                        <div className="BoxText">Github Stars</div>
                    </motion.div>

                </div>
                <Link className="lo" to='#nav'><FaArrowCircleUp /></Link>
            </div>
        </div>

    )
}

export default About
