(this["webpackJsonpreact-deploynew"]=this["webpackJsonpreact-deploynew"]||[]).push([[0],{15:function(e,_,t){},16:function(e,_,t){"use strict";t.r(_);var n=t(0),c=t(1),l=t.n(c),i=t(8),a=t.n(i);t(15),t.p,t(7);var s=t(2),r=t(3),u=t(5),b=t(4),d=t(9),o=function(e){Object(u.a)(t,e);var _=Object(b.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=_.call.apply(_,[this].concat(c))).state={isclicked:!1,myval:""},e}return Object(r.a)(t,[{key:"handleClick",value:function(e){this.setState({isclicked:!0}),this.setState((function(_){return{myval:_.myval+e}}))}},{key:"handleClickDelete",value:function(e){this.setState({isclicked:!0}),this.setState((function(e){return{myval:""}}))}},{key:"handleClickBackspace",value:function(e){this.setState({isclicked:!0}),this.setState((function(e){return{myval:e.myval.slice(0,-1)}}))}},{key:"render",value:function(){var e=Object(n.jsx)(d.a,{btnvalue:this.state.myval});return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsxs)("h1",{children:[" ",Object(n.jsx)("b",{children:"Calculator using React"})]}),e,Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:this.handleClick.bind(this,7),button:!0,children:"7"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,8),button:!0,children:"8"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,9),button:!0,children:"9"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,"/"),button:!0,children:"/"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:this.handleClick.bind(this,4),button:!0,children:"4"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,5),button:!0,children:"5"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,6),button:!0,children:"6"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,"*"),button:!0,children:"*"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:this.handleClick.bind(this,1),button:!0,children:"1"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,2),button:!0,children:"2"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,3),button:!0,children:"3"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,"-"),button:!0,children:"-"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:this.handleClick.bind(this,0),button:!0,children:"0"}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,"."),button:!0,children:"."}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,"="),button:!0,children:"="}),Object(n.jsx)("button",{onClick:this.handleClick.bind(this,"+"),button:!0,children:"+"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:this.handleClickDelete.bind(this,"C"),button:!0,children:"C"}),Object(n.jsx)("button",{onClick:this.handleClickBackspace.bind(this,"CE"),button:!0,children:"CE"})]})]})})}}]),t}(c.Component),h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(_){var t=_.getCLS,n=_.getFID,c=_.getFCP,l=_.getLCP,i=_.getTTFB;t(e),n(e),c(e),l(e),i(e)}))};a.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(o,{})}),document.getElementById("root")),h()},7:function(e,_,t){},9:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),ResultCmp=function(_Component){Object(C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(ResultCmp,_Component);var _super=Object(C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(ResultCmp);function ResultCmp(){var e;Object(C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,ResultCmp);for(var _=arguments.length,t=new Array(_),n=0;n<_;n++)t[n]=arguments[n];return(e=_super.call.apply(_super,[this].concat(t))).state={},e}return Object(C_madhu_react_react_deploynew_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(ResultCmp,[{key:"render",value:function render(){var btnvalue=this.props.btnvalue;if(btnvalue.includes("=")){var newbtnvalue=btnvalue;newbtnvalue=newbtnvalue.replace("=","");var finalresult=eval(newbtnvalue)}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"result",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p",{children:[btnvalue,finalresult]})})}}]),ResultCmp}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=ResultCmp}},[[16,1,2]]]);
//# sourceMappingURL=main.15305ec7.chunk.js.map