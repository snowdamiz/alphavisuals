import React from 'react';
import { Link } from 'react-router-dom';

import { NavWrap } from './navigationStyles';

function Navigation() {
    return (
        <NavWrap>
            {/* <div className="touch_nav">
                <div></div>
                <div></div>
                <div></div>
            </div> */}
            <div className="nav">
                {/* <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Gallery</Link>
                <Link to="/">Contact</Link> */}
            </div>
        </NavWrap>
    )
}

export default Navigation;