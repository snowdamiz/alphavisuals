import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PurchaseWrap } from './purchaseStyles';
// import StripeCheckout from 'react-stripe-checkout';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../history';

toast.configure();

function Purchase () {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [shoot, setShoot] = useState(null);
    const [photographer, setPhotographer] = useState(null);
    const [comment, setComment] = useState(null);
    const [price, setPrice] = useState(0);
    const [time, setTime] = useState(null);
    const [err, setErr] = useState(null);

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

    function handleSubmit (e) {
        e.preventDefault();

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

        function validate (product) {
            const d = Object.keys(product).map(i => product[i]);
            const name = d[0];
            const phone = d[1];
            const email = d[2];
            const shoot = d[3];
            const time = d[7];

            const regexLetters = /^[a-zA-Z\s]*$/;
            const regexNumbers = /^\d+$/;
            const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (regexLetters.test(name) && name.length > 5) {
                if (regexNumbers.test(phone) && phone.length === 10) {
                    if (regexEmail.test(email) && email.length > 7) {
                        if (shoot) {
                            if (time) {
                                Axios.post("http://localhost:5000/api/send", product);
                                history.push('/');
                                toast('Success! Your Request Has Been Submitted', { type: 'success' });
                            } else setErr("Please Enter Prefered Time")
                        } else setErr("Please Select Type of Shoot")
                    } else setErr("Please Enter Valid Email")
                } else setErr("Please Enter Your Number")
            } else setErr("Please Enter Your Name");
        }

        validate(product);

        // const response = await Axios.post('http://localhost:5000/checkout', { token, product });

        // const { status } = response.data;
        // if (status === "success") {
        //     toast('Success! Check email for details', { type: 'success' })
        //     history.push('/');
        // } else {
        //     toast('Something went wrong', { type: 'error' })
        //     history.push('/');
        // }
    }

    return (
        <PurchaseWrap>
            <div className="purchaseInner">
                <h1>Set Your Appointment</h1>
                <div className="form">
                    {err ? <label>{err}</label> : null}
                    <input type="text" placeholder="Name" onChange={handleName}/>
                    <input type="text" placeholder="Email Address" onChange={handleEmail} />
                    <input type="text" placeholder="Phone Number" onChange={handlePhone} />
                    <input type="text" placeholder="Preferred Time" onChange={handleTime} />
                    <select name="photographers" onClick={handlePhotographer}>
                        <option value="pickaphotographer">Pick a photographer</option>
                        <option value="casey">Casey</option>
                        <option value="bryan">Bryan</option>
                        <option value="chris">Chris</option>
                        <option value="jonny">Jonny</option>
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
                        <button className="submit" onClick={handleSubmit}>Submit</button>
                        {/* <StripeCheckout
                            className="stripeBtn"
                            stripeKey="pk_test_eEz0rYKkWOWGHnE40nEDEucP00HIFzhAy0"
                            token={handleToken}
                            billingAddress
                            amount={price * 100}
                            name={shoot} /> */}
                    </div>
                </div>
            </div>
        </PurchaseWrap>
    )
}

export default Purchase;