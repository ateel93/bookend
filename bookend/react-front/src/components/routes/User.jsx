import React from 'react'
import Bookclub from '../features/Bookclub';
import NavBar from '../../NavBar';
import './User.css';

function User() {
    return (
        <div>
            <header>
                <img src="/images/bookend.jpg" alt="bookendlogo"/>
                <NavBar />
            </header> 
            <hr></hr> 
            <div className="user">
                <div className="user">
                    <h3>About the worm</h3>
                    <h3>favorite genre</h3>
                    <h3>My Clubs</h3>
                    <Bookclub />
                    <h3>Books on my list</h3>
                </div>
            </div>
            <div>
                <button  id="darkMode" onClick={ (e) => {document.querySelector('body').classList.toggle('darkMode')}}>Reading Mode</button>
            </div>
        </div>
    
    );
}

export default User;