import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {addStorage} from "../actions/storageAction";
import {addUser} from "../actions/authAction";
import {withRouter} from 'react-router';

const LogInForm = (props) => {

    const logInFormHandler = async(e) =>{
        e.preventDefault();
        const userName = e.target.userName.value;
        const userPassword = e.target.userPassword.value;
        e.target.userName.value = "";
        e.target.userPassword.value = "";
        const body = {userName,userPassword};
        const config = {headers:{'Content-Type':'application/json'}};
        try{
            const response = await axios.post('/api/logIn',JSON.stringify(body),config);
            console.log(response.data);
            if(response.data.token){
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('userName',userName);
                alert('Log In Sucess');
                // window.location.reload(false);
                props.addStorage();
                props.addUser(userName);
                props.history.push('/');
            }else{
                alert(response.data.msg);
            }
        }catch(err){
            console.log(err);
        }
        
    }
    return (
        <div className="logInFormContents">
            <form onSubmit={e => logInFormHandler(e)}>
                <label htmlFor="userName">User Name: </label>
                <input type="text" id="userName" name="userName"/>
                <br/><br/>
                <label htmlFor="userPassword">Password:</label>
                <input type="password" id="userPasword" name="userPassword"/>
                <br/><br/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}


export default withRouter(connect(null,{addStorage,addUser})(LogInForm));

