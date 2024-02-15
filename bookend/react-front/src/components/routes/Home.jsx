import React, { useEffect, useState } from 'react'
import Login from "../features/Login";
import SignUp from '../features/Signup';
import NavBar from '../../NavBar';
import './Home.css';
import './Navbar.css'; 




function Home() {

    const [allUsers, setAllUsers] = useState([])
    const [allClubs, setAllClubs] = useState([])
    const [allBooks, setAllBooks] = useState([])


    useEffect(() => {
        fetch('http://127.0.0.1:5000/users') 
        .then(resp => resp.json())
        .then(data => setAllUsers(data.users))
    }, []);

    

    useEffect(() => {
        fetch('http://127.0.0.1:5000/clubs') 
        .then(resp => resp.json())
        .then(data => setAllClubs(data.clubs))
    }, []);

    console.log(allClubs)





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
                        We have {allUsers.length} users and have hosted {allClubs.length} book-clubs.
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