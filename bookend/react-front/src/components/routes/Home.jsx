import React, { useState } from 'react'
import Login from "../features/Login";
import SignUp from '../features/Signup';
import NavBar from '../../NavBar';
import './Home.css';
import './Navbar.css'; 


function Home() {
    const [account, NoAccount] = useState(true)

    return (
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
            <div className="home">
                <div>
                    <h3>
                        We have X amount of users and have hosted X amount of clubs.
                    </h3>
                </div>
                <div>
                    <h3>
                        Unsure what to read?
                    </h3>
                </div>
                <div>
                    <h3>
                        Featured Books
                    </h3>
                </div>
                </div>
                {/* <div className="homelogindiv">
                    <button onClick={() => NoAccount(prev => !prev)}>Login / Sign Up</button>        
                    { 
                        account ? 
                            <Login />
                                :
                            <SignUp />
                    }
                </div> */}
        </div>
    
    );
}

export default Home;