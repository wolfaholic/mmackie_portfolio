import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImDribbble } from "react-icons/im";
import { FaFreeCodeCamp } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { BsTwitter } from "react-icons/bs"
 

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/melissa-m-mackie" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/wolfaholic" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://dribbble.com/mmackie" target="_blank" rel="noreferrer"><ImDribbble /></a>
        <a href="https://www.freecodecamp.org/wolfaholic" target="_blank" rel="noreferrer"><FaFreeCodeCamp /></a>
        <a href="https://www.hackerrank.com/melissa_mackie" target="_blank" rel="noreferrer"><SiHackerrank /></a>
        <a href="https://twitter.com/CodeMackie" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials