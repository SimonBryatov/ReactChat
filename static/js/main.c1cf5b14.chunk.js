(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(63)},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(21),o=a.n(r),c=(a(29),a(31),a(3)),u=a(4),i=a(6),l=a(5),p=a(7),m=(a(33),function(e){var t=e.children,a=e.onLogOut;return s.a.createElement("header",{className:"Header"},s.a.createElement("p",{className:"Header-userName"},t),s.a.createElement("div",{className:"Header-button",onClick:a},s.a.createElement("div",{className:"Header-button_text"},"\u0412\u044b\u0439\u0442\u0438"),s.a.createElement("i",{className:"fas fa-sign-out-alt"})))}),h=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).handleLogIn=function(){var e=a.props.inputValue;""!==e&&a.props.onLogIn(e)},a.handleInputChange=function(e){a.props.onInputChange(e.target.value)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.isOpened?s.a.createElement("div",{className:"AuthDialog"},s.a.createElement("div",{className:"AuthDialog-form"},s.a.createElement("h2",null,"\u0427\u0430\u0442\u0438\u043a"),s.a.createElement("input",{className:"AuthDialog-input",placeholder:"\u041b\u043e\u0433\u0438\u043d",onChange:this.handleInputChange,value:this.props.inputValue}),s.a.createElement("button",{onClick:this.handleLogIn,className:"AuthDialog-button"},"\u0412\u043e\u0439\u0442\u0438"))):null}}]),t}(s.a.Component)),g=(a(37),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).handleInputChange=function(e){a.props.onInputChange(e.target.value)},a.keyListener=function(e){13===e.keyCode&&e.ctrlKey&&a.props.onSend()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"Footer","data-grid":"va-stretch"},s.a.createElement("div",{className:"Footer-textarea-container"},s.a.createElement("textarea",{className:"Footer-textarea",placeholder:"Ctrl+Enter \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438",onKeyDown:this.keyListener,onChange:this.handleInputChange,value:this.props.inputValue})),s.a.createElement("div",{className:"Footer-gap"}),s.a.createElement("div",{className:"Footer-button",onClick:this.props.onSend},s.a.createElement("i",{className:"Footer-button-icon far fa-paper-plane"})))}}]),t}(s.a.Component)),d=(a(39),function(e){var t=e.hide,a=e.children;return t?null:a}),f=a(15),v=a.n(f),b=function(e){var t=e.message,a=e.isOutgoing;return s.a.createElement("div",{className:v()("ChatMessage",{"justify-right":a})},s.a.createElement("div",{className:v()("ChatMessage-message-avatar",{"order-2":a})},s.a.createElement("i",{className:"ChatMessage-message-avatar__icon fas fa-user-circle"}),s.a.createElement(d,{hide:a},s.a.createElement("div",{className:"ChatMessage-message-avatar__username"},t.name))),s.a.createElement("div",{className:"ChatMessage-message-text"},t.text))},O=(a(41),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).renderMessages=function(){return a.props.messages.filter(function(e){return!Object.values(e).reduce(function(e,t){return"object"===typeof t||e},!1)&&e.id}).map(function(e){return s.a.createElement(b,{isOutgoing:a.props.userName===e.name,message:e,key:e.id})})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"scrollToBottom",value:function(){this.container.scrollTop=this.container.scrollHeight}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"ChatSpace"},s.a.createElement("div",{className:"ChatSpace-messages",ref:function(t){e.container=t}},this.renderMessages()))}}]),t}(s.a.Component)),N=a(12),E="INPUT_VALUE_CHANGE",C="LOG_OUT",j="LOG_IN",y="UPDATE_MESSAGE_POOL";a(47);var I=a(17),k=a.n(I);k.a.initializeApp({apiKey:"AIzaSyAqiGbBbiz9l0XKIQeTw1qlVonK8rmS3hU",authDomain:"altarixchat.firebaseapp.com",databaseURL:"https://altarixchat.firebaseio.com",projectId:"altarixchat",storageBucket:"altarixchat.appspot.com",messagingSenderId:"707928431356"});var L=k.a.database(),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).onInputChange=function(e){a.props.handleInputChange(e)},a.sendMessage=function(){var e=a.props.inputValue;if(""!==e){a.props.handleInputChange("");var t=Date.now(),n={id:t,text:e,name:a.props.userName};L.ref("/messages/".concat(t)).set(n)}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.messagesRef=L.ref("messages"),this.messagesRef.on("value",function(t){e.props.updateMessagePool(Object.values(t.val()))})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h,{isOpened:!this.props.userName,inputValue:this.props.inputValue,onInputChange:this.onInputChange,onLogIn:this.props.handleLogIn}),s.a.createElement(m,{onLogOut:this.props.handleLogOut},this.props.userName),s.a.createElement(O,{messages:this.props.messages,userName:this.props.userName}),s.a.createElement(g,{messages:this.props.messages,onSend:this.sendMessage,onInputChange:this.onInputChange,inputValue:this.props.inputValue}))}}]),t}(n.Component),V=Object(N.b)(function(e){return{userName:e.userName,messages:e.messages,inputValue:e.inputValue}},function(e){return{handleLogOut:function(){e({type:C})},updateMessagePool:function(t){e(function(e){return{type:y,messages:e}}(t))},handleLogIn:function(t){e(function(e){return{type:j,userName:e}}(t))},handleInputChange:function(t){e(function(e){return{type:E,value:e}}(t))}}})(A),w=a(10),M=a(11);var x=Object(w.c)(function(e,t){switch(t.type){case E:return Object(M.a)({},e,{inputValue:t.value});case C:return Object(M.a)({},e,{userName:""});case j:return Object(M.a)({},e,{inputValue:"",userName:t.userName});case y:return Object(M.a)({},e,{messages:t.messages});default:return e}},{messages:[],userName:"\u0421\u0435\u043c\u0451\u043d \u0411\u0440\u044f\u0442\u043e\u0432",inputValue:""},Object(w.a)(function(e){return function(t){return function(a){console.log("dispatching",a);var n=t(a);return console.log("next state",e.getState()),n}}}));o.a.render(s.a.createElement(N.a,{store:x},s.a.createElement(V,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.c1cf5b14.chunk.js.map