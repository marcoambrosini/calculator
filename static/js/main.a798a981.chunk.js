(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  background: #b2b1a4;\n  box-shadow: 2px -2px 0px #686f6e;\n  border-radius: 2px;\n  width: 60px;\n  height: 60px;\n  border: 0px;\n  margin: auto;\n  color: white;\n  font-weight: 400;\n  font-size: 20px;\n  cursor: pointer;\n  &:active {\n    background-color: #a5a494;\n    box-shadow: inset 2px -2px 0px #686f6e;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return r=function(){return _},_}e.a=t.a.button(r())},function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  background: #b2b1a4;\n  box-shadow: 2px -2px 0px #686f6e;\n  border-radius: 2px;\n  width: 60px;\n  height: 60px;\n  border: 0px;\n  margin: auto;\n  color: #222e2c;\n  font-weight: 400;\n  font-size: 20px;\n  cursor: pointer;\n  &:active {\n    background-color: #a5a494;\n    box-shadow: inset 2px -2px 0px #686f6e;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return r=function(){return _},_}e.a=t.a.button(r())},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return App});var _mnt_c_Users_marco_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_components_Case__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_components_Panel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),_components_Display__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),_components_Brand__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_components_Board__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_components_Pads__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(18),_components_Pad__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3),_components_EqualPad__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(19),_components_FunctionPad__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(4);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_mnt_c_Users_marco_Desktop_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),expression=_useState2[0],setExpression=_useState2[1],pushToString=function(_){return"0"===expression&&"0"===_.target.value?0:"0"===expression&&"."!==_.target.value?0:void setExpression(expression.concat(_.target.value))},handleOperator=function(_){var e=expression[expression.length-1];"+"===e||"-"===e||"*"===e||"/"===e?setExpression(expression.slice(0,-1).concat(_.target.value)):pushToString(_)},handleDecimal=function(_){var e=expression.split(/\+|-|\*|\//gi),n=e[e.length-1];if(console.log(n),"."===n||-1!==n.indexOf("."))return 0;"+"===n||"-"===n||"*"===n||"/"===n?setExpression(expression.concat("0.")):pushToString(_)},handleEquals=function handleEquals(){console.log(expression),setExpression(eval(expression).toString())},handleClear=function(){setExpression("")};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Case__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Panel__WEBPACK_IMPORTED_MODULE_3__.a,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Display__WEBPACK_IMPORTED_MODULE_4__.a,{id:"display"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4",null,expression||"0")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Brand__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"brand"},"Texas instruments"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"model"},"Datamath")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Board__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pads__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunctionPad__WEBPACK_IMPORTED_MODULE_10__.a,{className:"ce",id:"clear",value:"CE",onClick:handleClear},"CE"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunctionPad__WEBPACK_IMPORTED_MODULE_10__.a,{className:"divide",id:"divide",value:"/",onClick:handleOperator},"\xf7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunctionPad__WEBPACK_IMPORTED_MODULE_10__.a,{className:"multiply",id:"multiply",value:"*",onClick:handleOperator},"\xd7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"seven",id:"seven",value:"7",onClick:pushToString},"7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"eight",id:"eight",value:"8",onClick:pushToString},"8"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"nine",id:"nine",value:"9",onClick:pushToString},"9"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunctionPad__WEBPACK_IMPORTED_MODULE_10__.a,{className:"c",id:"",value:"C",onClick:handleClear},"C"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"four",id:"four",value:"4",onClick:pushToString},"4"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"five",id:"five",value:"5",onClick:pushToString},"5"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"six",id:"six",value:"6",onClick:pushToString},"6"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunctionPad__WEBPACK_IMPORTED_MODULE_10__.a,{className:"subtract",id:"subtract",onClick:handleOperator,value:"-"},"-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"one",id:"one",value:"1",onClick:pushToString},"1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"two",id:"two",value:"2",onClick:pushToString},"2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"three",id:"three",value:"3",onClick:pushToString},"3"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FunctionPad__WEBPACK_IMPORTED_MODULE_10__.a,{className:"add",id:"add",value:"+",onClick:handleOperator},"+"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"zero",id:"zero",value:"0",onClick:pushToString},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pad__WEBPACK_IMPORTED_MODULE_8__.a,{className:"point",id:"decimal",value:".",onClick:handleDecimal},"."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_EqualPad__WEBPACK_IMPORTED_MODULE_9__.a,{className:"equal",id:"equals",value:"=",onClick:handleEquals},"=")))))}},function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  position: absolute;\n  width: 386px;\n  height: 680px;\n  left: calc(50% - 386px / 2 + 20px);\n  top: calc(50% - 638px / 2 + 17px);\n\n  background: linear-gradient(\n    90deg,\n    #b9b29b 0%,\n    #ece6d1 9.09%,\n    #ece6d1 91.41%,\n    #b9b29b 100%\n  );\n  box-shadow: 20px -20px 20px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n"]);return r=function(){return _},_}e.a=t.a.div(r())},,,function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  position: absolute;\n  width: 353px;\n  height: 563px;\n  left: calc(50% - 353px / 2);\n  top: calc(50% - 563px / 2 + 39px);\n\n  border: 10px solid #fffcf1;\n  box-sizing: border-box;\n  border-radius: 40px 40px 20px 20px;\n  z-index: 3;\n"]);return r=function(){return _},_}e.a=t.a.div(r())},function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  position: absolute;\n  width: 353px;\n  height: 80px;\n  left: calc(50% - 353px / 2);\n  top: calc(50% - 80px / 2 - 192px);\n\n  background: #000000;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n  border-radius: 40px 40px 0px 0px;\n"]);return r=function(){return _},_}e.a=t.a.div(r())},function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  position: absolute;\n  width: 353px;\n  height: 52px;\n  left: calc(50% - 353px / 2);\n  top: calc(50% - 52px / 2 - 126px);\n\n  background: #344340;\n  box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n"]);return r=function(){return _},_}e.a=t.a.div(r())},function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  position: absolute;\n  width: 353px;\n  height: 421px;\n  left: calc(50% - 353px / 2);\n  top: calc(50% - 421px / 2 + 110.5px);\n\n  background: #e9dfc0;\n  border-radius: 0px 0px 20px 20px;\n  display: grid;\n"]);return r=function(){return _},_}e.a=t.a.div(r())},function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(['\n  display: grid;\n  grid-template-columns: repeat(4, 72px);\n  grid-template-rows: repeat(5, 72px);\n  grid-template-areas:\n    "r d m ."\n    "t y u c"\n    "g h j s"\n    "v b n a"\n    "z p e e";\n\n  margin: 30px auto auto auto;\n  z-index: 10;\n']);return r=function(){return _},_}e.a=t.a.div(r())},function(_,e,n){"use strict";var a=n(1),t=n(2);function r(){var _=Object(a.a)(["\n  background: #f8792d;\n  box-shadow: 2px -2px 0px #686f6e;\n  border-radius: 2px;\n  width: 130px;\n  height: 60px;\n  border: 0px;\n  margin: auto;\n  font-weight: 400;\n  font-size: 20px;\n  cursor: pointer;\n  &:active {\n    background-color: #d25306;\n    box-shadow: inset 2px -2px 0px #686f6e;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return r=function(){return _},_}e.a=t.a.button(r())},,,function(_,e,n){_.exports=n(34)},,,,,,function(_,e,n){},,,,,,function(_,e,n){"use strict";n.r(e);var a=n(0),t=n.n(a),r=n(5),o=n.n(r),c=(n(28),n(10));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})}],[[22,1,2]]]);
//# sourceMappingURL=main.a798a981.chunk.js.map