import React from 'react'
import './nav.css'
import { BsHouseDoor } from 'react-icons/bs';
import { BsPersonCircle} from 'react-icons/bs';
import { FaRegFileCode } from 'react-icons/fa';
import { BiBookmarkHeart } from 'react-icons/bi';
import { BiMessageAltDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BsHouseDoor /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'  ? 'active' : ''}><BsPersonCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'  ? 'active' : ''}><BiBookmarkHeart /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'  ? 'active' : ''}><FaRegFileCode /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'  ? 'active' : ''}><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav