import React from 'react';
import Nimki from '../img/nimki2.JPG';

const Landing = () => {
    return (
        <div className="LandingImageContainer">
          <img className="LandingImage" src={Nimki} alt="nimkibackGround"/>
          <h1>Welcome to Nimki Blogs</h1>
        </div>
    )
}

export default Landing;