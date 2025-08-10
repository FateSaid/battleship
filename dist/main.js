/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./BlackOpsOne-Regular.ttf */ "./src/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "stancil";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* modal background */
::backdrop {
  background-color: black;
  opacity: 0.75;
}

/* modal css */

:modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 300px;
  font-size: 1.3rem;
}

html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

/* menu toolbar */

header {
  display: flex;
  justify-content: flex-end;
}

.restart {
  border: none;
  border-radius: 25px;
  padding: 25px;
  font-size: 1rem;
}

.restart:hover {
  transition: 0.5s;
  transform: scale(1.1);
  color: red;
}

/* Home page content*/

.home-page-option {
  justify-content: space-around;
}

.home-page-option > .title {
  font-size: 18rem;
}

.player-option {
  display: flex;
  justify-content: space-around;
}

.player-option button,
#player-name-btn {
  border: none;
  padding: 10px 20px;
  font-size: 2rem;
  font-family: "stancil", system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: white;
  background-color: black;
  border-radius: 25px;
}

.player-option > button:hover,
#player-name-btn:hover {
  color: black;
  background-color: white;
  transition: 0.2s;
  transform: scale(1.2);
}

.title {
  display: flex;
  justify-content: center;
  font-size: 10rem;
  font-family: "stancil", system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

/* Single Player Menu*/

.player-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.player-input-selection label {
  font-family: "stancil", system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 4rem;
}

.player-one-div,
.player-two-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.player-input-selection > div {
  padding: 20px;
  background-color: lightgray;
  border-radius: 25px;
}

.player-input-selection input {
  height: 25px;
  border-radius: 5px;
  width: 270px;
  text-align: center;
}

/* Multi player menu */

.player-input-selection {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.board {
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: relative;
}

/* coordinate box */

.ship-input-div {
  width: 400px;
  gap: 20px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.ship-input-random,
.start-div,
.message-div {
  border: 1px solid #000;
  border-radius: 25px;
  padding: 20px;
  background-color: #b3b2b22e;
  width: 250px;
}

#random-ship-btn,
#start-btn {
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #0000007d;
  color: white;
  border-radius: 10px;
}

.player-board {
  border: 1px solid #000;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
}

#first-player-board,
#second-player-board {
  display: flex;
  flex-direction: column-reverse;
}

.row {
  display: flex;
  flex: 1;
}

.cell {
  border: 1px solid #b3b2b2;
  flex: 1;
}

.ship {
  background-color: darkblue;
}

.missed {
  background-color: red;
}

.damage {
  background-color: black;
}

.disable,
.missed,
.damage {
  pointer-events: none;
}

.winnerMessage {
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
}

header,
footer {
  border: 1px solid #000;
  background-color: black;
  padding: 20px;
  color: white;
}

footer {
  display: flex;
  justify-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAAqC;AACvC;;AAEA,qBAAqB;AACrB;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,UAAU;AACZ;;AAEA,qBAAqB;;AAErB;EACE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf;wEACsE;EACtE,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,uBAAuB;EACvB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB;wEACsE;AACxE;;AAEA,sBAAsB;;AAEtB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE;wEACsE;EACtE,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA,sBAAsB;;AAEtB;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA,mBAAmB;;AAEnB;EACE,YAAY;EACZ,SAAS;EACT,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;;;EAGE,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,2BAA2B;EAC3B,YAAY;AACd;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,2BAA2B;EAC3B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,yBAAyB;EACzB,OAAO;AACT;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;;EAGE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB","sourcesContent":["@font-face {\n  font-family: \"stancil\";\n  src: url(\"./BlackOpsOne-Regular.ttf\");\n}\n\n/* modal background */\n::backdrop {\n  background-color: black;\n  opacity: 0.75;\n}\n\n/* modal css */\n\n:modal {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 500px;\n  height: 300px;\n  font-size: 1.3rem;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.content {\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n/* menu toolbar */\n\nheader {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.restart {\n  border: none;\n  border-radius: 25px;\n  padding: 25px;\n  font-size: 1rem;\n}\n\n.restart:hover {\n  transition: 0.5s;\n  transform: scale(1.1);\n  color: red;\n}\n\n/* Home page content*/\n\n.home-page-option {\n  justify-content: space-around;\n}\n\n.home-page-option > .title {\n  font-size: 18rem;\n}\n\n.player-option {\n  display: flex;\n  justify-content: space-around;\n}\n\n.player-option button,\n#player-name-btn {\n  border: none;\n  padding: 10px 20px;\n  font-size: 2rem;\n  font-family: \"stancil\", system-ui, \"Segoe UI\", Roboto, Helvetica, Arial,\n    sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  color: white;\n  background-color: black;\n  border-radius: 25px;\n}\n\n.player-option > button:hover,\n#player-name-btn:hover {\n  color: black;\n  background-color: white;\n  transition: 0.2s;\n  transform: scale(1.2);\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  font-size: 10rem;\n  font-family: \"stancil\", system-ui, \"Segoe UI\", Roboto, Helvetica, Arial,\n    sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n/* Single Player Menu*/\n\n.player-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.player-input-selection label {\n  font-family: \"stancil\", system-ui, \"Segoe UI\", Roboto, Helvetica, Arial,\n    sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 4rem;\n}\n\n.player-one-div,\n.player-two-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.player-input-selection > div {\n  padding: 20px;\n  background-color: lightgray;\n  border-radius: 25px;\n}\n\n.player-input-selection input {\n  height: 25px;\n  border-radius: 5px;\n  width: 270px;\n  text-align: center;\n}\n\n/* Multi player menu */\n\n.player-input-selection {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.board {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n  position: relative;\n}\n\n/* coordinate box */\n\n.ship-input-div {\n  width: 400px;\n  gap: 20px;\n  border: 1px solid #000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.ship-input-random,\n.start-div,\n.message-div {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 20px;\n  background-color: #b3b2b22e;\n  width: 250px;\n}\n\n#random-ship-btn,\n#start-btn {\n  padding: 5px 10px;\n  margin-top: 10px;\n  background-color: #0000007d;\n  color: white;\n  border-radius: 10px;\n}\n\n.player-board {\n  border: 1px solid #000;\n  width: 600px;\n  height: 600px;\n  display: flex;\n  flex-direction: column;\n}\n\n#first-player-board,\n#second-player-board {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.row {\n  display: flex;\n  flex: 1;\n}\n\n.cell {\n  border: 1px solid #b3b2b2;\n  flex: 1;\n}\n\n.ship {\n  background-color: darkblue;\n}\n\n.missed {\n  background-color: red;\n}\n\n.damage {\n  background-color: black;\n}\n\n.disable,\n.missed,\n.damage {\n  pointer-events: none;\n}\n\n.winnerMessage {\n  display: flex;\n  justify-content: center;\n  height: 100px;\n  align-items: center;\n}\n\nheader,\nfooter {\n  border: 1px solid #000;\n  background-color: black;\n  padding: 20px;\n  color: white;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/01-ship/ship.js":
/*!*****************************!*\
  !*** ./src/01-ship/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.timesHit = 0;
  }

  hit() {
    this.timesHit += 1;
  }

  isSunk() {
    if (this.timesHit === this.length) {
      return true;
    }
  }
}


/***/ }),

/***/ "./src/02-Gameboard/addShip.js":
/*!*************************************!*\
  !*** ./src/02-Gameboard/addShip.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addShip: () => (/* binding */ addShip),
/* harmony export */   loopCoordinates: () => (/* binding */ loopCoordinates)
/* harmony export */ });
function addShip(ship, start, end, board) {
  let [x1, y1] = start;
  let [x2, y2] = end;

  if (x1 === x2) {
    if (y1 > y2) {
      loopCoordinates(x1, [y1, y2], "horizontal", ship, board);
    } else {
      loopCoordinates(x1, [y2, y1], "horizontal", ship, board);
    }
  }

  if (y1 === y2) {
    if (x1 > x2) {
      loopCoordinates(y1, [x1, x2], "vertical", ship, board);
    } else {
      loopCoordinates(y1, [x2, x1], "vertical", ship, board);
    }
  }
}

function loopCoordinates(same, diff, pos, ship, board) {
  let [diff1, diff2] = diff;

  for (let i = diff1; i >= diff2; i--) {
    if (pos === "horizontal") {
      if (board[same][i][0] === ship) {
        throw new Error("It already contains ship object");
      }
      board[same][i] = ship;
    }

    if (pos === "vertical") {
      if (board[i][same][0] === ship) {
        throw new Error("It already contains ship object");
      }
      board[i][same] = ship;
    }
  }
}




/***/ }),

/***/ "./src/02-Gameboard/create-board.js":
/*!******************************************!*\
  !*** ./src/02-Gameboard/create-board.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* binding */ createBoard)
/* harmony export */ });
function createBoard() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = [];
    for (let j = 0; j < 10; j++) {
      array[i][j] = [];
    }
  }
  return array;
}


/***/ }),

/***/ "./src/02-Gameboard/gameboard.js":
/*!***************************************!*\
  !*** ./src/02-Gameboard/gameboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _create_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-board.js */ "./src/02-Gameboard/create-board.js");
/* harmony import */ var _01_ship_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../01-ship/ship.js */ "./src/01-ship/ship.js");
/* harmony import */ var _addShip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addShip.js */ "./src/02-Gameboard/addShip.js");
/* harmony import */ var _receiveAttack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receiveAttack.js */ "./src/02-Gameboard/receiveAttack.js");





function Gameboard() {
  let board = (0,_create_board_js__WEBPACK_IMPORTED_MODULE_0__.createBoard)();

  let missedAttacks = [];

  const getMissedAttacks = () => missedAttacks;

  const getHitAttacks = () => hitAttacks;

  const getBoard = () => board;

  const resetVariables = () => {
    board = (0,_create_board_js__WEBPACK_IMPORTED_MODULE_0__.createBoard)();
    missedAttacks = [];
    hitAttacks = [];
    shipsSunk = 0;
  };

  function restartBoard() {
    board = (0,_create_board_js__WEBPACK_IMPORTED_MODULE_0__.createBoard)();
  }

  let shipsSunk = 0;

  let hitAttacks = [];

  const getShipSunk = () => shipsSunk;

  function addShipsSunk() {
    shipsSunk += 1;
  }

  function totalShipSunk() {
    if (getShipSunk() === 5) {
      return true;
    }
  }

  function placeShip(name, length, start, end) {
    let ship = new _01_ship_ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(name, length);

    (0,_addShip_js__WEBPACK_IMPORTED_MODULE_2__.addShip)(ship, start, end, board);
  }

  function receiveAttack(coordinate) {
    (0,_receiveAttack_js__WEBPACK_IMPORTED_MODULE_3__.attack)(coordinate, board, getMissedAttacks, addShipsSunk, getHitAttacks);
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    getHitAttacks,
    totalShipSunk,
    getMissedAttacks,
    resetVariables,
    restartBoard,
  };
}


/***/ }),

/***/ "./src/02-Gameboard/receiveAttack.js":
/*!*******************************************!*\
  !*** ./src/02-Gameboard/receiveAttack.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attack: () => (/* binding */ attack)
/* harmony export */ });
function attack(
  coordinate,
  board,
  getMissedAttacks,
  addShipsSunk,
  getHitAttacks
) {
  let [x, y] = coordinate;

  if (!Array.isArray(board[x][y])) {
    board[x][y].hit();
    getHitAttacks().push([x, y]);
    if (board[x][y].isSunk()) {
      addShipsSunk();
    }
  } else {
    getMissedAttacks().push([x, y]);
  }
}


/***/ }),

