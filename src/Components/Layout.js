import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';


export const Layout = ({children}) => {
  return (
    <div className='Co' style={{maxWidth:"1280px",width:"100%",margin:"auto"}}>
     <Navbar/>
     <main>{children}</main> 
     <Footer/>
    </div>
  )
}