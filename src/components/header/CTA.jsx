import React from 'react'
import {BiCoffeeTogo} from 'react-icons/bi'
import {RiNewspaperLine} from 'react-icons/ri'

const CTA = () => {
  return (
    <div className="cta">
        <a href="https://docs.google.com/document/d/1-shVOjoOlQq7u8NIBQBxMce9EQgkb8HSRTHdh_h4kd4/edit?usp=sharing" className="btn" target="_blank" rel="noreferrer">View Resume <RiNewspaperLine className="header_icon"/></a>
        <a href="#Contact" className="btn btn-primary">Let's Talk over <BiCoffeeTogo className="header_icon"/></a>
    </div>
  )
}

export default CTA