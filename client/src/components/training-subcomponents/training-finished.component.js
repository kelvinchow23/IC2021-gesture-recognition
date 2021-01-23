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
                                        true, false);
    }

    logout() {
        this.props.updateUserData('','','');
        window.location.pathname = '';   
    }

    render() {
            return (     
                <div className='row mt-5'>                    
                    <Button className ='my-big-button' variant='primary' onClick = {this.repeatTraining.bind(this)}>REPEAT TRAINING?</Button>
                    <Button className ='my-big-button my-button-gutter' variant='secondary'>VIEW SETTINGS</Button>
                    <Button className ='my-big-button' variant='danger' onClick = {this.logout.bind(this)}>LOGOUT</Button>
                </div>
            )        
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
