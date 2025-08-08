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
            (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_2__.disableBoardEvent)();
          } else {
            //show modal player turn

            if (gameplay.getOpponent().name !== "Computer") {
              displayModal(gameplay);
              closeModal(updateScreen);
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
    const activePlayer = gameplay.getActivePlayer();

    btn.addEventListener("click", () => {
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
      //stop event if both boards are empty
      if (
        getActivePlayerDom(gameplay.getActivePlayer().name)
          .childElementCount === 0
      ) {
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

function displayModal(gameplay) {
  const dialog = document.querySelector("dialog");
  const playerTurn = document.querySelector(".player-turn");

  playerTurn.textContent = "";
  playerTurn.textContent = `${gameplay.getActivePlayer().name}'s Turn!`;
  dialog.showModal();
}

function closeModal(activate) {
  const dialog = document.querySelector("dialog");
  const btn = document.querySelector(".close-modal");
  btn.addEventListener("click", () => {
    dialog.close();
    activate();
  });
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
/* harmony export */   disableBoardEvent: () => (/* binding */ disableBoardEvent),
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
    let players = getPlayerInput();
    removePlayerSelection();
    (0,_06_DOM_game_screen__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)(players[0], players[1]);
    (0,_05_ScreenController_screencontroller__WEBPACK_IMPORTED_MODULE_0__.ScreenController)(players[0], players[1]);
  });
}

function getPlayerInput() {
  const inputs = document.querySelectorAll("input");

  let players = [];

  //check validity
  checkValidityInputs();

  inputs.forEach((input) => {
    if (input.value === "" || input.value === null) {
      players.push(input.value);
    }
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
      return form.reportValidity();
    } else if (
      inputs[i].value === "Computer" ||
      inputs[i].value === "computer"
    ) {
      inputs[i].setCustomValidity("Enter Valid Name");
      return form.reportValidity();
    } else {
      inputs[i].setCustomValidity("");
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxLQUFLLE9BQU8sV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssT0FBTyxX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O1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5Qjs7QUFFOUMsMkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDEtc2hpcC9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzAyLUdhbWVib2FyZC9hZGRTaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzAyLUdhbWVib2FyZC9jcmVhdGUtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDItR2FtZWJvYXJkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wMi1HYW1lYm9hcmQvcmVjZWl2ZUF0dGFjay5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wMy1QbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA0LUdhbWVwbGF5L2NvbXB1dGVyLW1vdmUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDQtR2FtZXBsYXkvY3JlYXRlLXBsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNC1HYW1lcGxheS9nYW1lY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNS1TY3JlZW5Db250cm9sbGVyL3JhbmRvbS1zaGlwLXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy8wNS1TY3JlZW5Db250cm9sbGVyL3NjcmVlbmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDYtRE9NL2dhbWUtc2NyZWVuLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjLzA2LURPTS9nYW1lbW9kZS1zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvMDYtRE9NL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwic3RhbmNpbFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogbW9kYWwgYmFja2dyb3VuZCAqL1xuOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4vKiBtb2RhbCBjc3MgKi9cblxuOm1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBtZW51IHRvb2xiYXIgKi9cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnJlc3RhcnQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnJlc3RhcnQ6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIEhvbWUgcGFnZSBjb250ZW50Ki9cblxuLmhvbWUtcGFnZS1vcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmhvbWUtcGFnZS1vcHRpb24gPiAudGl0bGUge1xuICBmb250LXNpemU6IDE4cmVtO1xufVxuXG4ucGxheWVyLW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucGxheWVyLW9wdGlvbiBidXR0b24sXG4jcGxheWVyLW5hbWUtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwic3RhbmNpbFwiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ucGxheWVyLW9wdGlvbiA+IGJ1dHRvbjpob3ZlcixcbiNwbGF5ZXItbmFtZS1idG46aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEwcmVtO1xuICBmb250LWZhbWlseTogXCJzdGFuY2lsXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsXG4gICAgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG59XG5cbi8qIFNpbmdsZSBQbGF5ZXIgTWVudSovXG5cbi5wbGF5ZXItZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwic3RhbmNpbFwiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbi5wbGF5ZXItb25lLWRpdixcbi5wbGF5ZXItdHdvLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uID4gZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiBpbnB1dCB7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTXVsdGkgcGxheWVyIG1lbnUgKi9cblxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogY29vcmRpbmF0ZSBib3ggKi9cblxuLnNoaXAtaW5wdXQtZGl2IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc2hpcC1pbnB1dC1yYW5kb20sXG4uc3RhcnQtZGl2LFxuLm1lc3NhZ2UtZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYjJiMjJlO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbiNyYW5kb20tc2hpcC1idG4sXG4jc3RhcnQtYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3ZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucGxheWVyLWJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZmlyc3QtcGxheWVyLWJvYXJkLFxuI3NlY29uZC1wbGF5ZXItYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuXG4uY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2IyYjI7XG4gIGZsZXg6IDE7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG59XG5cbi5taXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5kYW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmRpc2FibGUsXG4ubWlzc2VkLFxuLmRhbWFnZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ud2lubmVyTWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBcUM7QUFDdkM7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Y7d0VBQ3NFO0VBQ3RFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCO3dFQUNzRTtBQUN4RTs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFO3dFQUNzRTtFQUN0RSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsT0FBTztBQUNUOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic3RhbmNpbFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG4vKiBtb2RhbCBiYWNrZ3JvdW5kICovXFxuOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNzU7XFxufVxcblxcbi8qIG1vZGFsIGNzcyAqL1xcblxcbjptb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogbWVudSB0b29sYmFyICovXFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmVzdGFydCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogMjVweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnJlc3RhcnQ6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi8qIEhvbWUgcGFnZSBjb250ZW50Ki9cXG5cXG4uaG9tZS1wYWdlLW9wdGlvbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmhvbWUtcGFnZS1vcHRpb24gPiAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHJlbTtcXG59XFxuXFxuLnBsYXllci1vcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucGxheWVyLW9wdGlvbiBidXR0b24sXFxuI3BsYXllci1uYW1lLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcInN0YW5jaWxcXFwiLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCxcXG4gICAgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5wbGF5ZXItb3B0aW9uID4gYnV0dG9uOmhvdmVyLFxcbiNwbGF5ZXItbmFtZS1idG46aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic3RhbmNpbFxcXCIsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLFxcbiAgICBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxuLyogU2luZ2xlIFBsYXllciBNZW51Ki9cXG5cXG4ucGxheWVyLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uIGxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwic3RhbmNpbFxcXCIsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLFxcbiAgICBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnBsYXllci1vbmUtZGl2LFxcbi5wbGF5ZXItdHdvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaW5wdXQtc2VsZWN0aW9uID4gZGl2IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4ucGxheWVyLWlucHV0LXNlbGVjdGlvbiBpbnB1dCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMjcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE11bHRpIHBsYXllciBtZW51ICovXFxuXFxuLnBsYXllci1pbnB1dC1zZWxlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIGNvb3JkaW5hdGUgYm94ICovXFxuXFxuLnNoaXAtaW5wdXQtZGl2IHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnNoaXAtaW5wdXQtcmFuZG9tLFxcbi5zdGFydC1kaXYsXFxuLm1lc3NhZ2UtZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2IyYjIyZTtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuI3JhbmRvbS1zaGlwLWJ0bixcXG4jc3RhcnQtYnRuIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3ZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2ZpcnN0LXBsYXllci1ib2FyZCxcXG4jc2Vjb25kLXBsYXllci1ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjNiMmIyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGFtYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZGlzYWJsZSxcXG4ubWlzc2VkLFxcbi5kYW1hZ2Uge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi53aW5uZXJNZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMudGltZXNIaXQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGFkZFNoaXAoc2hpcCwgc3RhcnQsIGVuZCwgYm9hcmQpIHtcbiAgbGV0IFt4MSwgeTFdID0gc3RhcnQ7XG4gIGxldCBbeDIsIHkyXSA9IGVuZDtcblxuICBpZiAoeDEgPT09IHgyKSB7XG4gICAgaWYgKHkxID4geTIpIHtcbiAgICAgIGxvb3BDb29yZGluYXRlcyh4MSwgW3kxLCB5Ml0sIFwiaG9yaXpvbnRhbFwiLCBzaGlwLCBib2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvb3BDb29yZGluYXRlcyh4MSwgW3kyLCB5MV0sIFwiaG9yaXpvbnRhbFwiLCBzaGlwLCBib2FyZCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHkxID09PSB5Mikge1xuICAgIGlmICh4MSA+IHgyKSB7XG4gICAgICBsb29wQ29vcmRpbmF0ZXMoeTEsIFt4MSwgeDJdLCBcInZlcnRpY2FsXCIsIHNoaXAsIGJvYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9vcENvb3JkaW5hdGVzKHkxLCBbeDIsIHgxXSwgXCJ2ZXJ0aWNhbFwiLCBzaGlwLCBib2FyZCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvb3BDb29yZGluYXRlcyhzYW1lLCBkaWZmLCBwb3MsIHNoaXAsIGJvYXJkKSB7XG4gIGxldCBbZGlmZjEsIGRpZmYyXSA9IGRpZmY7XG5cbiAgZm9yIChsZXQgaSA9IGRpZmYxOyBpID49IGRpZmYyOyBpLS0pIHtcbiAgICBpZiAocG9zID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKGJvYXJkW3NhbWVdW2ldWzBdID09PSBzaGlwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkl0IGFscmVhZHkgY29udGFpbnMgc2hpcCBvYmplY3RcIik7XG4gICAgICB9XG4gICAgICBib2FyZFtzYW1lXVtpXSA9IHNoaXA7XG4gICAgfVxuXG4gICAgaWYgKHBvcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoYm9hcmRbaV1bc2FtZV1bMF0gPT09IHNoaXApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSXQgYWxyZWFkeSBjb250YWlucyBzaGlwIG9iamVjdFwiKTtcbiAgICAgIH1cbiAgICAgIGJvYXJkW2ldW3NhbWVdID0gc2hpcDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgYWRkU2hpcCwgbG9vcENvb3JkaW5hdGVzIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIGxldCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBhcnJheVtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgYXJyYXlbaV1bal0gPSBbXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQgfSBmcm9tIFwiLi9jcmVhdGUtYm9hcmQuanNcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi4vMDEtc2hpcC9zaGlwLmpzXCI7XG5pbXBvcnQgeyBhZGRTaGlwIH0gZnJvbSBcIi4vYWRkU2hpcC5qc1wiO1xuaW1wb3J0IHsgYXR0YWNrIH0gZnJvbSBcIi4vcmVjZWl2ZUF0dGFjay5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuXG4gIGxldCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgY29uc3QgZ2V0TWlzc2VkQXR0YWNrcyA9ICgpID0+IG1pc3NlZEF0dGFja3M7XG5cbiAgY29uc3QgZ2V0SGl0QXR0YWNrcyA9ICgpID0+IGhpdEF0dGFja3M7XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBjb25zdCByZXNldFZhcmlhYmxlcyA9ICgpID0+IHtcbiAgICBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICAgIGhpdEF0dGFja3MgPSBbXTtcbiAgICBzaGlwc1N1bmsgPSAwO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlc3RhcnRCb2FyZCgpIHtcbiAgICBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gIH1cblxuICBsZXQgc2hpcHNTdW5rID0gMDtcblxuICBsZXQgaGl0QXR0YWNrcyA9IFtdO1xuXG4gIGNvbnN0IGdldFNoaXBTdW5rID0gKCkgPT4gc2hpcHNTdW5rO1xuXG4gIGZ1bmN0aW9uIGFkZFNoaXBzU3VuaygpIHtcbiAgICBzaGlwc1N1bmsgKz0gMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdGFsU2hpcFN1bmsoKSB7XG4gICAgaWYgKGdldFNoaXBTdW5rKCkgPT09IDUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKG5hbWUsIGxlbmd0aCk7XG5cbiAgICBhZGRTaGlwKHNoaXAsIHN0YXJ0LCBlbmQsIGJvYXJkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGF0dGFjayhjb29yZGluYXRlLCBib2FyZCwgZ2V0TWlzc2VkQXR0YWNrcywgYWRkU2hpcHNTdW5rLCBnZXRIaXRBdHRhY2tzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0SGl0QXR0YWNrcyxcbiAgICB0b3RhbFNoaXBTdW5rLFxuICAgIGdldE1pc3NlZEF0dGFja3MsXG4gICAgcmVzZXRWYXJpYWJsZXMsXG4gICAgcmVzdGFydEJvYXJkLFxuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGF0dGFjayhcbiAgY29vcmRpbmF0ZSxcbiAgYm9hcmQsXG4gIGdldE1pc3NlZEF0dGFja3MsXG4gIGFkZFNoaXBzU3VuayxcbiAgZ2V0SGl0QXR0YWNrc1xuKSB7XG4gIGxldCBbeCwgeV0gPSBjb29yZGluYXRlO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShib2FyZFt4XVt5XSkpIHtcbiAgICBib2FyZFt4XVt5XS5oaXQoKTtcbiAgICBnZXRIaXRBdHRhY2tzKCkucHVzaChbeCwgeV0pO1xuICAgIGlmIChib2FyZFt4XVt5XS5pc1N1bmsoKSkge1xuICAgICAgYWRkU2hpcHNTdW5rKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGdldE1pc3NlZEF0dGFja3MoKS5wdXNoKFt4LCB5XSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi8wMi1HYW1lYm9hcmQvZ2FtZWJvYXJkLmpzXCI7XG5cbmZ1bmN0aW9uIFBsYXllcihuYW1lKSB7XG4gIGNvbnN0IGdhbWUgPSBHYW1lYm9hcmQoKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZ2FtZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gQ29tcHV0ZXIoKSB7XG4gIGNvbnN0IG5hbWUgPSBcIkNvbXB1dGVyXCI7XG4gIGNvbnN0IGdhbWUgPSBHYW1lYm9hcmQoKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgZ2FtZSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgUGxheWVyLCBDb21wdXRlciB9O1xuIiwiZnVuY3Rpb24gY2hlY2tEdXBsaWNhdGUoYXJyYXksIGNvb3JkaW5hdGUpIHtcbiAgbGV0IHN0cmluZ0FycmF5ID0gYXJyYXkubWFwKEpTT04uc3RyaW5naWZ5KTtcbiAgbGV0IHN0cmluZ0Nvb3JkaW5hdGUgPSBKU09OLnN0cmluZ2lmeShjb29yZGluYXRlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZ0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0cmluZ0FycmF5W2ldID09PSBzdHJpbmdDb29yZGluYXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOZXh0VGFyZ2V0KG9wcG9uZW50KSB7XG4gIC8vaGVyZSBmdW5jdGlvbiBmb3IgcHJvZHVjaW5nIHBvdGVudGlhbCBtb3Zlc1xuXG4gIGxldCBtaXNzZWRBcnJheSA9IG9wcG9uZW50LmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuICBsZXQgaGl0QXJyYXkgPSBvcHBvbmVudC5nYW1lLmdldEhpdEF0dGFja3MoKTtcbiAgbGV0IGNvbWJpbmVkQXJyYXkgPSBtaXNzZWRBcnJheS5jb25jYXQoaGl0QXJyYXkpO1xuICBsZXQgc2FtZVNoaXBDb29yZGluYXRlID0gZmlsdGVyU2FtZVNoaXBIaXQob3Bwb25lbnQpO1xuXG4gIGlmIChzYW1lU2hpcENvb3JkaW5hdGUubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiBwcmVkaWN0U2hpcExvY2F0aW9uKG9wcG9uZW50KTtcbiAgfVxuXG4gIGlmIChzYW1lU2hpcENvb3JkaW5hdGUubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHBvdGVudGlhbE1vdmUob3Bwb25lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGVzKGNvbWJpbmVkQXJyYXkpO1xufVxuXG5mdW5jdGlvbiBwcmVkaWN0U2hpcExvY2F0aW9uKG9wcCkge1xuICBsZXQgbWlzc2VkQXJyYXkgPSBvcHAuZ2FtZS5nZXRNaXNzZWRBdHRhY2tzKCk7XG4gIGxldCBoaXRBcnJheSA9IG9wcC5nYW1lLmdldEhpdEF0dGFja3MoKTtcbiAgbGV0IGNvbWJpbmVkQXJyYXkgPSBtaXNzZWRBcnJheS5jb25jYXQoaGl0QXJyYXkpO1xuXG4gIGxldCBzYW1lU2hpcENvb3JkaW5hdGUgPSBmaWx0ZXJTYW1lU2hpcEhpdChvcHApO1xuICBsZXQgcGxhbmVBbGlnbm1lbnQgPSBnZXRTaGlwT3JpZW50YXRpb24oc2FtZVNoaXBDb29yZGluYXRlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbWVTaGlwQ29vcmRpbmF0ZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBbeCwgeV0gPSBzYW1lU2hpcENvb3JkaW5hdGVbaV07XG4gICAgaWYgKHBsYW5lQWxpZ25tZW50ID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgIGlmICh4ICsgMSA8PSA5ICYmIGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIFt4ICsgMSwgeV0pKSB7XG4gICAgICAgIHJldHVybiBwbHVzWCh4LCB5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHggLSAxID49IDAgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3ggLSAxLCB5XSkpIHtcbiAgICAgICAgcmV0dXJuIG1pbnVzWCh4LCB5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGxhbmVBbGlnbm1lbnQgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoeSArIDEgPD0gOSAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCwgeSArIDFdKSkge1xuICAgICAgICByZXR1cm4gcGx1c1koeCwgeSk7XG4gICAgICB9XG4gICAgICBpZiAoeSAtIDEgPj0gMCAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCwgeSAtIDFdKSkge1xuICAgICAgICByZXR1cm4gbWludXNZKHgsIHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3RlbnRpYWxNb3ZlKG9wcCkge1xuICBsZXQgbWlzc2VkQXJyYXkgPSBvcHAuZ2FtZS5nZXRNaXNzZWRBdHRhY2tzKCk7XG4gIGxldCBoaXRBcnJheSA9IG9wcC5nYW1lLmdldEhpdEF0dGFja3MoKTtcbiAgbGV0IGNvbWJpbmVkQXJyYXkgPSBtaXNzZWRBcnJheS5jb25jYXQoaGl0QXJyYXkpO1xuXG4gIGxldCBzaGlwc05vdFN1bmsgPSBjaGVja0hpdEF0dGFja3Mob3BwKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzTm90U3Vuay5sZW5ndGg7IGkrKykge1xuICAgIGxldCBbeCwgeV0gPSBzaGlwc05vdFN1bmtbaV07XG5cbiAgICBpZiAoeCArIDEgPD0gOSAmJiBjaGVja0R1cGxpY2F0ZShjb21iaW5lZEFycmF5LCBbeCArIDEsIHldKSkge1xuICAgICAgcmV0dXJuIHBsdXNYKHgsIHkpO1xuICAgIH1cblxuICAgIGlmICh4IC0gMSA+PSAwICYmIGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIFt4IC0gMSwgeV0pKSB7XG4gICAgICByZXR1cm4gbWludXNYKHgsIHkpO1xuICAgIH1cblxuICAgIGlmICh5ICsgMSA8PSA5ICYmIGNoZWNrRHVwbGljYXRlKGNvbWJpbmVkQXJyYXksIFt4LCB5ICsgMV0pKSB7XG4gICAgICByZXR1cm4gcGx1c1koeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKHkgLSAxID49IDAgJiYgY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgW3gsIHkgLSAxXSkpIHtcbiAgICAgIHJldHVybiBtaW51c1koeCwgeSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBsdXNYKHgsIHkpIHtcbiAgcmV0dXJuIFt4ICsgMSwgeV07XG59XG5cbmZ1bmN0aW9uIG1pbnVzWCh4LCB5KSB7XG4gIHJldHVybiBbeCAtIDEsIHldO1xufVxuXG5mdW5jdGlvbiBwbHVzWSh4LCB5KSB7XG4gIHJldHVybiBbeCwgeSArIDFdO1xufVxuXG5mdW5jdGlvbiBtaW51c1koeCwgeSkge1xuICByZXR1cm4gW3gsIHkgLSAxXTtcbn1cblxuZnVuY3Rpb24gY2hlY2tIaXRBdHRhY2tzKG9wcCkge1xuICBsZXQgaGl0QXJyYXkgPSBvcHAuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG4gIGxldCBib2FyZCA9IG9wcC5nYW1lLmdldEJvYXJkKCk7XG5cbiAgcmV0dXJuIGhpdEFycmF5LmZpbHRlcigoZWwpID0+IHtcbiAgICBsZXQgW3gsIHldID0gZWw7XG4gICAgaWYgKCFib2FyZFt4XVt5XS5pc1N1bmsoKSkge1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclNhbWVTaGlwSGl0KG9wcG9uZW50KSB7XG4gIGxldCBoaXRBcnJheSA9IGNoZWNrSGl0QXR0YWNrcyhvcHBvbmVudCk7XG5cbiAgbGV0IGJvYXJkID0gb3Bwb25lbnQuZ2FtZS5nZXRCb2FyZCgpO1xuXG4gIGlmIChoaXRBcnJheVswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBsZXQgW3gsIHldID0gaGl0QXJyYXlbMF07XG4gIGxldCByZXN1bHQgPSBbW3gsIHldXTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGhpdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IFthLCBiXSA9IGhpdEFycmF5W2ldO1xuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gYm9hcmRbYV1bYl0pIHtcbiAgICAgIHJlc3VsdC5wdXNoKFthLCBiXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldFNoaXBPcmllbnRhdGlvbihhcnJheSkge1xuICBsZXQgW3gsIHldID0gYXJyYXlbMF07XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgW2EsIGJdID0gYXJyYXlbaV07XG4gICAgaWYgKHggPT09IGEpIHtcbiAgICAgIHJldHVybiBcIkhvcml6b250YWxcIjtcbiAgICB9IGVsc2UgaWYgKHkgPT09IGIpIHtcbiAgICAgIHJldHVybiBcIlZlcnRpY2FsXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzKGFycmF5KSB7XG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gIGlmIChjaGVja0R1cGxpY2F0ZShhcnJheSwgW3gsIHldKSkge1xuICAgIHJldHVybiBbeCwgeV07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJhbmRvbUNvb3JkaW5hdGVzKGFycmF5KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICByYW5kb21Db29yZGluYXRlcyxcbiAgY2hlY2tEdXBsaWNhdGUsXG4gIHBvdGVudGlhbE1vdmUsXG4gIGZpbHRlclNhbWVTaGlwSGl0LFxuICBjaGVja0hpdEF0dGFja3MsXG4gIGdldFNoaXBPcmllbnRhdGlvbixcbiAgcHJlZGljdFNoaXBMb2NhdGlvbixcbiAgY2FsY3VsYXRlTmV4dFRhcmdldCxcbn07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vMDMtUGxheWVyL3BsYXllci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKG5hbWUpIHtcbiAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIobmFtZSk7XG4gIHJldHVybiBwbGF5ZXI7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9jcmVhdGUtcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBDb21wdXRlciB9IGZyb20gXCIuLi8wMy1QbGF5ZXIvcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVOZXh0VGFyZ2V0LCBjaGVja0R1cGxpY2F0ZSB9IGZyb20gXCIuL2NvbXB1dGVyLW1vdmUuanNcIjtcbmltcG9ydCB7IG91dHB1dE1lc3NhZ2UgfSBmcm9tIFwiLi4vMDYtRE9NL2dhbWUtc2NyZWVuLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lQ29udHJvbGxlcihwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIGxldCBwbGF5ZXJzO1xuXG4gIGlmIChwbGF5ZXIyID09PSBcIkNvbXB1dGVyXCIgfHwgcGxheWVyMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcGxheWVycyA9IFtjcmVhdGVQbGF5ZXIocGxheWVyMSksIENvbXB1dGVyKCldO1xuICB9IGVsc2Uge1xuICAgIHBsYXllcnMgPSBbY3JlYXRlUGxheWVyKHBsYXllcjEpLCBjcmVhdGVQbGF5ZXIocGxheWVyMildO1xuICB9XG5cbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XG5cbiAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xuXG4gIGZ1bmN0aW9uIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHBsYXllcnM7XG4gIH1cblxuICBmdW5jdGlvbiBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHBvbmVudCgpIHtcbiAgICBsZXQgb3Bwb25lbnQgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTtcbiAgICByZXR1cm4gb3Bwb25lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5Um91bmQoY29vcmRpbmF0ZXMpIHtcbiAgICBsZXQgW3gsIHldID0gY29vcmRpbmF0ZXM7XG5cbiAgICBsZXQgb3Bwb25lbnQgPSBnZXRPcHBvbmVudCgpO1xuXG4gICAgbGV0IG1pc3NlZEFycmF5ID0gb3Bwb25lbnQuZ2FtZS5nZXRNaXNzZWRBdHRhY2tzKCk7XG4gICAgbGV0IGhpdEFycmF5ID0gb3Bwb25lbnQuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG5cbiAgICBsZXQgY29tYmluZWRBcnJheSA9IG1pc3NlZEFycmF5LmNvbmNhdChoaXRBcnJheSk7XG5cbiAgICBpZiAoY2hlY2tEdXBsaWNhdGUoY29tYmluZWRBcnJheSwgY29vcmRpbmF0ZXMpKSB7XG4gICAgICBvcHBvbmVudC5nYW1lLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlXCIpO1xuICAgIH1cblxuICAgIGlmIChjaGVja1dpbm5lcihvcHBvbmVudCkpIHtcbiAgICAgIG91dHB1dE1lc3NhZ2UoYFdpbm5lciBpcyAke2dldEFjdGl2ZVBsYXllcigpLm5hbWV9YCk7XG4gICAgICByZXR1cm4gYFdpbm5lciBpcyAke2dldEFjdGl2ZVBsYXllcigpLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGdldEFjdGl2ZVBsYXllcigpLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgbGV0IFthLCBiXSA9IGNhbGN1bGF0ZU5leHRUYXJnZXQoZ2V0T3Bwb25lbnQoKSk7XG4gICAgICByZXR1cm4gcGxheVJvdW5kKFthLCBiXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tXaW5uZXIob3Bwb25lbnQpIHtcbiAgICByZXR1cm4gb3Bwb25lbnQuZ2FtZS50b3RhbFNoaXBTdW5rKCk7XG4gIH1cblxuICBjb25zdCByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICBwbGF5ZXIuZ2FtZS5yZXNldFZhcmlhYmxlcygpO1xuICAgIH0pO1xuXG4gICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICBnZXRPcHBvbmVudCxcbiAgICBwbGF5Um91bmQsXG4gICAgZ2V0UGxheWVycyxcbiAgICByZXN0YXJ0LFxuICB9O1xufVxuIiwiZnVuY3Rpb24gaW5pdFBsYXllckJvYXJkU2hpcChhY3RpdmVVc2VyKSB7XG4gIGFjdGl2ZVVzZXIuZ2FtZS5yZXN0YXJ0Qm9hcmQoKTtcblxuICBwbGFjZVNoaXBPbkJvYXJkKGFjdGl2ZVVzZXIsIFwiQ2FycmllclwiLCA0KTtcblxuICBwbGFjZVNoaXBPbkJvYXJkKGFjdGl2ZVVzZXIsIFwiQmF0dGxlc2hpcFwiLCAzKTtcblxuICBwbGFjZVNoaXBPbkJvYXJkKGFjdGl2ZVVzZXIsIFwiRGVzdHJveWVyXCIsIDIpO1xuXG4gIHBsYWNlU2hpcE9uQm9hcmQoYWN0aXZlVXNlciwgXCJTdWJtYXJpbmVcIiwgMik7XG5cbiAgcGxhY2VTaGlwT25Cb2FyZChhY3RpdmVVc2VyLCBcIlBhdHJvbCBCb2F0XCIsIDEpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBPbkJvYXJkKGFjdGl2ZVVzZXIsIG5hbWUsIGxlbmd0aCkge1xuICBsZXQgYm9hcmQgPSBhY3RpdmVVc2VyLmdhbWUuZ2V0Qm9hcmQoKTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gcmFuZG9tU2hpcFBsYWNlbWVudChsZW5ndGgsIGJvYXJkKTtcbiAgYWN0aXZlVXNlci5nYW1lLnBsYWNlU2hpcChuYW1lLCBsZW5ndGggKyAxLCBjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xufVxuXG5mdW5jdGlvbiByYW5kb21TaGlwUGxhY2VtZW50KGxlbmd0aCwgYm9hcmQpIHtcbiAgbGV0IHBsYW5lID0gZ2V0UmFuZG9tUGxhbmUoKTtcbiAgbGV0IGNvb3JkaW5hdGVzID0gZ2V0UmFuZG9tU2hpcENvb3JkaW5hdGUocGxhbmUsIGxlbmd0aCk7XG4gIGlmICghY2hlY2tDb29yZGluYXRlcyhjb29yZGluYXRlcywgYm9hcmQpKSB7XG4gICAgcmV0dXJuIHJhbmRvbVNoaXBQbGFjZW1lbnQobGVuZ3RoLCBib2FyZCk7XG4gIH1cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21QbGFuZSgpIHtcbiAgbGV0IHBsYW5lID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdO1xuXG4gIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBsYW5lLmxlbmd0aCk7XG4gIHJldHVybiBwbGFuZVtpbmRleF07XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbVNoaXBDb29yZGluYXRlKGF4aXMsIGxlbmd0aCkge1xuICBsZXQgc3RhcnRYLCBzdGFydFk7XG4gIHN0YXJ0WCA9IGdldFJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgc3RhcnRZID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZSgpO1xuXG4gIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgIGlmIChzdGFydFggKyBsZW5ndGggPD0gOSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW3N0YXJ0WCwgc3RhcnRZXSxcbiAgICAgICAgW3N0YXJ0WCArIGxlbmd0aCwgc3RhcnRZXSxcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzdGFydFggLSBsZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW3N0YXJ0WCwgc3RhcnRZXSxcbiAgICAgICAgW3N0YXJ0WCAtIGxlbmd0aCwgc3RhcnRZXSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImhvcml6b250YWwgY29vcmRpbmF0ZXMgZXJyb3JcIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgIGlmIChzdGFydFkgKyBsZW5ndGggPD0gOSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW3N0YXJ0WCwgc3RhcnRZXSxcbiAgICAgICAgW3N0YXJ0WCwgc3RhcnRZICsgbGVuZ3RoXSxcbiAgICAgIF07XG4gICAgfSBlbHNlIGlmIChzdGFydFkgLSBsZW5ndGggPj0gMCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW3N0YXJ0WCwgc3RhcnRZXSxcbiAgICAgICAgW3N0YXJ0WCwgc3RhcnRZIC0gbGVuZ3RoXSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInZlcnRpY2FsIGNvb3JkaW5hdGVzIGVycm9yXCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Nvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBib2FyZCkge1xuICBsZXQgW3N0YXJ0WCwgc3RhcnRZXSA9IGNvb3JkaW5hdGVzWzBdO1xuICBsZXQgW2VuZFgsIGVuZFldID0gY29vcmRpbmF0ZXNbMV07XG5cbiAgaWYgKHN0YXJ0WCA9PT0gZW5kWCkge1xuICAgIGlmIChzdGFydFkgPiBlbmRZKSB7XG4gICAgICBmb3IgKGxldCBpID0gZW5kWTsgaSA8PSBzdGFydFk7IGkrKykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYm9hcmRbc3RhcnRYXVtpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZFkgPiBzdGFydFkpIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFk7IGkgPD0gZW5kWTsgaSsrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShib2FyZFtzdGFydFhdW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoc3RhcnRZID09PSBlbmRZKSB7XG4gICAgaWYgKHN0YXJ0WCA+IGVuZFgpIHtcbiAgICAgIGZvciAobGV0IGkgPSBlbmRYOyBpIDw9IHN0YXJ0WDsgaSsrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShib2FyZFtpXVtzdGFydFldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kWCA+IHN0YXJ0WCkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0WDsgaSA8PSBlbmRYOyBpKyspIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGJvYXJkW2ldW3N0YXJ0WV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge1xuICByYW5kb21TaGlwUGxhY2VtZW50LFxuICBjaGVja0Nvb3JkaW5hdGVzLFxuICBnZXRSYW5kb21TaGlwQ29vcmRpbmF0ZSxcbiAgaW5pdFBsYXllckJvYXJkU2hpcCxcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gXCIuLi8wNC1HYW1lcGxheS9nYW1lY29udHJvbGxlclwiO1xuaW1wb3J0IHsgaW5pdFBsYXllckJvYXJkU2hpcCB9IGZyb20gXCIuL3JhbmRvbS1zaGlwLXBsYWNlbWVudFwiO1xuaW1wb3J0IHtcbiAgb3V0cHV0TWVzc2FnZSxcbiAgZGlzYWJsZUJvYXJkRXZlbnQsXG4gIHRvZ2dsZVN0YXJ0QnRuLFxuICB0b2dnbGVzRGlzYWJsZSxcbiAgdG9nZ2xlQm9hcmRFdmVudCxcbn0gZnJvbSBcIi4uLzA2LURPTS9nYW1lLXNjcmVlblwiO1xuZnVuY3Rpb24gU2NyZWVuQ29udHJvbGxlcihwbGF5MSwgcGxheTIpIHtcbiAgbGV0IGdhbWVwbGF5ID0gR2FtZUNvbnRyb2xsZXIocGxheTEsIHBsYXkyKTtcblxuICAvL291dHB1dCBwbGF5ZXIgdHVyblxuICBvdXRwdXRNZXNzYWdlKGAke2dhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWV9J3MgdHVybiFgKTtcblxuICBjb25zdCB1cGRhdGVTY3JlZW4gPSAoKSA9PiB7XG4gICAgLy9jbGVhciBib2FyZFxuICAgIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItYm9hcmRcIik7XG5cbiAgICBib2FyZERpdi5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgYm9hcmQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH0pO1xuXG4gICAgb3V0cHV0TWVzc2FnZShcIlwiKTtcblxuICAgIC8vb3V0cHV0IHBsYXllciB0dXJuXG4gICAgb3V0cHV0TWVzc2FnZShgJHtnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfSdzIHR1cm4hYCk7XG5cbiAgICAvL3VwZGF0ZSBib2FyZFxuXG4gICAgdXBkYXRlQWN0aXZlVXNlckJvYXJkKGdhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpKTtcblxuICAgIHVwZGF0ZUFjdGl2ZVVzZXJCb2FyZChnYW1lcGxheS5nZXRPcHBvbmVudCgpKTtcblxuICAgIC8vZGlzYWJsZSBhY3RpdmVQbGF5ZXIgZXZlbnQgYm9hcmRcblxuICAgIGRpc2FibGVBY3RpdmVQbGF5ZXJCb2FyZChcbiAgICAgIGdhbWVwbGF5LmdldEFjdGl2ZVBsYXllcigpLm5hbWUsXG4gICAgICBnYW1lcGxheS5nZXRPcHBvbmVudCgpLm5hbWVcbiAgICApO1xuICB9O1xuXG4gIGluaXRSYW5kb21TaGlwUGxhY2VtZW50TGlzdGVuZXIoZ2FtZXBsYXkpO1xuICBpbml0U3RhcnRHYW1lTGlzdGVuZXIoZ2FtZXBsYXkpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZVVzZXJCb2FyZCh1c2VyKSB7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IHVzZXIubmFtZTtcblxuICAgIGNvbnN0IGJvYXJkID0gdXNlci5nYW1lLmdldEJvYXJkKCk7XG5cbiAgICBjb25zdCBoaXRBcnJheSA9IHVzZXIuZ2FtZS5nZXRIaXRBdHRhY2tzKCk7XG5cbiAgICBjb25zdCBtaXNzQXJyYXkgPSB1c2VyLmdhbWUuZ2V0TWlzc2VkQXR0YWNrcygpO1xuXG4gICAgY29uc3QgdXNlckRvbSA9IGdldEFjdGl2ZVBsYXllckRvbShwbGF5ZXJOYW1lKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcblxuICAgICAgICAvL21hcmsgc2hpcCBsb2NhdGlvbiBmb3IgdXNlclxuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShib2FyZFtpXVtqXSkpIHtcbiAgICAgICAgICBpZiAoZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSA9PT0gcGxheWVyTmFtZSkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2hpdCBhdHRhY2tzIG1hcmsgY2VsbFxuICAgICAgICBoaXRBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgbGV0IFthLCBiXSA9IGl0ZW07XG4gICAgICAgICAgaWYgKGEgPT09IGkgJiYgYiA9PT0gaikge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZGFtYWdlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9taXNzZWQgYXR0YWNrcyBtYXJrIGNlbGxcbiAgICAgICAgbWlzc0FycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBsZXQgW2EsIGJdID0gaXRlbTtcbiAgICAgICAgICBpZiAoYSA9PT0gaSAmJiBiID09PSBqKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJtaXNzZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2NlbGwgZXZlbnQgaGFuZGxlclxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBnYW1lcGxheS5wbGF5Um91bmQoW2ksIGpdKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZGlzYWJsZUJvYXJkRXZlbnQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9zaG93IG1vZGFsIHBsYXllciB0dXJuXG5cbiAgICAgICAgICAgIGlmIChnYW1lcGxheS5nZXRPcHBvbmVudCgpLm5hbWUgIT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgICAgICAgICBkaXNwbGF5TW9kYWwoZ2FtZXBsYXkpO1xuICAgICAgICAgICAgICBjbG9zZU1vZGFsKHVwZGF0ZVNjcmVlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICAgIHVzZXJEb20uYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaW5pdFJhbmRvbVNoaXBQbGFjZW1lbnRMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbS1zaGlwLWJ0blwiKTtcblxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIik7XG4gICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCk7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsZWFyQm9hcmQoYWN0aXZlUGxheWVyKTtcbiAgICAgIGluaXRQbGF5ZXJCb2FyZFNoaXAoYWN0aXZlUGxheWVyKTtcbiAgICAgIHVwZGF0ZUFjdGl2ZVVzZXJCb2FyZChhY3RpdmVQbGF5ZXIpO1xuXG4gICAgICAvL2Rpc2FibGUgYWN0aXZlQm9hcmRcbiAgICAgIGRpc2FibGVBY3RpdmVQbGF5ZXJCb2FyZChcbiAgICAgICAgZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSxcbiAgICAgICAgZ2FtZXBsYXkuZ2V0T3Bwb25lbnQoKS5uYW1lXG4gICAgICApO1xuXG4gICAgICBpZiAoc3RhcnRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZVwiKSkge1xuICAgICAgICB0b2dnbGVzRGlzYWJsZShzdGFydEJ0bik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U3RhcnRHYW1lTGlzdGVuZXIoKSB7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ0blwiKTtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmRvbS1zaGlwLWJ0blwiKTtcblxuICAgIGNvbnN0IG9wcG9uZW50ID0gZ2FtZXBsYXkuZ2V0T3Bwb25lbnQoKTtcblxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvL3N0b3AgZXZlbnQgaWYgYm90aCBib2FyZHMgYXJlIGVtcHR5XG4gICAgICBpZiAoXG4gICAgICAgIGdldEFjdGl2ZVBsYXllckRvbShnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lKVxuICAgICAgICAgIC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy90b2dnbGUgZGlzYWJsZSByYW5kb21CdG5cbiAgICAgIHRvZ2dsZXNEaXNhYmxlKHJhbmRvbUJ0bik7XG5cbiAgICAgIC8vY2hlY2sgaWYgMm5kIGJvYXJkIGlzIGVtcHR5XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItdHdvLWJvYXJkXCIpLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgIGluaXRQbGF5ZXJCb2FyZFNoaXAob3Bwb25lbnQpO1xuICAgICAgICB1cGRhdGVBY3RpdmVVc2VyQm9hcmQob3Bwb25lbnQpO1xuICAgICAgICB0b2dnbGVTdGFydEJ0bigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzZXRQbGF5ZXJCb2FyZHMoZ2FtZXBsYXkpO1xuICAgICAgICBjbGVhckFsbEJvYXJkKCk7XG4gICAgICAgIHRvZ2dsZVN0YXJ0QnRuKCk7XG4gICAgICAgIG91dHB1dE1lc3NhZ2UoXCJcIik7XG5cbiAgICAgICAgLy9vdXRwdXQgcGxheWVyIHR1cm5cbiAgICAgICAgb3V0cHV0TWVzc2FnZShgJHtnYW1lcGxheS5nZXRBY3RpdmVQbGF5ZXIoKS5uYW1lfSdzIHR1cm4hYCk7XG4gICAgICAgIHRvZ2dsZUJvYXJkRXZlbnQoZ2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckJvYXJkKHBsYXllcikge1xuICAgIGxldCBkb20gPSBnZXRBY3RpdmVQbGF5ZXJEb20ocGxheWVyLm5hbWUpO1xuICAgIGRvbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJBbGxCb2FyZCgpIHtcbiAgY29uc3QgcGxheWVyQm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItYm9hcmRcIik7XG4gIHBsYXllckJvYXJkcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgIGJvYXJkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UGxheWVyQm9hcmRzKGdhbWVwbGF5KSB7XG4gIGdhbWVwbGF5LnJlc3RhcnQoKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUFjdGl2ZVBsYXllckJvYXJkKHBsYXllciwgb3Bwb25lbnQpIHtcbiAgY29uc3QgcGxheWVyRG9tID0gZ2V0QWN0aXZlUGxheWVyRG9tKHBsYXllcik7XG4gIGNvbnN0IG9wcG9uZW50RG9tID0gZ2V0QWN0aXZlUGxheWVyRG9tKG9wcG9uZW50KTtcblxuICBpZiAoIXBsYXllckRvbS5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlXCIpKSB7XG4gICAgcGxheWVyRG9tLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuICAgIG9wcG9uZW50RG9tLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVBsYXllckRvbShwbGF5ZXIpIHtcbiAgY29uc3QgYWxsVGl0bGVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLXRpdGxlXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGl0bGVCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxUaXRsZUJvYXJkW2ldLnRleHRDb250ZW50ID09PSBwbGF5ZXIpIHtcbiAgICAgIHJldHVybiBhbGxUaXRsZUJvYXJkW2ldLm5leHRFbGVtZW50U2libGluZztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheU1vZGFsKGdhbWVwbGF5KSB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaWFsb2dcIik7XG4gIGNvbnN0IHBsYXllclR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10dXJuXCIpO1xuXG4gIHBsYXllclR1cm4udGV4dENvbnRlbnQgPSBcIlwiO1xuICBwbGF5ZXJUdXJuLnRleHRDb250ZW50ID0gYCR7Z2FtZXBsYXkuZ2V0QWN0aXZlUGxheWVyKCkubmFtZX0ncyBUdXJuIWA7XG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChhY3RpdmF0ZSkge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGlhbG9nXCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW1vZGFsXCIpO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICBhY3RpdmF0ZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgU2NyZWVuQ29udHJvbGxlciB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgaWYgKHR5cGVvZiBwbGF5ZXIyID09PSB1bmRlZmluZWQpIHtcbiAgICBwbGF5ZXIyID0gXCJDb21wdXRlclwiO1xuICB9XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBwbGF5ZXJBcnJheSA9IFtcIm9uZVwiLCBcInR3b1wiXTtcblxuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcblxuICBjb25zdCBzaGlwSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaGlwSW5wdXREaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtaW5wdXQtZGl2XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKGBwbGF5ZXItJHtwbGF5ZXJBcnJheVtpXX1gKTtcblxuICAgIGNvbnN0IHBsYXllclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXRpdGxlXCIpO1xuICAgIHBsYXllclRpdGxlLnNldEF0dHJpYnV0ZShcIklkXCIsIGBwbGF5ZXItJHtwbGF5ZXJBcnJheVtpXX1gKTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBwbGF5ZXJUaXRsZS50ZXh0Q29udGVudCA9IHBsYXllcjE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclRpdGxlLnRleHRDb250ZW50ID0gcGxheWVyMjtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllci1ib2FyZFwiKTtcbiAgICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcGxheWVyLSR7cGxheWVyQXJyYXlbaV19LWJvYXJkYCk7XG5cbiAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQocGxheWVyVGl0bGUpO1xuICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRGl2KTtcbiAgfVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuXG4gIGNvbnN0IGJvYXJkTGFzdEVsZW1lbnQgPSBib2FyZC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIGJvYXJkLmluc2VydEJlZm9yZShzaGlwSW5wdXREaXYsIGJvYXJkTGFzdEVsZW1lbnQpO1xuXG4gIGNyZWF0ZVNoaXBJbnB1dERpdigpO1xuXG4gIGNyZWF0ZVN0YXJ0RGl2KCk7XG5cbiAgY3JlYXRlTWVzc2FnZU91dHB1dCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGlwSW5wdXREaXYoKSB7XG4gIGNvbnN0IHNoaXBJbnB1dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1pbnB1dC1kaXZcIik7XG5cbiAgY29uc3QgcmFuZG9tU2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJhbmRvbVNoaXBEaXYuY2xhc3NMaXN0LmFkZChcInNoaXAtaW5wdXQtcmFuZG9tXCIpO1xuXG4gIGNvbnN0IHJhbmRvbVNoaXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJhbmRvbVNoaXBUaXRsZS50ZXh0Q29udGVudCA9IFwiR2VuZXJhdGUgcmFuZG9tIHNoaXAgY29vcmRpbmF0ZXNcIjtcblxuICBjb25zdCByYW5kb21TaGlwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmFuZG9tU2hpcEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJhbmRvbS1zaGlwLWJ0blwiKTtcbiAgcmFuZG9tU2hpcEJ0bi50ZXh0Q29udGVudCA9IFwiQ2xpY2tcIjtcblxuICByYW5kb21TaGlwRGl2LmFwcGVuZENoaWxkKHJhbmRvbVNoaXBUaXRsZSk7XG4gIHJhbmRvbVNoaXBEaXYuYXBwZW5kQ2hpbGQocmFuZG9tU2hpcEJ0bik7XG5cbiAgc2hpcElucHV0RGl2LmFwcGVuZENoaWxkKHJhbmRvbVNoaXBEaXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFydERpdigpIHtcbiAgY29uc3Qgc2hpcElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWlucHV0LWRpdlwiKTtcblxuICBjb25zdCBzdGFydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXJ0RGl2LmNsYXNzTGlzdC5hZGQoXCJzdGFydC1kaXZcIik7XG5cbiAgY29uc3Qgc3RhcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXJ0VGl0bGUuY2xhc3NMaXN0LmFkZChcInN0YXJ0LXRpdGxlXCIpO1xuICBzdGFydFRpdGxlLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXJ0LWJ0blwiKTtcbiAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJDbGlja1wiO1xuXG4gIHN0YXJ0RGl2LmFwcGVuZENoaWxkKHN0YXJ0VGl0bGUpO1xuICBzdGFydERpdi5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG5cbiAgc2hpcElucHV0RGl2LmFwcGVuZENoaWxkKHN0YXJ0RGl2KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlc0Rpc2FibGUoZGl2KSB7XG4gIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZVwiKSkge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZU91dHB1dCgpIHtcbiAgY29uc3Qgc2hpcElucHV0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWlucHV0LWRpdlwiKTtcblxuICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZS1kaXZcIik7XG5cbiAgc2hpcElucHV0RGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xufVxuXG5mdW5jdGlvbiBvdXRwdXRNZXNzYWdlKGNoYXIpIHtcbiAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZS1kaXZcIik7XG4gIG1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBjaGFyO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQm9hcmRFdmVudCgpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1ib2FyZFwiKTtcblxuICBib2FyZC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU3RhcnRCdG4oKSB7XG4gIGNvbnN0IGJ0blRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC10aXRsZVwiKTtcbiAgaWYgKGJ0blRpdGxlLnRleHRDb250ZW50ID09PSBcIlN0YXJ0IEdhbWVcIikge1xuICAgIGJ0blRpdGxlLnRleHRDb250ZW50ID0gXCJSZXN0YXJ0IEdhbWVcIjtcbiAgfSBlbHNlIHtcbiAgICBidG5UaXRsZS50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJvYXJkRXZlbnQoYWN0aXZlUGxheWVyKSB7XG4gIGNvbnN0IGFsbFRpdGxlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci10aXRsZVwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRpdGxlQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsVGl0bGVCb2FyZFtpXS50ZXh0Q29udGVudCA9PT0gYWN0aXZlUGxheWVyKSB7XG4gICAgICBhbGxUaXRsZUJvYXJkW2ldLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxsVGl0bGVCb2FyZFtpXS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUdhbWVCb2FyZCxcbiAgb3V0cHV0TWVzc2FnZSxcbiAgZGlzYWJsZUJvYXJkRXZlbnQsXG4gIHRvZ2dsZVN0YXJ0QnRuLFxuICB0b2dnbGVzRGlzYWJsZSxcbiAgdG9nZ2xlQm9hcmRFdmVudCxcbn07XG4iLCJpbXBvcnQgeyBTY3JlZW5Db250cm9sbGVyIH0gZnJvbSBcIi4uLzA1LVNjcmVlbkNvbnRyb2xsZXIvc2NyZWVuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgY3JlYXRlR2FtZUJvYXJkIH0gZnJvbSBcIi4uLzA2LURPTS9nYW1lLXNjcmVlblwiO1xuXG5mdW5jdGlvbiBwbGF5ZXJTZWxlY3Rpb24obXVsdGkpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICBjb25zdCBwbGF5ZXJPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1vcHRpb25cIik7XG4gIHBsYXllck9wdGlvbi5yZW1vdmUoKTtcblxuICBjb25zdCBwbGF5ZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHBsYXllckZvcm0uY2xhc3NMaXN0LmFkZChcInBsYXllci1mb3JtXCIpO1xuXG4gIGNvbnN0IHBsYXllcklucHV0U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVySW5wdXRTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInBsYXllci1pbnB1dC1zZWxlY3Rpb25cIik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbXVsdGk7IGkrKykge1xuICAgIGNvbnN0IHBsYXllck9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBwbGF5ZXJPbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICAgIGNvbnN0IHBsYXllck9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBsYXllck9uZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgaWYgKGkgPT09IDEpIHtcbiAgICAgIHBsYXllck9uZURpdi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW9uZS1kaXZcIik7XG4gICAgICBwbGF5ZXJPbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwbGF5ZXItb25lLW5hbWVcIik7XG4gICAgICBwbGF5ZXJPbmVMYWJlbC50ZXh0Q29udGVudCA9IGBQbGF5ZXIgT25lIE5hbWVgO1xuICAgICAgcGxheWVyT25lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHBsYXllci1vbmUtbmFtZWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJPbmVEaXYuY2xhc3NMaXN0LmFkZChcInBsYXllci10d28tZGl2XCIpO1xuICAgICAgcGxheWVyT25lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicGxheWVyLXR3by1uYW1lXCIpO1xuICAgICAgcGxheWVyT25lTGFiZWwudGV4dENvbnRlbnQgPSBgUGxheWVyIFR3byBOYW1lYDtcbiAgICAgIHBsYXllck9uZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBwbGF5ZXItdHdvLW5hbWVgKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJPbmVEaXYuYXBwZW5kQ2hpbGQocGxheWVyT25lTGFiZWwpO1xuXG4gICAgcGxheWVyT25lSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBOYW1lXCIpO1xuICAgIHBsYXllck9uZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBwbGF5ZXJPbmVEaXYuYXBwZW5kQ2hpbGQocGxheWVyT25lSW5wdXQpO1xuXG4gICAgcGxheWVySW5wdXRTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocGxheWVyT25lRGl2KTtcbiAgfVxuXG4gIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxheWVyLW5hbWUtYnRuXCIpO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICBwbGF5ZXJGb3JtLmFwcGVuZENoaWxkKHBsYXllcklucHV0U2VsZWN0aW9uKTtcbiAgcGxheWVyRm9ybS5hcHBlbmRDaGlsZChidG5EaXYpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyRm9ybSk7XG5cbiAgZ2FtZU1vZGVFdmVudChidG4pO1xufVxuXG5mdW5jdGlvbiBnYW1lTW9kZUV2ZW50KGJ0bikge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwbGF5ZXJzID0gZ2V0UGxheWVySW5wdXQoKTtcbiAgICByZW1vdmVQbGF5ZXJTZWxlY3Rpb24oKTtcbiAgICBjcmVhdGVHYW1lQm9hcmQocGxheWVyc1swXSwgcGxheWVyc1sxXSk7XG4gICAgU2NyZWVuQ29udHJvbGxlcihwbGF5ZXJzWzBdLCBwbGF5ZXJzWzFdKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYXllcklucHV0KCkge1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG5cbiAgbGV0IHBsYXllcnMgPSBbXTtcblxuICAvL2NoZWNrIHZhbGlkaXR5XG4gIGNoZWNrVmFsaWRpdHlJbnB1dHMoKTtcblxuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwiXCIgfHwgaW5wdXQudmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHBsYXllcnMucHVzaChpbnB1dC52YWx1ZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAocGxheWVycy5sZW5ndGggPT09IDEpIHtcbiAgICBwbGF5ZXJzLnB1c2goXCJDb21wdXRlclwiKTtcbiAgfVxuXG4gIHJldHVybiBwbGF5ZXJzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQbGF5ZXJTZWxlY3Rpb24oKSB7XG4gIGNvbnN0IHBsYXllckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1mb3JtXCIpO1xuICBwbGF5ZXJGb3JtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkaXR5SW5wdXRzKCkge1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbnB1dHNbaV0udmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICByZXR1cm4gZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpbnB1dHNbaV0udmFsdWUgPT09IFwiQ29tcHV0ZXJcIiB8fFxuICAgICAgaW5wdXRzW2ldLnZhbHVlID09PSBcImNvbXB1dGVyXCJcbiAgICApIHtcbiAgICAgIGlucHV0c1tpXS5zZXRDdXN0b21WYWxpZGl0eShcIkVudGVyIFZhbGlkIE5hbWVcIik7XG4gICAgICByZXR1cm4gZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dHNbaV0uc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBsYXllclNlbGVjdGlvbiwgcmVtb3ZlUGxheWVyU2VsZWN0aW9uIH07XG4iLCJpbXBvcnQgeyBwbGF5ZXJTZWxlY3Rpb24gfSBmcm9tIFwiLi9nYW1lbW9kZS1zZWxlY3Rpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gIGNvbnN0IHBsYXllck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllck9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicGxheWVyLW9wdGlvblwiKTtcblxuICBjb25zdCBwbGF5ZXJPbmVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5ZXJPbmVPcHRpb24uY2xhc3NMaXN0LmFkZChcInBsYXllci1vbmUtb3B0aW9uXCIpO1xuICBwbGF5ZXJPbmVPcHRpb24udGV4dENvbnRlbnQgPSBcIjEgUGxheWVyXCI7XG5cbiAgY29uc3QgcGxheWVyVHdvT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGxheWVyVHdvT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItdHdvLW9wdGlvblwiKTtcbiAgcGxheWVyVHdvT3B0aW9uLnRleHRDb250ZW50ID0gXCIyIFBsYXllcnNcIjtcblxuICBwbGF5ZXJPcHRpb24uYXBwZW5kQ2hpbGQocGxheWVyT25lT3B0aW9uKTtcbiAgcGxheWVyT3B0aW9uLmFwcGVuZENoaWxkKHBsYXllclR3b09wdGlvbik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJPcHRpb24pO1xuXG4gIGhvbWVFdmVudHMocGxheWVyT25lT3B0aW9uLCBwbGF5ZXJUd29PcHRpb24pO1xuXG4gIHJlc3RhcnRIb21lUGFnZSgpO1xufVxuXG5mdW5jdGlvbiBob21lRXZlbnRzKHBsYXkxQnRuLCBwbGF5MkJ0bikge1xuICBwbGF5MUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllclNlbGVjdGlvbigxKTtcbiAgfSk7XG5cbiAgcGxheTJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXJTZWxlY3Rpb24oMik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0SG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGV4aXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4aXRcIik7XG5cbiAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vMDYtRE9NL2hvbWUtcGFnZVwiO1xuXG5ob21lUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9