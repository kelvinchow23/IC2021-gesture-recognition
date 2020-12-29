import React, {Component} from 'react';
import TrainingSettings from './training-settings.component';
import TrainingMain from './training-main.component';
import {connect} from 'react-redux';


 class TrainingList extends Component {

    render() {
        return (
            <div>
                {this.props.someData.showTrainingSettings && <TrainingSettings/>}
                {this.props.someData.showTrainingMain && <TrainingMain/>}
            </div>
           
        )
    }
 }

 const mapStateToProps = (state) => {
    return {
        someData: state.trainSettings
    }
}


export default connect(mapStateToProps, null)(TrainingList)

