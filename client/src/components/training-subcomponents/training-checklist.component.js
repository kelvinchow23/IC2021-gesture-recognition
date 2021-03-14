import React, {Component} from 'react';
import Button from 'react-bootstrap/button';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../../actions';


 class TrainingSettings extends Component {
    checklistGood() {
        this.props.updateTrainingSettings(this.props.trainingSettings.trainingType, 
                                        this.props.trainingSettings.trainingNumber, 
                                        false, true, false, false);
    }

    render() {
        return (
            <div>
                <h3>Welcome to the training portal!</h3>
                <h4>Training Pre-requisites:</h4>
                <ol>
                    <div className='row'>
                        <div className='col-6'>
                            <li>
                                <h4>Do you have your training device?</h4>
                                <p>Please make sure you strap your device to your body part.
                                Please also make sure the device has battery for this training session.</p>
                            </li>
                        </div>
                        <span className='col-6'>Image here</span>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <li>
                                <h4>Do you have your USB dongle device?</h4>
                                <p>Please make sure this device is connected to the USB port of your computer.
                                Please also make sure the device has battery for this training session.</p>
                            </li>
                        </div>
                        <span className='col-6'>Image here</span>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <li>
                                <h4>Is your web browser supported?</h4>
                                <p>This application requires a special feature only available for the Google Chrome web browser.
                                If you are not doing so currently, please open this website from Google Chrome.  
                                Please also enable <a href='chrome://flags/#enable-experimental-web-platform-features'>this flag </a> 
                                to allow this website to receive motion data from your training device.</p>
                            </li>
                        </div>
                        <span className='col-6'>Image here</span>
                    </div>                    
                </ol>
                <p>If you need to obtain a training or USB dongle device, please visit the <a href=''>flourish marketplace</a>.</p>
                <p>If you have all the requirements to begin a training sessions, select the button below to begin!</p>               
                <Button className='btn-primary col-6 offset-3 mb-3' size ='lg' onClick={this.checklistGood.bind(this)}>YES, I AM READY TO TRAIN!</Button>
            </div>
        )
    }
 }

 const mapDispatchToProps = () => {
    return {
        updateTrainingSettings,
    }
 }

const mapStateToProps = (state) => {
    return {
        trainingSettings: state.trainSettings,
    }
}

 export default connect(mapStateToProps, mapDispatchToProps())(TrainingSettings)