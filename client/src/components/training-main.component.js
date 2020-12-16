import React, {Component} from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';


 export default class TrainingMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            letter: '',
            letterlist: '',
            logdata: '',
            counter: -1,
            instructionText1: 'Before starting training, make sure your Bluetooth device is paired and connected to your web application.',
            instructionText2: 'Please hit the button on the device to check if your device is connected.'
        }
    }

    startLog(key) {
        //Display next letter
        if (this.state.counter !== -1) {
            this.setState({
            letter: key
            });
            this.nameInput.focus();
            this.setState({
                instructionText1:''
            });
            //Turn on green light, start countdown timer,
        } else {        // Test that the device can communicate with the web app.  On first load, setup stuff.
            let trainType = this.props.parentData.trainingType;
            let trainNum = parseInt(this.props.parentData.trainingNumber);        
            if (trainType === 'alphabet') {
                    this.setState({letterlist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(trainNum).split('')
                    .sort(function(){return 0.5-Math.random()})}, () =>
                    console.log(this.state.letterlist));
            } else if (trainType ==='alphanumeric') {
                this.setState({letterlist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.repeat(trainNum).split('')
                .sort(function(){return 0.5-Math.random()})}, () =>
                console.log(this.state.letterlist));
            } else {
                alert('Not yet coded, please go back and choose alphabet training set. Sorry.');
                window.location.reload();
            }
            this.setState({
                counter: this.state.letterlist.length,
                instructionText1: 'Device Connected!!! Ready to begin training.',
                instructionText2: 'NEXT LETTER:'
            });
        }
        this.setState({letter: this.state.letterlist[this.state.counter-1]});
        console.log(this.state.counter);
        this.setState({counter: this.state.counter - 1});
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
        });          
    }

    componentDidMount() {        
    }

    render() {
        return (     
            <div>
                <div className='training-instructions-1'>
                    {this.state.instructionText1}
                    <KeyboardEventHandler 
                        handleKeys= {['esc']}
                        onKeyEvent={(key) => this.sendLog(key)} >
                            <textarea rows='1' cols='1'
                            type='text' value = {this.state.logdata}
                            onChange = {this.logging.bind(this)}
                            ref={(input) => { this.nameInput = input; }}  />
                    </KeyboardEventHandler> 
                </div>
                <br/> <br/>
                <div className='training-instructions-2'>
                {this.state.instructionText2}
                </div>
                <KeyboardEventHandler 
                    handleKeys= {['ctrl']} 
                    onKeyEvent={(key) => this.startLog(key) }/>
                <div className='row'>
                    <div className='next-letter col-6 offset-3'>{this.state.letter}</div> 
                    <div className='align-self-center col-2 offset-1'>SETS LEFT</div> 
                </div>
                             
            </div>
        )
    }
 }
