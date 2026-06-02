import React from 'react'
import '../css/NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='navBar'>
                <div className="navbar-brand">
                    <Link to="/">Movie App</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/favourites" className='nav-link'>Favorites</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar