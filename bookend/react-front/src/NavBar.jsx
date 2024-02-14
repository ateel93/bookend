import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
    <div>
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
                    to="/signup"
                    className="nav-link"
                >
                Signup
                </NavLink>
                <NavLink
                    to="/user"
                    className="nav-link"
                >
                Profile
                </NavLink>
      
            </div>
        </nav>
    </div>
        
    )
}

export default NavBar;