/***/ "./src/03-Player/player.js":
/*!*********************************!*\
  !*** ./src/03-Player/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _02_Gameboard_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../02-Gameboard/gameboard.js */ "./src/02-Gameboard/gameboard.js");


function Player(name) {
  const game = (0,_02_Gameboard_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  return {
    name,
    game,
  };
}

function Computer() {
  const name = "Computer";
  const game = (0,_02_Gameboard_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  return {
    name,
    game,
  };
}




/***/ }),

/***/ "./src/04-Gameplay/computer-move.js":
/*!******************************************!*\
  !*** ./src/04-Gameplay/computer-move.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateNextTarget: () => (/* binding */ calculateNextTarget),
/* harmony export */   checkDuplicate: () => (/* binding */ checkDuplicate),
/* harmony export */   checkHitAttacks: () => (/* binding */ checkHitAttacks),
/* harmony export */   filterSameShipHit: () => (/* binding */ filterSameShipHit),
/* harmony export */   getShipOrientation: () => (/* binding */ getShipOrientation),
/* harmony export */   potentialMove: () => (/* binding */ potentialMove),
/* harmony export */   predictShipLocation: () => (/* binding */ predictShipLocation),
/* harmony export */   randomCoordinates: () => (/* binding */ randomCoordinates)
/* harmony export */ });
function checkDuplicate(array, coordinate) {
  let stringArray = array.map(JSON.stringify);
  let stringCoordinate = JSON.stringify(coordinate);

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringCoordinate) {
      return false;
    }
  }
  return true;
}

function calculateNextTarget(opponent) {
  //here function for producing potential moves

  let missedArray = opponent.game.getMissedAttacks();
  let hitArray = opponent.game.getHitAttacks();
  let combinedArray = missedArray.concat(hitArray);
  let sameShipCoordinate = filterSameShipHit(opponent);

  if (sameShipCoordinate.length > 1) {
    return predictShipLocation(opponent);
  }

  if (sameShipCoordinate.length === 1) {
    return potentialMove(opponent);
  }

  return randomCoordinates(combinedArray);
}

function predictShipLocation(opp) {
  let missedArray = opp.game.getMissedAttacks();
  let hitArray = opp.game.getHitAttacks();
  let combinedArray = missedArray.concat(hitArray);

  let sameShipCoordinate = filterSameShipHit(opp);
  let planeAlignment = getShipOrientation(sameShipCoordinate);

  for (let i = 0; i < sameShipCoordinate.length; i++) {
    let [x, y] = sameShipCoordinate[i];
    if (planeAlignment === "Vertical") {
      if (x + 1 <= 9 && checkDuplicate(combinedArray, [x + 1, y])) {
        return plusX(x, y);
      }

      if (x - 1 >= 0 && checkDuplicate(combinedArray, [x - 1, y])) {
        return minusX(x, y);
      }
    }

    if (planeAlignment === "Horizontal") {
      if (y + 1 <= 9 && checkDuplicate(combinedArray, [x, y + 1])) {
        return plusY(x, y);
      }
      if (y - 1 >= 0 && checkDuplicate(combinedArray, [x, y - 1])) {
        return minusY(x, y);
      }
    }
  }
}

function potentialMove(opp) {
  let missedArray = opp.game.getMissedAttacks();
  let hitArray = opp.game.getHitAttacks();
  let combinedArray = missedArray.concat(hitArray);

  let shipsNotSunk = checkHitAttacks(opp);

  for (let i = 0; i < shipsNotSunk.length; i++) {
    let [x, y] = shipsNotSunk[i];

    if (x + 1 <= 9 && checkDuplicate(combinedArray, [x + 1, y])) {
      return plusX(x, y);
    }

    if (x - 1 >= 0 && checkDuplicate(combinedArray, [x - 1, y])) {
      return minusX(x, y);
    }

    if (y + 1 <= 9 && checkDuplicate(combinedArray, [x, y + 1])) {
      return plusY(x, y);
    }

    if (y - 1 >= 0 && checkDuplicate(combinedArray, [x, y - 1])) {
      return minusY(x, y);
    }
  }
}

function plusX(x, y) {
  return [x + 1, y];
}

function minusX(x, y) {
  return [x - 1, y];
}

function plusY(x, y) {
  return [x, y + 1];
}

function minusY(x, y) {
  return [x, y - 1];
}

function checkHitAttacks(opp) {
  let hitArray = opp.game.getHitAttacks();
  let board = opp.game.getBoard();

  return hitArray.filter((el) => {
    let [x, y] = el;
    if (!board[x][y].isSunk()) {
      return el;
    }
  });
}

function filterSameShipHit(opponent) {
  let hitArray = checkHitAttacks(opponent);

  let board = opponent.game.getBoard();

  if (hitArray[0] === undefined) {
    return 0;
  }

  let [x, y] = hitArray[0];
  let result = [[x, y]];

  for (let i = 1; i < hitArray.length; i++) {
    let [a, b] = hitArray[i];
    if (board[x][y] === board[a][b]) {
      result.push([a, b]);
    }
  }
  return result;
}

function getShipOrientation(array) {
  let [x, y] = array[0];
  for (let i = 1; i < array.length; i++) {
    let [a, b] = array[i];
    if (x === a) {
      return "Horizontal";
    } else if (y === b) {
      return "Vertical";
    }
  }
}

function randomCoordinates(array) {
  let x = Math.floor(Math.random() * 10);

  let y = Math.floor(Math.random() * 10);

  if (checkDuplicate(array, [x, y])) {
    return [x, y];
  } else {
    return randomCoordinates(array);
  }
}




/***/ }),

/***/ "./src/04-Gameplay/create-player.js":
/*!******************************************!*\
  !*** ./src/04-Gameplay/create-player.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _03_Player_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../03-Player/player.js */ "./src/03-Player/player.js");


function createPlayer(name) {
  let player = new _03_Player_player_js__WEBPACK_IMPORTED_MODULE_0__.Player(name);
  return player;
}


/***/ }),

/***/ "./src/04-Gameplay/gamecontroller.js":
/*!*******************************************!*\
  !*** ./src/04-Gameplay/gamecontroller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameController: () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _create_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-player.js */ "./src/04-Gameplay/create-player.js");
/* harmony import */ var _03_Player_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../03-Player/player.js */ "./src/03-Player/player.js");
/* harmony import */ var _computer_move_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer-move.js */ "./src/04-Gameplay/computer-move.js");
/* harmony import */ var _06_DOM_game_screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../06-DOM/game-screen.js */ "./src/06-DOM/game-screen.js");





function GameController(player1, player2) {
  let players;

  if (player2 === "Computer" || player2 === undefined) {
    players = [(0,_create_player_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(player1), (0,_03_Player_player_js__WEBPACK_IMPORTED_MODULE_1__.Computer)()];
  } else {
    players = [(0,_create_player_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(player1), (0,_create_player_js__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(player2)];
  }

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  function getPlayers() {
    return players;
  }

  function switchPlayer() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  }

  function getOpponent() {
    let opponent = activePlayer === players[0] ? players[1] : players[0];
    return opponent;
  }

  function playRound(coordinates) {
    let [x, y] = coordinates;

    let opponent = getOpponent();

    let missedArray = opponent.game.getMissedAttacks();
    let hitArray = opponent.game.getHitAttacks();

    let combinedArray = missedArray.concat(hitArray);

    if ((0,_computer_move_js__WEBPACK_IMPORTED_MODULE_2__.checkDuplicate)(combinedArray, coordinates)) {
      opponent.game.receiveAttack([x, y]);
    } else {
      throw new Error("Duplicate");
    }

    if (checkWinner(opponent)) {
      (0,_06_DOM_game_screen_js__WEBPACK_IMPORTED_MODULE_3__.outputMessage)(`Winner is ${getActivePlayer().name}`);
      return `Winner is ${getActivePlayer().name}`;
    } else {
      switchPlayer();
    }

    if (getActivePlayer().name === "Computer") {
      let [a, b] = (0,_computer_move_js__WEBPACK_IMPORTED_MODULE_2__.calculateNextTarget)(getOpponent());
      (0,_06_DOM_game_screen_js__WEBPACK_IMPORTED_MODULE_3__.outputMessage)("");
      (0,_06_DOM_game_screen_js__WEBPACK_IMPORTED_MODULE_3__.outputMessage)(`${getActivePlayer().name}'s Turn!`);
      return playRound([a, b]);
    }
  }

  function checkWinner(opponent) {
    return opponent.game.totalShipSunk();
  }

  const restart = () => {
    players.forEach((player) => {
      player.game.resetVariables();
    });

    activePlayer = players[0];
  };

  return {
    getActivePlayer,
    getOpponent,
    playRound,
    getPlayers,
    restart,
    switchPlayer,
  };
}


/***/ }),

/***/ "./src/05-ScreenController/random-ship-placement.js":
/*!**********************************************************!*\
  !*** ./src/05-ScreenController/random-ship-placement.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCoordinates: () => (/* binding */ checkCoordinates),
/* harmony export */   getRandomShipCoordinate: () => (/* binding */ getRandomShipCoordinate),
/* harmony export */   initPlayerBoardShip: () => (/* binding */ initPlayerBoardShip),
/* harmony export */   randomShipPlacement: () => (/* binding */ randomShipPlacement)
/* harmony export */ });
function initPlayerBoardShip(activeUser) {
  activeUser.game.restartBoard();

  placeShipOnBoard(activeUser, "Carrier", 4);

  placeShipOnBoard(activeUser, "Battleship", 3);

  placeShipOnBoard(activeUser, "Destroyer", 2);

  placeShipOnBoard(activeUser, "Submarine", 2);

  placeShipOnBoard(activeUser, "Patrol Boat", 1);
}

function placeShipOnBoard(activeUser, name, length) {
  let board = activeUser.game.getBoard();
  let coordinates = randomShipPlacement(length, board);
  activeUser.game.placeShip(name, length + 1, coordinates[0], coordinates[1]);
}

function randomShipPlacement(length, board) {
  let plane = getRandomPlane();
  let coordinates = getRandomShipCoordinate(plane, length);
  if (!checkCoordinates(coordinates, board)) {
    return randomShipPlacement(length, board);
  }
  return coordinates;
}

function getRandomPlane() {
  let plane = ["horizontal", "vertical"];

  let index = Math.floor(Math.random() * plane.length);
  return plane[index];
}

function getRandomCoordinate() {
  return Math.floor(Math.random() * 10);
}

function getRandomShipCoordinate(axis, length) {
  let startX, startY;
  startX = getRandomCoordinate();
  startY = getRandomCoordinate();

  if (axis === "horizontal") {
    if (startX + length <= 9) {
      return [
        [startX, startY],
        [startX + length, startY],
      ];
    } else if (startX - length >= 0) {
      return [
        [startX, startY],
        [startX - length, startY],
      ];
    } else {
      throw new Error("horizontal coordinates error");
    }
  }

  if (axis === "vertical") {
    if (startY + length <= 9) {
      return [
        [startX, startY],
        [startX, startY + length],
      ];
    } else if (startY - length >= 0) {
      return [
        [startX, startY],
        [startX, startY - length],
      ];
    } else {
      throw new Error("vertical coordinates error");
    }
  }
}

