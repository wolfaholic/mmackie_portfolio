import React from 'react';
import './about.css';
import ME from '../../assets/me_bluebackground.png';
import {BiCoffeeTogo} from 'react-icons/bi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2 className="about__h2">🔥 ABOUT ME 🔥</h2>
      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt='Me with headphones on and a blue background'/>
              </div>
          </div>
            <article className="about__content">
              <p>    
              I have a rich employment history in customer service, with a sprinkling of healthcare and sales in-between. I have always sought and found a way to influence each position I have held with empathy, passion, and a never-give-up mindset. 'Never give up' means to me that even when you are at your lowest, you pause and allow yourself a moment, then you get back up and persist. This frame of mind has helped me get through some of the lowest points in my life.
              <br />
              <br />
              The one thing I have always wanted is to really make a difference and work in an industry where I can also have a creative outlet. After sacrificing time, money, and lots of hard work, I have found it. I look forward to entering the tech industry as a Full-Stack Web Developer. I am open to similar or adjacent positions.
              </p>
              <a href="#contact" className="btn btn-secondary">Let's talk over <BiCoffeeTogo className="header_icon" /></a>
              <div>
              </div>
            </article> 
          </div>
      
    </section>
  )
}

export default About