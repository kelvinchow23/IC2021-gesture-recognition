import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateTrainingSettings, updateUserData} from '../../actions';

class TrainingFinished extends Component {

    constructor (props) {
        super(props);
        this.state = {
            redirectSettings: false
        }
    }  

    repeatTraining() {
        this.props.updateTrainingSettings(this.props.trainData.trainingType, 
                                        this.props.trainData.trainingNumber,
                                        true, false, false);
    }

    redirectSettings() {
        this.setState({redirectSettings: true});
    }

    logout() {
        this.props.updateUserData('','','');
        window.location.pathname = '';   
    }

    render() {
        if (this.state.redirectSettings) {
            return <Redirect to = '/settings' />
        } else {
            return (     
                <div>   
                    <h4 className='mb-5'>Well Done!</h4>    
                    <div className='row'>
                    <Button className ='my-big-button' variant='primary' onClick = {this.repeatTraining.bind(this)}>REPEAT TRAINING?</Button>
                    <Button className ='my-big-button my-button-gutter' variant='secondary' onClick = {this.redirectSettings.bind(this)}>VIEW SETTINGS</Button>
                    <Button className ='my-big-button' variant='danger' onClick = {this.logout.bind(this)}>LOGOUT</Button>
                    </div>             
                    
                </div>
            )    
        }               
    }
 }

 const mapStateToProps = (state) => {
    return {
        trainData: state.trainSettings,
    }
}

const mapDispatchToProps = () => {
    return {
        updateTrainingSettings,
        updateUserData
    }
 }


export default connect(mapStateToProps, mapDispatchToProps())(TrainingFinished)
