import React from 'react'
import './header.css'
import CTA from './CTA'
import Collab from '../../assets/selfimage1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Melissa Mackie</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="AI__Image">
          <img src={Collab} alt="team collaboration AI art" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header