import React, {Component} from 'react';
import Button from 'react-bootstrap/button';

 export default class TrainingSettings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            trainType: '',
            trainNum: ''
        }
    }

    onTypeChange(e) {
        this.setState({trainType: e.target.value});
        this.props.onSelectTypeChange(e.target.value);
    }
    
    onNumberChange(e) {
        this.setState({trainNum: e.target.value});
        this.props.onSelectNumberChange(e.target.value);
    }
    render() {
        return (
            <div>
                <div>
                <h3>Training Configuration</h3>
                <p>Layout: Start button, information, current settings: go to settings to change</p>
                <p>Current configurations: Gesture actions: Trace letters.  Time limit. Training sets.</p>
                <label>
                Training Set:
                <select value={this.state.trainType} onChange={this.onTypeChange.bind(this)}>
                    <option  value='alphabet'>Alphabet (26)</option>
                    <option value='alphanumeric'>Alphanumeric (36)</option>
                    <option value='custom'>Custom</option>
                </select>
                </label>
                <label>
                # of Sets
                <select value={this.state.trainNum} onChange={this.onNumberChange.bind(this)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                </label>                
                <div>
                    <Button className='btn-primary' onClick={this.props.startTraining}>Start training</Button>
                </div>
                </div>
            </div>
        )
    }
 }
