import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              {/* <img src={IMG1} alt="" /> */}
              <h3>Project Title</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              {/* <img src={IMG1} alt="" /> */}
              <h3>Project Title</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              {/* <img src={IMG1} alt="" /> */}
              <h3>Project Title</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              {/* <img src={IMG1} alt="" /> */}
              <h3>Project Title</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              {/* <img src={IMG1} alt="" /> */}
              <h3>Project Title</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              {/* <img src={IMG1} alt="" /> */}
              <h3>Project Title</h3>
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
        </div>
    </section>
  )
}

export default Portfolio