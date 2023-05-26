import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <div className='project__card'>
              <h3>Title</h3>
              <p>Project Information</p>
              {/* <img src={IMG} alt="placeholder" /> */}
              <a href="https://github.com/wolfaholic/Project_GitHub_UserCard" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Video Demo</a>
             
          </div>


        </div>
    </section>
  )
}

export default Portfolio