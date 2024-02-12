import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <div>
                    <img src="react-front/images/bookend.jpg" alt="bookendlogo"/>
        <nav className="navbar">
            <div className="nav-div">
                <NavLink
                    to="/"
                    /* add styling to Navlink */
                    className="nav-link"
                >
                Home
                </NavLink>
                <NavLink
                    to="/books"
                    className="nav-link"
                >
                Books
                </NavLink>
                <NavLink
                    to="/user"
                    className="nav-link"
                >
                Profile
                </NavLink>
      
            </div>
        </nav>
        <button  id="darkMode" onClick={ (e) => {document.querySelector('body').classList.toggle('darkMode')}}>Reading Mode</button>
    </div>
        
    )
}

export default NavBar