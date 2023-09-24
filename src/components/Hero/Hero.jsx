import React from 'react'
import "./Hero.css"

import logo1 from "/hero_logo1.png?url"
import logo2 from "/hero_logo2.png?url"
import logo3 from "/hero_logo3.png?url"


function Hero() {

    // Scroll to a specific element by its id
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className='Hero'>
            <header className='Hero-header'>Elevate Your Brand with  <br />Unique <span>Logos</span></header>
            <br /> <br />
            <p>Stand out from the crowd with my custom logo designs tailored to your brand's identity.</p>
            <p>I harness the power of AI to bring your vision to life.</p>
            <br />
            <button className='Hero-btn' onClick={()=>{scrollToElement("Portfolio")}}>View Portfolio</button>
            <img src={logo1} id='Hero-logo1' />
            <img src={logo2} id='Hero-logo2' />
            <img src={logo3} id='Hero-logo3' />

        </section>
    )
}

export default Hero