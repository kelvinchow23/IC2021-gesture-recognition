import React, {Component} from 'react';
 import {Link} from 'react-router-dom';

 export default class Navbar extends Component {
     render() {
         return (
             <nav className = "navbar navbar-expand-lg">
                <Link to="/" className ="navbar-brand">Home</Link>
                <div className='collapse navbar-collapse'>
                <ul className = "navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to ='/training' className="nav-link">Training</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ='/stats' className="nav-link">Stats</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to ='/settings' className="nav-link">Settings</Link>
                    </li>
                </ul>
                </div>
             </nav>
         )
     }
 }