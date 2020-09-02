import React, { Component, Fragment, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Fade } from 'react-awesome-reveal'

function App() {

  return (
    <Fade bottom >
    <div id="footer">
      <div id="footer-1p">
        <div id="footer-1">
          
            <p className="left" >We keep things original and unique at <br />ID21, and always ravished with new <br />possibilities. As your business grows, <br />we do too.</p>
        
            <div>
              <h5>Subscribe for our latest news.</h5>
              <div className="relative" >
                <input placeholder="EMAIL" />
                <p id="subscribe-btn">Subscribe</p>
              </div>
            </div>
         
        </div>
      </div>
      <hr />
      <div id="footer-2p">
        <div id="footer-2">
      
            <div id="footer-2-1">
              <h4>Let's get in touch.</h4>

              <div className="relative">
                <div className="contact relative">
                  <img src={require('../images/icons/phone.png')} />
                  <p><a href="tel:+6562722345">(65) 6272 2345</a></p>
                </div>

                <div className="contact relative">
                  <img src={require("../images/icons/mail.png")} />
                  <p><a href="mailto:enquiries@id21.com.sg">enquiries@id21.com.sg</a></p>
                </div>

                <div className="contact relative">
                  <img src={require("../images/icons/location.png")} />
                  <p>1 Kim Seng Promenade<br />Great World City East Tower<br />Unit 16-04/05/06<br />Singapore 237994</p>
                </div>
              </div>

              <Link to="/contact" className="footer-contact-us desktop-hide">CONTACT US</Link>
            </div>
          
            <div id="footer-2-2" className="mobile-hide">
              <h5>Sitemap</h5>
              <div className="left">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/why-us">Why Us</Link>
                <Link to="/expertise/interior-design">Our Expertise</Link>
              </div>
              <div className="right">
                <Link to="/work">Our Works</Link>
                <Link to="/blog">News & Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/faq">FAQs</Link>
              </div>
            </div>
      
            <div id="footer-2-3">
              <h5>Socials</h5>

              <a href="https://www.facebook.com/ID21TransformationAtWork/" target="_block"><img src={require("../images/icons/facebook.png")} /></a>
              <a href="https://www.linkedin.com/company/id21officedesign/" target="_block"><img src={require("../images/icons/linked-in.png")} /></a>
              <a href="#" target="_block"><img src={require("../images/icons/instagram.png")} /></a>
            </div>
        
        </div>
      </div>

      <div id="footer-3p">
        <div id="footer-3">
        <Link to="/contact" className="footer-contact-us mobile-hide">CONTACT US</Link>
          <div >
            <Link to="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <p id="divider" >|</p>
            <Link to="/terms">
              <p>Terms</p>
            </Link>
            <p id="divider" >|</p>
            <p>© 2020 ID21 Pte Ltd.</p>
          </div>
        </div>
      </div>

    </div>
    </Fade>
  )
}

export default App
