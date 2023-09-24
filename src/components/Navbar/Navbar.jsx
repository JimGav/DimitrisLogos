import React from 'react'
import "./Navbar.css"
import Headroom from "react-headroom"

import logo from "/logo.png?url"

function Navbar() {

  // Scroll to a specific element by its id
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Headroom className='Headroom'>
      <nav className='Navbar'>
        <img id="logo" src={logo} />
        <div className='Navbar-tools'>
          <a onClick={() => scrollToElement("Portfolio")}>My Work</a>
          <button className='contact-me-btn' onClick={() => scrollToElement("ContactForm")}>Contact Me</button>
        </div>
      </nav>
    </Headroom>
  )
}

export default Navbar