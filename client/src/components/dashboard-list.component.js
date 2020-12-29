import React, {Component} from 'react';
import {connect} from 'react-redux';


 class DashboardList extends Component {
    render() {
        return (
            <div>
                <h3>Hello {this.props.someData.name}</h3>
                <p>Hello! Welcome to flourish portal.  Please login to start.</p>
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