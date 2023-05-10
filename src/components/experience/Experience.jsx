import React from 'react'
import './experience.css'
import {SiHtml5, IoLogoCss3, FaReact, SiRedux,  SiSass, SiJavascript, SiCypress, FaNodeJs, SiJest, SiMysql, DiSqllite, VscGithubInverted, SiJsonwebtokens, SiExpress, } from './Icons.jsx'


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
      </div>
      
      <h5 className="other__skills">My Other Skills</h5>
      <div className="skillset__container">
        <p className="container skillset">
          I am transitioning over from the customer service industry and have recently graduated in May of 2023 from a bootcamp with BloomTech Institute of Technology. Having worked retail, call centers and other customer service oriented positions for many years. I am exited to make this change in my life to do something I am very passionate about. In my previous roles I served as a customer service associate or adjacent jobs I have gained valuable skillsets that I belive will help me in my transition.
          <br />
          <br />
          In my customer service roles I collaborated with multiple departments to achieve goals, and provided excellent service to customers. These skills have prepared me to communicate with team members, effectively manage multiple projects, and provide excellent service to stakeholders. My hobbies, my love for reading, art and a passion for learning have led me down a path where I am learning about the new up and coming AI changes and am learning how to do prompt engineering, I have familiar with the Adobe Creative Suite, Canva the online graphic design tool, and I am learning the art of web design to not just be able to code my sites but make them look good as well. It is a work in progress but I have a never give up attitude and I am confidant I will get there. 
        </p>
      </div>
    </section>
  )
}

export default Experience