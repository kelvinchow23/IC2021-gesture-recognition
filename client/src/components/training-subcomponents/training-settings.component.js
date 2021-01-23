import React, {Component} from 'react';
import Button from 'react-bootstrap/button';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../../actions';

 class TrainingSettings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            trainType: 'hello-world',
            trainNum: '1'
        }
    }

    onTypeChange(e) {
        this.setState({trainType: e.target.value});
        //this.props.onSelectTypeChange(e.target.value);
    }
    
    onNumberChange(e) {
        this.setState({trainNum: e.target.value});
        //this.props.onSelectNumberChange(e.target.value);
    }

    startTraining() {
        this.props.updateTrainingSettings(this.state.trainType, this.state.trainNum, true, false);
    }

    render() {
        return (
            <div>
                <h3>Training Configuration</h3>
                <p>Layout: Start button, information, current settings: go to settings to change</p>
                <p>Current configurations: Gesture actions: Trace letters.  Time limit. Training sets.</p>
                <p>Pop-up warning message for selecting remote device on next page.</p>

                <div className = 'row'>
                    <label className = 'col-3'>
                    Training Set:  <select value={this.state.trainType} onChange={this.onTypeChange.bind(this)}>
                        <option  value='hello-world'>Hello World (9)</option>
                        <option  value='alphabet'>Alphabet (26)</option>
                        <option value='alphanumeric'>Alphanumeric (36)</option>
                        <option value='custom'>Custom</option>
                        <option value='negative'>Negative Data(10)</option>
                    </select>
                    </label>
                    <label className = 'col-2'>
                    # of Sets:  <select value={this.state.trainNum} onChange={this.onNumberChange.bind(this)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='7'>7</option>
                        <option value='10'>10</option>
                    </select>
                    </label> 
                    <Button className='btn-primary col-2' onClick={this.startTraining.bind(this)}>Start training</Button>
                </div>
            </div>
        )
    }
 }

 const mapDispatchToProps = () => {
    return {
        updateTrainingSettings,
    }
 }

 export default connect(null, mapDispatchToProps())(TrainingSettings)