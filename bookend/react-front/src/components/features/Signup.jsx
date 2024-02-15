import React from "react";

function SignUp() {
    return(
        <div className="signup">
            <form className="signupform">
            <h4>Don't have an account?</h4>
                <label>Email:</label>
                <input type="text" placeholder="Email" value="Email" />
                <label>Username:</label>
                <input type="text" placeholder="Username" value="Username" />
                <label>Password:</label>
                <input type="text" placeholder="Password" value="Password"/>
                <button type="submit">Sign Up</button>  
            </form>  
        </div>
    )
}

export default SignUp;