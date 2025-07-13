import React from 'react'
import './Contact.css'
import theme_pattern from '../../../assets/theme_pattern.svg'
import mail_icon from '../../../assets/mail_icon.svg'
import location_icon from '../../../assets/location_icon.svg'
import call_icon from '../../../assets/call_icon.svg'




const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Currently available to take o any new projects, so feel free to contact me</p> 
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>victormuhoro7@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>0792466821</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Nairobi,Kenya</p>
                    </div>
                </div>
            </div>
            <form
  className="contact-right"
  action="mailto:victormuhoro7@gmail.com"
  method="POST"
  encType="text/plain"
  onSubmit={() => alert('Message sent successfully!')}
>
  <label>Your Name</label>
  <input type="text" name="name" placeholder="Enter Your Name" required />
  
  <label>Your Email</label>
  <input type="email" name="email" placeholder="Enter Your Email" required />
  
  <label>Your Message</label>
  <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>
  
  <button type="submit" className="contact-submit">Submit Now</button>
</form>


        </div>
    </div>
  )
}

export default Contact