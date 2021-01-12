import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import appLogo from './images/mylogo.png';
import {connect} from 'react-redux';
import {updateUserData} from '../actions';


 class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectHome: false
        }
    }

     logout() {
         this.props.updateUserData('','');
         window.location.pathname = '';

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
                {(this.props.userData.username ==='admin') && 
                    <Fragment>
                        <div className='my-nav-separator'>|</div>               
                        <Link to ='/admin' className="navbar-item nav-link">Administrator</Link>
                    </Fragment>
                }
                </div>
                <div className = 'navbar-nav ml-auto'>
                {(this.props.userData.username === '') &&
                    <Fragment>
                    <Link to ='/login' className="navbar-item nav-link">
                        <Button variant='light'>Login</Button>
                    </Link>
                    </Fragment> 
                }
                {
                    (this.props.userData.username !== '') &&
                    <Fragment>
                        <Link to ='/userprofile' className="navbar-item nav-link my-nav-separator">{this.props.userData.username}</Link>
                        <Button variant='outline-light' onClick={this.logout.bind(this)}>Logout</Button>     
                    </Fragment>
                }                        
                </div>
             </Navbar>
         )
     }
 }

 const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

const mapDispatchToProps = () => {
    return {
        updateUserData,
    }
 }

export default connect(mapStateToProps, mapDispatchToProps())(MyNavbar)