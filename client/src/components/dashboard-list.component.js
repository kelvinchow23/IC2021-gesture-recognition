import React, {Component} from 'react';
import {connect} from 'react-redux';


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
                <h3> Hello!</h3>
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