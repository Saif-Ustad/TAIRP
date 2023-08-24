import "./Authentication.scss";
import BigLogo from "../../images/big_logo.svg";

import { useState } from "react";

import {useDispatch, useSelector} from "react-redux";
import { logIn, signUp } from "../../Action/AuthActions";

function Authentication() {

    const [isLogIn, seIsLogIn] = useState(true);
    const [isSignIn, setIsSignIn] = useState(false);
    const [confirmPass, setConfirmPass] = useState(true);

    const dispatch = useDispatch();

    const loading = useSelector((state) => state.authReducer.loading);
    console.log(loading);
    const [data, setData] = useState({firstname:"", lastname:"", username:"", password: "", confirmpassword:""})

    const handlechange = (e)=> {
        setData({...data, [e.target.name]:e.target.value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignIn)
        {
            data.password === data.confirmpassword? dispatch(signUp(data)): setConfirmPass(false); 
        }else{
            dispatch(logIn(data));
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({firstname:"", lastname:"", username:"", password: "", confirmpassword:""});
    }

    return (
        <div className="AuthenticationPage">
            <div className="logo">
                <img src={BigLogo} alt="big-logo" />
            </div>
            <div className="title">
                <span>Social Media</span>
                <span>Explore the idea throughout the world</span>
            </div>

            {isLogIn && <form onSubmit={handleSubmit} ><div className="logIn">

                <h3>Log In</h3>
                <input type="text" name="username" onChange={handlechange} placeholder="Username " />
                <input type="password" name="password" onChange={handlechange} placeholder="Password" />
                <h5 onClick={() => { setIsSignIn(true); seIsLogIn(false); resetForm() }}><u>Don't have an account | Sign up </u></h5>
                <div className="logIn-btn">
                    <button disabled={loading} type="submit">{loading?  "Loading..." : "Log In"}</button>
                </div>

            </div></form>}

            {isSignIn && <form onSubmit={handleSubmit} ><div className="signIn" style={{position:"relative"}}>

                <h3>Sign In</h3>
                <div className="SignIn-Details" >
                    <div className="name">
                        <input type="text" name="firstname" onChange={handlechange} placeholder="First Name" />
                        <input type="text" name="lastname" onChange={handlechange} placeholder="Last Name" />
                    </div>
                    <input className="username" type="text" name="username" onChange={handlechange} placeholder="Username " />
                    <div className="password">
                        <input type="password" name="password" onChange={handlechange} placeholder="Password" />
                        <input type="password" name="confirmpassword" onChange={handlechange} placeholder="Confirm Password" />
                    </div>

                </div>
                <div className="error-message" style={{ display: confirmPass? "none":"block", color: "red", position:"absolute", right:"60px", bottom:"160px"}}>
                    <h4>* Confirm password is not same</h4>
                </div>

                <h5 onClick={() => { setIsSignIn(false); seIsLogIn(true) }} ><u>Already have an account | Log in </u></h5>
                <div className="SignIn-btn">
                    <button disabled={loading} type="submit">{loading?  "Loading..." : "Sign In"}</button>
                </div>


            </div></form>}
        </div>
    )
}

export default Authentication;