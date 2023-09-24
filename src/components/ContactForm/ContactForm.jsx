import React from 'react';
import './ContactForm.css';
import { Icon } from '@iconify/react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const comment = form.elements.text.value;

        // Create a mailto link with the form data
        const mailtoLink = `mailto:dimitrisgav04@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AComment:%20${comment}`;

        // Open the default email client with the mailto link
        window.top.location.href = mailtoLink

        // Reset the form fields
        form.reset();
    };

    return (
        <section id='ContactForm'>
            <header>Contact Me</header>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" className="feedback-input" placeholder="Name" />
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="text" className="feedback-input" placeholder="Message" rows="10"    cols="30"></textarea>
                <button type="submit">Send</button>
            </form>
       
            <header>Or</header>

            <div className='fiverr-btn' onClick={
                ()=>{
                    window.open("https://www.fiverr.com/dimitris_gav?public_mode=true")
                }
            }>
                <p>Check Out My Gigs</p>
                <Icon id="fiverr-icon" icon="jam:fiverr" color='white' fontSize={40} />
            </div>
        </section>
    );
};

export default Contact;