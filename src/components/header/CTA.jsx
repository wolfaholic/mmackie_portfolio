import React from 'react'
import Resume from '../../assets/Resume_MelissaMackie_WD.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href="https://docs.google.com/document/d/1-shVOjoOlQq7u8NIBQBxMce9EQgkb8HSRTHdh_h4kd4/edit?usp=sharing" className="btn btn-primary" target="_blank" rel="noreferrer">View Resume Online</a>
        <a href={Resume} download className="btn">Download a Copy of My Resume</a>
        <a href="#Contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA