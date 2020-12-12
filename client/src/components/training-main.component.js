import React, {Component} from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';


 export default class TrainingMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            letter: ''
        }
    }

    startLogging(key) {
        //Display next letter
        this.setState({
            letter: key
        });
        this.nameInput.focus();
        //Turn on green light, start countdown timer, Focus on hidden form element
    }

    render() {
        return (     
            <div>
                <div>
                <p>Hit some keys.</p>
                <KeyboardEventHandler 
                    handleKeys= {['all']} 
                    onKeyEvent={(key) => this.startLogging(key) }/>
                </div>
                <h1>{this.state.letter}</h1>
                <div style={{opacity: 100}}>
                    <input 
                    type='text'className='hiddenInput' 
                    ref={(input) => { this.nameInput = input; }}  />
                </div>
                
            </div>
        )
    }
 }
