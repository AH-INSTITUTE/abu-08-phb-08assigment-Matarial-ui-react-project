import React from 'react';
import './NoMatched.css';
const NotMatched = () => {
    const url = document.location.href;
    return (
        <div className="container">
            <div className="not-matched-style">
                <h1 className=""><span className=""></span> This URL Page Can't Be Found</h1>
                <p><small>No web page was found for the web address : {url}</small></p>
                <br/>
                <p>HTTP ERROR 404</p>
            </div>
        </div>
    );
};

export default NotMatched;