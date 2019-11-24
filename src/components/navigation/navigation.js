import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { NavWrap } from './navigationStyles';

function Navigation() {
    const [nav, setNav] = useState(false);

    return (
        <NavWrap id="home">
            <div className="logo"></div>
            <div className="touch_nav" onClick={() => setNav(!nav)}>
                <div className="bars">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>Menu</p>
            </div>

            {nav ? (
            <div className="nav">
                <Link smooth to="/#home">Home</Link>
                <Link smooth to="/#services">Services</Link>
                <Link smooth to="/#ourteam">Our Team</Link>
                <Link smooth to="/#gallery">Gallery</Link>
                <Link smooth to="/#contact">Contact</Link>
            </div>
            ): (
                null
            )}
        </NavWrap>
    )
}

export default Navigation;