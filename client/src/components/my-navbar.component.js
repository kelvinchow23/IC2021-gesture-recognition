import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import appLogo from './mylogo.png';

 export default class MyNavbar extends Component {
     sayHello() {
         alert('TODO Sign-in module');
     }
     render() {
         return (
             <Navbar className='my-navbar mb-2' bg='dark' variant='dark'>
                <Link to="/">
                    <Navbar.Brand><img 
                        alt = 'App Logo'
                        src ={appLogo}
                        width = '25' height = '25'/> Gesture App
                    </Navbar.Brand>
                </Link>
                <div className = "navbar-nav mr-auto" activekey={window.location.pathname}>
                        <Link to ='/instructions' className="navbar-item nav-link">Getting Started</Link>
                        <Link to ='/training' className="navbar-item nav-link">Training</Link>
                        <Link to ='/stats' className="navbar-item nav-link">Stats</Link>
                        <Link to ='/settings' className="navbar-item nav-link">Settings</Link>
                </div>
                <div className = 'navbar-nav ml-auto'>
                        <Button className='navbar-item navbar-link'
                        variant='outline-dark' onClick={this.sayHello}>Sign-in</Button>
                </div>
             </Navbar>
         )

     }
 }