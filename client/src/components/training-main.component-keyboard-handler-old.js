import React, {Component} from 'react';
//import axios from 'axios';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../actions';

let currentdate = new Date();
class TrainingMain extends Component {

    constructor (props) {
        super(props);
        this.state = {
            letter: '',
            letterlist: '',
            logdata: '',
            counter: -1,
            instructionText1: 'Before starting training, make sure your Bluetooth device is paired and connected to your web application.',
            instructionText2: 'Please hit the button on the device to check if your device is connected.',
            showProgressBar: false,
            progress: 0,
            showInstructionText1: true,
            showFinishedScreen: false,
            textColour: ''

        }
    }    

    logging(e) {
        this.setState({
            logdata: e.target.value
        });
    }

    sendLog(key) {
        this.nameInput.blur();
        //TODO send http request to log data 

        const addLog = {
            name: 'test',
            letter: this.state.letter,
            datetime: (String(currentdate.getMonth() + 1) + '/'
            + (currentdate.getDate()) + '/' + (currentdate.getFullYear()) + '@'
            + (currentdate.getHours()) + ':' +  (currentdate.getMinutes()) + ':'
            + (currentdate.getSeconds())),
            data: this.state.logdata
        }
        console.log(addLog);
        /*
        axios.post(window.location.href, addLog)
           .then(res => console.log(res.data));    
        this.setState({
            logdata: ''
        }); 
        */
        this.trainingReady();       
    }

    startTracing(key) {
        //Display next letter
        if (this.state.counter === this.state.letterlist.length) {
            if (key ==='shift'){   // First button press
                this.initializeTraining();
            } else if (key === 'esc'){  // key = esc, first button release
                this.trainingReady();
            }
            
        } else if (this.state.counter !== -1) {      // Test that the device can communicate with the web app.  On first load, setup stuff.
            if (key === 'shift') {
                this.setState({
                    instructionText2: 'GO!',
                    textColour: 'green-text'
                });    
            } else if(key === 'ctrl') {
                this.startLogging();
            }                   
        }
        console.log(this.state.counter);
    }

    startLogging() {
        this.nameInput.focus();
        this.setState({
            textColour: '',
            instructionText2: 'Logging data...'
        });
    }

    initializeTraining() {
        this.setState({
            instructionText2: 'Device Connected! Please wait a moment...',
        });
    }

    trainingReady() {
        if (this.state.counter !== 0) {
            this.setState({
                showProgressBar: true,
                showInstructionText1: false,
                instructionText1: '',
                instructionText2: 'NEXT LETTER:',
                letter: this.state.letterlist[this.state.counter-1],
                counter: this.state.counter -1,
                progress: 100*(this.state.letterlist.length-this.state.counter)/this.state.letterlist.length
            });  
        } else {
            this.endTrainingSession();
        }        
    }

    endTrainingSession() {

        this.setState({
            showProgressBar: false,
            instructionText2: 'FINISHED!!!',
            letter: '',
            showFinishedScreen: true,
            counter: this.state.counter -1
        })
    }

    componentDidMount() {  
        let trainType = this.props.someData.trainingType;
        let trainNum = parseInt(this.props.someData.trainingNumber);  
        let arr =[]      
        if (trainType === 'alphabet') {
            arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()});
        } else if (trainType ==='alphanumeric') {
            arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()});
        } else {
            alert('Not yet coded, please go back and choose another training set. Sorry.');
            window.location.reload();
        } 
        this.setState({
            letterlist: arr,
            counter: arr.length
        });
    }

    componentWillUnmount () {
        this.props.updateTrainingSettings(this.props.someData.trainingType, 
            this.props.someData.trainingNumber,
            false, true);
    }

    render() {
        return (     
            <div>
                {this.state.showInstructionText1 && 
                    <div className='training-instructions-1'>
                    {this.state.instructionText1}</div>
                }
                {this.state.showProgressBar && 
                <div className='row'>
                    <ProgressBar className='col-9 offset-1 my-progress-bar' now={this.state.progress} />
                    <div className='align-self-center col-2'>SETS LEFT: {this.state.counter+1}</div>
                </div>
                }
                <br/>
                <div className='training-instructions-2'>
                    {this.state.instructionText2}                
                </div>

                {this.state.showFinishedScreen &&
                <div className='row mt-5'>                    
                    <Button className ='my-big-button' variant='primary'>REPEAT TRAINING?</Button>
                    <Button className ='my-big-button my-button-gutter' variant='secondary'>VIEW STATS</Button>
                    <Button className ='my-big-button' variant='danger'>LOGOUT</Button>
                </div>}



                <KeyboardEventHandler 
                    handleKeys= {['ctrl', 'esc', 'shift']} 
                    onKeyEvent={(key) => this.startTracing(key) }/>
                <div className={`next-letter col-6 offset-3 ${this.state.textColour}`}>{this.state.letter}</div> 

                <KeyboardEventHandler 
                        handleKeys= {['esc']}
                        onKeyEvent={(key) => this.sendLog(key)} >
                            <textarea rows='1' cols='1' className='ghost-textbox'
                            type='text' value = {this.state.logdata}
                            onChange = {this.logging.bind(this)}
                            ref={(input) => { this.nameInput = input; }}  />
                    </KeyboardEventHandler>                             
            </div>
        )
        
    }
 }

 const mapStateToProps = (state) => {
    return {
        someData: state.trainSettings
    }
}

const mapDispatchToProps = () => {
    return {
        updateTrainingSettings,
    }
 }


export default connect(mapStateToProps, mapDispatchToProps())(TrainingMain)
