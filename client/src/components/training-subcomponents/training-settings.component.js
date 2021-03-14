import React, {Component} from 'react';
import Button from 'react-bootstrap/button';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../../actions';

 class TrainingSettings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            trainType: 'hello-world_9',
            trainNum: 1,
            trainTypeLength: 9,
            time: 1,
        }
    }

    onTypeChange(e) {
        let values = e.target.value.split("_");
        this.setState({
            trainType: e.target.value,
            trainTypeLength: parseInt(values[1]),
            time: parseInt(values[1])*this.state.trainNum/12
        });
        //this.props.onSelectTypeChange(e.target.value);
    }
    
    onNumberChange(e) {
        this.setState({
            trainNum: e.target.value,
            time: this.state.trainTypeLength*e.target.value/12
        });
    }

    startTraining() {
        this.props.updateTrainingSettings(this.state.trainType, this.state.trainNum, true, false, false, false);
    }

    doNothing() {
        alert('TODO: add this function later.');
    }

    render() {
        return (
            <div>
                <h3>Wonderful! Please setup today's training session.</h3>
                <div className = 'row mt-5 text-center'>
                    <h5 className = 'col-3'>Last Session's Settings: </h5>
                    <h5 className = 'col-3'>Training Set: </h5>
                    <h5 className = 'col-3'>Number of Sets: </h5>
                    <h5 className = 'col-3'>Estimated Time: </h5>
                </div>
                <div className = 'row mb-5'>
                        <Button className='btn-primary col-2 my-button-gutter-half' size ='med' onClick={this.doNothing.bind(this)}>Load Now</Button>
                        <select className ='col-2 offset-1' value={this.state.trainType} onChange={this.onTypeChange.bind(this)}>
                            <option  value='hello-world_9'>Hello World (9)</option>
                            <option  value='alphabet_26'>Alphabet (26)</option>
                            <option  value='alphabet+5_31'>Alphabet+5 (31)</option>
                            <option  value='gesture_4'>Gestures (4)</option>
                            <option value='alphanumeric_36'>Alphanumeric (36)</option>
                            <option value='space_1'>Space (1)</option>
                            <option value='custom_10'>Custom</option>
                            <option value='negative_10'>Negative Data(10)</option>
                        </select>  
                        <select className ='col-2 offset-1' value={this.state.trainNum} onChange={this.onNumberChange.bind(this)}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='7'>7</option>
                            <option value='10'>10</option>
                        </select> 
                        <h5 className='col-2 text-center offset-1'>{this.state.time.toFixed(1)} min</h5>
                </div>                
                <Button className='btn-primary col-4 offset-4 mb-3' size ='lg' onClick={this.startTraining.bind(this)}>Start Training!</Button>
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