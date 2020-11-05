import React from 'react';
import axios from 'axios';

const LogInForm = () => {

    const logInFormHandler = async(e) =>{
        e.preventDefault();
        const userEmail = e.target.userEmail.value;
        const userPassword = e.target.userPassword.value;
        const body = {userEmail,userPassword};
        const config = {headers:{'Content-Type':'application/json'}};
        try{
            const response = await axios.post('/api/logIn',JSON.stringify(body),config);
            console.log(response);
        }catch(err){
            console.log(err);
        }
        
    }
    return (
        <div className="logInFormContents">
            <p>This is the Log In Form</p>
            <form onSubmit={e => logInFormHandler(e)}>
                <label htmlFor="userEmail">Email: </label>
                <input type="email" id="userEmail" name="userEmail"/>
                <br/><br/>
                <label htmlFor="userPassword">Password:</label>
                <input type="password" id="userPasword" name="userPassword"/>
                <br/><br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default LogInForm;
