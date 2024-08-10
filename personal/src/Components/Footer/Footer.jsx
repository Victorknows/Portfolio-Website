import React from 'react'
import './Footer.css'
import footer_logo from '../../../assets/footer_logo.svg'
import user_icon from '../../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer_logo} alt="" /> */}
                <h2>Victor</h2>
                <p>CODE IS LIFE</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <hr />
                <div className="footer-bottom">
                    <p className="footer-bottom-left">Victor Muhoro. All rights reserved</p>
                    <div className="footer-bottom-right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect With Me</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer