import React, {Component} from 'react';
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/image';
import {connect} from 'react-redux';
import {updateTrainingSettings} from '../../actions';
import offlinetotrain from '../images/offlinetotrain.png';
import trainingGreen from '../images/training green.png';


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
            instructionText: 'Instructions:',
            showInstructions: false,
            showSplash: true,
            showProgressBar: false,
            progress: 0,
            showFinishedScreen: false,
            textColour: '',
            showPictures: true
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
                    instructionText: 'GO!',
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
            showInstructions: true,
            showSplash: false,
            instructionText: 'Device Connected! Please wait a moment...',
        });
    }

    trainingReady() {
        if (this.state.counter !== 0) {
            this.setState({
                showProgressBar: true,
                instructionText: 'NEXT GESTURE:',
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
            instructionText: 'FINISHED!!!',
            letter: '',
            counter: this.state.counter -1
        })
        this.props.updateTrainingSettings(this.props.trainData.trainingType, 
            this.props.trainData.trainingNumber,
            false, false, true, false);
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
        } else if (trainType === 'extra_4') {
            arr = '4567'.repeat(trainNum).split('')
            .sort(function(){return 0.5-Math.random()});
        } else if (trainType === 'two-gestures_2') {
            arr = ['A', 'HI'];
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
            counter: arr.length,
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
                {this.state.showProgressBar && 
                <div className='row'>
                    <ProgressBar className='col-9 offset-1 my-progress-bar' now={this.state.progress} />
                    <div className='align-self-center col-2'>GESTURES LEFT: {this.state.counter+1}</div>
                </div>
                }
                <br/>
                {this.state.showInstructions &&                
                    <div className='training-instructions-2'>
                        {this.state.instructionText}                
                    </div>
                }
                {this.state.showSplash && 
                    <div className='show-splash'>
                    <h3>Last set of instructions (we promise!):</h3>
                    <p>Please hit the button on your gesture device until the USB dongle displays the message: <strong>TRAINING MODE: DEVICE READY</strong> (Grey Background).</p>
                    <Image src={offlinetotrain} className='col-8 offset-2 mb-3' alt='Offline Mode to Training Mode'/>
                    <p>You will be given a gesture prompt below.  To train this gesture, press the button on the USB dongle, which will
                    turn the gesture prompt green for 3 seconds. During this time, make the gesture as shown on the screen. Once completed, 
                    a new gesture prompt will appear and you will need to repeat this process until the training session is finsihed.  
                    </p>
                     <Image src={trainingGreen} className='col-10 offset-1 mb-3' alt='Initiate a gesture'/> 
                     <p><strong>To begin, press the button on the USB dongle to check for a connection between the device and the portal.  
                     If there is no response, please restart the application. </strong></p>
                    </div>
                }
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
