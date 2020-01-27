import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesWrap } from './servicesStyles';

function Services () {
    return (
        <ServicesWrap id="services">
            <div className="service_sec">
                <div className="service">
                    <div className="service_content">
                        <h1>Mini RDM Shoot</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $30</p>
                        <p className="location"><span>Locations: </span> At or near RDM</p>
                        <p className="description"><span>Description: </span>Up to 10 photos. Must be on Sunday before, or during RDM</p>
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>

                <div className="service">
                    <div className="service_content">
                        <h1>Single Car Stills</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $60</p>
                        <p className="location"><span>Locations: </span> One location</p>
                        <p className="description"><span>Description: </span>Up to 20 photos + 20 per additional location</p>                                    
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>
            </div>


            <div className="service_sec">
                <div className="service">
                    <div className="service_content">
                        <h1>Rolling Shots</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $100</p>
                        <p className="location"><span>Locations: </span> One location</p>
                        <p className="description"><span>Description: </span>Two cars needed. ($50 per car)</p>                                    
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>

                <div className="service">
                    <div className="service_content">
                        <h1>Single Portrait</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $100</p>
                        <p className="location"><span>Locations: </span> Up to two location</p>
                        <p className="description"><span>Description: </span>Up to 20 photos + $5 per additional photo</p>                 
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>
            </div>

            <div className="service_sec">
                <div className="service">
                    <div className="service_content">
                        <h1>Couples Photoshoot</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $100</p>
                        <p className="location"><span>Locations: </span> One location</p>
                        <p className="description"><span>Description: </span>Up to 25 photos + $5 per additional photo</p>
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>

                
                <div className="service">
                    <div className="service_content">
                        <h1>Engagement Shoot</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $150</p>
                        <p className="location"><span>Locations: </span> Up to 2 locations</p>
                        <p className="description"><span>Description: </span>Up to 30 photos</p>                                        
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>
            </div>

            <div className="service_sec">
                <div className="service">
                    <div className="service_content">
                        <h1>Car Profile Shoot</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $100</p>
                        <p className="location"><span>Locations: </span> Location chosen by photographer</p>
                        <p className="description"><span>Description: </span>Up to 25 photos. Usually requested for professional photos for online use</p>                                        
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>

                <div className="service">
                    <div className="service_content">
                        <h1>Car Club Group Shoot</h1>
                        <div className="line"></div>
                        <p className="price" ><span>Price: </span> $100</p>
                        <p className="location"><span>Locations: </span> One location</p>
                        <p className="description"><span>Description: </span> Includes at least one photo of each individual car and the rest are group shots with precise positioning</p>                                        
                    </div>
                    <div className="service_cta">
                        <Link to="/appointment" className="button">Set Appointment</Link>
                    </div>
                </div>
            </div>

            <div className="service_sec">
                <div className="service">
                    <div className="service_content">
                        <h1>Additional Services Inquiry</h1>
                        <div className="line"></div>
                        <p className="price" >Dont see the service you are looking for? For additional service inquiries send us an email at <span>casey@alphavnw.com</span></p>
                     </div>
                </div>
            </div>
        </ServicesWrap>
    )
}

export default Services;