import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {connect} from 'react-redux';
import {updateUserData} from '../actions';


 class LoginList extends Component {
     constructor(props) {
         super(props);
         this.state = {
             username: '',
             password: '',
             redirectHome: false,
         }
     }
     onSubmit(e) {
         e.preventDefault();
         const newLogin = {
            username: this.state.username,
            password: this.state.password,
        };
        axios.post(window.location.origin + '/profile/validatelogin', newLogin)
           .then(res => { 
               this.props.updateUserData(res.data.name, res.data.username, res.data.status); 
               if (res.data.username === undefined) {
                <Alert>
                        <Alert.Heading>Hello {this.props.userData.name}!</Alert.Heading>
                        <p>Welcome to the flourish web portal.  Please select the training tab to start today's training session!</p>
                </Alert>
                   alert('User not found.  Please check user info and try again or signup as a new user.')
               } else {
                this.setState({redirectHome: true});
               }
            }); 
    }

    changeUsername(e) {
        this.setState({username: e.target.value});
    }
    
    changePassword(e) {
        this.setState({password: e.target.value});
    }
    render() {
        if (this.state.redirectHome) {
            return <Redirect to='/' />
        } else {
            return (
                <div>
                    <Modal.Dialog>
                    <Modal.Header className='background-primary'>
                        <Modal.Title className ='my-light-text'>Login</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.onSubmit.bind(this)}>
                    <Modal.Body>
                        <div className='row mt-3 mb-2'>
                            <label className='col-4'>Username: </label>
                            <input className='col-5' type='text' required
                            value = {this.state.username} onChange={this.changeUsername.bind(this)}/>
                        </div>

                        <div className='row mb-5'>
                            <label className='col-4'>Password:</label>
                            <input className='col-5' type='password' required
                            value = {this.state.password} onChange = {this.changePassword.bind(this)}/>
                        </div>
                        <p><i>For testing, use username: <b>testuser</b>, password: <b>testuser</b>.</i></p>
                        <p><i>For administrator, use username: <b>admin</b>, password: <b>admin</b>.</i></p>
                    </Modal.Body>

                    <Modal.Footer>
                        <input type='submit' className='btn btn-primary' value='Login' />
                        <Link to ='/signup'><Button variant='secondary'>New user?</Button></Link>
                    </Modal.Footer>
                    </form>
                    </Modal.Dialog>  

                </div>
            )
        }
    }
 }

 const mapDispatchToProps = () => {
    return {
        updateUserData,
    }
 }

 export default connect(null, mapDispatchToProps())(LoginList)