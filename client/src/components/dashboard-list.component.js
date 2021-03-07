import React, {Component} from 'react';
import {connect} from 'react-redux';
import Image from 'react-bootstrap/image';
import flourishLogo from './images/flourish-logo-circle-large.png';
import gestureWrist from './images/gesture-wrist.jpg';
import gestureLeg from './images/gesture-leg.jpg';
import tflogo from './images/tensorflow.png';



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
                    <div className='col-1'>
                        <div className='circle'>1</div> 
                    </div>
                    <div className='col-2 nice-text'>CONFIGURE</div>
                    <div className='col-1 offset-1'>
                        <div className='circle'>2</div> 
                    </div>
                    <div className='col-2 nice-text'>TRAIN</div>
                    <div className='col-1 offset-1'>
                        <div className='circle'>3</div> 
                    </div>
                    <div className='col-2 nice-text'>FLOURISH</div>
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
                Further hardware configuration details and firmware upload instructions can be found <a href=''>here</a>. </p>
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