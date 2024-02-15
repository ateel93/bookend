import React from 'react'
import Bookclub from '../features/Bookclub';
import NavBar from '../../NavBar';
import './User.css';
import './Navbar.css';  
import {useState, useEffect} from 'react';

function User() {

    const [userId, setUserId] = useState([])

    const [userClubs, setUserClubs] = useState([])

    const [userRead, setUserRead] = useState([])

    const [read, setRead] = useState(true)

    const [deleted, setDeleted] = useState(true)

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users/${user.id}')
        .then(resp => resp.json())
        .then(data => setUserId(data))
    }, []);

    console.log(userId)

    useEffect(() => {
        fetch('http://127.0.0.1:5000/clubs/${user.id}')
        .then(resp => resp.json())
        .then(data => setUserClubs(data) )
    }, []);

    console.log(userClubs)

    useEffect(() => {
        fetch('http://127.0.0.1:5000/books/${user.id}')
        .then(resp => resp.json())
        .then(data => setUserRead(data))
    }, []);

    console.log(userRead)


    
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
                    <h4>About the worm</h4>
                    
                    <h4>My Clubs</h4>
                    <h4>Books on my list</h4>
                <button type="click" onClick={() => setRead(prev => !prev)}>{read ? "Read" : "Return"} </button> 
                    <h4>Books i've read</h4>
                <button type="click" onClick={() => setDeleted(prev => !prev)}>{deleted ? "Delete Book" : "Book Deleted"} </button> 

                </div>
            </div>
            {/* <div>
                <button  id="darkMode" onClick={ (e) => {document.querySelector('body').classList.toggle('darkMode')}}>Reading Mode</button>
            </div> */}
        </div>
    
    );
}

export default User;