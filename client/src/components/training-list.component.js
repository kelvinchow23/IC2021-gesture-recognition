import React, {Component} from 'react';
import TrainingSettings from './training-settings.component';
import TrainingMain from './training-main.component';

 export default class TrainingList extends Component {
    constructor() {
        super();
        this.state = {
            showTrainingSettings: true,
            showTrainingMain: false,
        }
    }

    toggleComponent(name) {
        switch(name){
            case "showTrainingSettings":
                this.setState({ showTrainingSettings: !this.state.showTrainingSettings});
                console.log(name + this.state.howTrainingSettings);
                break;
            case "showTrainingMain":
                this.setState({ showTrainingMain: !this.state.showTrainingMain});
                console.log(name + this.state.showTrainingMain);
                break;
            default:
                break;
        }
    }
    
    startTraining() {
        this.toggleComponent("showTrainingMain");
        this.toggleComponent("showTrainingSettings");
    } 
    render() {
        const {showTrainingMain, showTrainingSettings} = this.state;
        return (
            <div>
                {showTrainingSettings && <TrainingSettings startTraining = {this.startTraining.bind(this)}/>}
                {showTrainingMain && <TrainingMain/>}
            </div>
           
        )
    }
 }

