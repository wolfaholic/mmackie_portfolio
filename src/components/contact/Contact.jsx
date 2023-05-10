import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact_option'>
            <h4>Email Me</h4>
            <MdOutlineEmail />
            <a href='mailto:melissa.mackie@live.com'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <h4>Email Me</h4>
            <MdOutlineEmail />
            <a href='mailto:melissa.mackie@live.com'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options*/}
      </div>
    </section>
  )
}

export default Contact