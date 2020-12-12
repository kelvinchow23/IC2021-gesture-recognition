(this["webpackJsonpgesture-web-app"]=this["webpackJsonpgesture-web-app"]||[]).push([[0],{63:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),i=n(29),r=n.n(i),c=n(12),o=n(2),l=(n(37),n(4)),j=n(5),h=n(7),u=n(6),b=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(a.jsx)(c.b,{to:"/",className:"navbar-brand",children:"Home"}),Object(a.jsx)("div",{className:"collapse navbar-collapse",children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/instructions",className:"nav-link",children:"Getting Started"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/training",className:"nav-link",children:"Training"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/stats",className:"nav-link",children:"Stats"})}),Object(a.jsx)("li",{className:"navbar-item",children:Object(a.jsx)(c.b,{to:"/settings",className:"nav-link",children:"Settings"})})]})})]})}}]),n}(s.Component),d=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"You are on homepage dashboard"})})}}]),n}(s.Component),g=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Training Configuration"}),Object(a.jsx)("p",{children:"Layout: Start button, information, current settings: go to settings to change"}),Object(a.jsx)("p",{children:"Current configurations: Gesture actions: Trace letters.  Time limit. Training sets."}),Object(a.jsx)("button",{className:"btn-primary",onClick:this.props.startTraining,children:"Start training"})]})})}}]),n}(s.Component),O=n(20),p=n.n(O),m=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={letter:"",logdata:""},a}return Object(j.a)(n,[{key:"startLog",value:function(t){this.setState({letter:t}),this.nameInput.focus()}},{key:"logging",value:function(t){this.setState({logdata:t.target.value})}},{key:"sendLog",value:function(t){console.log(this.state.logdata),this.nameInput.blur(),this.setState({logdata:""})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Hit escape key."}),Object(a.jsx)(p.a,{handleKeys:["esc"],onKeyEvent:function(e){return t.startLog(e)}})]}),Object(a.jsx)("h1",{children:this.state.letter}),Object(a.jsx)("div",{style:{opacity:100},children:Object(a.jsx)(p.a,{handleKeys:["esc"],onKeyEvent:function(e){return t.sendLog(e)},children:Object(a.jsx)("input",{type:"text",value:this.state.logdata,onChange:this.logging.bind(this),ref:function(e){t.nameInput=e}})})})]})}}]),n}(s.Component),v=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).state={showTrainingSettings:!0,showTrainingMain:!1},t}return Object(j.a)(n,[{key:"toggleComponent",value:function(t){switch(t){case"showTrainingSettings":this.setState({showTrainingSettings:!this.state.showTrainingSettings}),console.log(t+this.state.howTrainingSettings);break;case"showTrainingMain":this.setState({showTrainingMain:!this.state.showTrainingMain}),console.log(t+this.state.showTrainingMain)}}},{key:"startTraining",value:function(){this.toggleComponent("showTrainingMain"),this.toggleComponent("showTrainingSettings")}},{key:"render",value:function(){var t=this.state,e=t.showTrainingMain,n=t.showTrainingSettings;return Object(a.jsxs)("div",{children:[n&&Object(a.jsx)(g,{startTraining:this.startTraining.bind(this)}),e&&Object(a.jsx)(m,{})]})}}]),n}(s.Component),x=n(13),f=n(31),y=n.n(f),S=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).onChangeUsername=a.onChangeUsername.bind(Object(x.a)(a)),a.onChangeScore=a.onChangeScore.bind(Object(x.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(x.a)(a)),a.onSubmit=a.onSubmit.bind(Object(x.a)(a)),a.state={user:"",score:0,description:"",userList:[]},a}return Object(j.a)(n,[{key:"onChangeUsername",value:function(t){this.setState({user:t.target.value})}},{key:"onChangeScore",value:function(t){this.setState({score:t.target.value})}},{key:"onChangeDescription",value:function(t){this.setState({description:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault();var e={user:this.state.user,score:this.state.score,description:this.state.description};console.log(window.location.href),console.log(window.location.hostname),y.a.post(window.location.href,e).then((function(t){return console.log(t.data)})),this.setState({user:"",score:0,description:""}),console.log(e)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Add new user"}),Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Username: "}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.user,onChange:this.onChangeUsername})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Score: "}),Object(a.jsx)("input",{type:"number",required:!0,className:"form-control",value:this.state.score,onChange:this.onChangeScore})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Description: "}),Object(a.jsx)("input",{type:"text",className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",value:"Add user",className:"btn btn-primary"})})]})]})}}]),n}(s.Component),C=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"You are on settings page."})})}}]),n}(s.Component),k=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Getting started."})})}}]),n}(s.Component);var w=function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(c.a,{children:[Object(a.jsx)(b,{}),Object(a.jsx)("br",{}),Object(a.jsx)(o.a,{path:"/",exact:!0,component:d}),Object(a.jsx)(o.a,{path:"/instructions",exact:!0,component:k}),Object(a.jsx)(o.a,{path:"/training",exact:!0,component:v}),Object(a.jsx)(o.a,{path:"/stats",exact:!0,component:S}),Object(a.jsx)(o.a,{path:"/settings",exact:!0,component:C})]})})};r.a.render(Object(a.jsx)(w,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.314ba2ce.chunk.js.map