(this["webpackJsonpgesture-web-app"]=this["webpackJsonpgesture-web-app"]||[]).push([[0],{21:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),s=n(30),r=n.n(s),c=n(12),o=n(2),l=(n(38),n(21),n(4)),u=n(5),h=n(7),j=n(6),b=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(a.jsx)(c.b,{to:"/",className:"navbar-brand",children:"Home"}),Object(a.jsx)("div",{className:"collapse navbar-collapse",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/instructions",className:"nav-link",children:"Getting Started"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/training",className:"nav-link",children:"Training"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/stats",className:"nav-link",children:"Stats"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/settings",className:"nav-link",children:"Settings"})})]})})]})}}]),n}(i.Component),d=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"You are on homepage dashboard"})})}}]),n}(i.Component),g=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={trainType:"",trainNum:""},a}return Object(u.a)(n,[{key:"onTypeChange",value:function(t){this.setState({trainType:t.target.value}),this.props.onSelectTypeChange(t.target.value)}},{key:"onNumberChange",value:function(t){this.setState({trainNum:t.target.value}),this.props.onSelectNumberChange(t.target.value)}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Training Configuration"}),Object(a.jsx)("p",{children:"Layout: Start button, information, current settings: go to settings to change"}),Object(a.jsx)("p",{children:"Current configurations: Gesture actions: Trace letters.  Time limit. Training sets."}),Object(a.jsxs)("label",{children:["Training Set",Object(a.jsxs)("select",{value:this.state.trainType,onChange:this.onTypeChange.bind(this),children:[Object(a.jsx)("option",{value:"alphabet",children:"Alphabet (26)"}),Object(a.jsx)("option",{value:"alphanumeric",children:"Alphanumeric (36)"}),Object(a.jsx)("option",{value:"custom",children:"Custom"})]})]}),Object(a.jsxs)("label",{children:["# of Sets",Object(a.jsxs)("select",{value:this.state.trainNum,onChange:this.onNumberChange.bind(this),children:[Object(a.jsx)("option",{value:"1",children:"1"}),Object(a.jsx)("option",{value:"2",children:"2"}),Object(a.jsx)("option",{value:"3",children:"3"})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"btn-primary",onClick:this.props.startTraining,children:"Start training"})})]})})}}]),n}(i.Component),p=n(20),O=n.n(p),v=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={letter:"",letterlist:"",logdata:"",counter:-1,instructionText1:"Before starting training, make sure your Bluetooth device is paired and connected to your web application.",instructionText2:"Please hit the button on the device to check if your device is connected."},a}return Object(u.a)(n,[{key:"startLog",value:function(t){var e=this;if(-1!==this.state.counter)this.setState({letter:t}),this.nameInput.focus(),this.setState({instructionText1:""});else{var n=this.props.parentData.trainingType,a=parseInt(this.props.parentData.trainingNumber);"alphabet"===n?this.setState({letterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(a).split("").sort((function(){return.5-Math.random()}))},(function(){return console.log(e.state.letterlist)})):"alphanumeric"===n?this.setState({letterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".repeat(a).split("").sort((function(){return.5-Math.random()}))},(function(){return console.log(e.state.letterlist)})):(alert("Not yet coded, please go back and choose alphabet training set. Sorry."),window.location.reload()),this.setState({counter:this.state.letterlist.length,instructionText1:"Device Connected!!! Ready to begin training.",instructionText2:"NEXT LETTER:"})}this.setState({letter:this.state.letterlist[this.state.counter-1]}),console.log(this.state.counter),this.setState({counter:this.state.counter-1})}},{key:"logging",value:function(t){this.setState({logdata:t.target.value})}},{key:"sendLog",value:function(t){console.log(this.state.logdata),this.nameInput.blur(),this.setState({logdata:""})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"training-instructions-1",children:[this.state.instructionText1,Object(a.jsx)(O.a,{handleKeys:["esc"],onKeyEvent:function(e){return t.sendLog(e)},children:Object(a.jsx)("textarea",{rows:"1",cols:"1",type:"text",value:this.state.logdata,onChange:this.logging.bind(this),ref:function(e){t.nameInput=e}})})]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"training-instructions-2",children:this.state.instructionText2}),Object(a.jsx)(O.a,{handleKeys:["ctrl"],onKeyEvent:function(e){return t.startLog(e)}}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"next-letter col-6 offset-3",children:this.state.letter}),Object(a.jsx)("div",{className:"align-self-center col-2 offset-1",children:"SETS LEFT"})]})]})}}]),n}(i.Component),m=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).state={showTrainingSettings:!0,showTrainingMain:!1,trainingType:"alphabet",trainingNumber:"1"},t}return Object(u.a)(n,[{key:"toggleComponent",value:function(t){switch(t){case"showTrainingSettings":this.setState({showTrainingSettings:!this.state.showTrainingSettings});break;case"showTrainingMain":this.setState({showTrainingMain:!this.state.showTrainingMain})}}},{key:"updateTrainingType",value:function(t){this.setState({trainingType:t})}},{key:"updateTrainingNumber",value:function(t){this.setState({trainingNumber:t})}},{key:"startTraining",value:function(){this.toggleComponent("showTrainingMain"),this.toggleComponent("showTrainingSettings")}},{key:"render",value:function(){var t=this.state,e=t.showTrainingMain,n=t.showTrainingSettings;return Object(a.jsxs)("div",{children:[n&&Object(a.jsx)(g,{startTraining:this.startTraining.bind(this),onSelectTypeChange:this.updateTrainingType.bind(this),onSelectNumberChange:this.updateTrainingNumber.bind(this)}),e&&Object(a.jsx)(v,{parentData:this.state})]})}}]),n}(i.Component),x=n(13),f=n(32),y=n.n(f),T=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).onChangeUsername=a.onChangeUsername.bind(Object(x.a)(a)),a.onChangeScore=a.onChangeScore.bind(Object(x.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(x.a)(a)),a.onSubmit=a.onSubmit.bind(Object(x.a)(a)),a.state={user:"",score:0,description:"",userList:[]},a}return Object(u.a)(n,[{key:"onChangeUsername",value:function(t){this.setState({user:t.target.value})}},{key:"onChangeScore",value:function(t){this.setState({score:t.target.value})}},{key:"onChangeDescription",value:function(t){this.setState({description:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault();var e={user:this.state.user,score:this.state.score,description:this.state.description};console.log(window.location.href),console.log(window.location.hostname),y.a.post(window.location.href,e).then((function(t){return console.log(t.data)})),this.setState({user:"",score:0,description:""}),console.log(e)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Add new user"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.user,onChange:this.onChangeUsername})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Score: "}),Object(a.jsx)("input",{type:"number",required:!0,className:"form-control",value:this.state.score,onChange:this.onChangeScore})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Description: "}),Object(a.jsx)("input",{type:"text",className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Add user",className:"btn btn-primary"})})]})]})}}]),n}(i.Component),S=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"You are on settings page."})})}}]),n}(i.Component),C=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Getting started."})})}}]),n}(i.Component);var N=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(c.a,{children:[Object(a.jsx)(b,{}),Object(a.jsx)("br",{}),Object(a.jsx)(o.a,{path:"/",exact:!0,component:d}),Object(a.jsx)(o.a,{path:"/instructions",exact:!0,component:C}),Object(a.jsx)(o.a,{path:"/training",exact:!0,component:m}),Object(a.jsx)(o.a,{path:"/stats",exact:!0,component:T}),Object(a.jsx)(o.a,{path:"/settings",exact:!0,component:S})]})})};r.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.2cfacb24.chunk.js.map