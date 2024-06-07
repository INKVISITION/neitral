import React from 'react';
import { Link } from 'react-router-dom'; 
function WelcomePage() {
    return (
        <div className="welcome-container">
            <h1>Welcome to Our Website</h1>
            <p>We have some interesting programming problems for you!</p>
            <Link to="/problems" className="button">Get Started</Link>
        </div>
    );
}

export default WelcomePage;
