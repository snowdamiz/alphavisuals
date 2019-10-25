import React from 'react';
import { Link } from 'react-router-dom';

import { NavWrap } from './navigationStyles';
import Logo from '../../assets/logo.png';
import fb from '../../assets/fb.svg';
import tw from '../../assets/tw.svg';
import ig from '../../assets/ig.svg';
import pt from '../../assets/pt.svg';

function Navigation() {
    return (
        <>
        <NavWrap>
            <div className="logo">
                <img src={Logo} />
                {/* <div className="socials">
                    <img src={fb} />
                    <img src={ig} />
                    <img src={pt} />
                    <img src={tw} />
                </div> */}
            </div>
            
            <div className="touch_nav">
                <div className="bars">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>Menu</p>
            </div>
            <div className="nav">
                {/* <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Gallery</Link>
                <Link to="/">Contact</Link> */}
            </div>
        </NavWrap>
        </>
    )
}

export default Navigation;