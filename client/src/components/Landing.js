import React from 'react';
import Background from '../img/Landing.jpg';

const Landing = () => {
    return (
        <div className="LandingImageContainer">
          <img className="LandingImage" src={Background} alt="backGround"/>
          <h1>Welcome to Nimki Blogs</h1>
        </div>
    )
}

export default Landing;