/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nexusdk/dist/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/nexusdk/dist/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(global,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,\"__esModule\",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n.w={},n(n.s=0)}([function(e,t,n){\"use strict\";n.r(t);var r={};function o(e,t,n){let r=e;const o=l(t||\"\");for(let e=0;e<o.length;e+=1){let t=o[e];\"\"!==t&&(\"]\"===t[t.length-1]&&(t=t.substr(0,t.length-1),t=parseInt(t,10)),e!==o.length-1?(\"object\"!=typeof r[t]&&(r[t]={}),r=r[t]):r[t]=n)}return e}function s(e,t){return\"object\"==typeof e&&e.hasOwnProperty(t)}function i(e,t,n){let r=e;const o=l(t||\"\");for(let e=0;e<o.length;e+=1){let t=o[e];if(\"\"!==t){if(\"]\"===t[t.length-1]&&(t=t.substr(0,t.length-1),t=parseInt(t,10)),!s(r,t))return n;r=r[t]}}return r}function u(e,t,n,r){return null===t||void 0===t||\"\"===t?t=n:t+=`.${n}`,o(e,t,r)}function c(e,t,n,r){let o=e;return(t||\"\").split(\".\").forEach((e,t,s)=>{\"\"!==e&&t!==s.length-1?(void 0===o[n]&&(o[n]={[e]:{}}),o=o[n][e]):(void 0===o[n]&&(o[n]={[e]:{}}),o[n][e]=r)}),e}function a(e,t,n,r,o){return null===t||void 0===t||\"\"===t?t=r:t+=`.${r}`,c(e,t,n,o)}function l(e){if(e instanceof Array)return e;let t=!1,n=0,r=!1,o=!1;const s=e.length,i=[];for(let u=0;u<s+1;u+=1){const c=e[u];if(t&&!o?\"]\"===c&&(o=!0):\".\"===c?r=!0:\"[\"===c&&(r=!0,t=!0),r||u===s){let s=e.substr(n,u-n-(o?1:0));if(t){const e=parseInt(s,10);isNaN(e)||(s=e)}i.push(s),n=u+1,r=!1,o&&(t=!1),o=!1}}return i}function f(e){return e.reduce((e,t,n)=>\"[object Number]\"===toString.call(t)?`${e}[${t}]`:e+(n>0?\".\":\"\")+t,\"\")}function h(e,t,n={}){const r=l(t);let o=e;for(let e=0;e<r.length;e+=1){const t=r[e];if(!s(o,t)){const s=e===r.length-1?null:r[e+1];null===s?o[t]=n:\"[object Number]\"===toString.call(s)?o[t]=[]:o[t]={}}o=o[t]}return o}n.d(r,\"set\",function(){return o}),n.d(r,\"has\",function(){return s}),n.d(r,\"get\",function(){return i}),n.d(r,\"setKey\",function(){return u}),n.d(r,\"setWithSubkey\",function(){return c}),n.d(r,\"setKeyWithSubkey\",function(){return a}),n.d(r,\"getObjectPath\",function(){return l}),n.d(r,\"getStringPathForArray\",function(){return f}),n.d(r,\"assurePathExists\",function(){return h}),n.d(t,\"nexusdk\",function(){return g}),n.d(t,\"object\",function(){return r});const d=1;class g{constructor({id:e,name:t}={}){this.errors=[],this.onInternalMessage=this.onInternalMessage.bind(this),this.onReceiveMessage=this.onReceiveMessage.bind(this),this.sendMessage=this.sendMessage.bind(this),void 0!==global.process&&(this.communicationType=d,this.process=global.process,this.process.on(\"message\",this.onReceiveMessage)),this.hook={id:e,name:t},this.callbacks={internal:this.onInternalMessage}}onInternalMessage(e){const{name:t,data:n}=e;\"meta\"===t?this.meta=n:\"set_hook\"===t&&(this.hook=n)}sendMessage(e){this.communicationType===d&&this.process.send({meta:this.meta,hook:this.hook,time:(new Date).toISOString(),message:e})}onReceiveMessage(e){const{type:t,data:n}=e,r=this.callbacks[t];r&&r(n,{type:t})}on(e,t){\"internal\"===e&&console.error(\"The internal callback is reserved\"),this.callbacks[e]=t}}t.default=new g}])});\n\n//# sourceURL=webpack:///./node_modules/nexusdk/dist/src/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nexusdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexusdk */ \"./node_modules/nexusdk/dist/src/index.js\");\n/* harmony import */ var nexusdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexusdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction callWrap(messageType) {\n  return function (message) {\n    nexusdk__WEBPACK_IMPORTED_MODULE_0___default.a.sendMessage({ type: messageType, data: message });\n  }\n}\n\nnexusdk__WEBPACK_IMPORTED_MODULE_0___default.a.on('configuration', () => {\n  return {\n    command: { required: true, _type: 'string' },\n    timeout: { required: false, _type: 'number' },\n    env: { required: false, _type: 'object', description: 'key value environment variables to send to process' },\n  };\n});\n\nnexusdk__WEBPACK_IMPORTED_MODULE_0___default.a.on('execute', (properties) => {\n  const { command, timeout, env } = properties;\n  const proc = Object(child_process__WEBPACK_IMPORTED_MODULE_1__[\"exec\"])(command, { windowsHide: true, timeout, env, stdio: 'pipe' });\n  proc.stdout.on('data', callWrap('log'));\n  proc.stderr.on('data', callWrap('err'));\n  proc.stdout.on('close', callWrap('close'));\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ })

/******/ });