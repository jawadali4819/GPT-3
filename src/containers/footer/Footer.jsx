import React from 'react';
import './Footer.css';
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
          <div className='gpt3__footer-links-logo'>
              <img src={gpt3Logo} alt="logo" />
              <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className='gpt3__footer-links-div'>
            <h4>Links</h4>
            <ul>
              <li><a href="#/">Overons</a></li>
              <li><a href="#/">Social Media</a></li>
              <li><a href="#/">Counters</a></li>
              <li><a href="#/">Contact</a></li>
            </ul>
          </div>

          <div className='gpt3__footer-links-div'>
            <h4>Company</h4>
            <ul>
              <li><a href="#/">Terms & Conditions</a></li>
              <li><a href="#/">Privacy Policy</a></li>
              <li><a href="#/">Contact</a></li>
            </ul>
          </div>

          <div className='gpt3__footer-links-div'>
            <h4>Get in touch</h4>
            <ul>
              <li><a href="#/">Crechterwoord K12 182 DK Alknjkcb</a></li>
              <li><a href="#/">085-132567</a></li>
              <li><a href="#/">info@payme.net</a></li>
            </ul>
          </div>

      </div>

      <div className='gpt3__footer-copyrights'>
        <p>&copy; {new Date().getFullYear()} PayMe. All rights reserved</p>

      </div>
    </div>
  )
}

export default Footer;
