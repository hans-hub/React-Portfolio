import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Hello I'm</h5>
         <h1>Hans Baffour</h1>
         <h5 className="text-light ">Full Stack Dev</h5>
         <CTA />
         <HeaderSocials />
      

        <div className="me">
          <img src={Me} />
        </div>
      <a href="#Contact" className='scroll__down'>Scroll Down</a>
    </div>
      

      
    </header>
  )
}

export default Header