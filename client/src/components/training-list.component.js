import React, {Component} from 'react';
import TrainingSettings from './training-settings.component';
import TrainingMain from './training-main.component';

 export default class TrainingList extends Component {
    constructor() {
        super();
        this.state = {
            showTrainingSettings: true,
            showTrainingMain: false,
            trainingType: 'alphabet',
            trainingNumber: '1',
        }
    }

    toggleComponent(name) {
        switch(name){
            case "showTrainingSettings":
                this.setState({ showTrainingSettings: !this.state.showTrainingSettings});
                break;
            case "showTrainingMain":
                this.setState({ showTrainingMain: !this.state.showTrainingMain});
                break;
            default:
                break;
        }
    }

    updateTrainingType(type) {
        this.setState({ trainingType: type});
    }

    updateTrainingNumber(num) {
        this.setState({ trainingNumber: num});
    }
    
    startTraining() {
        this.toggleComponent("showTrainingMain");
        this.toggleComponent("showTrainingSettings");
    } 

    render() {
        const {showTrainingMain, showTrainingSettings} = this.state;
        return (
            <div>
                {showTrainingSettings && <TrainingSettings 
                startTraining = {this.startTraining.bind(this)}
                onSelectTypeChange = {this.updateTrainingType.bind(this)}
                onSelectNumberChange = {this.updateTrainingNumber.bind(this)} 
                />}
                {showTrainingMain && <TrainingMain parentData = {this.state}/>}
            </div>
           
        )
    }
 }

