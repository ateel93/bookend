import NavBar from "../../NavBar";
import './Navbar.css';
import { useState, useEffect } from "react"; 
import { useParams, Link } from "react-router-dom";

function People () {

    const params = useParams()

    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('http://127.0.0.1:5000/users') 
        .then(resp => resp.json())
        .then(data => setUsers(data.users))
    }, []);

    return (
        <div>
         <div>
            <div className="nav-flex-container">
                <div className="nav-flex-child">
                    <div className="img">
                        <img className="img" src="/images/bookend.jpg" alt="bookendlogo"/>
                    </div>
                </div>
                    <div className="nav-flex-child">
                        <div className="nav"><NavBar /></div>
                    </div>
                </div>
            <hr></hr>  
        </div> 
            <div className='books-wrapper'>
                <div className='search-wrapper'>
                    <div className='search-bar-div'>
                        <div className="search-container">
                    </div>
                </div>
                </div>
                    <div className='bookcard-container'>
                        
                        <div className="bookcard" >
                            <div className="card-content">
                            <h2>Active Profiles</h2>
                                {users.map(user => (
                                <Link to={`/user/${user.id}`}>
                                <h3 className='helement'>{user.name},<br /> {user.email},<br /></h3>

                                </Link>
                                ))}  
                            </div>
                         
                                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People;