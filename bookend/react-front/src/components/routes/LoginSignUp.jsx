import React from "react";
import Login from "../features/Login";
import SignUp from "../features/Signup";
import NavBar from "../../NavBar";
import './LoginSignUp.css';
import './Navbar.css'; 


function LoginSignup() {
    return(
        <div>
            <div>
            <div className="nav-flex-container">
                <div className="nav-flex-child">
                    <div className="img">
                        <img class="img" src="/images/bookend.jpg" alt="bookendlogo"/>
                    </div>
                </div>
                    <div className="nav-flex-child">
                        <div className="nav"><NavBar /></div>
                    </div>
                </div>
            <hr></hr>  
        </div>
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