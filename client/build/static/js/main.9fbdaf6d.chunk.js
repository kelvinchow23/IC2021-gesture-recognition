(this["webpackJsonpgesture-web-app"]=this["webpackJsonpgesture-web-app"]||[]).push([[0],{96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n,s,i=a(1),r=a(0),c=a.n(r),o=a(24),l=a.n(o),h=a(7),u=a(8),d=a(10),j=a(9),b=a(15),m=a(11),g=(a(67),a(48)),p=a(14),O=a(13),v="UPDATE_USER_DATA",x="UPDATE_TRAINING_SETTINGS",w=function(e,t,a,n){return{type:"UPDATE_TRAINING_SETTINGS",payload:{trainingType:e,trainingNumber:t,showTrainingMain:a,showTrainingSettings:n}}},f=function(e,t,a){return{type:"UPDATE_USER_DATA",payload:{name:e,username:t,status:a}}},y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={redirectHome:!1},n}return Object(u.a)(a,[{key:"logout",value:function(){this.props.updateUserData("","",""),window.location.pathname=""}},{key:"render",value:function(){return Object(i.jsxs)(g.a,{className:"my-navbar mb-2",bg:"dark",variant:"dark",children:[Object(i.jsx)(b.b,{to:"/",children:Object(i.jsxs)(g.a.Brand,{children:[Object(i.jsx)("img",{alt:"App Logo",src:"data:image/png;base64,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",width:"25",height:"25"})," flourish"]})}),Object(i.jsx)("div",{className:"my-nav-separator",children:"|"}),Object(i.jsxs)("div",{className:"navbar-nav mr-auto",activekey:window.location.pathname,children:[Object(i.jsx)(b.b,{to:"/training",className:"navbar-item nav-link",children:"Training"}),Object(i.jsx)("div",{className:"my-nav-separator",children:"|"}),Object(i.jsx)(b.b,{to:"/stats",className:"navbar-item nav-link",children:"Stats"}),Object(i.jsx)("div",{className:"my-nav-separator",children:"|"}),Object(i.jsx)(b.b,{to:"/settings",className:"navbar-item nav-link",children:"Settings"}),"admin"===this.props.userData.username&&Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("div",{className:"my-nav-separator",children:"|"}),Object(i.jsx)(b.b,{to:"/admin",className:"navbar-item nav-link",children:"Administrator"})]})]}),Object(i.jsxs)("div",{className:"navbar-nav ml-auto",children:[""===this.props.userData.username&&Object(i.jsx)(r.Fragment,{children:Object(i.jsx)(b.b,{to:"/login",className:"navbar-item nav-link",children:Object(i.jsx)(p.a,{variant:"light",children:"Login"})})}),""!==this.props.userData.username&&Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)(b.b,{to:"/userprofile",className:"navbar-item nav-link my-nav-separator",children:this.props.userData.username}),Object(i.jsx)(p.a,{variant:"outline-light",onClick:this.logout.bind(this),children:"Logout"})]})]})]})}}]),a}(r.Component),A=Object(O.b)((function(e){return{userData:e.userData}}),{updateUserData:f})(y),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return""!==this.props.someData.name?Object(i.jsxs)("div",{children:[Object(i.jsxs)("h3",{children:["Hello ",this.props.someData.name,"!"]}),Object(i.jsx)("p",{children:" Please use the menu bar to navigate to stuff."})]}):Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:" Hello!"}),Object(i.jsxs)("p",{children:["Welcome to flourish portal.  This application allows unique individuals to control electronic devices with custom user-defined gestures.  To use this application, you will need two ",Object(i.jsx)("a",{href:"https://www.digikey.com/en/products/detail/m5stack-technology-co-ltd/K016-D/10492136",children:"M5StickC units"}),". Further hardware configuration details and firmware upload instructions can be found ",Object(i.jsx)("a",{href:"",children:"here"}),". "]}),Object(i.jsx)("p",{children:"Please login to begin."})]})}}]),a}(r.Component),k=Object(O.b)((function(e){return{someData:e.userData}}),null)(S),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={trainType:"alphabet",trainNum:"1"},n}return Object(u.a)(a,[{key:"onTypeChange",value:function(e){this.setState({trainType:e.target.value})}},{key:"onNumberChange",value:function(e){this.setState({trainNum:e.target.value})}},{key:"startTraining",value:function(){this.props.updateTrainingSettings(this.state.trainType,this.state.trainNum,!0,!1)}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Training Configuration"}),Object(i.jsx)("p",{children:"Layout: Start button, information, current settings: go to settings to change"}),Object(i.jsx)("p",{children:"Current configurations: Gesture actions: Trace letters.  Time limit. Training sets."}),Object(i.jsx)("p",{children:"Pop-up warning message for selecting remote device on next page."}),Object(i.jsxs)("label",{children:["Training Set:",Object(i.jsxs)("select",{value:this.state.trainType,onChange:this.onTypeChange.bind(this),children:[Object(i.jsx)("option",{value:"alphabet",children:"Alphabet (26)"}),Object(i.jsx)("option",{value:"alphanumeric",children:"Alphanumeric (36)"}),Object(i.jsx)("option",{value:"custom",children:"Custom"})]})]}),Object(i.jsxs)("label",{children:["# of Sets",Object(i.jsxs)("select",{value:this.state.trainNum,onChange:this.onNumberChange.bind(this),children:[Object(i.jsx)("option",{value:"1",children:"1"}),Object(i.jsx)("option",{value:"2",children:"2"}),Object(i.jsx)("option",{value:"3",children:"3"})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)(p.a,{className:"btn-primary",onClick:this.startTraining.bind(this),children:"Start training"})})]})})}}]),a}(r.Component),N=Object(O.b)(null,{updateTrainingSettings:w})(T),D=a(36),U=a.n(D),C=a(47),E=a(17),P=a.n(E),B=a(61),q=new Date,I=new TextDecoder,H=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={letter:"",letterlist:"",logdata:"",counter:-1,instructionText1:"Before starting training, make sure your Bluetooth device is paired and connected to your web application.",instructionText2:"Please hit the button on the device to check if your device is connected.",showProgressBar:!1,progress:0,showInstructionText1:!0,showFinishedScreen:!1,textColour:""},n}return Object(u.a)(a,[{key:"sendLog",value:function(){var e={name:this.props.userData.username,letter:this.state.letter,datetime:String(q.getMonth()+1)+"/"+q.getDate()+"/"+q.getFullYear()+"@"+q.getHours()+":"+q.getMinutes()+":"+q.getSeconds(),data:this.state.logdata};this.setState({textColour:""}),P.a.post(window.location.href,e).then((function(e){return console.log(e.data)})),this.setState({logdata:""}),this.trainingReady()}},{key:"startTracing",value:function(){var e=Object(C.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.counter===this.state.letterlist.length?t.includes("A")?this.initializeTraining():t.includes("Z")&&this.trainingReady():-1!==this.state.counter&&(t.includes("A")?this.setState({instructionText2:"GO!",textColour:"green-text"}):t.includes("Z")?this.sendLog():this.setState({logdata:this.state.logdata+t}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"initializeTraining",value:function(){console.log("hi"),this.setState({instructionText2:"Device Connected! Please wait a moment..."})}},{key:"trainingReady",value:function(){0!==this.state.counter?this.setState({showProgressBar:!0,showInstructionText1:!1,instructionText1:"",instructionText2:"NEXT LETTER:",letter:this.state.letterlist[this.state.counter-1],counter:this.state.counter-1,progress:100*(this.state.letterlist.length-this.state.counter)/this.state.letterlist.length,logdata:""}):this.endTrainingSession()}},{key:"endTrainingSession",value:function(){this.setState({showProgressBar:!1,instructionText2:"FINISHED!!!",letter:"",showFinishedScreen:!0,counter:this.state.counter-1})}},{key:"componentDidMount",value:function(){var e=Object(C.a)(U.a.mark((function e(){var t,a,i,r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.trainData.trainingType,a=parseInt(this.props.trainData.trainingNumber),i=[],"alphabet"===t?i="ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(a).split("").sort((function(){return.5-Math.random()})):"alphanumeric"===t?i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".repeat(a).split("").sort((function(){return.5-Math.random()})):(alert("Not yet coded, please go back and choose another training set. Sorry."),window.location.reload()),this.setState({letterlist:i,counter:i.length}),console.log(navigator),!("serial"in navigator)){e.next=30;break}if(console.log(n),void 0!==n){e.next=15;break}return e.next=11,navigator.serial.requestPort();case 11:return n=e.sent,e.next=14,n.open({baudRate:75e4});case 14:s=n.readable.getReader();case 15:console.log(n);case 16:return e.next=19,s.read();case 19:if(r=e.sent,c=r.value,!r.done){e.next=25;break}return s.releaseLock(),e.abrupt("break",28);case 25:this.startTracing(I.decode(c)),e.next=16;break;case 28:e.next=31;break;case 30:alert("WebSerial API not supported. Please use Google Chrome browser and read setup instructions on the page. Sorry.");case 31:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.props.updateTrainingSettings(this.props.trainData.trainingType,this.props.trainData.trainingNumber,!1,!0)}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[this.state.showInstructionText1&&Object(i.jsx)("div",{className:"training-instructions-1",children:this.state.instructionText1}),this.state.showProgressBar&&Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(B.a,{className:"col-9 offset-1 my-progress-bar",now:this.state.progress}),Object(i.jsxs)("div",{className:"align-self-center col-2",children:["SETS LEFT: ",this.state.counter+1]})]}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"training-instructions-2",children:this.state.instructionText2}),this.state.showFinishedScreen&&Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsx)(p.a,{className:"my-big-button",variant:"primary",children:"REPEAT TRAINING?"}),Object(i.jsx)(p.a,{className:"my-big-button my-button-gutter",variant:"secondary",children:"VIEW STATS"}),Object(i.jsx)(p.a,{className:"my-big-button",variant:"danger",children:"LOGOUT"})]}),Object(i.jsx)("div",{className:"next-letter col-6 offset-3 ".concat(this.state.textColour),children:this.state.letter})]})}}]),a}(r.Component),R=Object(O.b)((function(e){return{trainData:e.trainSettings,userData:e.userData}}),{updateTrainingSettings:w})(H),G=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[this.props.someData.showTrainingSettings&&Object(i.jsx)(N,{}),this.props.someData.showTrainingMain&&Object(i.jsx)(R,{})]})}}]),a}(r.Component),Q=Object(O.b)((function(e){return{someData:e.trainSettings}}),null)(G),F=a(30),L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(F.a)(n)),n.onChangeScore=n.onChangeScore.bind(Object(F.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(F.a)(n)),n.onSubmit=n.onSubmit.bind(Object(F.a)(n)),n.state={user:"",score:0,description:"",userList:[]},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({user:e.target.value})}},{key:"onChangeScore",value:function(e){this.setState({score:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={user:this.state.user,score:this.state.score,description:this.state.description};console.log(window.location.href),console.log(window.location.hostname),P.a.post(window.location.href,t).then((function(e){return console.log(e.data)})),this.setState({user:"",score:0,description:""}),console.log(t)}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Add new user"}),Object(i.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Username: "}),Object(i.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.user,onChange:this.onChangeUsername})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Score: "}),Object(i.jsx)("input",{type:"number",required:!0,className:"form-control",value:this.state.score,onChange:this.onChangeScore})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Description: "}),Object(i.jsx)("input",{type:"text",className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("input",{type:"submit",value:"Add user",className:"btn btn-primary"})})]})]})}}]),a}(r.Component),K=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"TODO:"}),Object(i.jsx)("p",{children:" Status update: required training sets left before training can occur"}),Object(i.jsx)("p",{children:"Create button to request for data training"})]})}}]),a}(r.Component),z=a(21),W=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",redirectHome:!1},n}return Object(u.a)(a,[{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password};P.a.post(window.location.origin+"/profile/validatelogin",a).then((function(e){console.log(e.data.username),console.log(e.data.name),console.log(e.data.status),t.props.updateUserData(e.data.name,e.data.username,e.data.status),void 0===e.data.username?alert("User not found.  Please check user info and try again or signup as a new user."):t.setState({redirectHome:!0})}))}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return this.state.redirectHome?Object(i.jsx)(m.a,{to:"/"}):Object(i.jsx)("div",{children:Object(i.jsxs)(z.a.Dialog,{children:[Object(i.jsx)(z.a.Header,{children:Object(i.jsx)(z.a.Title,{children:"Login"})}),Object(i.jsxs)("form",{onSubmit:this.onSubmit.bind(this),children:[Object(i.jsxs)(z.a.Body,{children:[Object(i.jsxs)("div",{className:"row mt-3 mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Username: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,value:this.state.username,onChange:this.changeUsername.bind(this)})]}),Object(i.jsxs)("div",{className:"row mb-5",children:[Object(i.jsx)("label",{className:"col-4",children:"Password:"}),Object(i.jsx)("input",{className:"col-5",type:"password",required:!0,value:this.state.password,onChange:this.changePassword.bind(this)})]}),Object(i.jsx)("p",{children:Object(i.jsxs)("i",{children:["For testing, use username: ",Object(i.jsx)("b",{children:"testuser"}),", password: ",Object(i.jsx)("b",{children:"testuser"}),"."]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("i",{children:["For administrator, use username: ",Object(i.jsx)("b",{children:"admin"}),", password: ",Object(i.jsx)("b",{children:"admin"}),"."]})})]}),Object(i.jsxs)(z.a.Footer,{children:[Object(i.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Login"}),Object(i.jsx)(b.b,{to:"/signup",children:Object(i.jsx)(p.a,{variant:"secondary",children:"New user?"})})]})]})]})})}}]),a}(r.Component),X=Object(O.b)(null,{updateUserData:f})(W),M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={name:"",username:"",email:"",password:"",confirmPassword:"",usernameWarning:"",emailWarning:"",passwordWarning:"",redirectHome:!1},n}return Object(u.a)(a,[{key:"onSubmit",value:function(e){var t=this;if(e.preventDefault(),this.validateForm()){var a={name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password,status:"New User Profile Created"};P.a.post(window.location.origin+"/profile",a).then((function(e){console.log(e.data),t.props.updateUserData(t.state.name,t.state.username,"New User Profile Created"),t.setState({redirectHome:!0})}))}else alert("Please review warning messages and try again.")}},{key:"changeName",value:function(e){this.setState({name:e.target.value})}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){var t=this;this.setState({password:e.target.value},(function(){t.checkPassword()}))}},{key:"changeConfirmPassword",value:function(e){var t=this;this.setState({confirmPassword:e.target.value},(function(){t.checkPassword()}))}},{key:"checkUsername",value:function(){var e=this;""!==this.state.username&&P.a.get(window.location.origin+"/profile/checkuser/"+this.state.username).then((function(t){t.data?e.setState({usernameWarning:"User exists!"}):e.setState({usernameWarning:""})}))}},{key:"checkEmail",value:function(){var e=this;if(""!==this.state.checkEmail){this.state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?P.a.get(window.location.origin+"/profile/checkemail/"+this.state.email).then((function(t){t.data?e.setState({emailWarning:"Email exists!"}):e.setState({emailWarning:""})})):this.setState({emailWarning:"Invalid email"})}}},{key:"checkPassword",value:function(){this.state.password!==this.state.confirmPassword&&""!==this.state.confirmPassword?this.setState({passwordWarning:"Mismatch"}):this.setState({passwordWarning:""})}},{key:"validateForm",value:function(){return this.checkUsername(),this.checkEmail(),this.checkPassword(),console.log(this.state.usernameWarning+this.state.emailWarning+this.state.passwordWarning),this.state.usernameWarning+this.state.emailWarning+this.state.passwordWarning===""}},{key:"render",value:function(){return this.state.redirectHome?Object(i.jsx)(m.a,{to:"/"}):Object(i.jsxs)(z.a.Dialog,{children:[Object(i.jsx)(z.a.Header,{children:Object(i.jsx)(z.a.Title,{children:"Sign up"})}),Object(i.jsxs)("form",{onSubmit:this.onSubmit.bind(this),children:[Object(i.jsxs)(z.a.Body,{children:[Object(i.jsxs)("div",{className:"row mt-3 mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Name: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,onChange:this.changeName.bind(this)})]}),Object(i.jsxs)("div",{className:"row mt-3 mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Username: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,onChange:this.changeUsername.bind(this),onBlur:this.checkUsername.bind(this)}),Object(i.jsx)("div",{className:"col-3 red-text",children:this.state.usernameWarning})]}),Object(i.jsxs)("div",{className:"row mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Email: "}),Object(i.jsx)("input",{className:"col-5",type:"text",required:!0,onChange:this.changeEmail.bind(this),onBlur:this.checkEmail.bind(this)}),Object(i.jsx)("div",{className:"col-3 red-text",children:this.state.emailWarning})]}),Object(i.jsxs)("div",{className:"row mb-2",children:[Object(i.jsx)("label",{className:"col-4",children:"Password:"}),Object(i.jsx)("input",{className:"col-5",type:"password",required:!0,onChange:this.changePassword.bind(this)}),Object(i.jsx)("div",{className:"col-3 red-text",children:this.state.passwordWarning})]}),Object(i.jsxs)("div",{className:"row mb-5",children:[Object(i.jsx)("label",{className:"col-4",children:"Confirm Password:"}),Object(i.jsx)("input",{className:"col-5",type:"password",required:!0,onChange:this.changeConfirmPassword.bind(this)})]})]}),Object(i.jsxs)(z.a.Footer,{children:[Object(i.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Sign-up"}),Object(i.jsx)(b.b,{to:"/login",children:Object(i.jsx)(p.a,{variant:"secondary",children:"Returning User?"})})]})]})]})}}]),a}(r.Component),J=Object(O.b)(null,{updateUserData:f})(M),Z=a(29),V=a(60),Y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={profileData:[],trainingData:[],showTable:!1},n}return Object(u.a)(a,[{key:"renderUserRequestList",value:function(){return this.state.profileData.map((function(e){var t=e.username;return Object(i.jsx)("option",{value:t,children:t})}))}},{key:"renderUserList",value:function(){return this.state.profileData.map((function(e){var t=e.username;return Object(i.jsx)("option",{value:t,children:t})}))}},{key:"downloadData",value:function(){alert("TODO: download CSV data")}},{key:"renderLogTable",value:function(e){return console.log(e),Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["User: ",e," "]}),Object(i.jsx)(p.a,{onClick:this.downloadData.bind(this),children:"Download CSV"})]}),Object(i.jsxs)(V.a,{className:"col-9",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Letter"}),Object(i.jsx)("th",{children:"Time"}),Object(i.jsx)("th",{children:"Data"})]})}),Object(i.jsx)("tbody",{children:this.state.trainingData.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.letter}),Object(i.jsx)("td",{children:e.datetime}),Object(i.jsx)("td",{className:"truncate-table-data",children:e.data})]})}))})]})]})}},{key:"getAllUsers",value:function(){var e=this;P.a.get(window.location.href+"/getAllUsers").then((function(t){t.data?e.setState({profileData:t.data}):console.log("No users exist!")}))}},{key:"getTrainingData",value:function(e){var t=this;P.a.get(window.location.href+"/getTrainingData/"+e).then((function(a){a.data&&(console.log(a.data),t.setState({trainingData:a.data,showTable:!0})),t.renderLogTable(e)}))}},{key:"onUserSelect",value:function(e){this.getTrainingData(e.target.value)}},{key:"sayhello",value:function(e){alert("hello "+e)}},{key:"componentDidMount",value:function(){this.getAllUsers()}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Things to do: get users: 1) Training Requests 2) Get all users 3)Get table of all user data from selected user"}),Object(i.jsx)("h3",{children:"Admin Console"}),Object(i.jsx)("h4",{children:"User Training Requests"}),Object(i.jsx)("h4",{children:"User Data Explorer"}),Object(i.jsx)("p",{children:"Click on a specific user to view their training data.  For now, testuser has training data"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)(Z.a,{className:"col-2",children:[Object(i.jsxs)(Z.a.Group,{controlId:"userSelect",children:[Object(i.jsx)(Z.a.Label,{children:"Select User:"}),Object(i.jsx)(Z.a.Control,{as:"select",multiple:!0,onChange:this.onUserSelect.bind(this),children:this.renderUserList()})]}),Object(i.jsxs)(Z.a.Group,{controlId:"userRequestSelect",children:[Object(i.jsx)(Z.a.Label,{children:"Users with Request:"}),Object(i.jsx)(Z.a.Control,{as:"select",multiple:!0,onChange:this.onUserSelect.bind(this),children:this.renderUserRequestList()})]})]}),Object(i.jsx)("div",{className:"col-9 offset-1",children:this.state.showTable&&this.renderLogTable()})]})]})}}]),a}(r.Component),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(b.a,{children:[Object(i.jsx)(A,{}),Object(i.jsx)("br",{}),Object(i.jsx)(m.b,{path:"/",exact:!0,component:k}),Object(i.jsx)(m.b,{path:"/training",exact:!0,component:Q}),Object(i.jsx)(m.b,{path:"/stats",exact:!0,component:L}),Object(i.jsx)(m.b,{path:"/settings",exact:!0,component:K}),Object(i.jsx)(m.b,{path:"/admin",exact:!0,component:Y}),Object(i.jsx)(m.b,{path:"/login",exact:!0,component:X}),Object(i.jsx)(m.b,{path:"/signup",exact:!0,component:J})]})})}}]),a}(r.Component),$=(a(96),a(31)),ee={trainingType:"alphabet",trainingNumber:1,showTrainingMain:!1,showTrainingSettings:!0};var te={username:"",name:"",status:""};var ae=Object($.b)({trainSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return e=t.payload;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return e=t.payload;default:return e}}}),ne=Object($.c)(ae,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(i.jsx)(O.a,{store:ne,children:Object(i.jsx)(_,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.9fbdaf6d.chunk.js.map