import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';

const SignUpForm = (props) => {

    const signUpFormHandler = async(e) =>{
        e.preventDefault();
        const userName = e.target.userName.value;
        const userPassword = e.target.userPassword.value;
        e.target.userName.value = "";
        e.target.userPassword.value = "";
        const body = {userName,userPassword};
        const config = {headers:{'Content-Type':'application/json'}};
        try{
            const response = await axios.post('/api/signUp',JSON.stringify(body),config);
            console.log(response);
            alert('Sign Up Complete. Please Log In with your information');
            props.history.push('/logIn');
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="signUpFormContents">
            <h2>Sign Up</h2>
            <form onSubmit={e => signUpFormHandler(e)}>
                {/* <label htmlFor="userName">User Name: </label> */}
                <input type="text" id="userName" name="userName" placeholder="User Name...."/>
                <br/><br/>
                {/* <label htmlFor="userPassword">Password:</label> */}
                <input type="password" id="userPasword" name="userPassword" placeholder="Password..."/>
                <br/><br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUpForm);
