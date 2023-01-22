import React from 'react'
import './experience.css'
import {FcShop} from 'react-icons/fc'
import {FcDataConfiguration} from 'react-icons/fc'
import {FcIdea} from 'react-icons/fc'
import {FcShipped} from 'react-icons/fc'
import {SiHtml5} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiRedux} from 'react-icons/si'
import {SiSass} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h4>My Experience</h4>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Front-End Development</h3>
            <h3><FcShop /></h3>
            <div className="experience__content">        
              <article className="experience__details">
                <h4><SiHtml5 /></h4>
                <small className="text-light">HTML5</small>
              </article>
              <article className="experience__details">               
                <h4><IoLogoCss3 /></h4>
                <small className="text-light">CSS</small>
              </article>
              <article className="experience__details">                
                <h4><FaReact /></h4>
                <small className="text-light">React</small>
              </article>
              <article className="experience__details">             
                <h4><SiRedux /></h4>
                <small className="text-light">Redux</small>
              </article>
              <article className="experience__details">                 
                <h4><SiSass /></h4>
                <small className="text-light">SASS / PreProcessors</small>
              </article>
              <article className="experience__details">                
                <h4><SiJavascript /></h4>
                <small className="text-light">JavaScript</small>
              </article>
              <article className="experience__details">                
                <h4><SiJavascript /></h4>
                <small className="text-light">DOM Manipulation</small>
              </article>
              <article className="experience__details">                
                <h4><SiJavascript /></h4>
                <small className="text-light">JSON</small>
              </article>
              <article className="experience__details">                
                <h4><SiJavascript /></h4>
                <small className="text-light">MySQL</small>
              </article>
              <article className="experience__details">                
                <h4><SiJavascript /></h4>
                <small className="text-light">BootStrap</small>
              </article>
            </div>
          </div>

          <div className="experience__backend">
            <h3>Back-End Development</h3>
              <article className="experience__details">
                <FcDataConfiguration />
              </article>
          </div>  
          <div className="experience__design">
            <h3>Design</h3>
            <article className="experience__details">
              <FcIdea />
            </article>
          </div>
          <div className="experience__otherskills">
            <h3>Other Transferrable Skills</h3>
            <article className="experience__details">
              <FcShipped />
            </article>
          </div>      
        </div>
        

    </section>
  )
}

export default Experience