import React from 'react'
import Bookclub from '../features/Bookclub';
import NavBar from '../../NavBar';
import './User.css';
import './Navbar.css';  

function User() {
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
            <div className="user-div">
                
                <div className="user">
                    <h3>About the worm</h3>
                    <h3>My Clubs</h3>
                    <Bookclub />
                    <h3>Books on my list</h3>
                    <h3>Books i've read</h3>
                </div>
            </div>
            <div>
                <button  id="darkMode" onClick={ (e) => {document.querySelector('body').classList.toggle('darkMode')}}>Reading Mode</button>
            </div>
        </div>
    
    );
}

export default User;