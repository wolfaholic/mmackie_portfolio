import React from 'react';
import './about.css';
import ME from '../../assets/me_bluebackground.png';
import {BiCoffeeTogo} from 'react-icons/bi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>🔥 ABOUT ME 🔥</h2>
      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt='Me with headphones on and a blue background'/>
              </div>
          </div>
            <article className="about__content">
              <p>    
              I have a very customer-service rich employment history with a sprinkling of health care and sales in-between. I have always sought and found a way to influence each position I have held with empathy, passion and a never give up mind-frame. Never give up means to me that even when you are at your lowest, you pause and allow yourself a moment, then you get back up and persist. This frame of mind has helped me get through some of the lowest points in my life. The one thing though I always wanted though is to really make a difference and to work in an industry where I can as well as have a creative outlet. After a sacrifice of time, money and lots of hard work. I have found it. I look forward to entering the tech industry.
              </p>
              <p>☕️ Lets connect over Virtual Coffee (or Tea)!</p>
              <div>
              <a href="#contact" className="btn btn-primary">Let's Talk over <BiCoffeeTogo className="header_icon" /></a>
              </div>
              </article> 
          </div>
      
    </section>
  )
}

export default About