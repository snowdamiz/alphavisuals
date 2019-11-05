import React from 'react';
import { ContactWrap } from './contactStyles';

function Contact () {
    return (
        <ContactWrap id="contact">
            <h1>Have Questions?</h1>

            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email or Phone" />
                <textarea placeholder="Message"></textarea>
            </form>
        </ContactWrap>
    )
}

export default Contact;