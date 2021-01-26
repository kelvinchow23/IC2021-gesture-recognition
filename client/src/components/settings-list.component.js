import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Modal from 'react-bootstrap/Modal';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUserData} from '../actions';

let checkedStatus;

class SettingsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLogin: false,
            counter: 450,
            message: 'Please go to the training tab to acquire training data before requesting a training model.',  // Default message
            currentStatus: '',
            username: '',
            borderColour: 'danger',   // Default is a new user without enough training data
            showWarningModal: false,
            showSuccessAlert: false,
            showWarningAlert: false,
        };
    }

    getTrainingCount() {
        let newMessage;
        axios.get(window.location.origin+'/training/'+this.state.username)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    if (res.data === 0) {
                        newMessage = 'Please go to the training tab to acquire training data before requesting a training model.'
                    } else if (res.data < 450) {
                        newMessage = "Please go to the training tab to acquire more data before requesting a training model.";

                    } else {
                        newMessage = "There is enough data for training.  Please click the REQUEST button to create or updata your personalized model."
                    }
                    console.log(newMessage);
                    this.setState({
                        counter: 450-res.data,
                        message: newMessage
                    }); 
                }
            })
    }

    requestTrainingOptions() {
        if (this.state.currentStatus === 'Model Training Requested') {
            this.setState({showWarningAlert: true});
        } else if (this.state.currentStatus === 'Ready to Request Training') {
            this.requestTraining();         
        } else {
            this.modalOpen();
        }
    }

    requestTraining() {
        const updateUser = {
            status: 'Model Training Requested'
        }
        axios.patch(window.location.origin + '/profile/updateUserStatus/'+ this.state.username, updateUser)
            .then (res => console.log(res.data));
        this.modalClose();
        this.setState({showSuccessAlert: true});
    }

    modalClose() {
        this.setState({showWarningModal: false});
    }

    modalOpen() {
        this.setState({showWarningModal: true});
    }
    
    uploadModel() {
        alert("TODO: Model uploading is currently done through Arduino IDE.  It will be integrated with an OTA upload through this button in a future update (hopefully)");
        /*
        if (this.state.currentStatus === 'Model Ready to Upload') {
            alert('TODO: model upload');
         } else {
            alert('There is no model to upload currently.  Please either collect more data, or request for model training.');
        }
        */
    }

    redirecttoLogin() {
        setTimeout(() => this.setState({redirectLogin: true}), 1500);
    }

    componentDidMount() {
        this.setState({currentStatus: this.props.userData.status,
                        username: this.props.userData.username
        }, () => this.getTrainingCount());
    }

    render() {
        if (this.state.username === '') {
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
                    <Alert show={this.state.showSuccessAlert} variant ='success' onClose = {() => this.setState({showSuccessAlert: false})} dismissible>
                        <Alert.Heading>Request Sent!</Alert.Heading>
                        <p>You will be notified when your training model is ready to be uploaded to your device.
                        Please come back to this settings tab when it is ready.  Thank you for your patience.</p>
                    </Alert>
                    <Alert show={this.state.showWarningAlert} variant ='danger' onClose = {() => this.setState({showWarningAlert: false})} dismissible>
                        <Alert.Heading>Request In Progress!</Alert.Heading>
                        <p>You will be notified when your training model is ready to be uploaded to your device.
                        Please come back to this settings tab when it is ready.  Thank you for your patience.</p>
                    </Alert>
                    <h3 className= 'mb-5'>Settings</h3>
                    <CardGroup className = 'mb-5'>
                        <Card variant = {this.state.borderColour}>
                            <Card.Header>Training Status</Card.Header>
                            <Card.Title>{this.state.currentStatus}</Card.Title>
                            <Card.Body>
                                <p>{this.state.message}</p>
                                <p>Recommended data reps to go: <strong>{this.state.counter}</strong></p>
                                <p>Approx. training time left: <strong>{(this.state.counter/12).toFixed(1)} min</strong></p>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Request A Training Model</Card.Header>
                            <Card.Body>
                                    <div className = 'mb-4'>
                                        <Button variant = {this.state.borderColour} className = 'col-10 offset-1' 
                                            onClick = {this.requestTrainingOptions.bind(this)}>REQUEST TRAINING</Button>   
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
                    <Modal show = {this.state.showWarningModal} handleClose = {this.modalClose.bind(this)}>
                        <Modal.Header>
                            <Modal.Title>Warning</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            It is suggested that you collect more gesture data first to get a more accurate model. 
                        </Modal.Body>
                        <Modal.Footer>                            
                            <Button variant = 'primary' onClick = {this.requestTraining.bind(this)} >Request Anyways</Button>
                            <Button variant='danger' onClick = {this.modalClose.bind(this)}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>

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