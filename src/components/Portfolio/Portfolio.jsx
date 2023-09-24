import React from 'react'
import "./Portfolio.css"
import { Icon } from '@iconify/react';
import logoData from "../../assets/logo_data.json"

function Portfolio() {

    // Scroll to a specific element by its id
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id='Portfolio'>

            <header>
                Portfolio
            </header>
            <p>
                Here is some of my work. Both professional with <br />great customer <span>satisfaction</span> and personal.
            </p>
            <div className='Portfolio-items'>
                {logoData && logoData.sort(() => (Math.random() > .5) ? 1 : -1).map((logo, i) =>   // shuffle for random order 
                    <div className='Portfolio-item' key={i}>
                        <img src={logo.path} />
                        {!logo.personal && <Icon icon="jam:fiverr" color='#87fa7a' fontSize={30} className='fiverr-icon' />}
                    </div>
                )}
            </div>
            <div id='Portfolio-redirect'>
                <p>Ready to take your <span>brand</span> to the next level?</p>
                <p>Let's get started on your logo design today.</p>
                <button className='Contact-btn' onClick={() => { scrollToElement("ContactForm") }}>Order now</button>
            </div>
        </section>
    )
}

export default Portfolio