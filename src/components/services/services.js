import React from 'react';
import { ServicesWrap } from './servicesStyles';

function Services () {
    return (
        <ServicesWrap>
            <div className="service">
                <div className="service_content">
                    <h1>Car Photos</h1>
                    <div className="line"></div>
                    <p className="description"><span>Description: </span>Edited photos of your vehicle.</p>
                    <p className="location"><span>Locations: </span> One location</p>
                </div>
                <div className="service_cta">

                </div>
            </div>
        </ServicesWrap>
    )
}

export default Services;