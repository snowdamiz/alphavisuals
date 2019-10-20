import React from 'react';
import { HeaderWrap } from './headerStyles';

import HeaderIMG from '../../assets/header.svg';

function Header() {
    return (
        <HeaderWrap>
            <div className="logoBox">
                <div className="logo">Main logo</div>
                <div className="logo2">L2</div>
                <div className="logo3">L3</div>
            </div>
        </HeaderWrap>
    )
}

export default Header;