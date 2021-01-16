import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUserData} from '../actions';

let checkedStatus;

class SettingsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLogin: false,
            trainingCount: 0,
            counter: 1000,
            message: '',
            currentStatus: '',
            borderColour: 'danger'   // Default is a new user without enough training data
        };
    }

    getTrainingCount(username) {
        axios.get(window.location.origin+'/training/'+username)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    this.setState({
                        trainingCount : res.data,
                        counter: 1000-res.data
                    }, () => this.checkStatus()); 
                } else {
                    // No logs found so this is a new user.  Show default empty view 
                }
            })
    }

    checkStatus() {
        let newMessage;
        if (this.state.currentStatus !== 'Requested Training') {
            // Check if we need to update the status
            if (this.state.trainingCount === 0) {
                checkedStatus = 'New User Profile Created';
                newMessage = 'Please go to the training tab to acquire training before requesting a training model.'
            } else if (this.state.trainingCount < 1000) {
                checkedStatus = 'Not Enough Data For Training';                
                newMessage = "Please go to the training tab to acquire more data before requestion a training model.";

            } else {
                checkedStatus = 'Ready to Request Training';
                newMessage = 'Ready to request a training model.  Please click the REQUEST button below to initiate process.';
            }


            // Update the current status if necessary
            if (checkedStatus !== this.state.currentStatus) {
                console.log('updated status');
                this.setState({currentStatus: checkedStatus});
                this.props.updateUserData(this.props.userData.name, this.props.userData.username, checkedStatus);
                // axios patch status
            }
        } else {
            newMessage ='Training request has been received.  When the model is ready, you will be notified to return back here to initiate the upload process.';
        }
        this.setState({message: newMessage});

    }

    requestTraining() {
        if (this.state.currentStatus === 'Training Requested') {
            alert('Training has already been requested.  You will be notified when the model is ready.  Thank you.');
        } else if (this.state.currentStatus === 'Ready to Request Training') {
            alert('Training has been requested! You will be notified when the model is ready. Thank you for your patience');
        } else {
            alert('TODO: Warning message for not enough training, modal to continue anyway');
        }
    }

    
    uploadModel() {
        if (this.state.currentStatus === 'Training Requested') {
            alert('Training has already been requested.  You will be notified when the model is ready.  Thank you.');
        } else if (this.state.currentStatus === 'Ready to Request Training') {
            alert('Training has been requested! You will be notified when the model is ready. Thank you for your patience');
        } else {
            alert('TODO: Warning message for not enough training, modal to continue anyway');
        }
    }

    redirecttoLogin() {
        setTimeout(() => this.setState({redirectLogin: true}), 1500);
    }

    componentDidMount() {
        this.setState({currentStatus: this.props.userData.status}, () => this.getTrainingCount(this.props.userData.username));
    }

    render() {
        if (this.props.userData.username === '') {
            this.redirecttoLogin();
            return (
                <h4>
                    Please Login First! Redirecting to Login Page...
                    {this.state.redirectLogin && <Redirect to = '/login' />}
                </h4>
            )
            
        } else {
            return (
                <div>
                    <h3 className= 'mb-5'>Settings</h3>
                    <CardGroup className = 'mb-5'>
                        <Card variant = {this.state.borderColour}>
                            <Card.Header>Training Status</Card.Header>
                            <Card.Title>{this.state.currentStatus}</Card.Title>
                            <Card.Body>
                                <p>{this.state.message}</p>
                                <p>Recommended data reps to go: <strong>{this.state.counter}</strong></p>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Request A Training Model</Card.Header>
                            <Card.Body>
                                    <div className = 'mb-4'>
                                        <Button variant = {this.state.borderColour} className = 'col-10 offset-1' 
                                            onClick = {this.requestTraining.bind(this)}>REQUEST TRAINING</Button>   
                                    </div>
                                    Pressing the button will send a request to train a model for using this gesture
                                    control remote.  If the button above is red, you can still request for training, 
                                    but it is more likely to work if you acquire more training data.
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Begin Model Upload</Card.Header>
                            <Card.Body>
                                    <div className = 'mb-4'>
                                        <Button variant = {this.state.borderColour} className = 'col-10 offset-1' 
                                            onClick = {this.uploadModel.bind(this)}>UPLOAD MODEL</Button>   
                                    </div>
                                    If the button above is disabled, you need to first request to train a model and/or
                                    you need to acquire more training data first.  Pressing this button will begin uploading
                                    the model onto your gesture control device.  Please make sure the gesture control is nearby.                                                                   
                            </Card.Body>
                        </Card>
                    </CardGroup>

                    <h5>
                    TODO: configurations for output controls (i.e. different smart devices, different keyboard hotkeys, etc.),
                    add options for custom defined training sets instead of just alphabet, integrate web app to do OTA updates to gesture device.
                    </h5>                 
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

 const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(SettingsList)