function checkCoordinates(coordinates, board) {
  let [startX, startY] = coordinates[0];
  let [endX, endY] = coordinates[1];

  if (startX === endX) {
    if (startY > endY) {
      for (let i = endY; i <= startY; i++) {
        if (!Array.isArray(board[startX][i])) {
          return false;
        }
      }
    }
    if (endY > startY) {
      for (let i = startY; i <= endY; i++) {
        if (!Array.isArray(board[startX][i])) {
          return false;
        }
      }
    }
  }
  if (startY === endY) {
    if (startX > endX) {
      for (let i = endX; i <= startX; i++) {
        if (!Array.isArray(board[i][startY])) {
          return false;
        }
      }
    }
    if (endX > startX) {
      for (let i = startX; i <= endX; i++) {
        if (!Array.isArray(board[i][startY])) {
          return false;
        }
      }
    }
  }
  return true;
}




/***/ }),

/***/ "./src/05-ScreenController/screencontroller.js":
/*!*****************************************************!*\
  !*** ./src/05-ScreenController/screencontroller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenController: () => (/* binding */ ScreenController)
/* harmony export */ });
/* harmony import */ var _04_Gameplay_gamecontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../04-Gameplay/gamecontroller */ "./src/04-Gameplay/gamecontroller.js");
/* harmony import */ var _random_ship_placement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-ship-placement */ "./src/05-ScreenController/random-ship-placement.js");
/* harmony import */ var _06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../06-DOM/game-screen */ "./src/06-DOM/game-screen.js");



function ScreenController(play1, play2) {
  let gameplay = (0,_04_Gameplay_gamecontroller__WEBPACK_IMPORTED_MODULE_0__.GameController)(play1, play2);

  //output player turn
  (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(`${gameplay.getActivePlayer().name}'s turn!`);

  const updateScreen = () => {
    //clear board
    const boardDiv = document.querySelectorAll(".player-board");

    boardDiv.forEach((board) => {
      board.textContent = "";
    });

    (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)("");

    //output player turn
    (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(`${gameplay.getActivePlayer().name}'s turn!`);

    //update board

    updateActiveUserBoard(gameplay.getActivePlayer());

    updateActiveUserBoard(gameplay.getOpponent());

    //disable activePlayer event board

    disableActivePlayerBoard(
      gameplay.getActivePlayer().name,
      gameplay.getOpponent().name
    );
    (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.closeModal)(updateScreen);
  };

  initRandomShipPlacementListener(gameplay);
  initStartGameListener(gameplay);

  function updateActiveUserBoard(user) {
    const playerName = user.name;

    const board = user.game.getBoard();

    const hitArray = user.game.getHitAttacks();

    const missArray = user.game.getMissedAttacks();

    const userDom = getActivePlayerDom(playerName);

    for (let i = 0; i < board.length; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < board[i].length; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        //mark ship location for user

        if (!Array.isArray(board[i][j])) {
          if (gameplay.getActivePlayer().name === playerName) {
            cell.classList.add("ship");
          }
        }

        //hit attacks mark cell
        hitArray.forEach((item) => {
          let [a, b] = item;
          if (a === i && b === j) {
            cell.classList.add("damage");
          }
        });

        //missed attacks mark cell
        missArray.forEach((item) => {
          let [a, b] = item;
          if (a === i && b === j) {
            cell.classList.add("missed");
          }
        });

        //cell event handler
        cell.addEventListener("click", () => {
          if (typeof gameplay.playRound([i, j]) === "string") {
            clearBoard(gameplay.getOpponent());
            updateActiveUserBoard(gameplay.getOpponent());
            (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.disableBoardEvent)();
          } else {
            if (play2 !== "Computer") {
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.openDialog)(gameplay.getActivePlayer().name);
            } else {
              updateScreen();
            }
          }
        });

        row.appendChild(cell);
      }
      userDom.appendChild(row);
    }
  }
  function initRandomShipPlacementListener() {
    const btn = document.getElementById("random-ship-btn");

    const startBtn = document.getElementById("start-btn");

    btn.addEventListener("click", () => {
      const activePlayer = gameplay.getActivePlayer();

      clearBoard(activePlayer);
      (0,_random_ship_placement__WEBPACK_IMPORTED_MODULE_1__.initPlayerBoardShip)(activePlayer);
      updateActiveUserBoard(activePlayer);

      //disable activeBoard
      disableActivePlayerBoard(
        gameplay.getActivePlayer().name,
        gameplay.getOpponent().name
      );

      if (startBtn.classList.contains("disable")) {
        (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(startBtn);
      }
    });
  }

  function initStartGameListener() {
    const startBtn = document.getElementById("start-btn");
    const randomBtn = document.getElementById("random-ship-btn");

    const opponent = gameplay.getOpponent();

    startBtn.addEventListener("click", () => {
      //stop executing if first board is empty
      if (document.getElementById("player-one-board").childElementCount === 0) {
        return;
      }

      //player 2 turn ship random
      if (play2 !== "Computer") {
        if (
          document.getElementById("player-two-board").childElementCount !== 0
        ) {
          clearAllBoard();
          resetPlayerBoards(gameplay);
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleStartBtn)();
          return;
        } else {
          gameplay.switchPlayer();
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.openDialog)(gameplay.getActivePlayer().name);
          updateScreen();
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleStartBtn)();
        }

        return;
      }

      //toggle disable randomBtn
      (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(randomBtn);

      //check if 2nd board is empty
      if (document.getElementById("player-two-board").childElementCount === 0) {
        (0,_random_ship_placement__WEBPACK_IMPORTED_MODULE_1__.initPlayerBoardShip)(opponent);
        updateActiveUserBoard(opponent);
        (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleStartBtn)();
      } else {
        resetPlayerBoards(gameplay);
        clearAllBoard();
        (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleStartBtn)();
        (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)("");

        //disable startBtn
        (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(startBtn);

        //output player turn
        (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(`${gameplay.getActivePlayer().name}'s turn!`);
        (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleBoardEvent)(gameplay.getActivePlayer().name);
      }
    });
  }

  function clearBoard(player) {
    let dom = getActivePlayerDom(player.name);
    dom.textContent = "";
  }
}

function clearAllBoard() {
  const playerBoards = document.querySelectorAll(".player-board");
  playerBoards.forEach((board) => {
    board.textContent = "";
  });
}

function resetPlayerBoards(gameplay) {
  gameplay.restart();
}

function disableActivePlayerBoard(player, opponent) {
  const playerDom = getActivePlayerDom(player);
  const opponentDom = getActivePlayerDom(opponent);

  if (!playerDom.classList.contains("disable")) {
    playerDom.classList.add("disable");
    opponentDom.classList.remove("disable");
  }
}

function getActivePlayerDom(player) {
  const allTitleBoard = document.querySelectorAll(".player-title");

  for (let i = 0; i < allTitleBoard.length; i++) {
    if (allTitleBoard[i].textContent === player) {
      return allTitleBoard[i].nextElementSibling;
    }
  }
}




/***/ }),

/***/ "./src/06-DOM/game-screen.js":
/*!***********************************!*\
  !*** ./src/06-DOM/game-screen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   createGameBoard: () => (/* binding */ createGameBoard),
/* harmony export */   disableBoardEvent: () => (/* binding */ disableBoardEvent),
/* harmony export */   openDialog: () => (/* binding */ openDialog),
/* harmony export */   outputMessage: () => (/* binding */ outputMessage),
/* harmony export */   toggleBoardEvent: () => (/* binding */ toggleBoardEvent),
/* harmony export */   toggleStartBtn: () => (/* binding */ toggleStartBtn),
/* harmony export */   togglesDisable: () => (/* binding */ togglesDisable)
/* harmony export */ });
function createGameBoard(player1, player2) {
  if (typeof player2 === undefined) {
    player2 = "Computer";
  }

  const content = document.querySelector(".content");

  const playerArray = ["one", "two"];

  const board = document.createElement("div");
  board.classList.add("board");

  const shipInputDiv = document.createElement("div");
  shipInputDiv.classList.add("ship-input-div");

  for (let i = 0; i < playerArray.length; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add(`player-${playerArray[i]}`);

    const playerTitle = document.createElement("div");
    playerTitle.classList.add("player-title");
    playerTitle.setAttribute("Id", `player-${playerArray[i]}`);

    if (i === 0) {
      playerTitle.textContent = player1;
    } else {
      playerTitle.textContent = player2;
    }

    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-board");
    playerBoard.setAttribute("id", `player-${playerArray[i]}-board`);

    playerDiv.appendChild(playerTitle);
    playerDiv.appendChild(playerBoard);
    board.appendChild(playerDiv);
  }

  content.appendChild(board);

  const boardLastElement = board.lastElementChild;

  board.insertBefore(shipInputDiv, boardLastElement);

  createShipInputDiv();

  createStartDiv();

  createMessageOutput();
}

function createShipInputDiv() {
  const shipInputDiv = document.querySelector(".ship-input-div");

  const randomShipDiv = document.createElement("div");
  randomShipDiv.classList.add("ship-input-random");

  const randomShipTitle = document.createElement("div");
  randomShipTitle.textContent = "Generate random ship coordinates";

  const randomShipBtn = document.createElement("button");
  randomShipBtn.setAttribute("id", "random-ship-btn");
  randomShipBtn.textContent = "Click";

  randomShipDiv.appendChild(randomShipTitle);
  randomShipDiv.appendChild(randomShipBtn);

  shipInputDiv.appendChild(randomShipDiv);
}

function createStartDiv() {
  const shipInputDiv = document.querySelector(".ship-input-div");

  const startDiv = document.createElement("div");
  startDiv.classList.add("start-div");

  const startTitle = document.createElement("div");
  startTitle.classList.add("start-title");
  startTitle.textContent = "Start Game";

  const startBtn = document.createElement("button");
  startBtn.setAttribute("id", "start-btn");
  startBtn.classList.add("disable");
  startBtn.textContent = "Click";

  startDiv.appendChild(startTitle);
  startDiv.appendChild(startBtn);

  shipInputDiv.appendChild(startDiv);
}

function togglesDisable(div) {
  if (div.classList.contains("disable")) {
    div.classList.remove("disable");
  } else {
    div.classList.add("disable");
  }
}

function createMessageOutput() {
  const shipInputDiv = document.querySelector(".ship-input-div");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message-div");

  shipInputDiv.appendChild(messageDiv);
}

function outputMessage(char) {
  const messageDiv = document.querySelector(".message-div");
  messageDiv.textContent = char;
}

function disableBoardEvent() {
  const board = document.querySelectorAll(".player-board");

  board.forEach((el) => {
    el.classList.add("disable");
  });
}

function toggleStartBtn() {
  const btnTitle = document.querySelector(".start-title");
  if (btnTitle.textContent === "Start Game") {
    btnTitle.textContent = "Restart Game";
  } else {
    btnTitle.textContent = "Start Game";
  }
}

function toggleBoardEvent(activePlayer) {
  const allTitleBoard = document.querySelectorAll(".player-title");

  for (let i = 0; i < allTitleBoard.length; i++) {
    if (allTitleBoard[i].textContent === activePlayer) {
      allTitleBoard[i].nextElementSibling.classList.add("disable");
    } else {
      allTitleBoard[i].nextElementSibling.classList.remove("disable");
    }
  }
}

function clearAllBoard() {
  const playerBoards = document.querySelectorAll(".player-board");
  playerBoards.forEach((board) => {
    board.textContent = "";
  });
}

function openDialog(activePlayer) {
  clearAllBoard();

  const dialog = document.querySelector("dialog");

  const playerTurn = document.querySelector(".player-turn");
  playerTurn.textContent = "";
  playerTurn.textContent = `${activePlayer}'s Turn!`;

  dialog.showModal();
}

function closeModal(activeFunction) {
  const btn = document.getElementById("close-modal");
  const dialog = document.querySelector("dialog");

  btn.addEventListener("click", () => {
    dialog.close();
    activeFunction();
  });
}




/***/ }),

