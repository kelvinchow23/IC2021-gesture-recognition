import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class SettingsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLogin: false
        };
    }

    redirecttoLogin() {
        setTimeout(() => this.setState({redirectLogin: true}), 1500);
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
                    <h3>TODO:</h3>
                    <p> Status update: required training sets left before training can occur</p>
                    <p>Create button to request for data training</p>
                    
                </div>
            )
        }
    }
 }

 const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps, null)(SettingsList)