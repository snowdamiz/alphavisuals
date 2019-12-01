import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PurchaseWrap } from './purchaseStyles';

function Purchase () {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [shoot, setShoot] = useState(null);
    const [photographer, setPhotographer] = useState(null);
    const [comment, setComment] = useState(null);

    const handleName = (e) => setName(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleShoot = (e) => setShoot(e.target.value);
    const handlePhotographer = (e) => setPhotographer(e.target.value);
    const handleComment = (e) => setComment(e.target.value);

    return (
        <PurchaseWrap>
            <div className="purchaseInner">
                <h1>Set Your Appointment</h1>
                <div className="form">
                    <input type="text" placeholder="Name" onChange={handleName}/>
                    <input type="text" placeholder="Email Address" onChange={handleEmail} />
                    <input type="text" placeholder="Phone Number" onChange={handlePhone} />
                    <select name="photographers" onClick={handlePhotographer}>
                        <option value="pickaphotographer">Pick a photographer</option>
                        <option value="bryan">Bryan</option>
                        <option value="chris">chris</option>
                        <option value="Casey">Casey</option>
                    </select>
                    <select name="typeofshoot" onClick={handleShoot}>
                        <option value="picktypeofshoot">Choose a photoshoot</option>
                        <option value="carphotos">Car Photos</option>
                        <option value="rollingshots">Rolling Shots</option>
                        <option value="couplesshoot">Couples Shoot</option>
                        <option value="engagementshoot">Engagement Shoot</option>
                        <option value="rdmminishoot">RDM Mini Shoot</option>
                        <option value="carprofile">Car Profile</option>
                    </select>
                    <textarea type="text" onChange={handleComment} />
                    <div className="btns">
                        <Link to="/" className="back">Back</Link>
                        {/* <button>Purchase</button> */}
                    </div>
                </div>
            </div>
        </PurchaseWrap>
    )
}

export default Purchase;