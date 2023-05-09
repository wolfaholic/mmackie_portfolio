import React from 'react'
import './experience.css'
import {SiHtml5, IoLogoCss3, FaReact, SiRedux,  SiSass, SiJavascript, CgFigma, SiCypress, FaNodeJs, SiJest, SiMysql, DiSqllite, VscGithubInverted, SiJsonwebtokens, SiExpress, SiOpenai, SiAdobe, SiCanva} from './Icons.jsx'


const Experience = () => {
  return (
    <section id='experience'>
        <h5>🎆My Skillset 🎆</h5>
        <h2>  I have experience with... </h2>
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
              <div className="experience__backend">
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
          {/* Design Skills */}
          <div className="experience__design">
              <h3>Design Experience </h3>                      
             
              <div className="experience__content">
                <article className="experience__details">
                  <div>
                    <h4 id='icon'><SiAdobe className="experience__details-icon" /></h4>
                    <small className="text-light">Adobe CC</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><SiOpenai className="experience__details-icon" /></h4>
                    <small className="text-light">A.I Prompt Engineering</small>
                  </div>
                </article>
                <article className="experience__details">
                <div>
                    <h4 id='icon'><CgFigma className="experience__details-icon"/></h4>
                    <small className="text-light">Figma</small>
                  </div>
                </article>
                <article className="experience__details">
                  <div>
                    <h4 id='icon'>
                      <SiCanva className="experience__details-icon" /> 
                    </h4>
                    <small className="text-light">Canva</small>
                  </div>
                </article>
                
                            
                
              </div>
          </div>
          {/* Trasnferable Skills - Removed Will Reimpliment once I can decide how to design it how I like it*/}
          {/* <div className="experience__transferable">
              <h3>Transferable Skills</h3>                      
             
              <div className="experience__content">
                <article className="experience__details">
                  <ul>
                    <li>Customer service skills</li>
                    <li>Communication skills</li>
                    <li>Problem-solving skills</li>
                    <li>Organization</li>
                    <li>Multitasking</li>
                    <li>Patience</li>
                    <li>Technical aptitude </li>
                    <li>Adaptability </li>
                    <li>Creative problem-solving </li>
                    <li>Collaboration </li>
                    <li>Analytical thinking </li>
                    <li>Conflict resolution </li>
                    <li>Empathy</li>
                    <li>Customer-focused </li>
                    <li>Continuous learning</li>
                  </ul>
                </article>              
              </div>
          </div> */}
      </div>
    </section>
  )
}

export default Experience