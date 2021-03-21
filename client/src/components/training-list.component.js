import React, {Component} from 'react';
import TrainingSettings from './training-subcomponents/training-settings.component';
import TrainingMain from './training-subcomponents/training-main.component';
import TrainingChecklist from './training-subcomponents/training-checklist.component';
import TrainingFinished from './training-subcomponents/training-finished.component';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../actions';


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

    componentWillUnmount () {
        this.props.updateTrainingSettings(this.props.trainingSettings.trainingType, 
            this.props.trainingSettings.trainingNumber,
            false, false, false, true);
    }

    render() {
       return (
        <div>
            {this.props.trainingSettings.showTrainingChecklist && <TrainingChecklist/>}
            {this.props.trainingSettings.showTrainingSettings && <TrainingSettings/>}
            {this.props.trainingSettings.showTrainingMain && <TrainingMain/>}
            {this.props.trainingSettings.showTrainingFinished && <TrainingFinished/>}
        </div> 
       )
    }
 }

 const mapStateToProps = (state) => {
    return {
        trainingSettings: state.trainSettings,
        userData: state.userData
    }
}

const mapDispatchToProps = () => {
    return {
        updateTrainingSettings,
    }
 }


export default connect(mapStateToProps, mapDispatchToProps())(TrainingList)

