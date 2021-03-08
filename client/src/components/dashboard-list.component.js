import React, {Component} from 'react';
import {connect} from 'react-redux';
import Image from 'react-bootstrap/image';
import Card from 'react-bootstrap/card';
import flourishLogo from './images/flourish-logo-circle-large.png';
import gestureWrist from './images/gesture-wrist.jpg';
import gestureLeg from './images/gesture-leg.jpg';
import tflogo from './images/tensorflow.png';
import personOutline from './images/person-outline-2.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

 class DashboardList extends Component {
    render() {
        if (this.props.userData.name !== '') {
            return(
                <div>
                    <h3>Hello {this.props.userData.name}!</h3>
                    <p> Please select the training tab to begin a training session.</p>
                    <p> For other settings such as requesting a new training model or uploading firmware to your device, please go to the training tab.</p>
                    <p> For further information, please visit here </p>
                    <p> To see the Getting Started instructions, please click here.</p>
                </div>                
            )
        }
        return (
            <div>  
                <div className='row'>
                    <div className='col-9'>
                        <h2> flour•ish <i>(noun)</i></h2>
                        <ol>
                            <li>a bold or extravagant gesture or action, made especially to attract the attention of others.</li>
                            <li>an instance of suddenly performing or developing in an impressively successful way.</li>
                            <li><b>an adaptive gesture control device to democratize digital accessibility for the cerebral palsy community.</b></li>
                        </ol>
                    </div>
                    <div className='col-2 offset-1'>
                        <Image src={flourishLogo} fluid/>
                    </div>
                </div>     
                <h3>The Process</h3>
                <div className='row mb-5'>
                    <div className='col-4'>
                        <div className='circle'>1
                            <span className='faux-white-text'>__</span>
                            <span className='colourful'>CONFIGURE</span>
                            <span className='faux-white-text'>____</span>
                            <span className='colourful'>➤</span>
                        </div>
                            <Card className='person-container'>
                                <Card.Img src={personOutline} alt='person outline' />
                                <Card.ImgOverlay>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  HEAD: limited functionality very visible
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-head'>●</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  TRUNK: Big wrap, medium functionality
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-trunk'>●</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  SHOULDER: medium functionality
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-shoulder'>●</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  ARM: optimal choice, low visiblity and high functionality
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-arm'>●</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  HAND: optimal choice, high functionality
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-hand'>●</div>
                                </OverlayTrigger> 
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  HIP: low functionality
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-hip'>●</div>
                                </OverlayTrigger>  
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  LEG: good choice, medium functionality
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-leg'>●</div>
                                </OverlayTrigger>  
                                <OverlayTrigger placement='right' overlay={
                                                                  <Tooltip id='tooltip-head'>
                                                                  FOOT: good choice
                                                                  </Tooltip>}
                                >
                                    <div className='dot dot-foot'>●</div>
                                </OverlayTrigger>                                                                
                                    <div className='dot-computer'></div>
                                </Card.ImgOverlay>
                            </Card>                        
                    </div>
                    <div className='col-3 offset-1'>
                        <div className='circle'>2
                            <span className='faux-white-text'>__</span>
                            <span className='colourful'>TRAIN</span>
                            <span className='faux-white-text'>____</span>
                            <span className='colourful'>➤</span>
                        </div>
                    </div>
                    <div className='col-3 offset-1'>
                        <div className='circle'>3
                            <span className='faux-white-text'>__</span>
                            <span className='colourful'>FLOURISH</span>
                            <span className='faux-white-text'>___</span>
                            <span className='faux-white-text'>➤</span>
                        </div>
                    </div>
                </div>

                <h3>The Technology</h3>

                <div className='row'>
                    <Image src={gestureWrist} className='col-3 offset-1'  rounded/>
                    <Image src={gestureLeg} className='col-2'  rounded/>
                    <Image src={tflogo} className='col-3 offset-2' />              
                </div>
                
                <p>Welcome to flourish portal.  This application allows unique individuals to 
                control electronic devices with custom user-defined gestures.  To use this application,
                you will need two <a href = 'https://www.digikey.com/en/products/detail/m5stack-technology-co-ltd/K016-D/10492136'>M5StickC units</a>. 
               </p>
                <p>Please login to begin.</p>
            </div>
        )
    }
 }

 
const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

 export default connect(mapStateToProps, null)(DashboardList)