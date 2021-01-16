import React, {Component} from 'react';
import TrainingSettings from './training-subcomponents/training-settings.component';
import TrainingMain from './training-subcomponents/training-main.component';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


 class TrainingList extends Component {
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
                    {this.props.trainingSettings.showTrainingSettings && <TrainingSettings/>}
                    {this.props.trainingSettings.showTrainingMain && <TrainingMain/>}
                </div>
            
            )
        }
    }
 }

 const mapStateToProps = (state) => {
    return {
        trainingSettings: state.trainSettings,
        userData: state.userData
    }
}


export default connect(mapStateToProps, null)(TrainingList)

