import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbarContents">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/signUp">Sign Up</NavLink>
            <NavLink to="/logIn">Log In</NavLink>
        </div>
    )
}

export default Navbar;
