import React from 'react'
import './experience.css'
import {FcShop} from 'react-icons/fc'
// import {FcDataConfiguration} from 'react-icons/fc'
// import {FcIdea} from 'react-icons/fc'
// import {FcShipped} from 'react-icons/fc'
// import {SiHtml5} from 'react-icons/si'
// import {IoLogoCss3} from 'react-icons/io'
// import {FaReact} from 'react-icons/fa'
// import {SiRedux} from 'react-icons/si'
// import {SiSass} from 'react-icons/si'
// import {SiJavascript} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          {/* FrontEnd Experience Information */}
          <div className="experience__frontend">
            <h3>Front-End Development</h3>
              <div className="experience__content">   
                <h5><FcShop /></h5>
              </div>
          </div>
          </div>
    </section>
  )
}

export default Experience