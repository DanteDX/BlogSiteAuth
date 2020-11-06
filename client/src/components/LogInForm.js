import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {addStorage} from "../actions/storageAction";
import {withRouter} from 'react-router';

const LogInForm = (props) => {

    const logInFormHandler = async(e) =>{
        e.preventDefault();
        const userEmail = e.target.userEmail.value;
        const userPassword = e.target.userPassword.value;
        const body = {userEmail,userPassword};
        const config = {headers:{'Content-Type':'application/json'}};
        try{
            const response = await axios.post('/api/logIn',JSON.stringify(body),config);
            console.log(response.data);
            if(response.data.token){
                localStorage.setItem('token',response.data.token);
                alert('Log In Sucess');
                // window.location.reload(false);
                props.addStorage();
                props.history.push('/');
            }
        }catch(err){
            console.log(err);
        }
        
    }
    return (
        <div className="logInFormContents">
            <form onSubmit={e => logInFormHandler(e)}>
                <label htmlFor="userEmail">Email: </label>
                <input type="email" id="userEmail" name="userEmail"/>
                <br/><br/>
                <label htmlFor="userPassword">Password:</label>
                <input type="password" id="userPasword" name="userPassword"/>
                <br/><br/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}


export default withRouter(connect(null,{addStorage})(LogInForm));

