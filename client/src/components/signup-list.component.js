import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {updateUserData} from '../actions';

class SignupsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            usernameWarning: '',
            emailWarning: '',
            passwordWarning: '',
            redirectHome: false,
        }
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            const newSignup = {
                name: this.state.name,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                status: 'New User Profile Created'
            };            
            axios.post(window.location.origin + '/profile', newSignup)
                .then(res => {
                    console.log(res.data);
                    this.props.updateUserData(this.state.name, this.state.username, 'New User Profile Created');  
                    this.setState({redirectHome: true});
                }); 
        } else {
            alert('Please review warning messages and try again.');
        }

   }

   changeName(e) {
       this.setState({name: e.target.value});
   }

   changeUsername(e) {
       this.setState({username: e.target.value});
   }

   changeEmail(e) {
    this.setState({email: e.target.value});
    } 

    changePassword(e) {
        this.setState({password: e.target.value}, () => {
            this.checkPassword();
        });
    }

    changeConfirmPassword(e) {
        this.setState({confirmPassword: e.target.value}, () => {
            this.checkPassword();
        });
    }

    checkUsername() {
        if (this.state.username !== '') {
            axios.get(window.location.origin + '/profile/checkuser/' + this.state.username)
            .then(res => {
                if (res.data) {
                    this.setState({usernameWarning: 'User exists!'});
                } else {
                    this.setState({usernameWarning: ''});
                }
            });
        }
        
    }
    
    checkEmail() {
        if (this.state.checkEmail !== '') {
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!this.state.email.match(mailformat)) {
                this.setState({emailWarning: 'Invalid email'});
            } else {
                axios.get(window.location.origin + '/profile/checkemail/' + this.state.email)
                .then( res => {
                    if (res.data) {
                        this.setState({emailWarning: 'Email exists!'});
                    } else {
                        this.setState({emailWarning: ''});
                    }
                });
            }
        }        
    } 
    
    checkPassword() {
        if (this.state.password !== this.state.confirmPassword &&
            this.state.confirmPassword !== '') {
            this.setState({passwordWarning: 'Mismatch'})
            } else {
            this.setState({passwordWarning: ''});
        }       
    }

    
   validateForm() { 
    this.checkUsername();       //FIX THIS LATER. async, something not working here
    this.checkEmail();
    this.checkPassword();
    console.log(this.state.usernameWarning+this.state.emailWarning+this.state.passwordWarning);
        if (this.state.usernameWarning+this.state.emailWarning+this.state.passwordWarning === '') {
            return true;
        } else {return false}
    }

    render() {
        if (this.state.redirectHome) {
            return <Redirect to='/' />
        } else {
            return (           
                <Modal.Dialog>
                <Modal.Header className='background-primary'>
                    <Modal.Title className='my-light-text'>Sign up</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.onSubmit.bind(this)}>
                <Modal.Body>
                    <div className='row mt-3 mb-2'>
                        <label className='col-4'>Name: </label>
                        <input className='col-5' type='text' required
                        onChange= {this.changeName.bind(this)} />
                    </div>
                    <div className='row mt-3 mb-2'>
                        <label className='col-4'>Username: </label>
                        <input className='col-5' type='text' required
                        onChange= {this.changeUsername.bind(this)}
                        onBlur= {this.checkUsername.bind(this)}/>
                        <div className='col-3 red-text'>{this.state.usernameWarning}</div>
                    </div>
                    <div className='row mb-2'>
                        <label className='col-4'>Email: </label>
                        <input className='col-5' type='text' required
                        onChange= {this.changeEmail.bind(this)}
                        onBlur= {this.checkEmail.bind(this)}/>
                        <div className='col-3 red-text'>{this.state.emailWarning}</div>
                    </div>

                    <div className='row mb-2'>
                        <label className='col-4'>Password:</label>
                        <input className='col-5' type='password' required
                        onChange= {this.changePassword.bind(this)}/>
                        <div className='col-3 red-text'>{this.state.passwordWarning}</div>

                    </div>                    
                    <div className='row mb-5'>
                        <label className='col-4'>Confirm Password:</label>
                        <input className='col-5' type='password'  required
                        onChange= {this.changeConfirmPassword.bind(this)} />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <input type='submit' className='btn btn-primary' value='Sign-up' />
                    <Link to ='/login'><Button variant='secondary'>Returning User?</Button></Link>
                </Modal.Footer>
                </form>
                </Modal.Dialog>  
            )
        }        
    }
 }

 const mapDispatchToProps = () => {
    return {
        updateUserData,
    }
 }

 export default connect(null, mapDispatchToProps())(SignupsList)