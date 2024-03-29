import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/woman_hoodedsweatshirt_laptop_art.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       
        <div className="container header__container">
          <h3>Hello, I'm</h3>
          <h1 className="main_title">Melissa Mackie</h1>
          <h5 className="text-light">Full Stack Web Developer</h5>
          <h6 className="text-light">I make code things happen.</h6>
          <p>
            I am in the process of reworking my portfolio. So please don't mind the mess while I am changing how it looks. - Melissa
          </p>
          <CTA />
          <HeaderSocials />

          <div className="AI__Image">
            <img src={Me} alt="woman computer engineer AI generated art" />
          </div>

          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
       
    </header>
  )
}

export default Header