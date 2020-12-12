import React, {Component} from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';


 export default class TrainingMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            letter: '',
            logdata: ''
        }
    }

    startLog(key) {
        //Display next letter
        this.setState({
            letter: key
        });
        this.nameInput.focus();
        //Turn on green light, start countdown timer,
    }

    logging(e) {
        this.setState({
            logdata: e.target.value
        });
    }

    sendLog(key) {
        console.log(this.state.logdata);
        this.nameInput.blur();
        //TODO send http request to log data
        this.setState({
            logdata: ''
        })
    }

    render() {
        return (     
            <div>
                <div>
                <p>Hit escape key.</p>
                <KeyboardEventHandler 
                    handleKeys= {['esc']} 
                    onKeyEvent={(key) => this.startLog(key) }/>
                </div>
                <h1>{this.state.letter}</h1>
                <div style={{opacity: 100}}>
                <KeyboardEventHandler 
                    handleKeys= {['esc']}
                    onKeyEvent={(key) => this.sendLog(key)} >
                        <input 
                        type='text' value = {this.state.logdata}
                        onChange = {this.logging.bind(this)}
                        ref={(input) => { this.nameInput = input; }}  />
                </KeyboardEventHandler>
                    
                </div>
                
            </div>
        )
    }
 }
