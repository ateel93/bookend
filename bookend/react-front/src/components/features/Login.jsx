import React from 'react';




function Login() {
    return(
        <div className="login">
                <form className='loginform'>
                <h4>Already a member?</h4>
                <label>Username:</label>
                <input type="text" placeholder="Username" value="Email" />
                <label>Password:</label>
                <input type="text" placeholder="Password" value="Password"/>
                <button type="submit">Login</button>   
            </form>     
        </div>

    )
}

export default Login;