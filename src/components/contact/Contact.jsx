import React, { useRef } from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import {BiConversation} from 'react-icons/bi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9aatdk6', 'template_aoapr5r', form.current, 'LgaspkpNf_7aJdw2L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me <BiConversation /></h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact_option'>      
            <h3 className='contact__title'>Socials</h3>   
            <div className='contact_social'> 
              <p>Email</p>
              <a href='mailto:melissa.mackie@live.com' ><MdOutlineEmail className='contact__icon' /></a>
            </div>  
            <div>
              <p>LinkedIn</p>
              <a href='https://www.linkedin.com/in/melissa-m-mackie/' ><FaLinkedin className='contact__icon'/></a>
            </div>
            <div>
              <p>Twitter</p>
              <a href='https://twitter.com/CodeMackie' ><BsTwitter className='contact__icon' /></a> 
            </div>         
          </article>
        </div>
        {/* End of Contact Options*/}
        <form ref={form} onSubmit={sendEmail}>
          <p>I look foward to hearing from you. Please fill out the form below or contact me thorugh my socials to set up a time to meet and talk about how I can bring value to your company. I am excited to begin my journey as a developer and appreciate you taking the time to be here. </p>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='text' name='title' placeholder='Your Company Title' required />
          <input type='text' name='companyname' placeholder='Company Name' required />          
          <input type='email' name='email' placeholder='youremail@email.com' required /> 
          <input type='number' name='number' placeholder='Your Phone Number' required />          
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <div className='contact__buttons'>
          {/* <div class="g-recaptcha" data-sitekey="y6LeHTQImAAAAANyhMg-3ic-crB4pR1HuM9aeJd8w"></div> */}
          <br/>
            <button type='submit' className='btn btn-primary contact__button'> Send Message </button>
            <button type='reset' className='btn btn-secondary contact__button'> Reset Form </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact