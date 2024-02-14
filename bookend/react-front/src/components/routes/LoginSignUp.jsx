import React from "react";
import Login from "../features/Login";
import SignUp from "../features/Signup";
import NavBar from "../../NavBar";
import './LoginSignUp.css';

function LoginSignup() {
    return(
        <div>
            <header>
                <img src="/images/bookend.jpg" alt="bookendlogo"/>
                <NavBar />
            </header> 
            <hr></hr> 
            <div className="flex-container">
                <div className="flex-child">
                    <div className="login"><Login /></div>
                </div>
                <div className="flex-child">
                    <div className="signupright">
                        <div className="signup"><SignUp /></div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default LoginSignup;