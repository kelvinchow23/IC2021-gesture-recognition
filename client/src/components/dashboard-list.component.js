import React, {Component} from 'react';
import {connect} from 'react-redux';


 class DashboardList extends Component {
    render() {
        if (this.props.someData.name !== '') {
            return(
                <div>
                    <h3>Hello {this.props.someData.name}!</h3>
                    <p> Please use the menu bar to navigate to stuff.</p>
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
        someData: state.userData
    }
}

 export default connect(mapStateToProps, null)(DashboardList)