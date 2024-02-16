import React from 'react'
import Bookclub from '../features/Bookclub';
import NavBar from '../../NavBar';
import './User.css';
import './Navbar.css';  
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function User() {

    const [user, setUser] = useState([])

    const [userClubs, setUserClubs] = useState([])

    const [userRead, setUserRead] = useState([])

    const [read, setRead] = useState(true)

    const [deleted, setDeleted] = useState(true)

    const [allUsers, setAllUsers] = useState([])

    const [deleteUser, setDeleteUser] = useState(false)

    // useEffect(() => {
    //     fetch('http://127.0.0.1:5000/users') 
    //     .then(resp => resp.json())
    //     .then(data => setAllUsers(data.users))
    // }, []);

    // console.log(data)

    const params = useParams ()



    useEffect(() => {
        fetch(`http://127.0.0.1:5000/users/${params.id}`)
        .then(resp => resp.json())
        .then(users => setUser(users))
    }, []);

    console.log(user)

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/clubs/${params.user_id}`)
        .then(resp => resp.json())
        .then(clubs => setUserClubs(clubs) )
    }, []);

    console.log(userClubs)

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/books/${params.user_id}`)
        .then(resp => resp.json())
        .then(books => setUserRead(books))
    }, []);

    // console.log(userRead)


    
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
                    <h3>{user.name}</h3>
                    <h3>{user.email}</h3>
                    <br></br>
                <button type="click" onClick={() => setDeleteUser(prev => !prev)}>{deleteUser ? "Are you sure you want to delete?" : "Delete Profile"  } </button>
                    <h4>My Clubs</h4>
                    <h4>Books on my list</h4>
                    {/* {user.bookusers} */}

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