/***/ "./src/06-DOM/gamemode-selection.js":
/*!******************************************!*\
  !*** ./src/06-DOM/gamemode-selection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playerSelection: () => (/* binding */ playerSelection),
/* harmony export */   removePlayerSelection: () => (/* binding */ removePlayerSelection)
/* harmony export */ });
/* harmony import */ var _05_ScreenController_screencontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../05-ScreenController/screencontroller */ "./src/05-ScreenController/screencontroller.js");
/* harmony import */ var _06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../06-DOM/game-screen */ "./src/06-DOM/game-screen.js");



function playerSelection(multi) {
  const content = document.querySelector(".content");

  const playerOption = document.querySelector(".player-option");
  playerOption.remove();

  const playerForm = document.createElement("form");
  playerForm.classList.add("player-form");

  const playerInputSelection = document.createElement("div");
  playerInputSelection.classList.add("player-input-selection");

  for (let i = 1; i <= multi; i++) {
    const playerOneDiv = document.createElement("div");

    const playerOneLabel = document.createElement("label");

    const playerOneInput = document.createElement("input");
    playerOneInput.setAttribute("type", "text");

    if (i === 1) {
      playerOneDiv.classList.add("player-one-div");
      playerOneLabel.setAttribute("for", "player-one-name");
      playerOneLabel.textContent = `Player One Name`;
      playerOneInput.setAttribute("id", `player-one-name`);
    } else {
      playerOneDiv.classList.add("player-two-div");
      playerOneLabel.setAttribute("for", "player-two-name");
      playerOneLabel.textContent = `Player Two Name`;
      playerOneInput.setAttribute("id", `player-two-name`);
    }

    playerOneDiv.appendChild(playerOneLabel);

    playerOneInput.setAttribute("placeholder", "Enter Name");
    playerOneInput.required = true;
    playerOneDiv.appendChild(playerOneInput);

    playerInputSelection.appendChild(playerOneDiv);
  }

  const btnDiv = document.createElement("div");
  const btn = document.createElement("button");
  btn.textContent = "Enter";
  btn.setAttribute("id", "player-name-btn");
  btnDiv.appendChild(btn);

  playerForm.appendChild(playerInputSelection);
  playerForm.appendChild(btnDiv);

  content.appendChild(playerForm);

  gameModeEvent(btn);
}

function gameModeEvent(btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!checkValidityInputs()) {
      return;
    }
    let players = getPlayerInput();
    removePlayerSelection();
    (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)(players[0], players[1]);
    (0,_05_ScreenController_screencontroller__WEBPACK_IMPORTED_MODULE_0__.ScreenController)(players[0], players[1]);
  });
}

function getPlayerInput() {
  const inputs = document.querySelectorAll("input");

  let players = [];

  inputs.forEach((input) => {
    players.push(input.value);
  });

  if (players.length === 1) {
    players.push("Computer");
  }

  return players;
}

function removePlayerSelection() {
  const playerForm = document.querySelector(".player-form");
  playerForm.remove();
}

function checkValidityInputs() {
  const inputs = document.querySelectorAll("input");
  const form = document.querySelector("form");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].validity.valueMissing) {
      form.reportValidity();
      return false;
    } else if (
      inputs[i].value === "Computer" ||
      inputs[i].value === "computer"
    ) {
      inputs[i].setCustomValidity("Enter Valid Name");
      form.reportValidity();
      return false;
    } else {
      inputs[i].setCustomValidity("");
    }
  }
  return true;
}




/***/ }),

/***/ "./src/06-DOM/home-page.js":
/*!*********************************!*\
  !*** ./src/06-DOM/home-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePage: () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _gamemode_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamemode-selection */ "./src/06-DOM/gamemode-selection.js");


function homePage() {
  const content = document.querySelector(".content");

  const playerOption = document.createElement("div");
  playerOption.classList.add("player-option");

  const playerOneOption = document.createElement("button");
  playerOneOption.classList.add("player-one-option");
  playerOneOption.textContent = "1 Player";

  const playerTwoOption = document.createElement("button");
  playerTwoOption.classList.add("player-two-option");
  playerTwoOption.textContent = "2 Players";

  playerOption.appendChild(playerOneOption);
  playerOption.appendChild(playerTwoOption);

  content.appendChild(playerOption);

  homeEvents(playerOneOption, playerTwoOption);

  restartHomePage();
}

function homeEvents(play1Btn, play2Btn) {
  play1Btn.addEventListener("click", () => {
    (0,_gamemode_selection__WEBPACK_IMPORTED_MODULE_0__.playerSelection)(1);
  });

  play2Btn.addEventListener("click", () => {
    (0,_gamemode_selection__WEBPACK_IMPORTED_MODULE_0__.playerSelection)(2);
  });
}

function restartHomePage() {
  const exitBtn = document.querySelector(".exit");

  exitBtn.addEventListener("click", () => {
    location.reload();
  });
}


/***/ }),

/***/ "./src/BlackOpsOne-Regular.ttf":
/*!*************************************!*\
  !*** ./src/BlackOpsOne-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8437be32fe8faca71ed.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _06_DOM_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./06-DOM/home-page */ "./src/06-DOM/home-page.js");



