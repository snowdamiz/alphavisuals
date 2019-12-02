import React from 'react';
import { Link } from 'react-router-dom';
import { BlackFridayWrap } from './blackFridayStyles';

function BlackFriday () {
    return (
        <BlackFridayWrap id="services">
            <h1>Black Friday Prices!</h1>
            <Link to="/appointment" className="scheduleBtn"> Schedule</Link>
        </BlackFridayWrap>
    )
}

export default BlackFriday;