import React, {Component} from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../../actions';

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
            instructionText1: 'Before starting training, make sure both devices are in TRAINING MODE.',
            instructionText2: 'Please hit the button on the training device to check for a serial connection.',
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
            gesture: this.state.letter,
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

    getTrainingCount(username) {   // Check if we need to change the status
        axios.get(window.location.origin+'/training/'+username)
            .then(res => {
                    console.log(res.data);
                    console.log(this.props.userData.status);
                    if (res.data === 0 || this.props.userData.status === 'New User Profile Created') {
                        const updateUser = {
                            status: 'Needs More Data'
                        }
                        axios.patch(window.location.origin + '/profile/updateUserStatus/'+username, updateUser)
                            .then (res => console.log(res.data));
                    } 
            })
    }

    async startTracing(key) {
        //Display next letter
        if (this.state.counter === this.state.letterlist.length) {
            if (key==='A'){   // First button press
                this.initializeTraining();
            } else if (key==='Z'){  // key = esc, first button release
                this.trainingReady();
            }
            
        } else if (this.state.counter !== -1) {      // Test that the device can communicate with the web app.  On first load, setup stuff.
            if (key==='A') {
                this.setState({
                    instructionText2: 'GO!',
                    textColour: 'green-text'
                });    
            } else if(key==='Z') {
                this.sendLog();
            } else {
                this.setState({logdata: this.state.logdata + key});
            }                  
        }
    }

    initializeTraining() {
        this.getTrainingCount(this.props.userData.username);
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
                instructionText2: 'NEXT GESTURE:',
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
            counter: this.state.counter -1
        })
        this.props.updateTrainingSettings(this.props.trainData.trainingType, 
            this.props.trainData.trainingNumber,
            false, false, true);
    }

    async componentDidMount() {  
        let trainType = this.props.trainData.trainingType;
        let trainNum = parseInt(this.props.trainData.trainingNumber);  
        let arr =[]   
        if (trainType === 'hello-world_9') {
            arr = 'HELOWRDUS'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()});
        } else if (trainType === 'alphabet_26') {
            arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()});
        }  else if (trainType === 'gesture_4') {
            arr = ['HI', ':)', 'FOOD', 'EW'];
        }  else if (trainType === 'alphabet+5_31') {
            arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()});
        } else if (trainType === 'space_1') {
            arr = '_'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()}); 
        } else if (trainType ==='alphanumeric_36') {
            arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()});
        } else if (trainType === 'negative_10') {
            arr = '??????????'.repeat(trainNum);
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
                await port.open({baudRate : 115200}); 
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
        reader.cancel();
        port.close();
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
                    <div className='align-self-center col-2'>GESTURES LEFT: {this.state.counter+1}</div>
                </div>
                }
                <br/>
                <div className='training-instructions-2'>
                    {this.state.instructionText2}                
                </div>
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
