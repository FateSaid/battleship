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
    return (0,_receiveAttack_js__WEBPACK_IMPORTED_MODULE_3__.attack)(
      coordinate,
      board,
      getMissedAttacks,
      addShipsSunk,
      getHitAttacks
    );
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
    return true;
  } else {
    getMissedAttacks().push([x, y]);
    return false;
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

    let booleanValue;

    let opponent = getOpponent();

    let missedArray = opponent.game.getMissedAttacks();
    let hitArray = opponent.game.getHitAttacks();

    let combinedArray = missedArray.concat(hitArray);

    if ((0,_computer_move_js__WEBPACK_IMPORTED_MODULE_2__.checkDuplicate)(combinedArray, coordinates)) {
      booleanValue = opponent.game.receiveAttack([x, y]);
    } else {
      throw new Error("Duplicate");
    }

    if (checkWinner(opponent)) {
      return `Winner is ${getActivePlayer().name}`;
    } else if (booleanValue && getActivePlayer().name === "Computer") {
      let [a, b] = (0,_computer_move_js__WEBPACK_IMPORTED_MODULE_2__.calculateNextTarget)(getOpponent());
      return playRound([a, b]);
    } else if (booleanValue) {
      return true;
    } else {
      switchPlayer();
    }

    if (getActivePlayer().name === "Computer") {
      let [a, b] = (0,_computer_move_js__WEBPACK_IMPORTED_MODULE_2__.calculateNextTarget)(getOpponent());
      return playRound([a, b]);
    }
    return false;
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

  //close dialog modal btn
  const closeDialogBtn = document.getElementById("close-modal");
  const dialog = document.querySelector("dialog");

  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
    updateScreen();
  });

  //shows whether 1P or 2P game
  let gameMode;

  if (play2 === "Computer") {
    gameMode = "single";
  } else if (play2 !== "Computer") {
    gameMode = "multi";
  }

  //output player turn
  (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(`${gameplay.getActivePlayer().name}'s turn!`);

  const updateScreen = () => {
    //clear board
    const boardDiv = document.querySelectorAll(".player-board");

    boardDiv.forEach((board) => {
      board.textContent = "";
    });

    if (gameMode === "multi") {
      (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)("");

      //output player turn
      (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(`${gameplay.getActivePlayer().name}'s turn!`);
    }

    //update board

    updateActiveUserBoard(gameplay.getActivePlayer());

    updateActiveUserBoard(gameplay.getOpponent());

    //disable activePlayer event board

    disableActivePlayerBoard(
      gameplay.getActivePlayer().name,
      gameplay.getOpponent().name
    );
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
          let coordinateReturn = gameplay.playRound([i, j]);
          if (typeof coordinateReturn === "string") {
            clearBoard(gameplay.getOpponent());
            updateActiveUserBoard(gameplay.getOpponent());
            (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.disableBoardEvent)();
            if (gameMode === "single") {
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.reinstateShipInputDiv)();
              initStartGameListener();
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(`Winner is ${gameplay.getActivePlayer().name}!`);
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(document.getElementById("random-ship-btn"));
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(document.getElementById("start-btn"));
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleStartBtn)();
            } else if (gameMode === "multi") {
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.removeShipInputDivs)();
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.reinstateShipInputDiv)();
              initStartGameListener();
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(coordinateReturn);
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(document.getElementById("start-btn"));
              (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleStartBtn)();
            }
          } else {
            if (gameMode === "multi" && !coordinateReturn) {
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

    let countStart = 0;

    const resetCount = () => (countStart = 0);

    startBtn.addEventListener("click", () => {
      const opponent = gameplay.getOpponent();

      countStart++;

      //stop executing if first board is empty
      let playerOneBoard = document.getElementById("player-one-board");
      let playerTwoBoard = document.getElementById("player-two-board");

      if (playerOneBoard.childElementCount === 0) {
        return;
      }

      //Player1 options
      if (gameMode === "single") {
        if (playerTwoBoard.childElementCount === 0) {
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.removeShipInputDivs)();
          (0,_random_ship_placement__WEBPACK_IMPORTED_MODULE_1__.initPlayerBoardShip)(opponent);
          updateActiveUserBoard(opponent);
        } else {
          resetPlayerBoards(gameplay);
          clearAllBoard();
          initRandomShipPlacementListener();
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(playerTwoBoard);
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(document.getElementById("random-ship-btn"));
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.outputMessage)(`${gameplay.getActivePlayer().name}'s Turn!`);
        }
      }

      //player 2 turn ship random
      if (gameMode === "multi") {
        if (countStart === 2) {
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.removeShipInputDivs)();
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.createMessageOutput)();
          gameplay.switchPlayer();
          updateScreen();
          return;
        }
        if (playerTwoBoard.childElementCount !== 0) {
          clearAllBoard();
          resetPlayerBoards(gameplay);
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleStartBtn)();
          initRandomShipPlacementListener();
          resetCount();
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.toggleBoardEvent)(gameplay.getActivePlayer());
          return;
        } else {
          gameplay.switchPlayer();
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.openDialog)(gameplay.getActivePlayer().name);
          updateScreen();
          (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.togglesDisable)(startBtn);
        }

        return;
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
/* harmony export */   createGameBoard: () => (/* binding */ createGameBoard),
/* harmony export */   createMessageOutput: () => (/* binding */ createMessageOutput),
/* harmony export */   disableBoardEvent: () => (/* binding */ disableBoardEvent),
/* harmony export */   openDialog: () => (/* binding */ openDialog),
/* harmony export */   outputMessage: () => (/* binding */ outputMessage),
/* harmony export */   reinstateShipInputDiv: () => (/* binding */ reinstateShipInputDiv),
/* harmony export */   removeShipInputDivs: () => (/* binding */ removeShipInputDivs),
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
  if (messageDiv !== null) {
    messageDiv.textContent = char;
  }
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
function removeShipInputDivs() {
  const startDiv = document.querySelector(".ship-input-div");

  while (startDiv.hasChildNodes()) {
    startDiv.removeChild(startDiv.firstChild);
  }
}

