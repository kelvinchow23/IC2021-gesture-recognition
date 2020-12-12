import React, {Component} from 'react';

 export default class TrainingSettings extends Component {

    render() {
        return (
            <div>
                <div>
                <h3>Training Configuration</h3>
                <p>Layout: Start button, information, current settings: go to settings to change</p>
                <p>Current configurations: Gesture actions: Trace letters.  Time limit. Training sets.</p>
                <button className='btn-primary' onClick={this.props.startTraining}>Start training</button>
                </div>
            </div>
        )
    }
 }
