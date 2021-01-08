import React, {Component} from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../actions';

let currentdate = new Date();
let utf8decoder = new TextDecoder();
let port;
let reader;
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
            textColour: '',
        }
    }    

    sendLog() {
        const addLog = {
            name: this.props.userData.username,
            letter: this.state.letter,
            datetime: (String(currentdate.getMonth() + 1) + '/'
            + (currentdate.getDate()) + '/' + (currentdate.getFullYear()) + '@'
            + (currentdate.getHours()) + ':' +  (currentdate.getMinutes()) + ':'
            + (currentdate.getSeconds())),
            data: this.state.logdata,
        }
        //console.log(addLog);
        this.setState({textColour: ''});
        
        axios.post(window.location.href, addLog)
           .then(res => console.log(res.data));    
        this.setState({
            logdata: ''
        }); 
        
        this.trainingReady();       
    }

    async startTracing(key) {
        //Display next letter
        if (this.state.counter === this.state.letterlist.length) {
            if (key.includes('A')){   // First button press
                this.initializeTraining();
            } else if (key.includes('Z')){  // key = esc, first button release
                this.trainingReady();
            }
            
        } else if (this.state.counter !== -1) {      // Test that the device can communicate with the web app.  On first load, setup stuff.
            if (key.includes('A')) {
                this.setState({
                    instructionText2: 'GO!',
                    textColour: 'green-text'
                });    
            } else if(key.includes('Z')) {
                this.sendLog();
            } else {
                this.setState({logdata: this.state.logdata + key});
            }                  
        }
    }

    initializeTraining() {
        console.log('hi');
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
                progress: 100*(this.state.letterlist.length-this.state.counter)/this.state.letterlist.length,
                logdata: '',
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

    async componentDidMount() {  
        let trainType = this.props.trainData.trainingType;
        let trainNum = parseInt(this.props.trainData.trainingNumber);  
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
        console.log(navigator);

        if ("serial" in navigator) {
            console.log(port);
            if (port === undefined){ 
                port = await navigator.serial.requestPort();
                await port.open({baudRate : 750000}); 
                reader = port.readable.getReader();
            }
            console.log(port);
            while (true) {
                const { value, done } = await reader.read();
                if (done) {
                  reader.releaseLock();
                  break;
                }
                this.startTracing(utf8decoder.decode(value));
            }  
          } else {
              alert('WebSerial API not supported. Please use Google Chrome browser and read setup instructions on the page. Sorry.');
          }
    }

    componentWillUnmount () {
        this.props.updateTrainingSettings(this.props.trainData.trainingType, 
            this.props.trainData.trainingNumber,
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
                <div className={`next-letter col-6 offset-3 ${this.state.textColour}`}>{this.state.letter}</div>                            
            </div>
        )
        
    }
 }

 const mapStateToProps = (state) => {
    return {
        trainData: state.trainSettings,
        userData: state.userData
    }
}

const mapDispatchToProps = () => {
    return {
        updateTrainingSettings,
    }
 }


export default connect(mapStateToProps, mapDispatchToProps())(TrainingMain)