function reinstateShipInputDiv() {
  createShipInputDiv();
  createStartDiv();
  createMessageOutput();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssT0FBTyxX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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lCOztBQUU5QywyREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wMS1zaGlwL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDItR2FtZWJvYXJkL2FkZFNoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDItR2FtZWJvYXJkL2NyZWF0ZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wMi1HYW1lYm9hcmQvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzAyLUdhbWVib2FyZC9yZWNlaXZlQXR0YWNrLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzAzLVBsYXllci9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDQtR2FtZXBsYXkvY29tcHV0ZXItbW92ZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNC1HYW1lcGxheS9jcmVhdGUtcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA0LUdhbWVwbGF5L2dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA1LVNjcmVlbkNvbnRyb2xsZXIvcmFuZG9tLXNoaXAtcGxhY2VtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA1LVNjcmVlbkNvbnRyb2xsZXIvc2NyZWVuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNi1ET00vZ2FtZS1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDYtRE9NL2dhbWVtb2RlLXNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNi1ET00vaG9tZS1wYWdlLmpzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQmxhY2tPcHNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJzdGFuY2lsXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4vKiBtb2RhbCBiYWNrZ3JvdW5kICovXG46OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi8qIG1vZGFsIGNzcyAqL1xuXG46bW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIG1lbnUgdG9vbGJhciAqL1xuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucmVzdGFydCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogMjVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucmVzdGFydDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6IHJlZDtcbn1cblxuLyogSG9tZSBwYWdlIGNvbnRlbnQqL1xuXG4uaG9tZS1wYWdlLW9wdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uaG9tZS1wYWdlLW9wdGlvbiA+IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThyZW07XG59XG5cbi5wbGF5ZXItb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wbGF5ZXItb3B0aW9uIGJ1dHRvbixcbiNwbGF5ZXItbmFtZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJzdGFuY2lsXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsXG4gICAgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5wbGF5ZXItb3B0aW9uID4gYnV0dG9uOmhvdmVyLFxuI3BsYXllci1uYW1lLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTByZW07XG4gIGZvbnQtZmFtaWx5OiBcInN0YW5jaWxcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCxcbiAgICBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbn1cblxuLyogU2luZ2xlIFBsYXllciBNZW51Ki9cblxuLnBsYXllci1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJzdGFuY2lsXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsXG4gICAgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLnBsYXllci1vbmUtZGl2LFxuLnBsYXllci10d28tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24gPiBkaXYge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uIGlucHV0IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBNdWx0aSBwbGF5ZXIgbWVudSAqL1xuXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBjb29yZGluYXRlIGJveCAqL1xuXG4uc2hpcC1pbnB1dC1kaXYge1xuICB3aWR0aDogNDAwcHg7XG4gIGdhcDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5zaGlwLWlucHV0LXJhbmRvbSxcbi5zdGFydC1kaXYsXG4ubWVzc2FnZS1kaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiMmIyMmU7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuI3JhbmRvbS1zaGlwLWJ0bixcbiNzdGFydC1idG4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wbGF5ZXItYm9hcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNmaXJzdC1wbGF5ZXItYm9hcmQsXG4jc2Vjb25kLXBsYXllci1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG5cbi5jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2IzYjJiMjtcbiAgZmxleDogMTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLm1pc3NlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmRhbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGlzYWJsZSxcbi5taXNzZWQsXG4uZGFtYWdlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi53aW5uZXJNZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlcixcbmZvb3RlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFxQztBQUN2Qzs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZjt3RUFDc0U7RUFDdEUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEI7d0VBQ3NFO0FBQ3hFOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0U7d0VBQ3NFO0VBQ3RFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzdGFuY2lsXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbi8qIG1vZGFsIGJhY2tncm91bmQgKi9cXG46OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC43NTtcXG59XFxuXFxuLyogbW9kYWwgY3NzICovXFxuXFxuOm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBtZW51IHRvb2xiYXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5yZXN0YXJ0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucmVzdGFydDpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogSG9tZSBwYWdlIGNvbnRlbnQqL1xcblxcbi5ob21lLXBhZ2Utb3B0aW9uIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uaG9tZS1wYWdlLW9wdGlvbiA+IC50aXRsZSB7XFxuICBmb250LXNpemU6IDE4cmVtO1xcbn1cXG5cXG4ucGxheWVyLW9wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wbGF5ZXItb3B0aW9uIGJ1dHRvbixcXG4jcGxheWVyLW5hbWUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic3RhbmNpbFxcXCIsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLFxcbiAgICBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLnBsYXllci1vcHRpb24gPiBidXR0b246aG92ZXIsXFxuI3BsYXllci1uYW1lLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi50aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzdGFuY2lsXFxcIiwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG4vKiBTaW5nbGUgUGxheWVyIE1lbnUqL1xcblxcbi5wbGF5ZXItZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24gbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJzdGFuY2lsXFxcIiwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsXFxuICAgIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1kaXYsXFxuLnBsYXllci10d28tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24gPiBkaXYge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uIGlucHV0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTXVsdGkgcGxheWVyIG1lbnUgKi9cXG5cXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogY29vcmRpbmF0ZSBib3ggKi9cXG5cXG4uc2hpcC1pbnB1dC1kaXYge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uc2hpcC1pbnB1dC1yYW5kb20sXFxuLnN0YXJ0LWRpdixcXG4ubWVzc2FnZS1kaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYjJiMjJlO1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4jcmFuZG9tLXNoaXAtYnRuLFxcbiNzdGFydC1idG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDdkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZmlyc3QtcGxheWVyLWJvYXJkLFxcbiNzZWNvbmQtcGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2IyYjI7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kYW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5kaXNhYmxlLFxcbi5taXNzZWQsXFxuLmRhbWFnZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLndpbm5lck1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiZnVuY3Rpb24gYWRkU2hpcChzaGlwLCBzdGFydCwgZW5kLCBib2FyZCkge1xuICBsZXQgW3gxLCB5MV0gPSBzdGFydDtcbiAgbGV0IFt4MiwgeTJdID0gZW5kO1xuXG4gIGlmICh4MSA9PT0geDIpIHtcbiAgICBpZiAoeTEgPiB5Mikge1xuICAgICAgbG9vcENvb3JkaW5hdGVzKHgxLCBbeTEsIHkyXSwgXCJob3Jpem9udGFsXCIsIHNoaXAsIGJvYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9vcENvb3JkaW5hdGVzKHgxLCBbeTIsIHkxXSwgXCJob3Jpem9udGFsXCIsIHNoaXAsIGJvYXJkKTtcbiAgICB9XG4gIH1cblxuICBpZiAoeTEgPT09IHkyKSB7XG4gICAgaWYgKHgxID4geDIpIHtcbiAgICAgIGxvb3BDb29yZGluYXRlcyh5MSwgW3gxLCB4Ml0sIFwidmVydGljYWxcIiwgc2hpcCwgYm9hcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb29wQ29vcmRpbmF0ZXMoeTEsIFt4MiwgeDFdLCBcInZlcnRpY2FsXCIsIHNoaXAsIGJvYXJkKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9vcENvb3JkaW5hdGVzKHNhbWUsIGRpZmYsIHBvcywgc2hpcCwgYm9hcmQpIHtcbiAgbGV0IFtkaWZmMSwgZGlmZjJdID0gZGlmZjtcblxuICBmb3IgKGxldCBpID0gZGlmZjE7IGkgPj0gZGlmZjI7IGktLSkge1xuICAgIGlmIChwb3MgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoYm9hcmRbc2FtZV1baV1bMF0gPT09IHNoaXApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQgYWxyZWFkeSBjb250YWlucyBzaGlwIG9iamVjdFwiKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW3NhbWVdW2ldID0gc2hpcDtcbiAgICB9XG5cbiAgICBpZiAocG9zID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChib2FyZFtpXVtzYW1lXVswXSA9PT0gc2hpcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJdCBhbHJlYWR5IGNvbnRhaW5zIHNoaXAgb2JqZWN0XCIpO1xuICAgICAgfVxuICAgICAgYm9hcmRbaV1bc2FtZV0gPSBzaGlwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBhZGRTaGlwLCBsb29wQ29vcmRpbmF0ZXMgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgbGV0IGFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGFycmF5W2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBhcnJheVtpXVtqXSA9IFtdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCB9IGZyb20gXCIuL2NyZWF0ZS1ib2FyZC5qc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuLi8wMS1zaGlwL3NoaXAuanNcIjtcbmltcG9ydCB7IGFkZFNoaXAgfSBmcm9tIFwiLi9hZGRTaGlwLmpzXCI7XG5pbXBvcnQgeyBhdHRhY2sgfSBmcm9tIFwiLi9yZWNlaXZlQXR0YWNrLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgbGV0IG1pc3NlZEF0dGFja3MgPSBbXTtcblxuICBjb25zdCBnZXRNaXNzZWRBdHRhY2tzID0gKCkgPT4gbWlzc2VkQXR0YWNrcztcblxuICBjb25zdCBnZXRIaXRBdHRhY2tzID0gKCkgPT4gaGl0QXR0YWNrcztcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IHJlc2V0VmFyaWFibGVzID0gKCkgPT4ge1xuICAgIGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgaGl0QXR0YWNrcyA9IFtdO1xuICAgIHNoaXBzU3VuayA9IDA7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVzdGFydEJvYXJkKCkge1xuICAgIGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgfVxuXG4gIGxldCBzaGlwc1N1bmsgPSAwO1xuXG4gIGxldCBoaXRBdHRhY2tzID0gW107XG5cbiAgY29uc3QgZ2V0U2hpcFN1bmsgPSAoKSA9PiBzaGlwc1N1bms7XG5cbiAgZnVuY3Rpb24gYWRkU2hpcHNTdW5rKCkge1xuICAgIHNoaXBzU3VuayArPSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gdG90YWxTaGlwU3VuaygpIHtcbiAgICBpZiAoZ2V0U2hpcFN1bmsoKSA9PT0gNSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgc3RhcnQsIGVuZCkge1xuICAgIGxldCBzaGlwID0gbmV3IFNoaXAobmFtZSwgbGVuZ3RoKTtcblxuICAgIGFkZFNoaXAoc2hpcCwgc3RhcnQsIGVuZCwgYm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIGF0dGFjayhcbiAgICAgIGNvb3JkaW5hdGUsXG4gICAgICBib2FyZCxcbiAgICAgIGdldE1pc3NlZEF0dGFja3MsXG4gICAgICBhZGRTaGlwc1N1bmssXG4gICAgICBnZXRIaXRBdHRhY2tzXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0SGl0QXR0YWNrcyxcbiAgICB0b3RhbFNoaXBTdW5rLFxuICAgIGdldE1pc3NlZEF0dGFja3MsXG4gICAgcmVzZXRWYXJpYWJsZXMsXG4gICAgcmVzdGFydEJvYXJkLFxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGF0dGFjayhcbiAgY29vcmRpbmF0ZSxcbiAgYm9hcmQsXG4gIGdldE1pc3NlZEF0dGFja3MsXG4gIGFkZFNoaXBzU3VuayxcbiAgZ2V0SGl0QXR0YWNrc1xuKSB7XG4gIGxldCBbeCwgeV0gPSBjb29yZGluYXRlO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShib2FyZFt4XVt5XSkpIHtcbiAgICBib2FyZFt4XVt5XS5oaXQoKTtcbiAgICBnZXRIaXRBdHRhY2tzKCkucHVzaChbeCwgeV0pO1xuICAgIGlmIChib2FyZFt4XVt5XS5pc1N1bmsoKSkge1xuICAgICAgYWRkU2hpcHNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGdldE1pc3NlZEF0dGFja3MoKS5wdXNoKFt4LCB5XSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vMDItR2FtZWJvYXJkL2dhbWVib2FyZC5qc1wiO1xuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xuICBjb25zdCBnYW1lID0gR2FtZWJvYXJkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIENvbXB1dGVyKCkge1xuICBjb25zdCBuYW1lID0gXCJDb21wdXRlclwiO1xuICBjb25zdCBnYW1lID0gR2FtZWJvYXJkKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGdhbWUsXG4gIH07XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTtcbiIsImZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlKGFycmF5LCBjb29yZGluYXRlKSB7XG4gIGxldCBzdHJpbmdBcnJheSA9IGFycmF5Lm1hcChKU09OLnN0cmluZ2lmeSk7XG4gIGxldCBzdHJpbmdDb29yZGluYXRlID0gSlNPTi5zdHJpbmdpZnkoY29vcmRpbmF0ZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHJpbmdBcnJheVtpXSA9PT0gc3RyaW5nQ29vcmRpbmF0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTmV4dFRhcmdldChvcHBvbmVudCkge1xuICAvL2hlcmUgZnVuY3Rpb24gZm9yIHByb2R1Y2luZyBwb3RlbnRpYWwgbW92ZXNcblxuICBsZXQgbWlzc2VkQXJyYXkgPSBvcHBvbmVudC5nYW1lLmdldE1pc3NlZEF0dGFja3MoKTtcbiAgbGV0IGhpdEFycmF5ID0gb3Bwb25lbnQuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG4gIGxldCBjb21iaW5lZEFycmF5ID0gbWlzc2VkQXJyYXkuY29uY2F0KGhpdEFycmF5KTtcbiAgbGV0IHNhbWVTaGlwQ29vcmRpbmF0ZSA9IGZpbHRlclNhbWVTaGlwSGl0KG9wcG9uZW50KTtcblxuICBpZiAoc2FtZVNoaXBDb29yZGluYXRlLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcHJlZGljdFNoaXBMb2NhdGlvbihvcHBvbmVudCk7XG4gIH1cblxuICBpZiAoc2FtZVNoaXBDb29yZGluYXRlLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBwb3RlbnRpYWxNb3ZlKG9wcG9uZW50KTtcbiAgfVxuXG4gIHJldHVybiByYW5kb21Db29yZGluYXRlcyhjb21iaW5lZEFycmF5KTtcbn1cblxuZnVuY3Rpb24gcHJlZGljdFNoaXBMb2NhdGlvbihvcHApIHtcbiAgbGV0IG1pc3NlZEFycmF5ID0gb3BwLmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuICBsZXQgaGl0QXJyYXkgPSBvcHAuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG4gIGxldCBjb21iaW5lZEFycmF5ID0gbWlzc2VkQXJyYXkuY29uY2F0KGhpdEFycmF5KTtcblxuICBsZXQgc2FtZVNoaXBDb29yZGluYXRlID0gZmlsdGVyU2FtZVNoaXBIaXQob3BwKTtcbiAgbGV0IHBsYW5lQWxpZ25tZW50ID0gZ2V0U2hpcE9yaWVudGF0aW9uKHNhbWVTaGlwQ29vcmRpbmF0ZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1lU2hpcENvb3JkaW5hdGUubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgW3gsIHldID0gc2FtZVNoaXBDb29yZGluYXRlW2ldO1xuICAgIGlmIChwbGFuZUFsaWdubWVudCA9PT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoeCArIDEgPD0gOSAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCArIDEsIHldKSkge1xuICAgICAgICByZXR1cm4gcGx1c1goeCwgeSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh4IC0gMSA+PSAwICYmIGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIFt4IC0gMSwgeV0pKSB7XG4gICAgICAgIHJldHVybiBtaW51c1goeCwgeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBsYW5lQWxpZ25tZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgaWYgKHkgKyAxIDw9IDkgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3gsIHkgKyAxXSkpIHtcbiAgICAgICAgcmV0dXJuIHBsdXNZKHgsIHkpO1xuICAgICAgfVxuICAgICAgaWYgKHkgLSAxID49IDAgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3gsIHkgLSAxXSkpIHtcbiAgICAgICAgcmV0dXJuIG1pbnVzWSh4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcG90ZW50aWFsTW92ZShvcHApIHtcbiAgbGV0IG1pc3NlZEFycmF5ID0gb3BwLmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuICBsZXQgaGl0QXJyYXkgPSBvcHAuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG4gIGxldCBjb21iaW5lZEFycmF5ID0gbWlzc2VkQXJyYXkuY29uY2F0KGhpdEFycmF5KTtcblxuICBsZXQgc2hpcHNOb3RTdW5rID0gY2hlY2tIaXRBdHRhY2tzKG9wcCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc05vdFN1bmsubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgW3gsIHldID0gc2hpcHNOb3RTdW5rW2ldO1xuXG4gICAgaWYgKHggKyAxIDw9IDkgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3ggKyAxLCB5XSkpIHtcbiAgICAgIHJldHVybiBwbHVzWCh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoeCAtIDEgPj0gMCAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCAtIDEsIHldKSkge1xuICAgICAgcmV0dXJuIG1pbnVzWCh4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoeSArIDEgPD0gOSAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCwgeSArIDFdKSkge1xuICAgICAgcmV0dXJuIHBsdXNZKHgsIHkpO1xuICAgIH1cblxuICAgIGlmICh5IC0gMSA+PSAwICYmIGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIFt4LCB5IC0gMV0pKSB7XG4gICAgICByZXR1cm4gbWludXNZKHgsIHkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwbHVzWCh4LCB5KSB7XG4gIHJldHVybiBbeCArIDEsIHldO1xufVxuXG5mdW5jdGlvbiBtaW51c1goeCwgeSkge1xuICByZXR1cm4gW3ggLSAxLCB5XTtcbn1cblxuZnVuY3Rpb24gcGx1c1koeCwgeSkge1xuICByZXR1cm4gW3gsIHkgKyAxXTtcbn1cblxuZnVuY3Rpb24gbWludXNZKHgsIHkpIHtcbiAgcmV0dXJuIFt4LCB5IC0gMV07XG59XG5cbmZ1bmN0aW9uIGNoZWNrSGl0QXR0YWNrcyhvcHApIHtcbiAgbGV0IGhpdEFycmF5ID0gb3BwLmdhbWUuZ2V0SGl0QXR0YWNrcygpO1xuICBsZXQgYm9hcmQgPSBvcHAuZ2FtZS5nZXRCb2FyZCgpO1xuXG4gIHJldHVybiBoaXRBcnJheS5maWx0ZXIoKGVsKSA9PiB7XG4gICAgbGV0IFt4LCB5XSA9IGVsO1xuICAgIGlmICghYm9hcmRbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJTYW1lU2hpcEhpdChvcHBvbmVudCkge1xuICBsZXQgaGl0QXJyYXkgPSBjaGVja0hpdEF0dGFja3Mob3Bwb25lbnQpO1xuXG4gIGxldCBib2FyZCA9IG9wcG9uZW50LmdhbWUuZ2V0Qm9hcmQoKTtcblxuICBpZiAoaGl0QXJyYXlbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgbGV0IFt4LCB5XSA9IGhpdEFycmF5WzBdO1xuICBsZXQgcmVzdWx0ID0gW1t4LCB5XV07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBoaXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBbYSwgYl0gPSBoaXRBcnJheVtpXTtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IGJvYXJkW2FdW2JdKSB7XG4gICAgICByZXN1bHQucHVzaChbYSwgYl0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRTaGlwT3JpZW50YXRpb24oYXJyYXkpIHtcbiAgbGV0IFt4LCB5XSA9IGFycmF5WzBdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IFthLCBiXSA9IGFycmF5W2ldO1xuICAgIGlmICh4ID09PSBhKSB7XG4gICAgICByZXR1cm4gXCJIb3Jpem9udGFsXCI7XG4gICAgfSBlbHNlIGlmICh5ID09PSBiKSB7XG4gICAgICByZXR1cm4gXCJWZXJ0aWNhbFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21Db29yZGluYXRlcyhhcnJheSkge1xuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICBpZiAoY2hlY2tEdXBsaWNhdGUoYXJyYXksIFt4LCB5XSkpIHtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByYW5kb21Db29yZGluYXRlcyhhcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgcmFuZG9tQ29vcmRpbmF0ZXMsXG4gIGNoZWNrRHVwbGljYXRlLFxuICBwb3RlbnRpYWxNb3ZlLFxuICBmaWx0ZXJTYW1lU2hpcEhpdCxcbiAgY2hlY2tIaXRBdHRhY2tzLFxuICBnZXRTaGlwT3JpZW50YXRpb24sXG4gIHByZWRpY3RTaGlwTG9jYXRpb24sXG4gIGNhbGN1bGF0ZU5leHRUYXJnZXQsXG59O1xuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLzAzLVBsYXllci9wbGF5ZXIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcihuYW1lKSB7XG4gIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKG5hbWUpO1xuICByZXR1cm4gcGxheWVyO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vY3JlYXRlLXBsYXllci5qc1wiO1xuaW1wb3J0IHsgQ29tcHV0ZXIgfSBmcm9tIFwiLi4vMDMtUGxheWVyL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTmV4dFRhcmdldCwgY2hlY2tEdXBsaWNhdGUgfSBmcm9tIFwiLi9jb21wdXRlci1tb3ZlLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lQ29udHJvbGxlcihwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGxldCBwbGF5ZXJzO1xuXG4gIGlmIChwbGF5ZXIyID09PSBcIkNvbXB1dGVyXCIgfHwgcGxheWVyMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcGxheWVycyA9IFtjcmVhdGVQbGF5ZXIocGxheWVyMSksIENvbXB1dGVyKCldO1xuICB9IGVsc2Uge1xuICAgIHBsYXllcnMgPSBbY3JlYXRlUGxheWVyKHBsYXllcjEpLCBjcmVhdGVQbGF5ZXIocGxheWVyMildO1xuICB9XG5cbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG5cbiAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuXG4gIGZ1bmN0aW9uIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHBvbmVudCgpIHtcbiAgICBsZXQgb3Bwb25lbnQgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgICByZXR1cm4gb3Bwb25lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5Um91bmQoY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgW3gsIHldID0gY29vcmRpbmF0ZXM7XG5cbiAgICBsZXQgYm9vbGVhblZhbHVlO1xuXG4gICAgbGV0IG9wcG9uZW50ID0gZ2V0T3Bwb25lbnQoKTtcblxuICAgIGxldCBtaXNzZWRBcnJheSA9IG9wcG9uZW50LmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuICAgIGxldCBoaXRBcnJheSA9IG9wcG9uZW50LmdhbWUuZ2V0SGl0QXR0YWNrcygpO1xuXG4gICAgbGV0IGNvbWJpbmVkQXJyYXkgPSBtaXNzZWRBcnJheS5jb25jYXQoaGl0QXJyYXkpO1xuXG4gICAgaWYgKGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIGNvb3JkaW5hdGVzKSkge1xuICAgICAgYm9vbGVhblZhbHVlID0gb3Bwb25lbnQuZ2FtZS5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tXaW5uZXIob3Bwb25lbnQpKSB7XG4gICAgICByZXR1cm4gYFdpbm5lciBpcyAke2dldEFjdGl2ZVBsYXllcigpLm5hbWV9YDtcbiAgICB9IGVsc2UgaWYgKGJvb2xlYW5WYWx1ZSAmJiBnZXRBY3RpdmVQbGF5ZXIoKS5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICAgIGxldCBbYSwgYl0gPSBjYWxjdWxhdGVOZXh0VGFyZ2V0KGdldE9wcG9uZW50KCkpO1xuICAgICAgcmV0dXJuIHBsYXlSb3VuZChbYSwgYl0pO1xuICAgIH0gZWxzZSBpZiAoYm9vbGVhblZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGdldEFjdGl2ZVBsYXllcigpLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgbGV0IFthLCBiXSA9IGNhbGN1bGF0ZU5leHRUYXJnZXQoZ2V0T3Bwb25lbnQoKSk7XG4gICAgICByZXR1cm4gcGxheVJvdW5kKFthLCBiXSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrV2lubmVyKG9wcG9uZW50KSB7XG4gICAgcmV0dXJuIG9wcG9uZW50LmdhbWUudG90YWxTaGlwU3VuaygpO1xuICB9XG5cbiAgY29uc3QgcmVzdGFydCA9ICgpID0+IHtcbiAgICBwbGF5ZXJzLmZvckVhY2goKHBsYXllcikgPT4ge1xuICAgICAgcGxheWVyLmdhbWUucmVzZXRWYXJpYWJsZXMoKTtcbiAgICB9KTtcblxuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRBY3RpdmVQbGF5ZXIsXG4gICAgZ2V0T3Bwb25lbnQsXG4gICAgcGxheVJvdW5kLFxuICAgIGdldFBsYXllcnMsXG4gICAgcmVzdGFydCxcbiAgICBzd2l0Y2hQbGF5ZXIsXG4gIH07XG59XG4iLCJmdW5jdGlvbiBpbml0UGxheWVyQm9hcmRTaGlwKGFjdGl2ZVVzZXIpIHtcbiAgYWN0aXZlVXNlci5nYW1lLnJlc3RhcnRCb2FyZCgpO1xuXG4gIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgXCJDYXJyaWVyXCIsIDQpO1xuXG4gIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgXCJCYXR0bGVzaGlwXCIsIDMpO1xuXG4gIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgXCJEZXN0cm95ZXJcIiwgMik7XG5cbiAgcGxhY2VTaGlwT25Cb2FyZChhY3RpdmVVc2VyLCBcIlN1Ym1hcmluZVwiLCAyKTtcblxuICBwbGFjZVNoaXBPbkJvYXJkKGFjdGl2ZVVzZXIsIFwiUGF0cm9sIEJvYXRcIiwgMSk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgbmFtZSwgbGVuZ3RoKSB7XG4gIGxldCBib2FyZCA9IGFjdGl2ZVVzZXIuZ2FtZS5nZXRCb2FyZCgpO1xuICBsZXQgY29vcmRpbmF0ZXMgPSByYW5kb21TaGlwUGxhY2VtZW50KGxlbmd0aCwgYm9hcmQpO1xuICBhY3RpdmVVc2VyLmdhbWUucGxhY2VTaGlwKG5hbWUsIGxlbmd0aCArIDEsIGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVNoaXBQbGFjZW1lbnQobGVuZ3RoLCBib2FyZCkge1xuICBsZXQgcGxhbmUgPSBnZXRSYW5kb21QbGFuZSgpO1xuICBsZXQgY29vcmRpbmF0ZXMgPSBnZXRSYW5kb21TaGlwQ29vcmRpbmF0ZShwbGFuZSwgbGVuZ3RoKTtcbiAgaWYgKCFjaGVja0Nvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBib2FyZCkpIHtcbiAgICByZXR1cm4gcmFuZG9tU2hpcFBsYWNlbWVudChsZW5ndGgsIGJvYXJkKTtcbiAgfVxuICByZXR1cm4gY29vcmRpbmF0ZXM7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbVBsYW5lKCkge1xuICBsZXQgcGxhbmUgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbiAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGxhbmUubGVuZ3RoKTtcbiAgcmV0dXJuIHBsYW5lW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGUoYXhpcywgbGVuZ3RoKSB7XG4gIGxldCBzdGFydFgsIHN0YXJ0WTtcbiAgc3RhcnRYID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuICBzdGFydFkgPSBnZXRSYW5kb21Db29yZGluYXRlKCk7XG5cbiAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgaWYgKHN0YXJ0WCArIGxlbmd0aCA8PSA5KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYICsgbGVuZ3RoLCBzdGFydFldLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0WCAtIGxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYIC0gbGVuZ3RoLCBzdGFydFldLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaG9yaXpvbnRhbCBjb29yZGluYXRlcyBlcnJvclwiKTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgaWYgKHN0YXJ0WSArIGxlbmd0aCA8PSA5KSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYLCBzdGFydFkgKyBsZW5ndGhdLFxuICAgICAgXTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0WSAtIGxlbmd0aCA+PSAwKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBbc3RhcnRYLCBzdGFydFldLFxuICAgICAgICBbc3RhcnRYLCBzdGFydFkgLSBsZW5ndGhdLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmVydGljYWwgY29vcmRpbmF0ZXMgZXJyb3JcIik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGJvYXJkKSB7XG4gIGxldCBbc3RhcnRYLCBzdGFydFldID0gY29vcmRpbmF0ZXNbMF07XG4gIGxldCBbZW5kWCwgZW5kWV0gPSBjb29yZGluYXRlc1sxXTtcblxuICBpZiAoc3RhcnRYID09PSBlbmRYKSB7XG4gICAgaWYgKHN0YXJ0WSA+IGVuZFkpIHtcbiAgICAgIGZvciAobGV0IGkgPSBlbmRZOyBpIDw9IHN0YXJ0WTsgaSsrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShib2FyZFtzdGFydFhdW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kWSA+IHN0YXJ0WSkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0WTsgaSA8PSBlbmRZOyBpKyspIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJvYXJkW3N0YXJ0WF1baV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChzdGFydFkgPT09IGVuZFkpIHtcbiAgICBpZiAoc3RhcnRYID4gZW5kWCkge1xuICAgICAgZm9yIChsZXQgaSA9IGVuZFg7IGkgPD0gc3RhcnRYOyBpKyspIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJvYXJkW2ldW3N0YXJ0WV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmRYID4gc3RhcnRYKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRYOyBpIDw9IGVuZFg7IGkrKykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYm9hcmRbaV1bc3RhcnRZXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gIHJhbmRvbVNoaXBQbGFjZW1lbnQsXG4gIGNoZWNrQ29vcmRpbmF0ZXMsXG4gIGdldFJhbmRvbVNoaXBDb29yZGluYXRlLFxuICBpbml0UGxheWVyQm9hcmRTaGlwLFxufTtcbiIsImltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uLzA0LUdhbWVwbGF5L2dhbWVjb250cm9sbGVyXCI7XG5pbXBvcnQgeyBpbml0UGxheWVyQm9hcmRTaGlwIH0gZnJvbSBcIi4vcmFuZG9tLXNoaXAtcGxhY2VtZW50XCI7XG5pbXBvcnQge1xuICBvdXRwdXRNZXNzYWdlLFxuICBkaXNhYmxlQm9hcmRFdmVudCxcbiAgdG9nZ2xlU3RhcnRCdG4sXG4gIHRvZ2dsZXNEaXNhYmxlLFxuICB0b2dnbGVCb2FyZEV2ZW50LFxuICByZW1vdmVTaGlwSW5wdXREaXZzLFxuICByZWluc3RhdGVTaGlwSW5wdXREaXYsXG4gIGNyZWF0ZU1lc3NhZ2VPdXRwdXQsXG4gIG9wZW5EaWFsb2csXG59IGZyb20gXCIuLi8wNi1ET00vZ2FtZS1zY3JlZW5cIjtcbmZ1bmN0aW9uIFNjcmVlbkNvbnRyb2xsZXIocGxheTEsIHBsYXkyKSB7XG4gIGxldCBnYW1lcGxheSA9IEdhbWVDb250cm9sbGVyKHBsYXkxLCBwbGF5Mik7XG5cbiAgLy9jbG9zZSBkaWFsb2cgbW9kYWwgYnRuXG4gIGNvbnN0IGNsb3NlRGlhbG9nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tb2RhbFwiKTtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1wiKTtcblxuICBjbG9zZURpYWxvZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIHVwZGF0ZVNjcmVlbigpO1xuICB9KTtcblxuICAvL3Nob3dzIHdoZXRoZXIgMVAgb3IgMlAgZ2FtZVxuICBsZXQgZ2FtZU1vZGU7XG5cbiAgaWYgKHBsYXkyID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICBnYW1lTW9kZSA9IFwic2luZ2xlXCI7XG4gIH0gZWxzZSBpZiAocGxheTIgIT09IFwiQ29tcHV0ZXJcIikge1xuICAgIGdhbWVNb2RlID0gXCJtdWx0aVwiO1xuICB9XG5cbiAgLy9vdXRwdXQgcGxheWVyIHR1cm5cbiAgb3V0cHV0TWVzc2FnZShgJHtnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfSdzIHR1cm4hYCk7XG5cbiAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xuICAgIC8vY2xlYXIgYm9hcmRcbiAgICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWJvYXJkXCIpO1xuXG4gICAgYm9hcmREaXYuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgIGJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9KTtcblxuICAgIGlmIChnYW1lTW9kZSA9PT0gXCJtdWx0aVwiKSB7XG4gICAgICBvdXRwdXRNZXNzYWdlKFwiXCIpO1xuXG4gICAgICAvL291dHB1dCBwbGF5ZXIgdHVyblxuICAgICAgb3V0cHV0TWVzc2FnZShgJHtnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfSdzIHR1cm4hYCk7XG4gICAgfVxuXG4gICAgLy91cGRhdGUgYm9hcmRcblxuICAgIHVwZGF0ZUFjdGl2ZVVzZXJCb2FyZChnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKSk7XG5cbiAgICB1cGRhdGVBY3RpdmVVc2VyQm9hcmQoZ2FtZXBsYXkuZ2V0T3Bwb25lbnQoKSk7XG5cbiAgICAvL2Rpc2FibGUgYWN0aXZlUGxheWVyIGV2ZW50IGJvYXJkXG5cbiAgICBkaXNhYmxlQWN0aXZlUGxheWVyQm9hcmQoXG4gICAgICBnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lLFxuICAgICAgZ2FtZXBsYXkuZ2V0T3Bwb25lbnQoKS5uYW1lXG4gICAgKTtcbiAgfTtcblxuICBpbml0UmFuZG9tU2hpcFBsYWNlbWVudExpc3RlbmVyKGdhbWVwbGF5KTtcbiAgaW5pdFN0YXJ0R2FtZUxpc3RlbmVyKGdhbWVwbGF5KTtcblxuICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVVc2VyQm9hcmQodXNlcikge1xuICAgIGNvbnN0IHBsYXllck5hbWUgPSB1c2VyLm5hbWU7XG5cbiAgICBjb25zdCBib2FyZCA9IHVzZXIuZ2FtZS5nZXRCb2FyZCgpO1xuXG4gICAgY29uc3QgaGl0QXJyYXkgPSB1c2VyLmdhbWUuZ2V0SGl0QXR0YWNrcygpO1xuXG4gICAgY29uc3QgbWlzc0FycmF5ID0gdXNlci5nYW1lLmdldE1pc3NlZEF0dGFja3MoKTtcblxuICAgIGNvbnN0IHVzZXJEb20gPSBnZXRBY3RpdmVQbGF5ZXJEb20ocGxheWVyTmFtZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG5cbiAgICAgICAgLy9tYXJrIHNoaXAgbG9jYXRpb24gZm9yIHVzZXJcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYm9hcmRbaV1bal0pKSB7XG4gICAgICAgICAgaWYgKGdhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWUgPT09IHBsYXllck5hbWUpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9oaXQgYXR0YWNrcyBtYXJrIGNlbGxcbiAgICAgICAgaGl0QXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGxldCBbYSwgYl0gPSBpdGVtO1xuICAgICAgICAgIGlmIChhID09PSBpICYmIGIgPT09IGopIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImRhbWFnZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vbWlzc2VkIGF0dGFja3MgbWFyayBjZWxsXG4gICAgICAgIG1pc3NBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgbGV0IFthLCBiXSA9IGl0ZW07XG4gICAgICAgICAgaWYgKGEgPT09IGkgJiYgYiA9PT0gaikge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc2VkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jZWxsIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGxldCBjb29yZGluYXRlUmV0dXJuID0gZ2FtZXBsYXkucGxheVJvdW5kKFtpLCBqXSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjb29yZGluYXRlUmV0dXJuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjbGVhckJvYXJkKGdhbWVwbGF5LmdldE9wcG9uZW50KCkpO1xuICAgICAgICAgICAgdXBkYXRlQWN0aXZlVXNlckJvYXJkKGdhbWVwbGF5LmdldE9wcG9uZW50KCkpO1xuICAgICAgICAgICAgZGlzYWJsZUJvYXJkRXZlbnQoKTtcbiAgICAgICAgICAgIGlmIChnYW1lTW9kZSA9PT0gXCJzaW5nbGVcIikge1xuICAgICAgICAgICAgICByZWluc3RhdGVTaGlwSW5wdXREaXYoKTtcbiAgICAgICAgICAgICAgaW5pdFN0YXJ0R2FtZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgIG91dHB1dE1lc3NhZ2UoYFdpbm5lciBpcyAke2dhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWV9IWApO1xuICAgICAgICAgICAgICB0b2dnbGVzRGlzYWJsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbS1zaGlwLWJ0blwiKSk7XG4gICAgICAgICAgICAgIHRvZ2dsZXNEaXNhYmxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnRuXCIpKTtcbiAgICAgICAgICAgICAgdG9nZ2xlU3RhcnRCdG4oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZU1vZGUgPT09IFwibXVsdGlcIikge1xuICAgICAgICAgICAgICByZW1vdmVTaGlwSW5wdXREaXZzKCk7XG4gICAgICAgICAgICAgIHJlaW5zdGF0ZVNoaXBJbnB1dERpdigpO1xuICAgICAgICAgICAgICBpbml0U3RhcnRHYW1lTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgb3V0cHV0TWVzc2FnZShjb29yZGluYXRlUmV0dXJuKTtcbiAgICAgICAgICAgICAgdG9nZ2xlc0Rpc2FibGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIikpO1xuICAgICAgICAgICAgICB0b2dnbGVTdGFydEJ0bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZ2FtZU1vZGUgPT09IFwibXVsdGlcIiAmJiAhY29vcmRpbmF0ZVJldHVybikge1xuICAgICAgICAgICAgICBvcGVuRGlhbG9nKGdhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgICB1c2VyRG9tLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGluaXRSYW5kb21TaGlwUGxhY2VtZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb20tc2hpcC1idG5cIik7XG5cbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnRuXCIpO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKTtcblxuICAgICAgY2xlYXJCb2FyZChhY3RpdmVQbGF5ZXIpO1xuICAgICAgaW5pdFBsYXllckJvYXJkU2hpcChhY3RpdmVQbGF5ZXIpO1xuICAgICAgdXBkYXRlQWN0aXZlVXNlckJvYXJkKGFjdGl2ZVBsYXllcik7XG5cbiAgICAgIC8vZGlzYWJsZSBhY3RpdmVCb2FyZFxuICAgICAgZGlzYWJsZUFjdGl2ZVBsYXllckJvYXJkKFxuICAgICAgICBnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lLFxuICAgICAgICBnYW1lcGxheS5nZXRPcHBvbmVudCgpLm5hbWVcbiAgICAgICk7XG5cbiAgICAgIGlmIChzdGFydEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlXCIpKSB7XG4gICAgICAgIHRvZ2dsZXNEaXNhYmxlKHN0YXJ0QnRuKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRTdGFydEdhbWVMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnRuXCIpO1xuXG4gICAgbGV0IGNvdW50U3RhcnQgPSAwO1xuXG4gICAgY29uc3QgcmVzZXRDb3VudCA9ICgpID0+IChjb3VudFN0YXJ0ID0gMCk7XG5cbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgb3Bwb25lbnQgPSBnYW1lcGxheS5nZXRPcHBvbmVudCgpO1xuXG4gICAgICBjb3VudFN0YXJ0Kys7XG5cbiAgICAgIC8vc3RvcCBleGVjdXRpbmcgaWYgZmlyc3QgYm9hcmQgaXMgZW1wdHlcbiAgICAgIGxldCBwbGF5ZXJPbmVCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLW9uZS1ib2FyZFwiKTtcbiAgICAgIGxldCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyLXR3by1ib2FyZFwiKTtcblxuICAgICAgaWYgKHBsYXllck9uZUJvYXJkLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy9QbGF5ZXIxIG9wdGlvbnNcbiAgICAgIGlmIChnYW1lTW9kZSA9PT0gXCJzaW5nbGVcIikge1xuICAgICAgICBpZiAocGxheWVyVHdvQm9hcmQuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICByZW1vdmVTaGlwSW5wdXREaXZzKCk7XG4gICAgICAgICAgaW5pdFBsYXllckJvYXJkU2hpcChvcHBvbmVudCk7XG4gICAgICAgICAgdXBkYXRlQWN0aXZlVXNlckJvYXJkKG9wcG9uZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNldFBsYXllckJvYXJkcyhnYW1lcGxheSk7XG4gICAgICAgICAgY2xlYXJBbGxCb2FyZCgpO1xuICAgICAgICAgIGluaXRSYW5kb21TaGlwUGxhY2VtZW50TGlzdGVuZXIoKTtcbiAgICAgICAgICB0b2dnbGVzRGlzYWJsZShwbGF5ZXJUd29Cb2FyZCk7XG4gICAgICAgICAgdG9nZ2xlc0Rpc2FibGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb20tc2hpcC1idG5cIikpO1xuICAgICAgICAgIG91dHB1dE1lc3NhZ2UoYCR7Z2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZX0ncyBUdXJuIWApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vcGxheWVyIDIgdHVybiBzaGlwIHJhbmRvbVxuICAgICAgaWYgKGdhbWVNb2RlID09PSBcIm11bHRpXCIpIHtcbiAgICAgICAgaWYgKGNvdW50U3RhcnQgPT09IDIpIHtcbiAgICAgICAgICByZW1vdmVTaGlwSW5wdXREaXZzKCk7XG4gICAgICAgICAgY3JlYXRlTWVzc2FnZU91dHB1dCgpO1xuICAgICAgICAgIGdhbWVwbGF5LnN3aXRjaFBsYXllcigpO1xuICAgICAgICAgIHVwZGF0ZVNjcmVlbigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyVHdvQm9hcmQuY2hpbGRFbGVtZW50Q291bnQgIT09IDApIHtcbiAgICAgICAgICBjbGVhckFsbEJvYXJkKCk7XG4gICAgICAgICAgcmVzZXRQbGF5ZXJCb2FyZHMoZ2FtZXBsYXkpO1xuICAgICAgICAgIHRvZ2dsZVN0YXJ0QnRuKCk7XG4gICAgICAgICAgaW5pdFJhbmRvbVNoaXBQbGFjZW1lbnRMaXN0ZW5lcigpO1xuICAgICAgICAgIHJlc2V0Q291bnQoKTtcbiAgICAgICAgICB0b2dnbGVCb2FyZEV2ZW50KGdhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2FtZXBsYXkuc3dpdGNoUGxheWVyKCk7XG4gICAgICAgICAgb3BlbkRpYWxvZyhnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lKTtcbiAgICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgICAgICB0b2dnbGVzRGlzYWJsZShzdGFydEJ0bik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckJvYXJkKHBsYXllcikge1xuICAgIGxldCBkb20gPSBnZXRBY3RpdmVQbGF5ZXJEb20ocGxheWVyLm5hbWUpO1xuICAgIGRvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJBbGxCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItYm9hcmRcIik7XG4gIHBsYXllckJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgIGJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyQm9hcmRzKGdhbWVwbGF5KSB7XG4gIGdhbWVwbGF5LnJlc3RhcnQoKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUFjdGl2ZVBsYXllckJvYXJkKHBsYXllciwgb3Bwb25lbnQpIHtcbiAgY29uc3QgcGxheWVyRG9tID0gZ2V0QWN0aXZlUGxheWVyRG9tKHBsYXllcik7XG4gIGNvbnN0IG9wcG9uZW50RG9tID0gZ2V0QWN0aXZlUGxheWVyRG9tKG9wcG9uZW50KTtcblxuICBpZiAoIXBsYXllckRvbS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlXCIpKSB7XG4gICAgcGxheWVyRG9tLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuICAgIG9wcG9uZW50RG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVBsYXllckRvbShwbGF5ZXIpIHtcbiAgY29uc3QgYWxsVGl0bGVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLXRpdGxlXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxUaXRsZUJvYXJkW2ldLnRleHRDb250ZW50ID09PSBwbGF5ZXIpIHtcbiAgICAgIHJldHVybiBhbGxUaXRsZUJvYXJkW2ldLm5leHRFbGVtZW50U2libGluZztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgU2NyZWVuQ29udHJvbGxlciB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaWYgKHR5cGVvZiBwbGF5ZXIyID09PSB1bmRlZmluZWQpIHtcbiAgICBwbGF5ZXIyID0gXCJDb21wdXRlclwiO1xuICB9XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBwbGF5ZXJBcnJheSA9IFtcIm9uZVwiLCBcInR3b1wiXTtcblxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcblxuICBjb25zdCBzaGlwSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaGlwSW5wdXREaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtaW5wdXQtZGl2XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKGBwbGF5ZXItJHtwbGF5ZXJBcnJheVtpXX1gKTtcblxuICAgIGNvbnN0IHBsYXllclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXRpdGxlXCIpO1xuICAgIHBsYXllclRpdGxlLnNldEF0dHJpYnV0ZShcIklkXCIsIGBwbGF5ZXItJHtwbGF5ZXJBcnJheVtpXX1gKTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBwbGF5ZXJUaXRsZS50ZXh0Q29udGVudCA9IHBsYXllcjE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclRpdGxlLnRleHRDb250ZW50ID0gcGxheWVyMjtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllci1ib2FyZFwiKTtcbiAgICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGxheWVyLSR7cGxheWVyQXJyYXlbaV19LWJvYXJkYCk7XG5cbiAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQocGxheWVyVGl0bGUpO1xuICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRGl2KTtcbiAgfVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gIGNvbnN0IGJvYXJkTGFzdEVsZW1lbnQgPSBib2FyZC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIGJvYXJkLmluc2VydEJlZm9yZShzaGlwSW5wdXREaXYsIGJvYXJkTGFzdEVsZW1lbnQpO1xuXG4gIGNyZWF0ZVNoaXBJbnB1dERpdigpO1xuXG4gIGNyZWF0ZVN0YXJ0RGl2KCk7XG5cbiAgY3JlYXRlTWVzc2FnZU91dHB1dCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwSW5wdXREaXYoKSB7XG4gIGNvbnN0IHNoaXBJbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1pbnB1dC1kaXZcIik7XG5cbiAgY29uc3QgcmFuZG9tU2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJhbmRvbVNoaXBEaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtaW5wdXQtcmFuZG9tXCIpO1xuXG4gIGNvbnN0IHJhbmRvbVNoaXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJhbmRvbVNoaXBUaXRsZS50ZXh0Q29udGVudCA9IFwiR2VuZXJhdGUgcmFuZG9tIHNoaXAgY29vcmRpbmF0ZXNcIjtcblxuICBjb25zdCByYW5kb21TaGlwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmFuZG9tU2hpcEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJhbmRvbS1zaGlwLWJ0blwiKTtcbiAgcmFuZG9tU2hpcEJ0bi50ZXh0Q29udGVudCA9IFwiQ2xpY2tcIjtcblxuICByYW5kb21TaGlwRGl2LmFwcGVuZENoaWxkKHJhbmRvbVNoaXBUaXRsZSk7XG4gIHJhbmRvbVNoaXBEaXYuYXBwZW5kQ2hpbGQocmFuZG9tU2hpcEJ0bik7XG5cbiAgc2hpcElucHV0RGl2LmFwcGVuZENoaWxkKHJhbmRvbVNoaXBEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFydERpdigpIHtcbiAgY29uc3Qgc2hpcElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWlucHV0LWRpdlwiKTtcblxuICBjb25zdCBzdGFydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXJ0RGl2LmNsYXNzTGlzdC5hZGQoXCJzdGFydC1kaXZcIik7XG5cbiAgY29uc3Qgc3RhcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXJ0VGl0bGUuY2xhc3NMaXN0LmFkZChcInN0YXJ0LXRpdGxlXCIpO1xuICBzdGFydFRpdGxlLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXJ0LWJ0blwiKTtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJDbGlja1wiO1xuXG4gIHN0YXJ0RGl2LmFwcGVuZENoaWxkKHN0YXJ0VGl0bGUpO1xuICBzdGFydERpdi5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5cbiAgc2hpcElucHV0RGl2LmFwcGVuZENoaWxkKHN0YXJ0RGl2KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlc0Rpc2FibGUoZGl2KSB7XG4gIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZVwiKSkge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZU91dHB1dCgpIHtcbiAgY29uc3Qgc2hpcElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWlucHV0LWRpdlwiKTtcblxuICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZS1kaXZcIik7XG5cbiAgc2hpcElucHV0RGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xufVxuXG5mdW5jdGlvbiBvdXRwdXRNZXNzYWdlKGNoYXIpIHtcbiAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZS1kaXZcIik7XG4gIGlmIChtZXNzYWdlRGl2ICE9PSBudWxsKSB7XG4gICAgbWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGNoYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzYWJsZUJvYXJkRXZlbnQoKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItYm9hcmRcIik7XG5cbiAgYm9hcmQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVN0YXJ0QnRuKCkge1xuICBjb25zdCBidG5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtdGl0bGVcIik7XG4gIGlmIChidG5UaXRsZS50ZXh0Q29udGVudCA9PT0gXCJTdGFydCBHYW1lXCIpIHtcbiAgICBidG5UaXRsZS50ZXh0Q29udGVudCA9IFwiUmVzdGFydCBHYW1lXCI7XG4gIH0gZWxzZSB7XG4gICAgYnRuVGl0bGUudGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVCb2FyZEV2ZW50KGFjdGl2ZVBsYXllcikge1xuICBjb25zdCBhbGxUaXRsZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItdGl0bGVcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUaXRsZUJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbFRpdGxlQm9hcmRbaV0udGV4dENvbnRlbnQgPT09IGFjdGl2ZVBsYXllcikge1xuICAgICAgYWxsVGl0bGVCb2FyZFtpXS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsbFRpdGxlQm9hcmRbaV0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckFsbEJvYXJkKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1ib2FyZFwiKTtcbiAgcGxheWVyQm9hcmRzLmZvckVhY2goKGJvYXJkKSA9PiB7XG4gICAgYm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlbkRpYWxvZyhhY3RpdmVQbGF5ZXIpIHtcbiAgY2xlYXJBbGxCb2FyZCgpO1xuXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG5cbiAgY29uc3QgcGxheWVyVHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR1cm5cIik7XG4gIHBsYXllclR1cm4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBwbGF5ZXJUdXJuLnRleHRDb250ZW50ID0gYCR7YWN0aXZlUGxheWVyfSdzIFR1cm4hYDtcblxuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5mdW5jdGlvbiByZW1vdmVTaGlwSW5wdXREaXZzKCkge1xuICBjb25zdCBzdGFydERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1pbnB1dC1kaXZcIik7XG5cbiAgd2hpbGUgKHN0YXJ0RGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHN0YXJ0RGl2LnJlbW92ZUNoaWxkKHN0YXJ0RGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlaW5zdGF0ZVNoaXBJbnB1dERpdigpIHtcbiAgY3JlYXRlU2hpcElucHV0RGl2KCk7XG4gIGNyZWF0ZVN0YXJ0RGl2KCk7XG4gIGNyZWF0ZU1lc3NhZ2VPdXRwdXQoKTtcbn1cbmV4cG9ydCB7XG4gIGNyZWF0ZUdhbWVCb2FyZCxcbiAgb3V0cHV0TWVzc2FnZSxcbiAgZGlzYWJsZUJvYXJkRXZlbnQsXG4gIHRvZ2dsZVN0YXJ0QnRuLFxuICB0b2dnbGVzRGlzYWJsZSxcbiAgdG9nZ2xlQm9hcmRFdmVudCxcbiAgb3BlbkRpYWxvZyxcbiAgcmVpbnN0YXRlU2hpcElucHV0RGl2LFxuICByZW1vdmVTaGlwSW5wdXREaXZzLFxuICBjcmVhdGVNZXNzYWdlT3V0cHV0LFxufTtcbiIsImltcG9ydCB7IFNjcmVlbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vMDUtU2NyZWVuQ29udHJvbGxlci9zY3JlZW5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVHYW1lQm9hcmQgfSBmcm9tIFwiLi4vMDYtRE9NL2dhbWUtc2NyZWVuXCI7XG5cbmZ1bmN0aW9uIHBsYXllclNlbGVjdGlvbihtdWx0aSkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gIGNvbnN0IHBsYXllck9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLW9wdGlvblwiKTtcbiAgcGxheWVyT3B0aW9uLnJlbW92ZSgpO1xuXG4gIGNvbnN0IHBsYXllckZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgcGxheWVyRm9ybS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWZvcm1cIik7XG5cbiAgY29uc3QgcGxheWVySW5wdXRTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJJbnB1dFNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWlucHV0LXNlbGVjdGlvblwiKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBtdWx0aTsgaSsrKSB7XG4gICAgY29uc3QgcGxheWVyT25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHBsYXllck9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gICAgY29uc3QgcGxheWVyT25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGxheWVyT25lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgcGxheWVyT25lRGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItb25lLWRpdlwiKTtcbiAgICAgIHBsYXllck9uZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInBsYXllci1vbmUtbmFtZVwiKTtcbiAgICAgIHBsYXllck9uZUxhYmVsLnRleHRDb250ZW50ID0gYFBsYXllciBPbmUgTmFtZWA7XG4gICAgICBwbGF5ZXJPbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGxheWVyLW9uZS1uYW1lYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllck9uZURpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXR3by1kaXZcIik7XG4gICAgICBwbGF5ZXJPbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwbGF5ZXItdHdvLW5hbWVcIik7XG4gICAgICBwbGF5ZXJPbmVMYWJlbC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgVHdvIE5hbWVgO1xuICAgICAgcGxheWVyT25lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHBsYXllci10d28tbmFtZWApO1xuICAgIH1cblxuICAgIHBsYXllck9uZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJPbmVMYWJlbCk7XG5cbiAgICBwbGF5ZXJPbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIE5hbWVcIik7XG4gICAgcGxheWVyT25lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHBsYXllck9uZURpdi5hcHBlbmRDaGlsZChwbGF5ZXJPbmVJbnB1dCk7XG5cbiAgICBwbGF5ZXJJbnB1dFNlbGVjdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJPbmVEaXYpO1xuICB9XG5cbiAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJFbnRlclwiO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXItbmFtZS1idG5cIik7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHBsYXllckZvcm0uYXBwZW5kQ2hpbGQocGxheWVySW5wdXRTZWxlY3Rpb24pO1xuICBwbGF5ZXJGb3JtLmFwcGVuZENoaWxkKGJ0bkRpdik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJGb3JtKTtcblxuICBnYW1lTW9kZUV2ZW50KGJ0bik7XG59XG5cbmZ1bmN0aW9uIGdhbWVNb2RlRXZlbnQoYnRuKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFjaGVja1ZhbGlkaXR5SW5wdXRzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHBsYXllcnMgPSBnZXRQbGF5ZXJJbnB1dCgpO1xuICAgIHJlbW92ZVBsYXllclNlbGVjdGlvbigpO1xuICAgIGNyZWF0ZUdhbWVCb2FyZChwbGF5ZXJzWzBdLCBwbGF5ZXJzWzFdKTtcbiAgICBTY3JlZW5Db250cm9sbGVyKHBsYXllcnNbMF0sIHBsYXllcnNbMV0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxheWVySW5wdXQoKSB7XG4gIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcblxuICBsZXQgcGxheWVycyA9IFtdO1xuXG4gIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIHBsYXllcnMucHVzaChpbnB1dC52YWx1ZSk7XG4gIH0pO1xuXG4gIGlmIChwbGF5ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgIHBsYXllcnMucHVzaChcIkNvbXB1dGVyXCIpO1xuICB9XG5cbiAgcmV0dXJuIHBsYXllcnM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBsYXllclNlbGVjdGlvbigpIHtcbiAgY29uc3QgcGxheWVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWZvcm1cIik7XG4gIHBsYXllckZvcm0ucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRpdHlJbnB1dHMoKSB7XG4gIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlucHV0c1tpXS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaW5wdXRzW2ldLnZhbHVlID09PSBcIkNvbXB1dGVyXCIgfHxcbiAgICAgIGlucHV0c1tpXS52YWx1ZSA9PT0gXCJjb21wdXRlclwiXG4gICAgKSB7XG4gICAgICBpbnB1dHNbaV0uc2V0Q3VzdG9tVmFsaWRpdHkoXCJFbnRlciBWYWxpZCBOYW1lXCIpO1xuICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dHNbaV0uc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBwbGF5ZXJTZWxlY3Rpb24sIHJlbW92ZVBsYXllclNlbGVjdGlvbiB9O1xuIiwiaW1wb3J0IHsgcGxheWVyU2VsZWN0aW9uIH0gZnJvbSBcIi4vZ2FtZW1vZGUtc2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBwbGF5ZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJPcHRpb24uY2xhc3NMaXN0LmFkZChcInBsYXllci1vcHRpb25cIik7XG5cbiAgY29uc3QgcGxheWVyT25lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGxheWVyT25lT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItb25lLW9wdGlvblwiKTtcbiAgcGxheWVyT25lT3B0aW9uLnRleHRDb250ZW50ID0gXCIxIFBsYXllclwiO1xuXG4gIGNvbnN0IHBsYXllclR3b09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXllclR3b09wdGlvbi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXR3by1vcHRpb25cIik7XG4gIHBsYXllclR3b09wdGlvbi50ZXh0Q29udGVudCA9IFwiMiBQbGF5ZXJzXCI7XG5cbiAgcGxheWVyT3B0aW9uLmFwcGVuZENoaWxkKHBsYXllck9uZU9wdGlvbik7XG4gIHBsYXllck9wdGlvbi5hcHBlbmRDaGlsZChwbGF5ZXJUd29PcHRpb24pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyT3B0aW9uKTtcblxuICBob21lRXZlbnRzKHBsYXllck9uZU9wdGlvbiwgcGxheWVyVHdvT3B0aW9uKTtcblxuICByZXN0YXJ0SG9tZVBhZ2UoKTtcbn1cblxuZnVuY3Rpb24gaG9tZUV2ZW50cyhwbGF5MUJ0biwgcGxheTJCdG4pIHtcbiAgcGxheTFCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXJTZWxlY3Rpb24oMSk7XG4gIH0pO1xuXG4gIHBsYXkyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGxheWVyU2VsZWN0aW9uKDIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEhvbWVQYWdlKCkge1xuICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leGl0XCIpO1xuXG4gIGV4aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuLzA2LURPTS9ob21lLXBhZ2VcIjtcblxuaG9tZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==