(0,_06_DOM_home_page__WEBPACK_IMPORTED_MODULE_1__.homePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssT0FBTyxX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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9FQUFlO0FBQ25CLEdBQUc7O0FBRUg7QUFDQSxJQUFJLG9FQUFlO0FBQ25CLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7O0FBRTlDLDJEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzAxLXNoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wMi1HYW1lYm9hcmQvYWRkU2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wMi1HYW1lYm9hcmQvY3JlYXRlLWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzAyLUdhbWVib2FyZC9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDItR2FtZWJvYXJkL3JlY2VpdmVBdHRhY2suanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDMtUGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNC1HYW1lcGxheS9jb21wdXRlci1tb3ZlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA0LUdhbWVwbGF5L2NyZWF0ZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDQtR2FtZXBsYXkvZ2FtZWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDUtU2NyZWVuQ29udHJvbGxlci9yYW5kb20tc2hpcC1wbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDUtU2NyZWVuQ29udHJvbGxlci9zY3JlZW5jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA2LURPTS9nYW1lLXNjcmVlbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNi1ET00vZ2FtZW1vZGUtc2VsZWN0aW9uLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA2LURPTS9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInN0YW5jaWxcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi8qIG1vZGFsIGJhY2tncm91bmQgKi9cbjo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuLyogbW9kYWwgY3NzICovXG5cbjptb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogbWVudSB0b29sYmFyICovXG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yZXN0YXJ0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5yZXN0YXJ0OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjb2xvcjogcmVkO1xufVxuXG4vKiBIb21lIHBhZ2UgY29udGVudCovXG5cbi5ob21lLXBhZ2Utb3B0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5ob21lLXBhZ2Utb3B0aW9uID4gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHJlbTtcbn1cblxuLnBsYXllci1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnBsYXllci1vcHRpb24gYnV0dG9uLFxuI3BsYXllci1uYW1lLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcInN0YW5jaWxcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCxcbiAgICBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnBsYXllci1vcHRpb24gPiBidXR0b246aG92ZXIsXG4jcGxheWVyLW5hbWUtYnRuOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHJlbTtcbiAgZm9udC1mYW1pbHk6IFwic3RhbmNpbFwiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xufVxuXG4vKiBTaW5nbGUgUGxheWVyIE1lbnUqL1xuXG4ucGxheWVyLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcInN0YW5jaWxcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCxcbiAgICBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4ucGxheWVyLW9uZS1kaXYsXG4ucGxheWVyLXR3by1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiA+IGRpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24gaW5wdXQge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDI3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIE11bHRpIHBsYXllciBtZW51ICovXG5cbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGNvb3JkaW5hdGUgYm94ICovXG5cbi5zaGlwLWlucHV0LWRpdiB7XG4gIHdpZHRoOiA0MDBweDtcbiAgZ2FwOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnNoaXAtaW5wdXQtcmFuZG9tLFxuLnN0YXJ0LWRpdixcbi5tZXNzYWdlLWRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2IyYjIyZTtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4jcmFuZG9tLXNoaXAtYnRuLFxuI3N0YXJ0LWJ0biB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwN2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBsYXllci1ib2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2ZpcnN0LXBsYXllci1ib2FyZCxcbiNzZWNvbmQtcGxheWVyLWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLmNlbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiMmIyO1xuICBmbGV4OiAxO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xufVxuXG4ubWlzc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uZGFtYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5kaXNhYmxlLFxuLm1pc3NlZCxcbi5kYW1hZ2Uge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLndpbm5lck1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXFDO0FBQ3ZDOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmO3dFQUNzRTtFQUN0RSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQjt3RUFDc0U7QUFDeEU7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRTt3RUFDc0U7RUFDdEUsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcInN0YW5jaWxcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vQmxhY2tPcHNPbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuLyogbW9kYWwgYmFja2dyb3VuZCAqL1xcbjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG4vKiBtb2RhbCBjc3MgKi9cXG5cXG46bW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIG1lbnUgdG9vbGJhciAqL1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnJlc3RhcnQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5yZXN0YXJ0OmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBIb21lIHBhZ2UgY29udGVudCovXFxuXFxuLmhvbWUtcGFnZS1vcHRpb24ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ob21lLXBhZ2Utb3B0aW9uID4gLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThyZW07XFxufVxcblxcbi5wbGF5ZXItb3B0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnBsYXllci1vcHRpb24gYnV0dG9uLFxcbiNwbGF5ZXItbmFtZS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzdGFuY2lsXFxcIiwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4ucGxheWVyLW9wdGlvbiA+IGJ1dHRvbjpob3ZlcixcXG4jcGxheWVyLW5hbWUtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICBmb250LWZhbWlseTogXFxcInN0YW5jaWxcXFwiLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCxcXG4gICAgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxufVxcblxcbi8qIFNpbmdsZSBQbGF5ZXIgTWVudSovXFxuXFxuLnBsYXllci1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiBsYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcInN0YW5jaWxcXFwiLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCxcXG4gICAgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5wbGF5ZXItb25lLWRpdixcXG4ucGxheWVyLXR3by1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiA+IGRpdiB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24gaW5wdXQge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDI3MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBNdWx0aSBwbGF5ZXIgbWVudSAqL1xcblxcbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBjb29yZGluYXRlIGJveCAqL1xcblxcbi5zaGlwLWlucHV0LWRpdiB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5zaGlwLWlucHV0LXJhbmRvbSxcXG4uc3RhcnQtZGl2LFxcbi5tZXNzYWdlLWRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiMmIyMmU7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbiNyYW5kb20tc2hpcC1idG4sXFxuI3N0YXJ0LWJ0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwN2Q7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNmaXJzdC1wbGF5ZXItYm9hcmQsXFxuI3NlY29uZC1wbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYjJiMjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmRhbWFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmRpc2FibGUsXFxuLm1pc3NlZCxcXG4uZGFtYWdlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ud2lubmVyTWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLnRpbWVzSGl0ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iLCJmdW5jdGlvbiBhZGRTaGlwKHNoaXAsIHN0YXJ0LCBlbmQsIGJvYXJkKSB7XG4gIGxldCBbeDEsIHkxXSA9IHN0YXJ0O1xuICBsZXQgW3gyLCB5Ml0gPSBlbmQ7XG5cbiAgaWYgKHgxID09PSB4Mikge1xuICAgIGlmICh5MSA+IHkyKSB7XG4gICAgICBsb29wQ29vcmRpbmF0ZXMoeDEsIFt5MSwgeTJdLCBcImhvcml6b250YWxcIiwgc2hpcCwgYm9hcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb29wQ29vcmRpbmF0ZXMoeDEsIFt5MiwgeTFdLCBcImhvcml6b250YWxcIiwgc2hpcCwgYm9hcmQpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh5MSA9PT0geTIpIHtcbiAgICBpZiAoeDEgPiB4Mikge1xuICAgICAgbG9vcENvb3JkaW5hdGVzKHkxLCBbeDEsIHgyXSwgXCJ2ZXJ0aWNhbFwiLCBzaGlwLCBib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvb3BDb29yZGluYXRlcyh5MSwgW3gyLCB4MV0sIFwidmVydGljYWxcIiwgc2hpcCwgYm9hcmQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb29wQ29vcmRpbmF0ZXMoc2FtZSwgZGlmZiwgcG9zLCBzaGlwLCBib2FyZCkge1xuICBsZXQgW2RpZmYxLCBkaWZmMl0gPSBkaWZmO1xuXG4gIGZvciAobGV0IGkgPSBkaWZmMTsgaSA+PSBkaWZmMjsgaS0tKSB7XG4gICAgaWYgKHBvcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChib2FyZFtzYW1lXVtpXVswXSA9PT0gc2hpcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJdCBhbHJlYWR5IGNvbnRhaW5zIHNoaXAgb2JqZWN0XCIpO1xuICAgICAgfVxuICAgICAgYm9hcmRbc2FtZV1baV0gPSBzaGlwO1xuICAgIH1cblxuICAgIGlmIChwb3MgPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKGJvYXJkW2ldW3NhbWVdWzBdID09PSBzaGlwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkl0IGFscmVhZHkgY29udGFpbnMgc2hpcCBvYmplY3RcIik7XG4gICAgICB9XG4gICAgICBib2FyZFtpXVtzYW1lXSA9IHNoaXA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IGFkZFNoaXAsIGxvb3BDb29yZGluYXRlcyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICBsZXQgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgYXJyYXlbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGFycmF5W2ldW2pdID0gW107XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSBcIi4vY3JlYXRlLWJvYXJkLmpzXCI7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4uLzAxLXNoaXAvc2hpcC5qc1wiO1xuaW1wb3J0IHsgYWRkU2hpcCB9IGZyb20gXCIuL2FkZFNoaXAuanNcIjtcbmltcG9ydCB7IGF0dGFjayB9IGZyb20gXCIuL3JlY2VpdmVBdHRhY2suanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcblxuICBsZXQgbWlzc2VkQXR0YWNrcyA9IFtdO1xuXG4gIGNvbnN0IGdldE1pc3NlZEF0dGFja3MgPSAoKSA9PiBtaXNzZWRBdHRhY2tzO1xuXG4gIGNvbnN0IGdldEhpdEF0dGFja3MgPSAoKSA9PiBoaXRBdHRhY2tzO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgY29uc3QgcmVzZXRWYXJpYWJsZXMgPSAoKSA9PiB7XG4gICAgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgIG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBoaXRBdHRhY2tzID0gW107XG4gICAgc2hpcHNTdW5rID0gMDtcbiAgfTtcblxuICBmdW5jdGlvbiByZXN0YXJ0Qm9hcmQoKSB7XG4gICAgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICB9XG5cbiAgbGV0IHNoaXBzU3VuayA9IDA7XG5cbiAgbGV0IGhpdEF0dGFja3MgPSBbXTtcblxuICBjb25zdCBnZXRTaGlwU3VuayA9ICgpID0+IHNoaXBzU3VuaztcblxuICBmdW5jdGlvbiBhZGRTaGlwc1N1bmsoKSB7XG4gICAgc2hpcHNTdW5rICs9IDE7XG4gIH1cblxuICBmdW5jdGlvbiB0b3RhbFNoaXBTdW5rKCkge1xuICAgIGlmIChnZXRTaGlwU3VuaygpID09PSA1KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAobmFtZSwgbGVuZ3RoLCBzdGFydCwgZW5kKSB7XG4gICAgbGV0IHNoaXAgPSBuZXcgU2hpcChuYW1lLCBsZW5ndGgpO1xuXG4gICAgYWRkU2hpcChzaGlwLCBzdGFydCwgZW5kLCBib2FyZCk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBhdHRhY2soY29vcmRpbmF0ZSwgYm9hcmQsIGdldE1pc3NlZEF0dGFja3MsIGFkZFNoaXBzU3VuaywgZ2V0SGl0QXR0YWNrcyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGdldEhpdEF0dGFja3MsXG4gICAgdG90YWxTaGlwU3VuayxcbiAgICBnZXRNaXNzZWRBdHRhY2tzLFxuICAgIHJlc2V0VmFyaWFibGVzLFxuICAgIHJlc3RhcnRCb2FyZCxcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhdHRhY2soXG4gIGNvb3JkaW5hdGUsXG4gIGJvYXJkLFxuICBnZXRNaXNzZWRBdHRhY2tzLFxuICBhZGRTaGlwc1N1bmssXG4gIGdldEhpdEF0dGFja3Ncbikge1xuICBsZXQgW3gsIHldID0gY29vcmRpbmF0ZTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoYm9hcmRbeF1beV0pKSB7XG4gICAgYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgZ2V0SGl0QXR0YWNrcygpLnB1c2goW3gsIHldKTtcbiAgICBpZiAoYm9hcmRbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgIGFkZFNoaXBzU3VuaygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBnZXRNaXNzZWRBdHRhY2tzKCkucHVzaChbeCwgeV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vMDItR2FtZWJvYXJkL2dhbWVib2FyZC5qc1wiO1xuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICBjb25zdCBnYW1lID0gR2FtZWJvYXJkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIENvbXB1dGVyKCkge1xuICBjb25zdCBuYW1lID0gXCJDb21wdXRlclwiO1xuICBjb25zdCBnYW1lID0gR2FtZWJvYXJkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWUsXG4gIH07XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTtcbiIsImZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlKGFycmF5LCBjb29yZGluYXRlKSB7XG4gIGxldCBzdHJpbmdBcnJheSA9IGFycmF5Lm1hcChKU09OLnN0cmluZ2lmeSk7XG4gIGxldCBzdHJpbmdDb29yZGluYXRlID0gSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHJpbmdBcnJheVtpXSA9PT0gc3RyaW5nQ29vcmRpbmF0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTmV4dFRhcmdldChvcHBvbmVudCkge1xuICAvL2hlcmUgZnVuY3Rpb24gZm9yIHByb2R1Y2luZyBwb3RlbnRpYWwgbW92ZXNcblxuICBsZXQgbWlzc2VkQXJyYXkgPSBvcHBvbmVudC5nYW1lLmdldE1pc3NlZEF0dGFja3MoKTtcbiAgbGV0IGhpdEFycmF5ID0gb3Bwb25lbnQuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG4gIGxldCBjb21iaW5lZEFycmF5ID0gbWlzc2VkQXJyYXkuY29uY2F0KGhpdEFycmF5KTtcbiAgbGV0IHNhbWVTaGlwQ29vcmRpbmF0ZSA9IGZpbHRlclNhbWVTaGlwSGl0KG9wcG9uZW50KTtcblxuICBpZiAoc2FtZVNoaXBDb29yZGluYXRlLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcHJlZGljdFNoaXBMb2NhdGlvbihvcHBvbmVudCk7XG4gIH1cblxuICBpZiAoc2FtZVNoaXBDb29yZGluYXRlLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBwb3RlbnRpYWxNb3ZlKG9wcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiByYW5kb21Db29yZGluYXRlcyhjb21iaW5lZEFycmF5KTtcbn1cblxuZnVuY3Rpb24gcHJlZGljdFNoaXBMb2NhdGlvbihvcHApIHtcbiAgbGV0IG1pc3NlZEFycmF5ID0gb3BwLmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuICBsZXQgaGl0QXJyYXkgPSBvcHAuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG4gIGxldCBjb21iaW5lZEFycmF5ID0gbWlzc2VkQXJyYXkuY29uY2F0KGhpdEFycmF5KTtcblxuICBsZXQgc2FtZVNoaXBDb29yZGluYXRlID0gZmlsdGVyU2FtZVNoaXBIaXQob3BwKTtcbiAgbGV0IHBsYW5lQWxpZ25tZW50ID0gZ2V0U2hpcE9yaWVudGF0aW9uKHNhbWVTaGlwQ29vcmRpbmF0ZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1lU2hpcENvb3JkaW5hdGUubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgW3gsIHldID0gc2FtZVNoaXBDb29yZGluYXRlW2ldO1xuICAgIGlmIChwbGFuZUFsaWdubWVudCA9PT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoeCArIDEgPD0gOSAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCArIDEsIHldKSkge1xuICAgICAgICByZXR1cm4gcGx1c1goeCwgeSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh4IC0gMSA+PSAwICYmIGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIFt4IC0gMSwgeV0pKSB7XG4gICAgICAgIHJldHVybiBtaW51c1goeCwgeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBsYW5lQWxpZ25tZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgaWYgKHkgKyAxIDw9IDkgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3gsIHkgKyAxXSkpIHtcbiAgICAgICAgcmV0dXJuIHBsdXNZKHgsIHkpO1xuICAgICAgfVxuICAgICAgaWYgKHkgLSAxID49IDAgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3gsIHkgLSAxXSkpIHtcbiAgICAgICAgcmV0dXJuIG1pbnVzWSh4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcG90ZW50aWFsTW92ZShvcHApIHtcbiAgbGV0IG1pc3NlZEFycmF5ID0gb3BwLmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuICBsZXQgaGl0QXJyYXkgPSBvcHAuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG4gIGxldCBjb21iaW5lZEFycmF5ID0gbWlzc2VkQXJyYXkuY29uY2F0KGhpdEFycmF5KTtcblxuICBsZXQgc2hpcHNOb3RTdW5rID0gY2hlY2tIaXRBdHRhY2tzKG9wcCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc05vdFN1bmsubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgW3gsIHldID0gc2hpcHNOb3RTdW5rW2ldO1xuXG4gICAgaWYgKHggKyAxIDw9IDkgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3ggKyAxLCB5XSkpIHtcbiAgICAgIHJldHVybiBwbHVzWCh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoeCAtIDEgPj0gMCAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCAtIDEsIHldKSkge1xuICAgICAgcmV0dXJuIG1pbnVzWCh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoeSArIDEgPD0gOSAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCwgeSArIDFdKSkge1xuICAgICAgcmV0dXJuIHBsdXNZKHgsIHkpO1xuICAgIH1cblxuICAgIGlmICh5IC0gMSA+PSAwICYmIGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIFt4LCB5IC0gMV0pKSB7XG4gICAgICByZXR1cm4gbWludXNZKHgsIHkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwbHVzWCh4LCB5KSB7XG4gIHJldHVybiBbeCArIDEsIHldO1xufVxuXG5mdW5jdGlvbiBtaW51c1goeCwgeSkge1xuICByZXR1cm4gW3ggLSAxLCB5XTtcbn1cblxuZnVuY3Rpb24gcGx1c1koeCwgeSkge1xuICByZXR1cm4gW3gsIHkgKyAxXTtcbn1cblxuZnVuY3Rpb24gbWludXNZKHgsIHkpIHtcbiAgcmV0dXJuIFt4LCB5IC0gMV07XG59XG5cbmZ1bmN0aW9uIGNoZWNrSGl0QXR0YWNrcyhvcHApIHtcbiAgbGV0IGhpdEFycmF5ID0gb3BwLmdhbWUuZ2V0SGl0QXR0YWNrcygpO1xuICBsZXQgYm9hcmQgPSBvcHAuZ2FtZS5nZXRCb2FyZCgpO1xuXG4gIHJldHVybiBoaXRBcnJheS5maWx0ZXIoKGVsKSA9PiB7XG4gICAgbGV0IFt4LCB5XSA9IGVsO1xuICAgIGlmICghYm9hcmRbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJTYW1lU2hpcEhpdChvcHBvbmVudCkge1xuICBsZXQgaGl0QXJyYXkgPSBjaGVja0hpdEF0dGFja3Mob3Bwb25lbnQpO1xuXG4gIGxldCBib2FyZCA9IG9wcG9uZW50LmdhbWUuZ2V0Qm9hcmQoKTtcblxuICBpZiAoaGl0QXJyYXlbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgbGV0IFt4LCB5XSA9IGhpdEFycmF5WzBdO1xuICBsZXQgcmVzdWx0ID0gW1t4LCB5XV07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBoaXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBbYSwgYl0gPSBoaXRBcnJheVtpXTtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IGJvYXJkW2FdW2JdKSB7XG4gICAgICByZXN1bHQucHVzaChbYSwgYl0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRTaGlwT3JpZW50YXRpb24oYXJyYXkpIHtcbiAgbGV0IFt4LCB5XSA9IGFycmF5WzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IFthLCBiXSA9IGFycmF5W2ldO1xuICAgIGlmICh4ID09PSBhKSB7XG4gICAgICByZXR1cm4gXCJIb3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIGlmICh5ID09PSBiKSB7XG4gICAgICByZXR1cm4gXCJWZXJ0aWNhbFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21Db29yZGluYXRlcyhhcnJheSkge1xuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBpZiAoY2hlY2tEdXBsaWNhdGUoYXJyYXksIFt4LCB5XSkpIHtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlcyhhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgcmFuZG9tQ29vcmRpbmF0ZXMsXG4gIGNoZWNrRHVwbGljYXRlLFxuICBwb3RlbnRpYWxNb3ZlLFxuICBmaWx0ZXJTYW1lU2hpcEhpdCxcbiAgY2hlY2tIaXRBdHRhY2tzLFxuICBnZXRTaGlwT3JpZW50YXRpb24sXG4gIHByZWRpY3RTaGlwTG9jYXRpb24sXG4gIGNhbGN1bGF0ZU5leHRUYXJnZXQsXG59O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLzAzLVBsYXllci9wbGF5ZXIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcihuYW1lKSB7XG4gIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUpO1xuICByZXR1cm4gcGxheWVyO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vY3JlYXRlLXBsYXllci5qc1wiO1xuaW1wb3J0IHsgQ29tcHV0ZXIgfSBmcm9tIFwiLi4vMDMtUGxheWVyL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTmV4dFRhcmdldCwgY2hlY2tEdXBsaWNhdGUgfSBmcm9tIFwiLi9jb21wdXRlci1tb3ZlLmpzXCI7XG5pbXBvcnQgeyBvdXRwdXRNZXNzYWdlIH0gZnJvbSBcIi4uLzA2LURPTS9nYW1lLXNjcmVlbi5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUNvbnRyb2xsZXIocGxheWVyMSwgcGxheWVyMikge1xuICBsZXQgcGxheWVycztcblxuICBpZiAocGxheWVyMiA9PT0gXCJDb21wdXRlclwiIHx8IHBsYXllcjIgPT09IHVuZGVmaW5lZCkge1xuICAgIHBsYXllcnMgPSBbY3JlYXRlUGxheWVyKHBsYXllcjEpLCBDb21wdXRlcigpXTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXJzID0gW2NyZWF0ZVBsYXllcihwbGF5ZXIxKSwgY3JlYXRlUGxheWVyKHBsYXllcjIpXTtcbiAgfVxuXG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuXG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcblxuICBmdW5jdGlvbiBnZXRQbGF5ZXJzKCkge1xuICAgIHJldHVybiBwbGF5ZXJzO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xuICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T3Bwb25lbnQoKSB7XG4gICAgbGV0IG9wcG9uZW50ID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gICAgcmV0dXJuIG9wcG9uZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVJvdW5kKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgbGV0IG9wcG9uZW50ID0gZ2V0T3Bwb25lbnQoKTtcblxuICAgIGxldCBtaXNzZWRBcnJheSA9IG9wcG9uZW50LmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuICAgIGxldCBoaXRBcnJheSA9IG9wcG9uZW50LmdhbWUuZ2V0SGl0QXR0YWNrcygpO1xuXG4gICAgbGV0IGNvbWJpbmVkQXJyYXkgPSBtaXNzZWRBcnJheS5jb25jYXQoaGl0QXJyYXkpO1xuXG4gICAgaWYgKGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIGNvb3JkaW5hdGVzKSkge1xuICAgICAgb3Bwb25lbnQuZ2FtZS5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tXaW5uZXIob3Bwb25lbnQpKSB7XG4gICAgICBvdXRwdXRNZXNzYWdlKGBXaW5uZXIgaXMgJHtnZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfWApO1xuICAgICAgcmV0dXJuIGBXaW5uZXIgaXMgJHtnZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgIH1cblxuICAgIGlmIChnZXRBY3RpdmVQbGF5ZXIoKS5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgIGxldCBbYSwgYl0gPSBjYWxjdWxhdGVOZXh0VGFyZ2V0KGdldE9wcG9uZW50KCkpO1xuICAgICAgb3V0cHV0TWVzc2FnZShcIlwiKTtcbiAgICAgIG91dHB1dE1lc3NhZ2UoYCR7Z2V0QWN0aXZlUGxheWVyKCkubmFtZX0ncyBUdXJuIWApO1xuICAgICAgcmV0dXJuIHBsYXlSb3VuZChbYSwgYl0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrV2lubmVyKG9wcG9uZW50KSB7XG4gICAgcmV0dXJuIG9wcG9uZW50LmdhbWUudG90YWxTaGlwU3VuaygpO1xuICB9XG5cbiAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcbiAgICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLmdhbWUucmVzZXRWYXJpYWJsZXMoKTtcbiAgICB9KTtcblxuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgZ2V0T3Bwb25lbnQsXG4gICAgcGxheVJvdW5kLFxuICAgIGdldFBsYXllcnMsXG4gICAgcmVzdGFydCxcbiAgICBzd2l0Y2hQbGF5ZXIsXG4gIH07XG59XG4iLCJmdW5jdGlvbiBpbml0UGxheWVyQm9hcmRTaGlwKGFjdGl2ZVVzZXIpIHtcbiAgYWN0aXZlVXNlci5nYW1lLnJlc3RhcnRCb2FyZCgpO1xuXG4gIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgXCJDYXJyaWVyXCIsIDQpO1xuXG4gIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgXCJCYXR0bGVzaGlwXCIsIDMpO1xuXG4gIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgXCJEZXN0cm95ZXJcIiwgMik7XG5cbiAgcGxhY2VTaGlwT25Cb2FyZChhY3RpdmVVc2VyLCBcIlN1Ym1hcmluZVwiLCAyKTtcblxuICBwbGFjZVNoaXBPbkJvYXJkKGFjdGl2ZVVzZXIsIFwiUGF0cm9sIEJvYXRcIiwgMSk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgbmFtZSwgbGVuZ3RoKSB7XG4gIGxldCBib2FyZCA9IGFjdGl2ZVVzZXIuZ2FtZS5nZXRCb2FyZCgpO1xuICBsZXQgY29vcmRpbmF0ZXMgPSByYW5kb21TaGlwUGxhY2VtZW50KGxlbmd0aCwgYm9hcmQpO1xuICBhY3RpdmVVc2VyLmdhbWUucGxhY2VTaGlwKG5hbWUsIGxlbmd0aCArIDEsIGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVNoaXBQbGFjZW1lbnQobGVuZ3RoLCBib2FyZCkge1xuICBsZXQgcGxhbmUgPSBnZXRSYW5kb21QbGFuZSgpO1xuICBsZXQgY29vcmRpbmF0ZXMgPSBnZXRSYW5kb21TaGlwQ29vcmRpbmF0ZShwbGFuZSwgbGVuZ3RoKTtcbiAgaWYgKCFjaGVja0Nvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBib2FyZCkpIHtcbiAgICByZXR1cm4gcmFuZG9tU2hpcFBsYWNlbWVudChsZW5ndGgsIGJvYXJkKTtcbiAgfVxuICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbVBsYW5lKCkge1xuICBsZXQgcGxhbmUgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbiAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhbmUubGVuZ3RoKTtcbiAgcmV0dXJuIHBsYW5lW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGUoYXhpcywgbGVuZ3RoKSB7XG4gIGxldCBzdGFydFgsIHN0YXJ0WTtcbiAgc3RhcnRYID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICBzdGFydFkgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG5cbiAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgaWYgKHN0YXJ0WCArIGxlbmd0aCA8PSA5KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYICsgbGVuZ3RoLCBzdGFydFldLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0WCAtIGxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYIC0gbGVuZ3RoLCBzdGFydFldLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaG9yaXpvbnRhbCBjb29yZGluYXRlcyBlcnJvclwiKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgaWYgKHN0YXJ0WSArIGxlbmd0aCA8PSA5KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYLCBzdGFydFkgKyBsZW5ndGhdLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0WSAtIGxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYLCBzdGFydFkgLSBsZW5ndGhdLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmVydGljYWwgY29vcmRpbmF0ZXMgZXJyb3JcIik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGJvYXJkKSB7XG4gIGxldCBbc3RhcnRYLCBzdGFydFldID0gY29vcmRpbmF0ZXNbMF07XG4gIGxldCBbZW5kWCwgZW5kWV0gPSBjb29yZGluYXRlc1sxXTtcblxuICBpZiAoc3RhcnRYID09PSBlbmRYKSB7XG4gICAgaWYgKHN0YXJ0WSA+IGVuZFkpIHtcbiAgICAgIGZvciAobGV0IGkgPSBlbmRZOyBpIDw9IHN0YXJ0WTsgaSsrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShib2FyZFtzdGFydFhdW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kWSA+IHN0YXJ0WSkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0WTsgaSA8PSBlbmRZOyBpKyspIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJvYXJkW3N0YXJ0WF1baV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChzdGFydFkgPT09IGVuZFkpIHtcbiAgICBpZiAoc3RhcnRYID4gZW5kWCkge1xuICAgICAgZm9yIChsZXQgaSA9IGVuZFg7IGkgPD0gc3RhcnRYOyBpKyspIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJvYXJkW2ldW3N0YXJ0WV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmRYID4gc3RhcnRYKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRYOyBpIDw9IGVuZFg7IGkrKykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYm9hcmRbaV1bc3RhcnRZXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gIHJhbmRvbVNoaXBQbGFjZW1lbnQsXG4gIGNoZWNrQ29vcmRpbmF0ZXMsXG4gIGdldFJhbmRvbVNoaXBDb29yZGluYXRlLFxuICBpbml0UGxheWVyQm9hcmRTaGlwLFxufTtcbiIsImltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uLzA0LUdhbWVwbGF5L2dhbWVjb250cm9sbGVyXCI7XG5pbXBvcnQgeyBpbml0UGxheWVyQm9hcmRTaGlwIH0gZnJvbSBcIi4vcmFuZG9tLXNoaXAtcGxhY2VtZW50XCI7XG5pbXBvcnQge1xuICBvdXRwdXRNZXNzYWdlLFxuICBkaXNhYmxlQm9hcmRFdmVudCxcbiAgdG9nZ2xlU3RhcnRCdG4sXG4gIHRvZ2dsZXNEaXNhYmxlLFxuICB0b2dnbGVCb2FyZEV2ZW50LFxuICBvcGVuRGlhbG9nLFxuICBjbG9zZU1vZGFsLFxufSBmcm9tIFwiLi4vMDYtRE9NL2dhbWUtc2NyZWVuXCI7XG5mdW5jdGlvbiBTY3JlZW5Db250cm9sbGVyKHBsYXkxLCBwbGF5Mikge1xuICBsZXQgZ2FtZXBsYXkgPSBHYW1lQ29udHJvbGxlcihwbGF5MSwgcGxheTIpO1xuXG4gIC8vb3V0cHV0IHBsYXllciB0dXJuXG4gIG91dHB1dE1lc3NhZ2UoYCR7Z2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZX0ncyB0dXJuIWApO1xuXG4gIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcbiAgICAvL2NsZWFyIGJvYXJkXG4gICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1ib2FyZFwiKTtcblxuICAgIGJvYXJkRGl2LmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgICBib2FyZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICBvdXRwdXRNZXNzYWdlKFwiXCIpO1xuXG4gICAgLy9vdXRwdXQgcGxheWVyIHR1cm5cbiAgICBvdXRwdXRNZXNzYWdlKGAke2dhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWV9J3MgdHVybiFgKTtcblxuICAgIC8vdXBkYXRlIGJvYXJkXG5cbiAgICB1cGRhdGVBY3RpdmVVc2VyQm9hcmQoZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkpO1xuXG4gICAgdXBkYXRlQWN0aXZlVXNlckJvYXJkKGdhbWVwbGF5LmdldE9wcG9uZW50KCkpO1xuXG4gICAgLy9kaXNhYmxlIGFjdGl2ZVBsYXllciBldmVudCBib2FyZFxuXG4gICAgZGlzYWJsZUFjdGl2ZVBsYXllckJvYXJkKFxuICAgICAgZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSxcbiAgICAgIGdhbWVwbGF5LmdldE9wcG9uZW50KCkubmFtZVxuICAgICk7XG4gICAgY2xvc2VNb2RhbCh1cGRhdGVTY3JlZW4pO1xuICB9O1xuXG4gIGluaXRSYW5kb21TaGlwUGxhY2VtZW50TGlzdGVuZXIoZ2FtZXBsYXkpO1xuICBpbml0U3RhcnRHYW1lTGlzdGVuZXIoZ2FtZXBsYXkpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZVVzZXJCb2FyZCh1c2VyKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IHVzZXIubmFtZTtcblxuICAgIGNvbnN0IGJvYXJkID0gdXNlci5nYW1lLmdldEJvYXJkKCk7XG5cbiAgICBjb25zdCBoaXRBcnJheSA9IHVzZXIuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG5cbiAgICBjb25zdCBtaXNzQXJyYXkgPSB1c2VyLmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuXG4gICAgY29uc3QgdXNlckRvbSA9IGdldEFjdGl2ZVBsYXllckRvbShwbGF5ZXJOYW1lKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcblxuICAgICAgICAvL21hcmsgc2hpcCBsb2NhdGlvbiBmb3IgdXNlclxuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShib2FyZFtpXVtqXSkpIHtcbiAgICAgICAgICBpZiAoZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSA9PT0gcGxheWVyTmFtZSkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2hpdCBhdHRhY2tzIG1hcmsgY2VsbFxuICAgICAgICBoaXRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgbGV0IFthLCBiXSA9IGl0ZW07XG4gICAgICAgICAgaWYgKGEgPT09IGkgJiYgYiA9PT0gaikge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZGFtYWdlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9taXNzZWQgYXR0YWNrcyBtYXJrIGNlbGxcbiAgICAgICAgbWlzc0FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgW2EsIGJdID0gaXRlbTtcbiAgICAgICAgICBpZiAoYSA9PT0gaSAmJiBiID09PSBqKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2NlbGwgZXZlbnQgaGFuZGxlclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBnYW1lcGxheS5wbGF5Um91bmQoW2ksIGpdKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY2xlYXJCb2FyZChnYW1lcGxheS5nZXRPcHBvbmVudCgpKTtcbiAgICAgICAgICAgIHVwZGF0ZUFjdGl2ZVVzZXJCb2FyZChnYW1lcGxheS5nZXRPcHBvbmVudCgpKTtcbiAgICAgICAgICAgIGRpc2FibGVCb2FyZEV2ZW50KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwbGF5MiAhPT0gXCJDb21wdXRlclwiKSB7XG4gICAgICAgICAgICAgIG9wZW5EaWFsb2coZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICAgIHVzZXJEb20uYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaW5pdFJhbmRvbVNoaXBQbGFjZW1lbnRMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbS1zaGlwLWJ0blwiKTtcblxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpO1xuXG4gICAgICBjbGVhckJvYXJkKGFjdGl2ZVBsYXllcik7XG4gICAgICBpbml0UGxheWVyQm9hcmRTaGlwKGFjdGl2ZVBsYXllcik7XG4gICAgICB1cGRhdGVBY3RpdmVVc2VyQm9hcmQoYWN0aXZlUGxheWVyKTtcblxuICAgICAgLy9kaXNhYmxlIGFjdGl2ZUJvYXJkXG4gICAgICBkaXNhYmxlQWN0aXZlUGxheWVyQm9hcmQoXG4gICAgICAgIGdhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWUsXG4gICAgICAgIGdhbWVwbGF5LmdldE9wcG9uZW50KCkubmFtZVxuICAgICAgKTtcblxuICAgICAgaWYgKHN0YXJ0QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVcIikpIHtcbiAgICAgICAgdG9nZ2xlc0Rpc2FibGUoc3RhcnRCdG4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFN0YXJ0R2FtZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIik7XG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb20tc2hpcC1idG5cIik7XG5cbiAgICBjb25zdCBvcHBvbmVudCA9IGdhbWVwbGF5LmdldE9wcG9uZW50KCk7XG5cbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy9zdG9wIGV4ZWN1dGluZyBpZiBmaXJzdCBib2FyZCBpcyBlbXB0eVxuICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLW9uZS1ib2FyZFwiKS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vcGxheWVyIDIgdHVybiBzaGlwIHJhbmRvbVxuICAgICAgaWYgKHBsYXkyICE9PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLXR3by1ib2FyZFwiKS5jaGlsZEVsZW1lbnRDb3VudCAhPT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICBjbGVhckFsbEJvYXJkKCk7XG4gICAgICAgICAgcmVzZXRQbGF5ZXJCb2FyZHMoZ2FtZXBsYXkpO1xuICAgICAgICAgIHRvZ2dsZVN0YXJ0QnRuKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdhbWVwbGF5LnN3aXRjaFBsYXllcigpO1xuICAgICAgICAgIG9wZW5EaWFsb2coZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSk7XG4gICAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICAgICAgdG9nZ2xlU3RhcnRCdG4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy90b2dnbGUgZGlzYWJsZSByYW5kb21CdG5cbiAgICAgIHRvZ2dsZXNEaXNhYmxlKHJhbmRvbUJ0bik7XG5cbiAgICAgIC8vY2hlY2sgaWYgMm5kIGJvYXJkIGlzIGVtcHR5XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItdHdvLWJvYXJkXCIpLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgIGluaXRQbGF5ZXJCb2FyZFNoaXAob3Bwb25lbnQpO1xuICAgICAgICB1cGRhdGVBY3RpdmVVc2VyQm9hcmQob3Bwb25lbnQpO1xuICAgICAgICB0b2dnbGVTdGFydEJ0bigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRQbGF5ZXJCb2FyZHMoZ2FtZXBsYXkpO1xuICAgICAgICBjbGVhckFsbEJvYXJkKCk7XG4gICAgICAgIHRvZ2dsZVN0YXJ0QnRuKCk7XG4gICAgICAgIG91dHB1dE1lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgLy9kaXNhYmxlIHN0YXJ0QnRuXG4gICAgICAgIHRvZ2dsZXNEaXNhYmxlKHN0YXJ0QnRuKTtcblxuICAgICAgICAvL291dHB1dCBwbGF5ZXIgdHVyblxuICAgICAgICBvdXRwdXRNZXNzYWdlKGAke2dhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWV9J3MgdHVybiFgKTtcbiAgICAgICAgdG9nZ2xlQm9hcmRFdmVudChnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQm9hcmQocGxheWVyKSB7XG4gICAgbGV0IGRvbSA9IGdldEFjdGl2ZVBsYXllckRvbShwbGF5ZXIubmFtZSk7XG4gICAgZG9tLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckFsbEJvYXJkKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1ib2FyZFwiKTtcbiAgcGxheWVyQm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgYm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQbGF5ZXJCb2FyZHMoZ2FtZXBsYXkpIHtcbiAgZ2FtZXBsYXkucmVzdGFydCgpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQWN0aXZlUGxheWVyQm9hcmQocGxheWVyLCBvcHBvbmVudCkge1xuICBjb25zdCBwbGF5ZXJEb20gPSBnZXRBY3RpdmVQbGF5ZXJEb20ocGxheWVyKTtcbiAgY29uc3Qgb3Bwb25lbnREb20gPSBnZXRBY3RpdmVQbGF5ZXJEb20ob3Bwb25lbnQpO1xuXG4gIGlmICghcGxheWVyRG9tLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVcIikpIHtcbiAgICBwbGF5ZXJEb20uY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gICAgb3Bwb25lbnREb20uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlUGxheWVyRG9tKHBsYXllcikge1xuICBjb25zdCBhbGxUaXRsZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItdGl0bGVcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUaXRsZUJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbFRpdGxlQm9hcmRbaV0udGV4dENvbnRlbnQgPT09IHBsYXllcikge1xuICAgICAgcmV0dXJuIGFsbFRpdGxlQm9hcmRbaV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBTY3JlZW5Db250cm9sbGVyIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQocGxheWVyMSwgcGxheWVyMikge1xuICBpZiAodHlwZW9mIHBsYXllcjIgPT09IHVuZGVmaW5lZCkge1xuICAgIHBsYXllcjIgPSBcIkNvbXB1dGVyXCI7XG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gIGNvbnN0IHBsYXllckFycmF5ID0gW1wib25lXCIsIFwidHdvXCJdO1xuXG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuXG4gIGNvbnN0IHNoaXBJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBJbnB1dERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1pbnB1dC1kaXZcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoYHBsYXllci0ke3BsYXllckFycmF5W2ldfWApO1xuXG4gICAgY29uc3QgcGxheWVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItdGl0bGVcIik7XG4gICAgcGxheWVyVGl0bGUuc2V0QXR0cmlidXRlKFwiSWRcIiwgYHBsYXllci0ke3BsYXllckFycmF5W2ldfWApO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIHBsYXllclRpdGxlLnRleHRDb250ZW50ID0gcGxheWVyMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyVGl0bGUudGV4dENvbnRlbnQgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgIHBsYXllckJvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwbGF5ZXItJHtwbGF5ZXJBcnJheVtpXX0tYm9hcmRgKTtcblxuICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChwbGF5ZXJUaXRsZSk7XG4gICAgcGxheWVyRGl2LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcbiAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJEaXYpO1xuICB9XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChib2FyZCk7XG5cbiAgY29uc3QgYm9hcmRMYXN0RWxlbWVudCA9IGJvYXJkLmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgYm9hcmQuaW5zZXJ0QmVmb3JlKHNoaXBJbnB1dERpdiwgYm9hcmRMYXN0RWxlbWVudCk7XG5cbiAgY3JlYXRlU2hpcElucHV0RGl2KCk7XG5cbiAgY3JlYXRlU3RhcnREaXYoKTtcblxuICBjcmVhdGVNZXNzYWdlT3V0cHV0KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXBJbnB1dERpdigpIHtcbiAgY29uc3Qgc2hpcElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWlucHV0LWRpdlwiKTtcblxuICBjb25zdCByYW5kb21TaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmFuZG9tU2hpcERpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1pbnB1dC1yYW5kb21cIik7XG5cbiAgY29uc3QgcmFuZG9tU2hpcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmFuZG9tU2hpcFRpdGxlLnRleHRDb250ZW50ID0gXCJHZW5lcmF0ZSByYW5kb20gc2hpcCBjb29yZGluYXRlc1wiO1xuXG4gIGNvbnN0IHJhbmRvbVNoaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByYW5kb21TaGlwQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmFuZG9tLXNoaXAtYnRuXCIpO1xuICByYW5kb21TaGlwQnRuLnRleHRDb250ZW50ID0gXCJDbGlja1wiO1xuXG4gIHJhbmRvbVNoaXBEaXYuYXBwZW5kQ2hpbGQocmFuZG9tU2hpcFRpdGxlKTtcbiAgcmFuZG9tU2hpcERpdi5hcHBlbmRDaGlsZChyYW5kb21TaGlwQnRuKTtcblxuICBzaGlwSW5wdXREaXYuYXBwZW5kQ2hpbGQocmFuZG9tU2hpcERpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXJ0RGl2KCkge1xuICBjb25zdCBzaGlwSW5wdXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtaW5wdXQtZGl2XCIpO1xuXG4gIGNvbnN0IHN0YXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RhcnREaXYuY2xhc3NMaXN0LmFkZChcInN0YXJ0LWRpdlwiKTtcblxuICBjb25zdCBzdGFydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RhcnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtdGl0bGVcIik7XG4gIHN0YXJ0VGl0bGUudGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnQtYnRuXCIpO1xuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIkNsaWNrXCI7XG5cbiAgc3RhcnREaXYuYXBwZW5kQ2hpbGQoc3RhcnRUaXRsZSk7XG4gIHN0YXJ0RGl2LmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcblxuICBzaGlwSW5wdXREaXYuYXBwZW5kQ2hpbGQoc3RhcnREaXYpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVzRGlzYWJsZShkaXYpIHtcbiAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlXCIpKSB7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlT3V0cHV0KCkge1xuICBjb25zdCBzaGlwSW5wdXREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtaW5wdXQtZGl2XCIpO1xuXG4gIGNvbnN0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlLWRpdlwiKTtcblxuICBzaGlwSW5wdXREaXYuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG59XG5cbmZ1bmN0aW9uIG91dHB1dE1lc3NhZ2UoY2hhcikge1xuICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZXNzYWdlLWRpdlwiKTtcbiAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXI7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVCb2FyZEV2ZW50KCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWJvYXJkXCIpO1xuXG4gIGJvYXJkLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTdGFydEJ0bigpIHtcbiAgY29uc3QgYnRuVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LXRpdGxlXCIpO1xuICBpZiAoYnRuVGl0bGUudGV4dENvbnRlbnQgPT09IFwiU3RhcnQgR2FtZVwiKSB7XG4gICAgYnRuVGl0bGUudGV4dENvbnRlbnQgPSBcIlJlc3RhcnQgR2FtZVwiO1xuICB9IGVsc2Uge1xuICAgIGJ0blRpdGxlLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQm9hcmRFdmVudChhY3RpdmVQbGF5ZXIpIHtcbiAgY29uc3QgYWxsVGl0bGVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLXRpdGxlXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxUaXRsZUJvYXJkW2ldLnRleHRDb250ZW50ID09PSBhY3RpdmVQbGF5ZXIpIHtcbiAgICAgIGFsbFRpdGxlQm9hcmRbaV0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGxUaXRsZUJvYXJkW2ldLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJBbGxCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItYm9hcmRcIik7XG4gIHBsYXllckJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgIGJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5EaWFsb2coYWN0aXZlUGxheWVyKSB7XG4gIGNsZWFyQWxsQm9hcmQoKTtcblxuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuXG4gIGNvbnN0IHBsYXllclR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10dXJuXCIpO1xuICBwbGF5ZXJUdXJuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgcGxheWVyVHVybi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllcn0ncyBUdXJuIWA7XG5cbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGFjdGl2ZUZ1bmN0aW9uKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbW9kYWxcIik7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgYWN0aXZlRnVuY3Rpb24oKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUdhbWVCb2FyZCxcbiAgb3V0cHV0TWVzc2FnZSxcbiAgZGlzYWJsZUJvYXJkRXZlbnQsXG4gIHRvZ2dsZVN0YXJ0QnRuLFxuICB0b2dnbGVzRGlzYWJsZSxcbiAgdG9nZ2xlQm9hcmRFdmVudCxcbiAgb3BlbkRpYWxvZyxcbiAgY2xvc2VNb2RhbCxcbn07XG4iLCJpbXBvcnQgeyBTY3JlZW5Db250cm9sbGVyIH0gZnJvbSBcIi4uLzA1LVNjcmVlbkNvbnRyb2xsZXIvc2NyZWVuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkIH0gZnJvbSBcIi4uLzA2LURPTS9nYW1lLXNjcmVlblwiO1xuXG5mdW5jdGlvbiBwbGF5ZXJTZWxlY3Rpb24obXVsdGkpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBwbGF5ZXJPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vcHRpb25cIik7XG4gIHBsYXllck9wdGlvbi5yZW1vdmUoKTtcblxuICBjb25zdCBwbGF5ZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHBsYXllckZvcm0uY2xhc3NMaXN0LmFkZChcInBsYXllci1mb3JtXCIpO1xuXG4gIGNvbnN0IHBsYXllcklucHV0U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVySW5wdXRTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInBsYXllci1pbnB1dC1zZWxlY3Rpb25cIik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbXVsdGk7IGkrKykge1xuICAgIGNvbnN0IHBsYXllck9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBwbGF5ZXJPbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICAgIGNvbnN0IHBsYXllck9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBsYXllck9uZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgaWYgKGkgPT09IDEpIHtcbiAgICAgIHBsYXllck9uZURpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW9uZS1kaXZcIik7XG4gICAgICBwbGF5ZXJPbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwbGF5ZXItb25lLW5hbWVcIik7XG4gICAgICBwbGF5ZXJPbmVMYWJlbC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lIE5hbWVgO1xuICAgICAgcGxheWVyT25lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHBsYXllci1vbmUtbmFtZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJPbmVEaXYuY2xhc3NMaXN0LmFkZChcInBsYXllci10d28tZGl2XCIpO1xuICAgICAgcGxheWVyT25lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicGxheWVyLXR3by1uYW1lXCIpO1xuICAgICAgcGxheWVyT25lTGFiZWwudGV4dENvbnRlbnQgPSBgUGxheWVyIFR3byBOYW1lYDtcbiAgICAgIHBsYXllck9uZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBwbGF5ZXItdHdvLW5hbWVgKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJPbmVEaXYuYXBwZW5kQ2hpbGQocGxheWVyT25lTGFiZWwpO1xuXG4gICAgcGxheWVyT25lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBOYW1lXCIpO1xuICAgIHBsYXllck9uZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBwbGF5ZXJPbmVEaXYuYXBwZW5kQ2hpbGQocGxheWVyT25lSW5wdXQpO1xuXG4gICAgcGxheWVySW5wdXRTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyT25lRGl2KTtcbiAgfVxuXG4gIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLW5hbWUtYnRuXCIpO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICBwbGF5ZXJGb3JtLmFwcGVuZENoaWxkKHBsYXllcklucHV0U2VsZWN0aW9uKTtcbiAgcGxheWVyRm9ybS5hcHBlbmRDaGlsZChidG5EaXYpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyRm9ybSk7XG5cbiAgZ2FtZU1vZGVFdmVudChidG4pO1xufVxuXG5mdW5jdGlvbiBnYW1lTW9kZUV2ZW50KGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghY2hlY2tWYWxpZGl0eUlucHV0cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwbGF5ZXJzID0gZ2V0UGxheWVySW5wdXQoKTtcbiAgICByZW1vdmVQbGF5ZXJTZWxlY3Rpb24oKTtcbiAgICBjcmVhdGVHYW1lQm9hcmQocGxheWVyc1swXSwgcGxheWVyc1sxXSk7XG4gICAgU2NyZWVuQ29udHJvbGxlcihwbGF5ZXJzWzBdLCBwbGF5ZXJzWzFdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYXllcklucHV0KCkge1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG5cbiAgbGV0IHBsYXllcnMgPSBbXTtcblxuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBwbGF5ZXJzLnB1c2goaW5wdXQudmFsdWUpO1xuICB9KTtcblxuICBpZiAocGxheWVycy5sZW5ndGggPT09IDEpIHtcbiAgICBwbGF5ZXJzLnB1c2goXCJDb21wdXRlclwiKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5ZXJzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQbGF5ZXJTZWxlY3Rpb24oKSB7XG4gIGNvbnN0IHBsYXllckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1mb3JtXCIpO1xuICBwbGF5ZXJGb3JtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkaXR5SW5wdXRzKCkge1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbnB1dHNbaV0udmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGlucHV0c1tpXS52YWx1ZSA9PT0gXCJDb21wdXRlclwiIHx8XG4gICAgICBpbnB1dHNbaV0udmFsdWUgPT09IFwiY29tcHV0ZXJcIlxuICAgICkge1xuICAgICAgaW5wdXRzW2ldLnNldEN1c3RvbVZhbGlkaXR5KFwiRW50ZXIgVmFsaWQgTmFtZVwiKTtcbiAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRzW2ldLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHsgcGxheWVyU2VsZWN0aW9uLCByZW1vdmVQbGF5ZXJTZWxlY3Rpb24gfTtcbiIsImltcG9ydCB7IHBsYXllclNlbGVjdGlvbiB9IGZyb20gXCIuL2dhbWVtb2RlLXNlbGVjdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgY29uc3QgcGxheWVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItb3B0aW9uXCIpO1xuXG4gIGNvbnN0IHBsYXllck9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXllck9uZU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW9uZS1vcHRpb25cIik7XG4gIHBsYXllck9uZU9wdGlvbi50ZXh0Q29udGVudCA9IFwiMSBQbGF5ZXJcIjtcblxuICBjb25zdCBwbGF5ZXJUd29PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5ZXJUd29PcHRpb24uY2xhc3NMaXN0LmFkZChcInBsYXllci10d28tb3B0aW9uXCIpO1xuICBwbGF5ZXJUd29PcHRpb24udGV4dENvbnRlbnQgPSBcIjIgUGxheWVyc1wiO1xuXG4gIHBsYXllck9wdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJPbmVPcHRpb24pO1xuICBwbGF5ZXJPcHRpb24uYXBwZW5kQ2hpbGQocGxheWVyVHdvT3B0aW9uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHBsYXllck9wdGlvbik7XG5cbiAgaG9tZUV2ZW50cyhwbGF5ZXJPbmVPcHRpb24sIHBsYXllclR3b09wdGlvbik7XG5cbiAgcmVzdGFydEhvbWVQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIGhvbWVFdmVudHMocGxheTFCdG4sIHBsYXkyQnRuKSB7XG4gIHBsYXkxQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGxheWVyU2VsZWN0aW9uKDEpO1xuICB9KTtcblxuICBwbGF5MkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllclNlbGVjdGlvbigyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRIb21lUGFnZSgpIHtcbiAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhpdFwiKTtcblxuICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi8wNi1ET00vaG9tZS1wYWdlXCI7XG5cbmhvbWVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=