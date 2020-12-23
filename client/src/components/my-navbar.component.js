import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import appLogo from './images/mylogo.png';


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
                        width = '25' height = '25'/> flourish
                    </Navbar.Brand>
                </Link>
                <div className='my-nav-separator'>|</div>                
                <div className = "navbar-nav mr-auto" activekey={window.location.pathname}>
                        <Link to ='/training' className="navbar-item nav-link">Training</Link>
                        <div className='my-nav-separator'>|</div>                
                        <Link to ='/stats' className="navbar-item nav-link">Stats</Link>
                        <div className='my-nav-separator'>|</div>                
                        <Link to ='/settings' className="navbar-item nav-link">Settings</Link>
                </div>
                <div className = 'navbar-nav ml-auto'>
                        <Link to ='/login' className="navbar-item nav-link">
                        <Button variant='outline-light'>Login</Button>
                        </Link>
                </div>
             </Navbar>
         )
     }
 }