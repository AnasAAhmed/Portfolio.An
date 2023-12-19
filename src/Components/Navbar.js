import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { DiCssdeck } from 'react-icons/di';


const Navbar = () => {






  return (
    <div className="Container">

    <div className="Div1" id='#nav'>
      
        <Link  to="#hero"style={{ fontSize:"34px",display: "flex", alignItems: "center", color: "white", marginBottom: "20px", cursor:"pointer"}}>
          <DiCssdeck size="3rem" /> <div className="Span">Anas</div>
        </Link>
      
    </div>
    <ul className="Div2">
     
        <Link to="#projects">
          <div className="NavLink">Projects</div>
        </Link>
      
  
        <Link to="#tech">
          <div className="NavLink">Technologies</div>
        </Link>
      
        <Link to="#about">
          <div className="NavLink">About</div>
          <div className="line"></div>
        </Link>
      
    </ul>
    <div className="Div3">
      <a className="SocialIcons" href="https://github.com/AnasAAhmed" target='main'>

        <AiFillGithub size="2rem" />
      </a>
      <a className="SocialIcons" href="https://linkedin.com" target='main'>

        <AiFillLinkedin size="2rem" />
      </a>
      <a className="SocialIcons" href="https://instagram.com" target='main'>

        <AiFillInstagram size="2rem" />
      </a>
      
    </div>
  </div>




  )
}


export default Navbar;
