import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {removeStorage} from '../actions/storageAction';

const Navbar = ({isStored,removeStorage}) => {
    const logOutHandler = e =>{
        localStorage.removeItem('token');
        removeStorage();
    }
    return (
        <div className="navbarContents">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            {isStored ? (
                <button onClick={e =>logOutHandler(e)}>Log Out</button>
            ) : (
                <div className="navbarContents">
                <NavLink to="/signUp">Sign Up</NavLink>
                <NavLink to="/logIn">Log In</NavLink>
                </div>  
            )}
            
        </div>
    )
}

const mapStateToProps = state =>({
    isStored:state.authReducer.stored
})

export default connect(mapStateToProps,{removeStorage})(Navbar);
