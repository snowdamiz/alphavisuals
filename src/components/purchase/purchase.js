import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { PurchaseWrap } from './purchaseStyles';
import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../history';

toast.configure();

function Purchase () {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [shoot, setShoot] = useState(null);
    const [photographer, setPhotographer] = useState(null);
    const [comment, setComment] = useState(null);
    const [price, setPrice] = useState(0);
    const [time, setTime] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const handleName = (e) => setName(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleTime = (e) => setTime(e.target.value);
    const handlePhotographer = (e) => setPhotographer(e.target.value);
    const handleComment = (e) => setComment(e.target.value);

    const handleShoot = (e) => {
        setShoot(e.target.value);
        if (e.target.value === "minirdmshoot") setPrice(30)
        if (e.target.value === "singlecarstills") setPrice(60)
        if (e.target.value === "rollingshots") setPrice(100) 
        if (e.target.value === "singleportraits") setPrice(100) 
        if (e.target.value === "couplesshoot") setPrice(100) 
        if (e.target.value === "engagementshoot") setPrice(150) 
        if (e.target.value === "carprofileshoot") setPrice(100) 
        if (e.target.value === "carclubshoot") setPrice(100) 
    }

    async function handleToken (token) {
        let product = {
            name: name,
            phone: phone,
            email: email,
            shoot: shoot,
            photographer: photographer,
            comment: comment,
            price: price,
            time: time
        }

        const response = await Axios.post('http://localhost:5000/checkout', {
            token,
            product
        });

        const { status } = response.data;
        if (status === "success") {
            toast('Success! Check email for details', { type: 'success' })
            history.push('/');
        } else {
            toast('Something went wrong', { type: 'error' })
        }
    }

    return (
        <PurchaseWrap>
            <div className="purchaseInner">
                <h1>Set Your Appointment</h1>
                <div className="form">
                    <input type="text" placeholder="Name" onChange={handleName}/>
                    <input type="text" placeholder="Email Address" onChange={handleEmail} />
                    <input type="text" placeholder="Phone Number" onChange={handlePhone} />
                    <input type="text" placeholder="Preferred Time" onChange={handleTime} />
                    <select name="photographers" onClick={handlePhotographer}>
                        <option value="pickaphotographer">Pick a photographer</option>
                        <option value="bryan">Bryan</option>
                        <option value="chris">chris</option>
                        <option value="Casey">Casey</option>
                    </select>
                    <select name="typeofshoot" onClick={handleShoot}>
                        <option value="picktypeofshoot">Choose a photoshoot</option>
                        <option value="minirdmshoot">Mini RDM Shoot</option>
                        <option value="singlecarstills">Single Car Stills</option>
                        <option value="rollingshots">Rolling Shots</option>
                        <option value="singleportraits">Single Portraits/Modeling</option>
                        <option value="couplesshoot">Couples Photoshoot</option>
                        <option value="engagementshoot">Engagement Shoot</option>
                        <option value="carprofileshoot">Car Profile Shoot</option>
                        <option value="carclubshoot">Car Club Shoot</option>
                    </select>
                    <textarea type="text" onChange={handleComment} />
                    <div className="btns">
                        <Link to="/" className="back">Back</Link>
                        <StripeCheckout 
                            stripeKey="pk_test_eEz0rYKkWOWGHnE40nEDEucP00HIFzhAy0"
                            token={handleToken}
                            billingAddress
                            amount={price * 100}
                            name={shoot} />
                        {/* <button>Purchase</button> */}
                    </div>
                </div>
            </div>
        </PurchaseWrap>
    )
}

export default Purchase;