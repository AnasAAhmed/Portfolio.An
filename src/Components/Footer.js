import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
  return (
    <div id="#contact">
        <div className="FooterWrapper">

          <div className="LinkList">
            <div className="LinkColumn">
              <div className="LinkTitle">Call</div>
              <div className="LinkItem" href="tel:111-111-1111" target='main'>111-111-1111</div>
            </div>
            <div className="LinkColumn">
              <div className="LinkTitle">Email</div>
              <a className="LinkItem" href="mailto:hafeezroll69@gmail.com" >hafeezroll69@gmail.com</a>
            </div>
          </div>
   
          <div className="SocialIconsContainer">
            <div className="CompanyContainer">
              <div className='Slogan'>"Innovating one porject at a time"</div>
            </div>
            
            <div className='SocialContainer'>
              <a className="SocialIcons" href="https://github.com/AnasAAhmed" target='main'>

                <AiFillGithub size="3rem" />
              </a>
              <a className="SocialIcons" href="https://www.youtube.com/@javascriptmastery" target='main'>

                <AiFillLinkedin size="3rem" />
              </a>
              <a className="SocialIcons" href="https://www.youtube.com/@javascriptmastery" target='main'>

                <AiFillInstagram size="3rem" />
              </a>
            </div>
           
          </div>
          Copyright (C) AnasAAhmed. All rights reserved.
        </div>
      </div>
  )
}

export default Footer
