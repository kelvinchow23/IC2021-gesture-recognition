import React, {Component} from 'react';
import {connect} from 'react-redux';
import Image from 'react-bootstrap/image';
import Button from 'react-bootstrap/button';
import Card from 'react-bootstrap/card';
import Alert from 'react-bootstrap/Alert';
import {Link} from 'react-router-dom';
import flourishLogo from './images/flourish-logo-circle-large.png';
import personOutline from './images/person-outline-2.png';
import trainingGif from './images/trainingStickFigure.gif';
import flourishGif from './images/flourishDemo.gif';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

 class DashboardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    componentDidMount() {
        if (this.props.userData.name !== '') {
            this.setState({loggedIn: true});
        }
    }

    render() {
        return (
            <div>  
                <Alert show={this.state.loggedIn} variant ='success' onClose = {() => this.setState({loggedIn: false})} dismissible>
                        <Alert.Heading>Hello {this.props.userData.name}!</Alert.Heading>
                        <p>Welcome to the flourish web portal.  Please select the training tab to start today's training session!</p>
                </Alert>
                <h3>Welcome to the Flourish Portal!</h3>
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
                <div className='row mb-3'>
                    <div className='col-4'>
                        <div className='circle mb-2'>1
                            <span className='faux-white-text'>__</span>
                            <span className='colourful'>CONFIGURE</span>
                            <span className='faux-white-text'>__</span>
                            <span className='colourful'>➤</span>
                        </div>
                        <div className='custom-border'>
                            <Card className='person-container mb-2'>
                                <Card.Img src={personOutline} alt='person outline' />
                                <Card.ImgOverlay>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popver-head'>
                                                                    <Popover.Title as ='h3'>Head</Popover.Title>
                                                                    <Popover.Content>limited functionality very visible</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-head'>⦿</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popover-trunk'>
                                                                  <Popover.Title as ='h3'>Trunk</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-trunk'>⦿</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popover-shoulder'>
                                                                  <Popover.Title as ='h3'>Shoulder</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-shoulder'>⦿</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popover-arm'>
                                                                  <Popover.Title as ='h3'>Arm</Popover.Title>
                                                                    <Popover.Content>Best choice, most functionality.</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-arm'>⦿</div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popover-hand'>
                                                                  <Popover.Title as ='h3'>Hand</Popover.Title>
                                                                    <Popover.Content>Good choice.</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-hand'>⦿</div>
                                </OverlayTrigger> 
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popover-hip'>
                                                                  <Popover.Title as ='h3'>Hip</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-hip'>⦿</div>
                                </OverlayTrigger>  
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popover-leg'>
                                                                  <Popover.Title as ='h3'>Leg</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-leg'>⦿</div>
                                </OverlayTrigger>  
                                <OverlayTrigger placement='right' overlay={
                                                                  <Popover id='popover-foot'>
                                                                  <Popover.Title as ='h3'>Foot</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >
                                    <div className='dot dot-foot'>⦿</div>
                                </OverlayTrigger>  
                                <OverlayTrigger placement='left' overlay={
                                                                  <Popover id='popover-computer'>
                                                                  <Popover.Title as ='h3'>Smart Electronics</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >                                    
                                <div className='dot dot-computer'></div>
                                </OverlayTrigger>
                                <OverlayTrigger placement='left' overlay={
                                                                  <Popover id='popover-message'>
                                                                  <Popover.Title as ='h3'>Messaging and Communication</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >                                    
                                <div className='dot dot-message'></div>
                                </OverlayTrigger>   
                                <OverlayTrigger placement='left' overlay={
                                                                  <Popover id='popover-gaming'>
                                                                  <Popover.Title as ='h3'>Gaming and Rehabilitation</Popover.Title>
                                                                    <Popover.Content>...</Popover.Content>
                                                                  </Popover>}
                                >                                    
                                <div className='dot dot-gaming'></div>
                                </OverlayTrigger>                                                                 
                                </Card.ImgOverlay>
                            </Card>  
                            <p className='mb-4'>Hover over the pictures/dots for different possible configurations and uses of flourish. </p>  
                            <div className='row mb-2'>
                                <div className='col-6'>
                                    <strong>Not sure what you need to start?</strong>
                                </div>
                                <Link to ='/marketplace'><Button variant='primary'>MARKETPLACE</Button></Link>
                            </div>  
                            <div className='row'>
                                <div className='col-6'>
                                    <strong>Do you already have a device?</strong>
                                </div>
                                <Link to ='/settings'><Button variant='primary' >GET SETUP!</Button></Link>
                            </div> 
                        </div>                   
                    </div>
                    <div className='col-4'>
                        <div className='circle mb-2'>2
                            <span className='faux-white-text'>_____</span>
                            <span className='colourful'>TRAIN</span>
                            <span className='faux-white-text'>___</span>
                            <span className='colourful'>➤</span>
                        </div>
                        <div className='custom-border'>
                        <Image src={trainingGif} height='325rem' className='mb-2'/>
                        <p>With your device and application planned, the next step is to practice 
                        making gestures in this training portal.  Ready to begin?</p>    
                        <Link to ='/training'><Button variant='primary' className='col-8 offset-2'>LET'S TRAIN!</Button></Link>
                        </div>              
                    </div>
                    <div className='col-4'>
                        <div className='circle mb-2'>3
                            <span className='faux-white-text'>____</span>
                            <span className='colourful'>FLOURISH</span>
                            <span className='faux-white-text'>___</span>
                            <span className='faux-white-text'>➤</span>
                        </div>
                        <div className='custom-border'>
                        <Image src={flourishGif} rounded height='325rem' className='mb-4'/>
                        <p>After training, we will prepare a personalized software update so that
                        your device can be used to interact with digital devices using your unique gestures.</p>    
                        </div>                  

                    </div>
                </div>                
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