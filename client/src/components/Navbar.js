import React,{useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {addStorage, removeStorage} from '../actions/storageAction';
import {removeUser,addUser} from "../actions/authAction";

const Navbar = ({isStored,removeStorage,addStorage,removeUser,addUser}) => {
    if(localStorage.getItem('token')){
        console.log(localStorage.getItem('token'));
        addStorage();
        addUser(localStorage.getItem('userName'));
    }
    const logOutHandler = e =>{
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        removeUser();
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

export default connect(mapStateToProps,{removeStorage,addStorage,removeUser,addUser})(Navbar);
