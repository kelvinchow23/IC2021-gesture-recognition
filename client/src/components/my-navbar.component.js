import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import appTextLogo from './images/flourish-text-logo-medium.png';
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
         this.props.updateUserData('','','');
         window.location.pathname = '';

     }

     render() {
         return (
             <Navbar className='my-navbar mb-2'>
                <Link to="/">
                    <Navbar.Brand><img 
                        alt = 'flourish logo'
                        src ={appTextLogo}
                        height = '30' />
                    </Navbar.Brand>
                </Link>
                <div className='my-nav-separator'>|</div>                
                <div className = "navbar-nav mr-auto">
                        <Link to ='/training' className="navbar-item nav-link my-nav-text">Training</Link>
                        <div className='my-nav-separator'>|</div>                              
                        <Link to ='/settings' className="navbar-item nav-link my-nav-text">Settings</Link>
                        <div className='my-nav-separator'>|</div>                              
                        <Link to ='/marketplace' className="navbar-item nav-link my-nav-text">Marketplace</Link>
                        <div className='my-nav-separator'>|</div>                              
                        <Link to ='/community' className="navbar-item nav-link my-nav-text">Community</Link>                
                {(this.props.userData.username ==='admin') && 
                    <Fragment>
                        <div className='my-nav-separator'>|</div>               
                        <Link to ='/admin' className="navbar-item nav-link my-nav-text">Administrator</Link>
                    </Fragment>
                }
                </div>
                <div className = 'navbar-nav ml-auto'>
                {(this.props.userData.username === '') &&
                    <Fragment>
                    <Link to ='/login' className="navbar-item nav-link">
                        <Button variant='dark'  className='btn-primary'>Login</Button>
                    </Link>
                    </Fragment> 
                }
                {
                    (this.props.userData.username !== '') &&
                    <Fragment>
                        <Link to ='/userprofile' className="navbar-item nav-link my-nav-text">{this.props.userData.username}</Link>
                        <Button variant='outline-light' className='my-nav-text' onClick={this.logout.bind(this)}>Logout</Button>     
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