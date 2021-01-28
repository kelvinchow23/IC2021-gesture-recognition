(this["webpackJsonpgesture-web-app"]=this["webpackJsonpgesture-web-app"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n,s,i=a(1),r=a(0),o=a.n(r),c=a(26),l=a.n(c),u=a(8),h=a(9),d=a(11),j=a(10),b=a(17),g=a(12),m=(a(77),a(54)),p=a(14),O=a.p+"static/media/flourish-text-logo-medium.51c5adc9.png",x=a(13),v="UPDATE_USER_DATA",f="UPDATE_TRAINING_SETTINGS",y=function(e,t,a,n,s){return{type:"UPDATE_TRAINING_SETTINGS",payload:{trainingType:e,trainingNumber:t,showTrainingMain:a,showTrainingSettings:n,showTrainingFinished:s}}},w=function(e,t,a){return{type:"UPDATE_USER_DATA",payload:{name:e,username:t,status:a}}},S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={redirectHome:!1},n}return Object(h.a)(a,[{key:"logout",value:function(){this.props.updateUserData("","",""),window.location.pathname=""}},{key:"render",value:function(){return Object(i.jsxs)(m.a,{className:"my-navbar mb-2",children:[Object(i.jsx)(b.b,{to:"/",children:Object(i.jsx)(m.a.Brand,{children:Object(i.jsx)("img",{alt:"flourish logo",src:O,height:"30"})})}),Object(i.jsx)("div",{className:"my-nav-separator",children:"|"}),Object(i.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(i.jsx)(b.b,{to:"/training",className:"navbar-item nav-link my-nav-text",children:"Training"}),Object(i.jsx)("div",{className:"my-nav-separator",children:"|"}),Object(i.jsx)(b.b,{to:"/settings",className:"navbar-item nav-link my-nav-text",children:"Settings"}),"admin"===this.props.userData.username&&Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("div",{className:"my-nav-separator",children:"|"}),Object(i.jsx)(b.b,{to:"/admin",className:"navbar-item nav-link my-nav-text",children:"Administrator"})]})]}),Object(i.jsxs)("div",{className:"navbar-nav ml-auto",children:[""===this.props.userData.username&&Object(i.jsx)(r.Fragment,{children:Object(i.jsx)(b.b,{to:"/login",className:"navbar-item nav-link",children:Object(i.jsx)(p.a,{variant:"dark",className:"btn-primary",children:"Login"})})}),""!==this.props.userData.username&&Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)(b.b,{to:"/userprofile",className:"navbar-item nav-link my-nav-text",children:this.props.userData.username}),Object(i.jsx)(p.a,{variant:"outline-light",className:"my-nav-text",onClick:this.logout.bind(this),children:"Logout"})]})]})]})}}]),a}(r.Component),T=Object(x.b)((function(e){return{userData:e.userData}}),{updateUserData:w})(S),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return""!==this.props.userData.name?Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:["Hello ",this.props.userData.name,"!"]}),Object(i.jsx)("p",{children:" Please select the training tab to begin a training session."}),Object(i.jsx)("p",{children:" For other settings such as requesting a new training model or uploading firmware to your device, please go to the training tab."}),Object(i.jsx)("p",{children:" For further information, please visit here "}),Object(i.jsx)("p",{children:" To see the Getting Started instructions, please click here."})]}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:" Hello!"}),Object(i.jsxs)("p",{children:["Welcome to flourish portal.  This application allows unique individuals to control electronic devices with custom user-defined gestures.  To use this application, you will need two ",Object(i.jsx)("a",{href:"https://www.digikey.com/en/products/detail/m5stack-technology-co-ltd/K016-D/10492136",children:"M5StickC units"}),". Further hardware configuration details and firmware upload instructions can be found ",Object(i.jsx)("a",{href:"",children:"here"}),". "]}),Object(i.jsx)("p",{children:"Please login to begin."})]})}}]),a}(r.Component),k=Object(x.b)((function(e){return{userData:e.userData}}),null)(N),D=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={trainType:"hello-world_9",trainNum:1,trainTypeLength:9,time:1},n}return Object(h.a)(a,[{key:"onTypeChange",value:function(e){var t=e.target.value.split("_");this.setState({trainType:e.target.value,trainTypeLength:parseInt(t[1]),time:parseInt(t[1])*this.state.trainNum/12})}},{key:"onNumberChange",value:function(e){this.setState({trainNum:e.target.value,time:this.state.trainTypeLength*e.target.value/12})}},{key:"startTraining",value:function(){this.props.updateTrainingSettings(this.state.trainType,this.state.trainNum,!0,!1,!1)}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Training Configuration"}),Object(i.jsx)("p",{children:"Welcome to the training portal!"}),Object(i.jsx)("p",{children:"Before you begin, please set up your training session.  For the training set, please choose the same training set for each session you do."}),Object(i.jsx)("p",{children:"Please also make sure your gesture device is charged and the training device is nearby and connected to the computer's USB port. After pressing the button below, you will be prompted to allow this website to receive signals from this device."}),Object(i.jsxs)("div",{className:"row mt-5 text-center",children:[Object(i.jsx)("h5",{className:"col-4",children:"Training Set: "}),Object(i.jsx)("h5",{className:"col-4",children:"Number of Sets: "}),Object(i.jsx)("h5",{className:"col-4",children:"Estimated Time: "})]}),Object(i.jsxs)("div",{className:"row mb-5",children:[Object(i.jsxs)("select",{className:"col-2 offset-1",value:this.state.trainType,onChange:this.onTypeChange.bind(this),children:[Object(i.jsx)("option",{value:"hello-world_9",children:"Hello World (9)"}),Object(i.jsx)("option",{value:"alphabet_26",children:"Alphabet (26)"}),Object(i.jsx)("option",{value:"alphanumeric_36",children:"Alphanumeric (36)"}),Object(i.jsx)("option",{value:"custom_10",children:"Custom"}),Object(i.jsx)("option",{value:"negative_10",children:"Negative Data(10)"})]}),Object(i.jsxs)("select",{className:"col-2 offset-2",value:this.state.trainNum,onChange:this.onNumberChange.bind(this),children:[Object(i.jsx)("option",{value:"1",children:"1"}),Object(i.jsx)("option",{value:"2",children:"2"}),Object(i.jsx)("option",{value:"3",children:"3"}),Object(i.jsx)("option",{value:"4",children:"4"}),Object(i.jsx)("option",{value:"5",children:"5"}),Object(i.jsx)("option",{value:"7",children:"7"}),Object(i.jsx)("option",{value:"10",children:"10"})]}),Object(i.jsxs)("h5",{className:"col-2 offset-2 text-center",children:[this.state.time.toFixed(1)," min"]})]}),Object(i.jsx)(p.a,{className:"btn-primary col-4 offset-4",size:"lg",onClick:this.startTraining.bind(this),children:"Start training"})]})}}]),a}(r.Component),C=Object(x.b)(null,{updateTrainingSettings:y})(D),U=a(38),P=a.n(U),A=a(53),E=a(18),L=a.n(E),R=a(71),q=new Date,W=new TextDecoder,I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={letter:"",letterlist:"",logdata:"",counter:-1,instructionText1:"Before starting training, make sure both devices are in TRAINING MODE.",instructionText2:"Please hit the button on the training device to check for a serial connection.",showProgressBar:!1,progress:0,showInstructionText1:!0,showFinishedScreen:!1,textColour:""},n}return Object(h.a)(a,[{key:"sendLog",value:function(){var e={name:this.props.userData.username,gesture:this.state.letter,datetime:String(q.getMonth()+1)+"/"+q.getDate()+"/"+q.getFullYear()+"@"+q.getHours()+":"+q.getMinutes()+":"+q.getSeconds(),data:this.state.logdata};this.setState({textColour:""}),L.a.post(window.location.href,e).then((function(e){return console.log(e.data)})),this.setState({logdata:""}),this.trainingReady()}},{key:"getTrainingCount",value:function(e){var t=this;L.a.get(window.location.origin+"/training/"+e).then((function(a){if(console.log(a.data),console.log(t.props.userData.status),0===a.data||"New User Profile Created"===t.props.userData.status){L.a.patch(window.location.origin+"/profile/updateUserStatus/"+e,{status:"Needs More Data"}).then((function(e){return console.log(e.data)}))}}))}},{key:"startTracing",value:function(){var e=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.counter===this.state.letterlist.length?"A"===t?this.initializeTraining():"Z"===t&&this.trainingReady():-1!==this.state.counter&&("A"===t?this.setState({instructionText2:"GO!",textColour:"green-text"}):"Z"===t?this.sendLog():this.setState({logdata:this.state.logdata+t}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"initializeTraining",value:function(){this.getTrainingCount(this.props.userData.username),this.setState({instructionText2:"Device Connected! Please wait a moment..."})}},{key:"trainingReady",value:function(){0!==this.state.counter?this.setState({showProgressBar:!0,showInstructionText1:!1,instructionText1:"",instructionText2:"NEXT LETTER:",letter:this.state.letterlist[this.state.counter-1],counter:this.state.counter-1,progress:100*(this.state.letterlist.length-this.state.counter)/this.state.letterlist.length,logdata:""}):this.endTrainingSession()}},{key:"endTrainingSession",value:function(){this.setState({showProgressBar:!1,instructionText2:"FINISHED!!!",letter:"",counter:this.state.counter-1}),this.props.updateTrainingSettings(this.props.trainData.trainingType,this.props.trainData.trainingNumber,!1,!1,!0)}},{key:"componentDidMount",value:function(){var e=Object(A.a)(P.a.mark((function e(){var t,a,i,r,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.trainData.trainingType,a=parseInt(this.props.trainData.trainingNumber),i=[],"hello-world_9"===t?i="HELOWRDUS".repeat(a).split("").sort((function(){return.5-Math.random()})):"alphabet_26"===t?i="ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(a).split("").sort((function(){return.5-Math.random()})):"alphanumeric_36"===t?i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".repeat(a).split("").sort((function(){return.5-Math.random()})):"negative_10"===t?i="??????????".repeat(a):(alert("Not yet coded, please go back and choose another training set. Sorry."),window.location.reload()),this.setState({letterlist:i,counter:i.length}),console.log(navigator),!("serial"in navigator)){e.next=30;break}if(console.log(n),void 0!==n){e.next=15;break}return e.next=11,navigator.serial.requestPort();case 11:return n=e.sent,e.next=14,n.open({baudRate:115200});case 14:s=n.readable.getReader();case 15:console.log(n);case 16:return e.next=19,s.read();case 19:if(r=e.sent,o=r.value,!r.done){e.next=25;break}return s.releaseLock(),e.abrupt("break",28);case 25:this.startTracing(W.decode(o)),e.next=16;break;case 28:e.next=31;break;case 30:alert("WebSerial API not supported. Please use Google Chrome browser and read setup instructions on the page. Sorry.");case 31:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){s.cancel(),n.close()}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[this.state.showInstructionText1&&Object(i.jsx)("div",{className:"training-instructions-1",children:this.state.instructionText1}),this.state.showProgressBar&&Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(R.a,{className:"col-9 offset-1 my-progress-bar",now:this.state.progress}),Object(i.jsxs)("div",{className:"align-self-center col-2",children:["GESTURES LEFT: ",this.state.counter+1]})]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"training-instructions-2",children:this.state.instructionText2}),Object(i.jsx)("div",{className:"next-letter col-6 offset-3 ".concat(this.state.textColour),children:this.state.letter})]})}}]),a}(r.Component),_=Object(x.b)((function(e){return{trainData:e.trainSettings,userData:e.userData}}),{updateTrainingSettings:y})(I),F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={redirectSettings:!1},n}return Object(h.a)(a,[{key:"repeatTraining",value:function(){this.props.updateTrainingSettings(this.props.trainData.trainingType,this.props.trainData.trainingNumber,!0,!1,!1)}},{key:"redirectSettings",value:function(){this.setState({redirectSettings:!0})}},{key:"logout",value:function(){this.props.updateUserData("","",""),window.location.pathname=""}},{key:"render",value:function(){return this.state.redirectSettings?Object(i.jsx)(g.a,{to:"/settings"}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{className:"mb-5",children:"Well Done!"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(p.a,{className:"my-big-button",variant:"primary",onClick:this.repeatTraining.bind(this),children:"REPEAT TRAINING?"}),Object(i.jsx)(p.a,{className:"my-big-button my-button-gutter",variant:"secondary",onClick:this.redirectSettings.bind(this),children:"VIEW SETTINGS"}),Object(i.jsx)(p.a,{className:"my-big-button",variant:"danger",onClick:this.logout.bind(this),children:"LOGOUT"})]})]})}}]),a}(r.Component),M=Object(x.b)((function(e){return{trainData:e.trainSettings}}),{updateTrainingSettings:y,updateUserData:w})(F),H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={redirectLogin:!1},n}return Object(h.a)(a,[{key:"redirecttoLogin",value:function(){var e=this;setTimeout((function(){return e.setState({redirectLogin:!0})}),1500)}},{key:"componentWillUnmount",value:function(){this.props.updateTrainingSettings(this.props.trainingSettings.trainingType,this.props.trainingSettings.trainingNumber,!1,!0,!1)}},{key:"render",value:function(){return""===this.props.userData.username?(this.redirecttoLogin(),Object(i.jsxs)("h4",{children:["Please Login First! Redirecting to Login Page...",this.state.redirectLogin&&Object(i.jsx)(g.a,{to:"/login"})]})):Object(i.jsxs)("div",{children:[this.props.trainingSettings.showTrainingSettings&&Object(i.jsx)(C,{}),this.props.trainingSettings.showTrainingMain&&Object(i.jsx)(_,{}),this.props.trainingSettings.showTrainingFinished&&Object(i.jsx)(M,{})]})}}]),a}(r.Component),B=Object(x.b)((function(e){return{trainingSettings:e.trainSettings,userData:e.userData}}),{updateTrainingSettings:y})(H),G=a(39),z=a(25),X=a(68),Z=a(16),V=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={redirectLogin:!1,counter:450,message:"Please go to the training tab to acquire training data before requesting a training model.",currentStatus:"",username:"",borderColour:"danger",showWarningModal:!1,showSuccessAlert:!1,showWarningAlert:!1},n}return Object(h.a)(a,[{key:"getTrainingCount",value:function(){var e,t=this;L.a.get(window.location.origin+"/training/"+this.state.username).then((function(a){a.data&&(console.log(a.data),e=0===a.data?"Please go to the training tab to acquire training data before requesting a training model.":a.data<450?"Please go to the training tab to acquire more data before requesting a training model.":"There is enough data for training.  Please click the REQUEST button to create or updata your personalized model.",console.log(e),t.setState({counter:450-a.data,message:e}))}))}},{key:"requestTrainingOptions",value:function(){"Model Training Requested"===this.state.currentStatus?this.setState({showWarningAlert:!0}):"Ready to Request Training"===this.state.currentStatus?this.requestTraining():this.modalOpen()}},{key:"requestTraining",value:function(){L.a.patch(window.location.origin+"/profile/updateUserStatus/"+this.state.username,{status:"Model Training Requested"}).then((function(e){return console.log(e.data)})),this.modalClose(),this.setState({showSuccessAlert:!0})}},{key:"modalClose",value:function(){this.setState({showWarningModal:!1})}},{key:"modalOpen",value:function(){this.setState({showWarningModal:!0})}},{key:"uploadModel",value:function(){alert("TODO: Model uploading is currently done through Arduino IDE.  It will be integrated with an OTA upload through this button in a future update (hopefully)")}},{key:"redirecttoLogin",value:function(){var e=this;setTimeout((function(){return e.setState({redirectLogin:!0})}),1500)}},{key:"componentDidMount",value:function(){var e=this;this.setState({currentStatus:this.props.userData.status,username:this.props.userData.username},(function(){return e.getTrainingCount()}))}},{key:"render",value:function(){var e=this;return""===this.state.username?(this.redirecttoLogin(),Object(i.jsxs)("h4",{children:["Please Login First! Redirecting to Login Page...",this.state.redirectLogin&&Object(i.jsx)(g.a,{to:"/login"})]})):Object(i.jsxs)("div",{children:[Object(i.jsxs)(G.a,{show:this.state.showSuccessAlert,variant:"success",onClose:function(){return e.setState({showSuccessAlert:!1})},dismissible:!0,children:[Object(i.jsx)(G.a.Heading,{children:"Request Sent!"}),Object(i.jsx)("p",{children:"You will be notified when your training model is ready to be uploaded to your device. Please come back to this settings tab when it is ready.  Thank you for your patience."})]}),Object(i.jsxs)(G.a,{show:this.state.showWarningAlert,variant:"danger",onClose:function(){return e.setState({showWarningAlert:!1})},dismissible:!0,children:[Object(i.jsx)(G.a.Heading,{children:"Request In Progress!"}),Object(i.jsx)("p",{children:"You will be notified when your training model is ready to be uploaded to your device. Please come back to this settings tab when it is ready.  Thank you for your patience."})]}),Object(i.jsx)("h3",{children:"Settings"}),Object(i.jsxs)(X.a,{className:"mb-5",children:[Object(i.jsxs)(z.a,{variant:this.state.borderColour,children:[Object(i.jsx)(z.a.Header,{className:"background-primary my-light-text",children:"Training Status"}),Object(i.jsx)(z.a.Title,{children:this.state.currentStatus}),Object(i.jsxs)(z.a.Body,{children:[Object(i.jsx)("p",{children:this.state.message}),Object(i.jsxs)("p",{children:["Recommended data reps to go: ",Object(i.jsx)("strong",{children:this.state.counter})]}),Object(i.jsxs)("p",{children:["Approx. training time left: ",Object(i.jsxs)("strong",{children:[(this.state.counter/12).toFixed(1)," min"]})]})]})]}),Object(i.jsxs)(z.a,{children:[Object(i.jsx)(z.a.Header,{className:"background-primary my-light-text",children:"Request A Training Model"}),Object(i.jsxs)(z.a.Body,{children:[Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsx)(p.a,{variant:this.state.borderColour,className:"col-10 offset-1",onClick:this.requestTrainingOptions.bind(this),children:"REQUEST TRAINING"})}),"Pressing the button will send a request to train a model for using this gesture control remote.  If the button above is red, you can still request for training, but it is more likely to work if you acquire more training data."]})]}),Object(i.jsxs)(z.a,{children:[Object(i.jsx)(z.a.Header,{className:"background-primary my-light-text",children:"Begin Model Upload"}),Object(i.jsxs)(z.a.Body,{children:[Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsx)(p.a,{variant:this.state.borderColour,className:"col-10 offset-1",onClick:this.uploadModel.bind(this),children:"UPLOAD MODEL"})}),"If the button above is disabled, you need to first request to train a model and/or you need to acquire more training data first.  Pressing this button will begin uploading the model onto your gesture control device.  Please make sure the gesture control is nearby."]})]})]}),Object(i.jsxs)(Z.a,{show:this.state.showWarningModal,handleClose:this.modalClose.bind(this),children:[Object(i.jsx)(Z.a.Header,{className:"background-primary",children:Object(i.jsx)(Z.a.Title,{className:"my-light-text",children:"Warning"})}),Object(i.jsx)(Z.a.Body,{children:"It is suggested that you collect more gesture data first to get a more accurate model."}),Object(i.jsxs)(Z.a.Footer,{children:[Object(i.jsx)(p.a,{variant:"primary",onClick:this.requestTraining.bind(this),children:"Request Anyways"}),Object(i.jsx)(p.a,{variant:"danger",onClick:this.modalClose.bind(this),children:"Cancel"})]})]}),Object(i.jsx)("h5",{children:"TODO: configurations for output controls (i.e. different smart devices, different keyboard hotkeys, etc.), add options for custom defined training sets instead of just alphabet, integrate web app to do OTA updates to gesture device."})]})}}]),a}(r.Component),Y=Object(x.b)((function(e){return{userData:e.userData}}),{updateUserData:w})(V),J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",redirectHome:!1},n}return Object(h.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password};L.a.post(window.location.origin+"/profile/validatelogin",a).then((function(e){t.props.updateUserData(e.data.name,e.data.username,e.data.status),void 0===e.data.username?alert("User not found.  Please check user info and try again or signup as a new user."):t.setState({redirectHome:!0})}))}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return this.state.redirectHome?Object(i.jsx)(g.a,{to:"/"}):Object(i.jsx)("div",{children:Object(i.jsxs)(Z.a.Dialog,{children:[Object(i.jsx)(Z.a.Header,{className:"background-primary",children:Object(i.jsx)(Z.a.Title,{className:"my-light-text",children:"Login"})}),Object(i.jsxs)("form",{onSubmit:this.onSubmit.bind(this),children:[Object(i.jsxs)(Z.a.Body,{children:[Object(i.jsxs)("div",{className:"row mt-3 mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Username: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,value:this.state.username,onChange:this.changeUsername.bind(this)})]}),Object(i.jsxs)("div",{className:"row mb-5",children:[Object(i.jsx)("label",{className:"col-4",children:"Password:"}),Object(i.jsx)("input",{className:"col-5",type:"password",required:!0,value:this.state.password,onChange:this.changePassword.bind(this)})]}),Object(i.jsx)("p",{children:Object(i.jsxs)("i",{children:["For testing, use username: ",Object(i.jsx)("b",{children:"testuser"}),", password: ",Object(i.jsx)("b",{children:"testuser"}),"."]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("i",{children:["For administrator, use username: ",Object(i.jsx)("b",{children:"admin"}),", password: ",Object(i.jsx)("b",{children:"admin"}),"."]})})]}),Object(i.jsxs)(Z.a.Footer,{children:[Object(i.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Login"}),Object(i.jsx)(b.b,{to:"/signup",children:Object(i.jsx)(p.a,{variant:"secondary",children:"New user?"})})]})]})]})})}}]),a}(r.Component),Q=Object(x.b)(null,{updateUserData:w})(J),K=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={name:"",username:"",email:"",password:"",confirmPassword:"",usernameWarning:"",emailWarning:"",passwordWarning:"",redirectHome:!1},n}return Object(h.a)(a,[{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.validateForm()){var a={name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password,status:"New User Profile Created"};L.a.post(window.location.origin+"/profile",a).then((function(e){console.log(e.data),t.props.updateUserData(t.state.name,t.state.username,"New User Profile Created"),t.setState({redirectHome:!0})}))}else alert("Please review warning messages and try again.")}},{key:"changeName",value:function(e){this.setState({name:e.target.value})}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){var t=this;this.setState({password:e.target.value},(function(){t.checkPassword()}))}},{key:"changeConfirmPassword",value:function(e){var t=this;this.setState({confirmPassword:e.target.value},(function(){t.checkPassword()}))}},{key:"checkUsername",value:function(){var e=this;""!==this.state.username&&L.a.get(window.location.origin+"/profile/checkuser/"+this.state.username).then((function(t){t.data?e.setState({usernameWarning:"User exists!"}):e.setState({usernameWarning:""})}))}},{key:"checkEmail",value:function(){var e=this;if(""!==this.state.checkEmail){this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?L.a.get(window.location.origin+"/profile/checkemail/"+this.state.email).then((function(t){t.data?e.setState({emailWarning:"Email exists!"}):e.setState({emailWarning:""})})):this.setState({emailWarning:"Invalid email"})}}},{key:"checkPassword",value:function(){this.state.password!==this.state.confirmPassword&&""!==this.state.confirmPassword?this.setState({passwordWarning:"Mismatch"}):this.setState({passwordWarning:""})}},{key:"validateForm",value:function(){return this.checkUsername(),this.checkEmail(),this.checkPassword(),console.log(this.state.usernameWarning+this.state.emailWarning+this.state.passwordWarning),this.state.usernameWarning+this.state.emailWarning+this.state.passwordWarning===""}},{key:"render",value:function(){return this.state.redirectHome?Object(i.jsx)(g.a,{to:"/"}):Object(i.jsxs)(Z.a.Dialog,{children:[Object(i.jsx)(Z.a.Header,{className:"background-primary",children:Object(i.jsx)(Z.a.Title,{className:"my-light-text",children:"Sign up"})}),Object(i.jsxs)("form",{onSubmit:this.onSubmit.bind(this),children:[Object(i.jsxs)(Z.a.Body,{children:[Object(i.jsxs)("div",{className:"row mt-3 mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Name: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,onChange:this.changeName.bind(this)})]}),Object(i.jsxs)("div",{className:"row mt-3 mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Username: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,onChange:this.changeUsername.bind(this),onBlur:this.checkUsername.bind(this)}),Object(i.jsx)("div",{className:"col-3 red-text",children:this.state.usernameWarning})]}),Object(i.jsxs)("div",{className:"row mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Email: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,onChange:this.changeEmail.bind(this),onBlur:this.checkEmail.bind(this)}),Object(i.jsx)("div",{className:"col-3 red-text",children:this.state.emailWarning})]}),Object(i.jsxs)("div",{className:"row mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Password:"}),Object(i.jsx)("input",{className:"col-5",type:"password",required:!0,onChange:this.changePassword.bind(this)}),Object(i.jsx)("div",{className:"col-3 red-text",children:this.state.passwordWarning})]}),Object(i.jsxs)("div",{className:"row mb-5",children:[Object(i.jsx)("label",{className:"col-4",children:"Confirm Password:"}),Object(i.jsx)("input",{className:"col-5",type:"password",required:!0,onChange:this.changeConfirmPassword.bind(this)})]})]}),Object(i.jsxs)(Z.a.Footer,{children:[Object(i.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Sign-up"}),Object(i.jsx)(b.b,{to:"/login",children:Object(i.jsx)(p.a,{variant:"secondary",children:"Returning User?"})})]})]})]})}}]),a}(r.Component),$=Object(x.b)(null,{updateUserData:w})(K),ee=a(28),te=a(70),ae=a(69),ne=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={profileData:[],trainingData:[],showTable:!1,currentStatus:"",currentUser:""},n}return Object(h.a)(a,[{key:"renderStatusList",value:function(){return this.state.profileData.map((function(e){return e.status})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e){return Object(i.jsx)("option",{value:e,children:e})}))}},{key:"renderUserRequestList",value:function(e){return this.state.profileData.filter((function(t){return t.status===e})).map((function(e){var t=e.username;return Object(i.jsx)("option",{value:t,children:t})}))}},{key:"renderAllUserList",value:function(){return this.state.profileData.map((function(e){var t=e.username;return Object(i.jsx)("option",{value:t,children:t})}))}},{key:"renderLogTable",value:function(){var e=this.state.currentUser;if(""!==e)return 0!==this.state.trainingData.length?Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsxs)("div",{className:"row mb-3",children:[Object(i.jsxs)("h4",{className:"col-9",children:["User: ",e]}),Object(i.jsx)(p.a,{variant:"outline-primary",className:"col-3",children:Object(i.jsx)(ae.CSVLink,{data:this.state.trainingData,filename:e+"-data.csv",children:"Download User Data"})})]}),Object(i.jsxs)(te.a,{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Gesture"}),Object(i.jsx)("th",{children:"Time"}),Object(i.jsx)("th",{className:"truncate-table-data",children:"Data"})]})}),Object(i.jsx)("tbody",{children:this.state.trainingData.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.gesture}),Object(i.jsx)("td",{children:e.datetime}),Object(i.jsx)("td",{className:"truncate-table-data",children:e.data})]})}))})]})]}):Object(i.jsxs)("h4",{children:[" ",e," has no training data.  Please choose another user."]})}},{key:"getAllUsers",value:function(){var e=this;L.a.get(window.location.origin+"/profile/getAllUsers").then((function(t){t.data?e.setState({profileData:t.data}):console.log("No users exist!")}))}},{key:"getTrainingData",value:function(e){var t=this;L.a.get(window.location.origin+"/api/getTrainingData/"+e).then((function(a){a.data&&t.setState({trainingData:a.data,currentUser:e,showTable:!0}),t.renderLogTable()}))}},{key:"onUserSelect",value:function(e){this.getTrainingData(e.target.value)}},{key:"onRequestFilter",value:function(e){this.setState({currentStatus:e.target.value}),this.renderUserRequestList(e.target.value)}},{key:"componentDidMount",value:function(){this.getAllUsers()}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Admin Console"}),Object(i.jsx)("p",{children:"Click on a specific user to view their training data."}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)(ee.a,{className:"col-3",children:[Object(i.jsxs)(ee.a.Group,{controlId:"userRequestSelect",children:[Object(i.jsxs)(ee.a.Label,{children:[Object(i.jsx)("strong",{children:"Filter Users by Status:"}),Object(i.jsxs)(ee.a.Control,{as:"select",onChange:this.onRequestFilter.bind(this),children:[Object(i.jsx)("option",{hidden:!0,disabled:!0,selected:!0,value:!0,children:"Please Select Status..."}),this.renderStatusList()]})]}),Object(i.jsx)(ee.a.Control,{as:"select",multiple:!0,onChange:this.onUserSelect.bind(this),children:this.renderUserRequestList(this.state.currentStatus)})]}),Object(i.jsxs)(ee.a.Group,{controlId:"userAllSelect",children:[Object(i.jsx)(ee.a.Label,{children:Object(i.jsx)("strong",{children:"Select from All Users:"})}),Object(i.jsx)(ee.a.Control,{as:"select",multiple:!0,onChange:this.onUserSelect.bind(this),children:this.renderAllUserList()})]})]}),Object(i.jsx)("div",{className:"col-9",children:this.state.showTable&&this.renderLogTable()})]})]})}}]),a}(r.Component),se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(T,{}),Object(i.jsx)("br",{}),Object(i.jsx)(g.b,{path:"/",exact:!0,component:k}),Object(i.jsx)(g.b,{path:"/training",exact:!0,component:B}),Object(i.jsx)(g.b,{path:"/settings",exact:!0,component:Y}),Object(i.jsx)(g.b,{path:"/admin",exact:!0,component:ne}),Object(i.jsx)(g.b,{path:"/login",exact:!0,component:Q}),Object(i.jsx)(g.b,{path:"/signup",exact:!0,component:$})]})})}}]),a}(r.Component),ie=(a(109),a(32)),re={trainingType:"hello-world_9",trainingNumber:1,showTrainingMain:!1,showTrainingFinished:!1,showTrainingSettings:!0};var oe={username:"",name:"",status:""};var ce=Object(ie.b)({trainSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return e=t.payload;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return e=t.payload;default:return e}}}),le=Object(ie.c)(ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(i.jsx)(x.a,{store:le,children:Object(i.jsx)(se,{})}),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.1fdfe653.chunk.js.map