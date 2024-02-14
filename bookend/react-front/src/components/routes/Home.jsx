import React, { useState } from 'react'
import Login from "../features/Login";
import SignUp from '../features/Signup';
import NavBar from '../../NavBar';
import './Home.css';

function Home() {
    const [account, NoAccount] = useState(true)

    return (
        <div>
            <header>
                <img src="/images/bookend.jpg" alt="bookendlogo"/>
                <NavBar />
            </header> 
            <hr></hr>
            <div className="home">
                <div>
                    <h3>
                        Join a club
                    </h3>
                </div>
                <div>
                    <h3>
                        Deciding what to read?
                    </h3>
                </div>
                <div>
                    <h3>
                        Featured Books
                    </h3>
                </div>
                </div>
                <div className="homelogindiv">
                    <button onClick={() => NoAccount(prev => !prev)}>Login / Sign Up</button>        
                    { 
                        account ? 
                            <Login />
                                :
                            <SignUp />
                    }
                </div>
        </div>
    
    );
}

export default Home;