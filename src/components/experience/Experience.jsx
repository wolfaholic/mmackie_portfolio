import React from 'react'
import './experience.css'
import {SiHtml5, IoLogoCss3, FaReact, SiRedux,  SiSass, SiJavascript, FaLess, AiFillDatabase, SiCypress, FaNodeJs, SiJest, SiMysql, DiSqllite, VscGithubInverted, SiJsonwebtokens, SiExpress,} from './Icons.jsx'


const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          {/* FrontEnd Experience Information */}
          <div className="experience__frontend">
              <h3>Front-End Development </h3>                      
             
              <div className="experience__content">
                <article className="experience__details">
                  <div>
                    <h4 id='icon'><SiHtml5 className="experience__details-icon" /></h4>
                    <small className="text-light">HTML5</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><IoLogoCss3 className="experience__details-icon" /></h4>
                    <small className="text-light">CSS</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiJavascript className="experience__details-icon"/></h4>
                    <small className="text-light">JavaScript</small>
                  </div>
                </article>
                <article className="experience__details">
                  <div>
                    <h4 id='icon'>
                      <SiSass className="prepro experience__details-icon" />                       
                    </h4>
                    <small className="text-light">SASS</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><FaReact className="experience__details-icon"/></h4>
                    <small className="text-light">React</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiRedux className="experience__details-icon"/></h4>
                    <small className="text-light">Redux</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiCypress className="experience__details-icon"/></h4>
                    <small className="text-light">Cypress.io </small>
                  </div>
                </article>              
                <article className="experience__details">
                <div>
                    <h4 id='icon'><VscGithubInverted className="experience__details-icon"/></h4>
                    <small className="text-light">GitHub</small>
                  </div>
                </article>             
              </div>
            </div>
              {/* Back End Skills */}
              <div className="experience__frontend">
            
              <h3>Back-End Development </h3>                      
             
              <div className="experience__content">
                <article className="experience__details">
                  <div>
                    <h4 id='icon'><FaNodeJs className="experience__details-icon" /></h4>
                    <small className="text-light">NodeJS</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiJest className="experience__details-icon" /></h4>
                    <small className="text-light">JEST</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiMysql className="experience__details-icon"/></h4>
                    <small className="text-light">MySQL</small>
                  </div>
                </article>
                <article className="experience__details">
                  <div>
                    <h4 id='icon'>
                      <DiSqllite className="experience__details-icon" /> 
                    </h4>
                    <small className="text-light">SQLite</small>
                  </div>
                </article>
                
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiRedux className="experience__details-icon"/></h4>
                    <small className="text-light">Redux</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiJsonwebtokens className="experience__details-icon"/></h4>
                    <small className="text-light">JWT</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiExpress className="experience__details-icon"/></h4>
                    <small className="text-light">ExpressJS</small>
                  </div>
                </article>              
                
              </div>
          </div>
        
      </div>
    </section>
  )
}

export default Experience