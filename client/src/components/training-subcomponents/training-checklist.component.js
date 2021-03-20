import React, {Component} from 'react';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../../actions';
import gestureDevice from '../images/gesture device.png';
import usbDongle from '../images/usb dongle.png';
import enableFlagURL from '../images/enableFlag.png';




 class TrainingSettings extends Component {
    checklistGood() {
        this.props.updateTrainingSettings(this.props.trainingSettings.trainingType, 
                                        this.props.trainingSettings.trainingNumber, 
                                        false, true, false, false);
    }

    render() {
        return (
            <div>
                <h3>Training Pre-requisites:</h3>
                <ol>
                    <div className='row mb-4'>
                        <div className='col-7'>
                                <h4 className='mb-4'><li>Wearable Gesture Device</li></h4>
                                <p>If you do not have a gesture device, please visit our marketplace
                                to buy one.</p>
                                <p>Please make sure during the training session that you securely strap your device to your body.
                                Please also make sure the device is charged for this training session.</p>
                        </div>
                        <Image className='col-5' src={gestureDevice} alt ='Gesture Device' fluid/>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-7'>
                                <h4 className='mb-4'><li>USB Dongle</li></h4>
                                <p>Please also visit the marketplace to purchase a USB dongle if you do not already have one before training.</p>
                                <p>Please ensure this dongle is connected to your computer's USB port with a USB-C cable.  Please
                                refrain from disconnecting the dongle during training.</p>
                        </div>
                        <Image className='col-3 offset-1' src={usbDongle} alt ='USB Dongle' fluid/>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-6'>
                                <h4 className='mb-4'><li>Web Browser Support</li></h4>
                                <p>This application requires a feature only available for the Google Chrome web browser.
                                If you are not doing so currently, please open this web application from Google Chrome.  Please 
                                copy and paste <strong>chrome://flags/#enable-experimental-web-platform-features</strong> into 
                                the web browser address bar and enable the Expermental Web Platform features flag to allow 
                                this website to communicate with your gesture device.</p>
                        </div>
                        <Image className='col-6' src={enableFlagURL} alt ='Enable Flag' fluid/>
                    </div>        
                </ol>

                <p>Once you have all the requirements to begin a training sessions, select the button below to begin!</p>               
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