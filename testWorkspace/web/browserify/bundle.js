(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var m1 = require("./module1");
var m2 = require("./module2");
console.log(m1.kModule1 + m2.kModule2);

},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.kModule1 = 1;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.kModule2 = 2;

},{}]},{},[1])
//# sourceMappingURL=bundle.js.map
