import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';


export default props => (
    <div>
        <h1 className="center">Fire chat</h1>
        <div className="home-container">
            <Link to="/set-name" className="btn btn-large red darken">Start chat</Link>
        </div>
    </div>
)