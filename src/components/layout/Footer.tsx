import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='comapny'>
        <h2>FASHION</h2>
        <p>Complete your style with  awesome <br />clothes from us.</p>
        <div className='icons'>
          <div className='facebook'> <FaFacebookF  size={20} /></div>
          <div className='facebook'><FaInstagram size={20} /></div>
          <div className='facebook'> <FaTwitter  size={20}/></div>
          <div className='facebook'> <FaLinkedinIn size={20} /></div>
        </div>
      </div>
      <div className='left'>
      <div className='comapny'>
        <h2>Company</h2>
        <p>About</p>
        <p>Contact us</p>
        <p>Support</p>
        <p>Careers</p>
      </div>
      <div className='comapny'>
      <h2>Quick Link</h2>
        <p>Share Location</p>
        <p>Orders Tracking</p>
        <p>Size Guide</p>
        <p>FAQs</p>
      </div>
      <div className='comapny'>
      <h2>Legal</h2>
        <p>Terms $ conditions</p>
        <p>Privacy Policy</p>
      </div>
      </div>
    </div>
  )
}

export default Footer