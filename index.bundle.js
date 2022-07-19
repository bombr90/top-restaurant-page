"use strict";
(self["webpackChunktop_restaurant_page"] = self["webpackChunktop_restaurant_page"] || []).push([["index"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./linux.png */ "./src/linux.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*   {\n    /* border: 1px black solid; */\n    border-radius: 4px;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    box-sizing: border-box;\n}\n\n:root   {\n    --sectionColor: rgb(223, 223, 223);\n}\n\n#content    {\n    background-color: whitesmoke;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 60px 120px 1fr 60px;\n    grid-template-areas: \n        'header'\n        'nav' \n        'main' \n        'footer';\n    gap: 16px;\n    padding: 16px;\n    justify-content: center;\n    align-content: center;\n    overflow: scroll;\n    max-width: 800px;\n}\n\n#header {\n    grid-area: header;\n    display: flex;\n    gap: 16px;\n    padding: 12px;\n    align-items: center;\n    justify-content: center;\n    margin: auto;\n}\n\n#footer {\n    grid-area: footer;\n    display:grid;\n    align-items: center;\n    justify-content: center;\n    /* background-color: red; */\n\n}\n\n#main   {\n    grid-area: main;\n    padding: 16px;\n    background-color: rgb(223, 223, 223);\n}\n\nh1, h2, h3  {\n    text-align: center;\n    /* margin: auto; */\n}\n\n.card, .menucard  {\n    display: grid;\n    padding: 20px;\n    gap: 16px;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3,25px) 50px;\n    font-size: 1.2rem;\n    background-color: lightgray;\n    box-shadow: 4px 4px 8px black;\n    text-align: center;\n    align-items: center;\n}\n\n.menucard   {\n    grid-template-rows: repeat(2,25px) 50px 25px 50px;\n    background-color: lightgray;\n}\n\n.cards  {\n    display: grid;\n    justify-content: center;\n    gap: 20px;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-auto-rows: 1fr;  \n    background-color: whitesmoke;\n    box-shadow: 4px 4px 8px gray;\n}\n\n#main button  {\n    padding: 15px 30px;\n    font-weight: 700;\n    font-size: 1.1rem;\n    background-color: whitesmoke;\n}\n\n.tablecard  {\n    display: grid;\n    grid-template-columns: 100px repeat(2, 75px);\n    padding: 2px;\n    align-items: center;\n    justify-items: center;\n}\n\n.tablecards {\n    display: grid;\n    gap: 0px;\n    align-items: center;\n    justify-items: center;\n}\n\n.tablecard:nth-child(1)    {\n    font-weight: 700;\n}\n\n.center {\n    text-align: center;\n}\n\n#nav    {\n    grid-area: nav;\n    display: flex;\n    width: 100%;\n    padding: 4px;\n    justify-content: center;\n    margin: auto;\n    background-color:var(--sectionColor);\n}\n\n.navbar {\n    display:flex;\n    gap: 16px;\n    align-items: center;\n}\n\n.navbar > li  {\n    display:flex;\n    list-style: none;\n}\n\n#nav button  {\n    padding: 5px 15px;\n    font-size: 1.1rem;\n    display: flex;\n    flex-direction: column;\n    width: 125px;\n    align-items: center;\n}\n\n#nav button:hover {\n    transform: scale(1.2);\n    transition: .2s;\n}\n\n.clicked    {\n    background-color: rgb(240, 240, 240);\n    font-weight: 700;\n}\n\n.clicked::after{\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    margin: auto;\n}\n\n.image    {\n    width: 50px;\n    height: auto;\n    margin: auto;\n    padding: 5px;\n    border-radius: 50%;\n    background-color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,qGAAqG;IACrG,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,0BAA0B;IAC1B,uCAAuC;IACvC;;;;gBAIY;IACZ,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;;AAE/B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;IACT,0BAA0B;IAC1B,uCAAuC;IACvC,iBAAiB;IACjB,2BAA2B;IAC3B,6BAA6B;IAC7B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iDAAiD;IACjD,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,4DAA4D;IAC5D,mBAAmB;IACnB,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,4CAA4C;IAC5C,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA;IACI,gDAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B","sourcesContent":["*   {\n    /* border: 1px black solid; */\n    border-radius: 4px;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    box-sizing: border-box;\n}\n\n:root   {\n    --sectionColor: rgb(223, 223, 223);\n}\n\n#content    {\n    background-color: whitesmoke;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 60px 120px 1fr 60px;\n    grid-template-areas: \n        'header'\n        'nav' \n        'main' \n        'footer';\n    gap: 16px;\n    padding: 16px;\n    justify-content: center;\n    align-content: center;\n    overflow: scroll;\n    max-width: 800px;\n}\n\n#header {\n    grid-area: header;\n    display: flex;\n    gap: 16px;\n    padding: 12px;\n    align-items: center;\n    justify-content: center;\n    margin: auto;\n}\n\n#footer {\n    grid-area: footer;\n    display:grid;\n    align-items: center;\n    justify-content: center;\n    /* background-color: red; */\n\n}\n\n#main   {\n    grid-area: main;\n    padding: 16px;\n    background-color: rgb(223, 223, 223);\n}\n\nh1, h2, h3  {\n    text-align: center;\n    /* margin: auto; */\n}\n\n.card, .menucard  {\n    display: grid;\n    padding: 20px;\n    gap: 16px;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3,25px) 50px;\n    font-size: 1.2rem;\n    background-color: lightgray;\n    box-shadow: 4px 4px 8px black;\n    text-align: center;\n    align-items: center;\n}\n\n.menucard   {\n    grid-template-rows: repeat(2,25px) 50px 25px 50px;\n    background-color: lightgray;\n}\n\n.cards  {\n    display: grid;\n    justify-content: center;\n    gap: 20px;\n    padding: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-auto-rows: 1fr;  \n    background-color: whitesmoke;\n    box-shadow: 4px 4px 8px gray;\n}\n\n#main button  {\n    padding: 15px 30px;\n    font-weight: 700;\n    font-size: 1.1rem;\n    background-color: whitesmoke;\n}\n\n.tablecard  {\n    display: grid;\n    grid-template-columns: 100px repeat(2, 75px);\n    padding: 2px;\n    align-items: center;\n    justify-items: center;\n}\n\n.tablecards {\n    display: grid;\n    gap: 0px;\n    align-items: center;\n    justify-items: center;\n}\n\n.tablecard:nth-child(1)    {\n    font-weight: 700;\n}\n\n.center {\n    text-align: center;\n}\n\n#nav    {\n    grid-area: nav;\n    display: flex;\n    width: 100%;\n    padding: 4px;\n    justify-content: center;\n    margin: auto;\n    background-color:var(--sectionColor);\n}\n\n.navbar {\n    display:flex;\n    gap: 16px;\n    align-items: center;\n}\n\n.navbar > li  {\n    display:flex;\n    list-style: none;\n}\n\n#nav button  {\n    padding: 5px 15px;\n    font-size: 1.1rem;\n    display: flex;\n    flex-direction: column;\n    width: 125px;\n    align-items: center;\n}\n\n#nav button:hover {\n    transform: scale(1.2);\n    transition: .2s;\n}\n\n.clicked    {\n    background-color: rgb(240, 240, 240);\n    font-weight: 700;\n}\n\n.clicked::after{\n    content: url(./linux.png);\n    margin: auto;\n}\n\n.image    {\n    width: 50px;\n    height: auto;\n    margin: auto;\n    padding: 5px;\n    border-radius: 50%;\n    background-color: white;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/static/footer.html":
/*!********************************!*\
  !*** ./src/static/footer.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<span>&copy 2022 Bombr</span>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/static/header.html":
/*!********************************!*\
  !*** ./src/static/header.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<h1>Odin's Feastery</h1>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/static/main.html":
/*!******************************!*\
  !*** ./src/static/main.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "    <p>Hungry? Odin's Feastery has you covered! Satisfying the most gluttonious Gods of Asgard (Thor) while maintaining a touch of class that even Loki would be hard pressed to emulate.</p><p>Come on by and fill your stomach with that what the Gods fuel themselves before battle.</p><p>The scenery is great (Aphrodites performs regularly).</p>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/static/nav.html":
/*!*****************************!*\
  !*** ./src/static/nav.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "    <ul class=\"navbar\">\n        <li><button id=\"homebtn\" class=\"clicked\">Home</button></li>\n        <li><button id=\"menubtn\">Menu</button></li>\n        <li><button id=\"contactbtn\">Contact</button></li>\n    </ul>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const contact = function(modifyDiv)  {
    let header = `<h2>Contact Us</h2>`
    let filler = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum at varius vel pharetra vel turpis. Metus vulputate eu scelerisque felis imperdiet. Iaculis urna id volutpat lacus. Nibh tellus molestie nunc non blandit. Egestas tellus rutrum tellus pellentesque eu tincidunt. Elementum sagittis vitae et leo duis ut diam quam. Cursus vitae congue mauris rhoncus aenean. Blandit turpis cursus in hac. Ultricies leo integer malesuada nunc vel risus. Commodo ullamcorper a lacus vestibulum sed. In hac habitasse platea dictumst quisque sagittis purus sit amet. Tincidunt eget nullam non nisi est sit amet. Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>`

    modifyDiv.appendChild(addComponent(header));
    modifyDiv.appendChild(addComponent(filler));

    function addComponent(str)    {
        const element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }

    const cards = document.createElement('div');
    cards.classList = 'cards';

    const contacts = [{
        name: "Joe",
        description: "Head Chef",
        number: "(012)-345-6789"
    },  {
        name: "Jane",
        description: "Sous Chef",
        number: "(012)-345-6789"
    },  {
        name: "Alexa",
        description: "Answering Machine",
        number: "(012)-345-6789"
    },  {
        name: "Siri",
        description: "Virtual Assistant",
        number: "(012-345-6789)"
    }];
    
    contacts.forEach(contact =>    {
        const card = document.createElement('div');
        card.classList = 'card';
    
        const content = `
        <h3>${contact.name}</h3>
        <p>${contact.description}</p>
        <p>${contact.number}</p>
        <p><button>Contact ${contact.name}</button></p>
        `
        card.innerHTML += content;
        cards.appendChild(card);
    });

    modifyDiv.appendChild(cards);
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _static_main_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/main.html */ "./src/static/main.html");


const home = function(modifyDiv)  {
    let header = `<h2>Home</h2>`
    let address = `<h3>Address</h3><p class='center'>123 Fake Street, MiddleOfNoWhere, Middle Earth</p>`;

    modifyDiv.appendChild(addComponent(header));
    modifyDiv.appendChild(addComponent(_static_main_html__WEBPACK_IMPORTED_MODULE_0__["default"]));
    function addComponent(str)    {
        const element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }

    modifyDiv.appendChild(addComponent(`<h3>Hours</h3>`))
    const tablecards = document.createElement('div');
    tablecards.classList = 'tablecards';

    const hours = [{
        day: "Day",
        open: "Open",
        close: "Close",
    },  {    
        day: "Sunday",
        open: "9am",
        close: "2pm"
    },  {
        day: "Monday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Tuesday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Wednesday",
        open: "Closed",
        close: ""
    },  {
        day: "Thursday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Friday",
        open: "8am",
        close: "5pm"
    },  {
        day: "Saturday",
        open: "9am",
        close: "2pm"
    }];
    
    hours.forEach(hour =>    {
        const tablecard = document.createElement('div');
        tablecard.classList = 'tablecard';
    
        const content = `
        <span>${hour.day}</span>
        <span>${hour.open}</span>
        <span>${hour.close}</span>
        `
        tablecard.innerHTML += content;
        tablecards.appendChild(tablecard);
    });

    modifyDiv.appendChild(tablecards);

    modifyDiv.appendChild(addComponent(address));
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initLoad */ "./src/initLoad.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






let main = document.getElementById('main');

(function(){
    (0,_home__WEBPACK_IMPORTED_MODULE_3__.home)(main);
})();

const navigateTabs = (function()  {
    //cache DOM
    let homebtn = document.getElementById('homebtn');
    let contactbtn = document.getElementById('contactbtn');
    let menubtn = document.getElementById('menubtn');
    let navbuttons = document.querySelectorAll('#nav button');
    //add event listeners    
    navbuttons.forEach(el => el.addEventListener('click', changeTab));
    //methods
    function changeTab(e)   {
    console.log('changetab');
    clear_content(main);
    e.target.classList.add('clicked');
        switch(e.target.id) {
            case 'contactbtn':
                (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)(main);
                break;
            case 'menubtn':
                (0,_menu__WEBPACK_IMPORTED_MODULE_4__.menu)(main);
                break;
            default:
                (0,_home__WEBPACK_IMPORTED_MODULE_3__.home)(main);
        }
    }
    function clear_content(div) {
        div.replaceChildren();
        navbuttons.forEach(el => el.classList.remove('clicked'));
    }
})();


/***/ }),

/***/ "./src/initLoad.js":
/*!*************************!*\
  !*** ./src/initLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalLoad": () => (/* binding */ initalLoad)
/* harmony export */ });
/* harmony import */ var _linux_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linux.png */ "./src/linux.png");
/* harmony import */ var _static_footer_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/footer.html */ "./src/static/footer.html");
/* harmony import */ var _static_header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/header.html */ "./src/static/header.html");
/* harmony import */ var _static_nav_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/nav.html */ "./src/static/nav.html");





const initalLoad = (function() {
    console.log('initialLoad success');
    //cacheDOM
    let _content = document.getElementById('content');
    //create unique div elements and append
    const _header = addDiv('header');
    const _nav = addDiv('nav');
    const _main = addDiv('main');
    const _footer = addDiv('footer');
    //populate div elements with imported html
    _header.appendChild(addComponent(_static_header_html__WEBPACK_IMPORTED_MODULE_2__["default"]));
    _nav.appendChild(addComponent(_static_nav_html__WEBPACK_IMPORTED_MODULE_3__["default"]));
    // _header.appendChild(addImage(logo));
    _footer.appendChild(addComponent(_static_footer_html__WEBPACK_IMPORTED_MODULE_1__["default"]))
    //methods
    function addDiv(name)   {
        let newDiv = document.createElement('div');
        newDiv.id = name;
        _content.appendChild(newDiv);
        return newDiv;
    }
    function addComponent(str)    {
        const element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }
    function addImage(img)    {
        const _image = new Image();
        _image.src = img;
        return _image;
    }
    function addText(str)  {
        let _text = document.createTextNode(str);
        return _text;
    }
})();



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _linux_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linux.png */ "./src/linux.png");


const menu = function(modifyDiv)  {
    let header = `<h2>Menu</h2>`
    let filler = `<p>Odin's Eatery has an assortment of snacks, entrees, beverages and desserts.</p>`

    modifyDiv.appendChild(addComponent(header));
    modifyDiv.appendChild(addComponent(filler));

    function addComponent(str)    {
        const element = document.createElement('div');
        element.innerHTML = str;
        return element;
    }
    
    function addImage(img)    {
        const _image = new Image();
        _image.src = img;
        return _image;
    }

    const cards = document.createElement('div');
    cards.classList = 'cards';

    const menu = [{
        name: "Snack",
        type: "snack",
        description: "A light snack.",
        price: "$8"
    },  {
        name: "Entree",
        type: "entree",
        description: "A mouth-watering entree.",
        price: "$23"
    },  {
        name: "Beverage",
        type: "beverage",
        description: "A delicious beverage.",
        price: "$2"
    },  {
        name: "Dessert",
        type: "dessert",
        description: "A to-die-for dessert.",
        price: "$12"
    }];
    
    menu.forEach(el =>    {
        const card = document.createElement('div');
        card.classList = 'menucard';
    
        const content = `
        <h3>${el.name}</h3>
        <p>${el.description}</p>
        <img class='image' src=${_linux_png__WEBPACK_IMPORTED_MODULE_0__} alt='img'>
        <p>${el.price}</p>
        <p><button>Order ${el.name}</button></p>
        `
        card.innerHTML += content;
        cards.appendChild(card);
    });

    modifyDiv.appendChild(cards);
};



/***/ }),

/***/ "./src/linux.png":
/*!***********************!*\
  !*** ./src/linux.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07f08adeedaaa138287a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RhdGljL2Zvb3Rlci5odG1sIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RhdGljL2hlYWRlci5odG1sIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3RhdGljL21haW4uaHRtbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0YXRpYy9uYXYuaHRtbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdExvYWQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2xpbnV4LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiogICB7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCAgIHtcXG4gICAgLS1zZWN0aW9uQ29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG59XFxuXFxuI2NvbnRlbnQgICAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDEyMHB4IDFmciA2MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgICdoZWFkZXInXFxuICAgICAgICAnbmF2JyBcXG4gICAgICAgICdtYWluJyBcXG4gICAgICAgICdmb290ZXInO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cXG5cXG59XFxuXFxuI21haW4gICB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xcbn1cXG5cXG5oMSwgaDIsIGgzICB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbn1cXG5cXG4uY2FyZCwgLm1lbnVjYXJkICB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsMjVweCkgNTBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVjYXJkICAge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDI1cHgpIDUwcHggMjVweCA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5jYXJkcyAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7ICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggZ3JheTtcXG59XFxuXFxuI21haW4gYnV0dG9uICB7XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi50YWJsZWNhcmQgIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCByZXBlYXQoMiwgNzVweCk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFibGVjYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWJsZWNhcmQ6bnRoLWNoaWxkKDEpICAgIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNlbnRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI25hdiAgICB7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY3Rpb25Db2xvcik7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhciA+IGxpICB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI25hdiBidXR0b24gIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5jbGlja2VkICAgIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY2xpY2tlZDo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmltYWdlICAgIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHFHQUFxRztJQUNyRyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkM7Ozs7Z0JBSVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkJBQTJCOztBQUUvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsNERBQTREO0lBQzVELG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0RBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqICAge1xcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3QgICB7XFxuICAgIC0tc2VjdGlvbkNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxufVxcblxcbiNjb250ZW50ICAgIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxMjBweCAxZnIgNjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICAnaGVhZGVyJ1xcbiAgICAgICAgJ25hdicgXFxuICAgICAgICAnbWFpbicgXFxuICAgICAgICAnZm9vdGVyJztcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTZweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXFxuXFxufVxcblxcbiNtYWluICAge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG59XFxuXFxuaDEsIGgyLCBoMyAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cXG59XFxuXFxuLmNhcmQsIC5tZW51Y2FyZCAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLDI1cHgpIDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51Y2FyZCAgIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwyNXB4KSA1MHB4IDI1cHggNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uY2FyZHMgIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBncmlkLWF1dG8tcm93czogMWZyOyAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IGdyYXk7XFxufVxcblxcbiNtYWluIGJ1dHRvbiAge1xcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4udGFibGVjYXJkICB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggcmVwZWF0KDIsIDc1cHgpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYmxlY2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFibGVjYXJkOm50aC1jaGlsZCgxKSAgICB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXYgICAge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zZWN0aW9uQ29sb3IpO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXIgPiBsaSAge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNuYXYgYnV0dG9uICB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2IGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbn1cXG5cXG4uY2xpY2tlZCAgICB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmNsaWNrZWQ6OmFmdGVye1xcbiAgICBjb250ZW50OiB1cmwoLi9saW51eC5wbmcpO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5pbWFnZSAgICB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8c3Bhbj4mY29weSAyMDIyIEJvbWJyPC9zcGFuPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aDE+T2RpbidzIEZlYXN0ZXJ5PC9oMT5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiICAgIDxwPkh1bmdyeT8gT2RpbidzIEZlYXN0ZXJ5IGhhcyB5b3UgY292ZXJlZCEgU2F0aXNmeWluZyB0aGUgbW9zdCBnbHV0dG9uaW91cyBHb2RzIG9mIEFzZ2FyZCAoVGhvcikgd2hpbGUgbWFpbnRhaW5pbmcgYSB0b3VjaCBvZiBjbGFzcyB0aGF0IGV2ZW4gTG9raSB3b3VsZCBiZSBoYXJkIHByZXNzZWQgdG8gZW11bGF0ZS48L3A+PHA+Q29tZSBvbiBieSBhbmQgZmlsbCB5b3VyIHN0b21hY2ggd2l0aCB0aGF0IHdoYXQgdGhlIEdvZHMgZnVlbCB0aGVtc2VsdmVzIGJlZm9yZSBiYXR0bGUuPC9wPjxwPlRoZSBzY2VuZXJ5IGlzIGdyZWF0IChBcGhyb2RpdGVzIHBlcmZvcm1zIHJlZ3VsYXJseSkuPC9wPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCIgICAgPHVsIGNsYXNzPVxcXCJuYXZiYXJcXFwiPlxcbiAgICAgICAgPGxpPjxidXR0b24gaWQ9XFxcImhvbWVidG5cXFwiIGNsYXNzPVxcXCJjbGlja2VkXFxcIj5Ib21lPC9idXR0b24+PC9saT5cXG4gICAgICAgIDxsaT48YnV0dG9uIGlkPVxcXCJtZW51YnRuXFxcIj5NZW51PC9idXR0b24+PC9saT5cXG4gICAgICAgIDxsaT48YnV0dG9uIGlkPVxcXCJjb250YWN0YnRuXFxcIj5Db250YWN0PC9idXR0b24+PC9saT5cXG4gICAgPC91bD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhY3QgPSBmdW5jdGlvbihtb2RpZnlEaXYpICB7XG4gICAgbGV0IGhlYWRlciA9IGA8aDI+Q29udGFjdCBVczwvaDI+YFxuICAgIGxldCBmaWxsZXIgPSBgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIEJpYmVuZHVtIGF0IHZhcml1cyB2ZWwgcGhhcmV0cmEgdmVsIHR1cnBpcy4gTWV0dXMgdnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldC4gSWFjdWxpcyB1cm5hIGlkIHZvbHV0cGF0IGxhY3VzLiBOaWJoIHRlbGx1cyBtb2xlc3RpZSBudW5jIG5vbiBibGFuZGl0LiBFZ2VzdGFzIHRlbGx1cyBydXRydW0gdGVsbHVzIHBlbGxlbnRlc3F1ZSBldSB0aW5jaWR1bnQuIEVsZW1lbnR1bSBzYWdpdHRpcyB2aXRhZSBldCBsZW8gZHVpcyB1dCBkaWFtIHF1YW0uIEN1cnN1cyB2aXRhZSBjb25ndWUgbWF1cmlzIHJob25jdXMgYWVuZWFuLiBCbGFuZGl0IHR1cnBpcyBjdXJzdXMgaW4gaGFjLiBVbHRyaWNpZXMgbGVvIGludGVnZXIgbWFsZXN1YWRhIG51bmMgdmVsIHJpc3VzLiBDb21tb2RvIHVsbGFtY29ycGVyIGEgbGFjdXMgdmVzdGlidWx1bSBzZWQuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0IHF1aXNxdWUgc2FnaXR0aXMgcHVydXMgc2l0IGFtZXQuIFRpbmNpZHVudCBlZ2V0IG51bGxhbSBub24gbmlzaSBlc3Qgc2l0IGFtZXQuIE5lYyBmZXVnaWF0IG5pc2wgcHJldGl1bSBmdXNjZSBpZCB2ZWxpdCB1dCB0b3J0b3IgcHJldGl1bS48L3A+YFxuXG4gICAgbW9kaWZ5RGl2LmFwcGVuZENoaWxkKGFkZENvbXBvbmVudChoZWFkZXIpKTtcbiAgICBtb2RpZnlEaXYuYXBwZW5kQ2hpbGQoYWRkQ29tcG9uZW50KGZpbGxlcikpO1xuXG4gICAgZnVuY3Rpb24gYWRkQ29tcG9uZW50KHN0cikgICAge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRzLmNsYXNzTGlzdCA9ICdjYXJkcyc7XG5cbiAgICBjb25zdCBjb250YWN0cyA9IFt7XG4gICAgICAgIG5hbWU6IFwiSm9lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlYWQgQ2hlZlwiLFxuICAgICAgICBudW1iZXI6IFwiKDAxMiktMzQ1LTY3ODlcIlxuICAgIH0sICB7XG4gICAgICAgIG5hbWU6IFwiSmFuZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTb3VzIENoZWZcIixcbiAgICAgICAgbnVtYmVyOiBcIigwMTIpLTM0NS02Nzg5XCJcbiAgICB9LCAge1xuICAgICAgICBuYW1lOiBcIkFsZXhhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuc3dlcmluZyBNYWNoaW5lXCIsXG4gICAgICAgIG51bWJlcjogXCIoMDEyKS0zNDUtNjc4OVwiXG4gICAgfSwgIHtcbiAgICAgICAgbmFtZTogXCJTaXJpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpcnR1YWwgQXNzaXN0YW50XCIsXG4gICAgICAgIG51bWJlcjogXCIoMDEyLTM0NS02Nzg5KVwiXG4gICAgfV07XG4gICAgXG4gICAgY29udGFjdHMuZm9yRWFjaChjb250YWN0ID0+ICAgIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdCA9ICdjYXJkJztcbiAgICBcbiAgICAgICAgY29uc3QgY29udGVudCA9IGBcbiAgICAgICAgPGgzPiR7Y29udGFjdC5uYW1lfTwvaDM+XG4gICAgICAgIDxwPiR7Y29udGFjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxwPiR7Y29udGFjdC5udW1iZXJ9PC9wPlxuICAgICAgICA8cD48YnV0dG9uPkNvbnRhY3QgJHtjb250YWN0Lm5hbWV9PC9idXR0b24+PC9wPlxuICAgICAgICBgXG4gICAgICAgIGNhcmQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pO1xuXG4gICAgbW9kaWZ5RGl2LmFwcGVuZENoaWxkKGNhcmRzKTtcbn07XG5cbmV4cG9ydCB7Y29udGFjdH07IiwiaW1wb3J0IG1haW4gZnJvbSAnLi9zdGF0aWMvbWFpbi5odG1sJztcblxuY29uc3QgaG9tZSA9IGZ1bmN0aW9uKG1vZGlmeURpdikgIHtcbiAgICBsZXQgaGVhZGVyID0gYDxoMj5Ib21lPC9oMj5gXG4gICAgbGV0IGFkZHJlc3MgPSBgPGgzPkFkZHJlc3M8L2gzPjxwIGNsYXNzPSdjZW50ZXInPjEyMyBGYWtlIFN0cmVldCwgTWlkZGxlT2ZOb1doZXJlLCBNaWRkbGUgRWFydGg8L3A+YDtcblxuICAgIG1vZGlmeURpdi5hcHBlbmRDaGlsZChhZGRDb21wb25lbnQoaGVhZGVyKSk7XG4gICAgbW9kaWZ5RGl2LmFwcGVuZENoaWxkKGFkZENvbXBvbmVudChtYWluKSk7XG4gICAgZnVuY3Rpb24gYWRkQ29tcG9uZW50KHN0cikgICAge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBtb2RpZnlEaXYuYXBwZW5kQ2hpbGQoYWRkQ29tcG9uZW50KGA8aDM+SG91cnM8L2gzPmApKVxuICAgIGNvbnN0IHRhYmxlY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJsZWNhcmRzLmNsYXNzTGlzdCA9ICd0YWJsZWNhcmRzJztcblxuICAgIGNvbnN0IGhvdXJzID0gW3tcbiAgICAgICAgZGF5OiBcIkRheVwiLFxuICAgICAgICBvcGVuOiBcIk9wZW5cIixcbiAgICAgICAgY2xvc2U6IFwiQ2xvc2VcIixcbiAgICB9LCAgeyAgICBcbiAgICAgICAgZGF5OiBcIlN1bmRheVwiLFxuICAgICAgICBvcGVuOiBcIjlhbVwiLFxuICAgICAgICBjbG9zZTogXCIycG1cIlxuICAgIH0sICB7XG4gICAgICAgIGRheTogXCJNb25kYXlcIixcbiAgICAgICAgb3BlbjogXCI4YW1cIixcbiAgICAgICAgY2xvc2U6IFwiNXBtXCJcbiAgICB9LCAge1xuICAgICAgICBkYXk6IFwiVHVlc2RheVwiLFxuICAgICAgICBvcGVuOiBcIjhhbVwiLFxuICAgICAgICBjbG9zZTogXCI1cG1cIlxuICAgIH0sICB7XG4gICAgICAgIGRheTogXCJXZWRuZXNkYXlcIixcbiAgICAgICAgb3BlbjogXCJDbG9zZWRcIixcbiAgICAgICAgY2xvc2U6IFwiXCJcbiAgICB9LCAge1xuICAgICAgICBkYXk6IFwiVGh1cnNkYXlcIixcbiAgICAgICAgb3BlbjogXCI4YW1cIixcbiAgICAgICAgY2xvc2U6IFwiNXBtXCJcbiAgICB9LCAge1xuICAgICAgICBkYXk6IFwiRnJpZGF5XCIsXG4gICAgICAgIG9wZW46IFwiOGFtXCIsXG4gICAgICAgIGNsb3NlOiBcIjVwbVwiXG4gICAgfSwgIHtcbiAgICAgICAgZGF5OiBcIlNhdHVyZGF5XCIsXG4gICAgICAgIG9wZW46IFwiOWFtXCIsXG4gICAgICAgIGNsb3NlOiBcIjJwbVwiXG4gICAgfV07XG4gICAgXG4gICAgaG91cnMuZm9yRWFjaChob3VyID0+ICAgIHtcbiAgICAgICAgY29uc3QgdGFibGVjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYmxlY2FyZC5jbGFzc0xpc3QgPSAndGFibGVjYXJkJztcbiAgICBcbiAgICAgICAgY29uc3QgY29udGVudCA9IGBcbiAgICAgICAgPHNwYW4+JHtob3VyLmRheX08L3NwYW4+XG4gICAgICAgIDxzcGFuPiR7aG91ci5vcGVufTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JHtob3VyLmNsb3NlfTwvc3Bhbj5cbiAgICAgICAgYFxuICAgICAgICB0YWJsZWNhcmQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICAgIHRhYmxlY2FyZHMuYXBwZW5kQ2hpbGQodGFibGVjYXJkKTtcbiAgICB9KTtcblxuICAgIG1vZGlmeURpdi5hcHBlbmRDaGlsZCh0YWJsZWNhcmRzKTtcblxuICAgIG1vZGlmeURpdi5hcHBlbmRDaGlsZChhZGRDb21wb25lbnQoYWRkcmVzcykpO1xufTtcblxuZXhwb3J0IHtob21lfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aW5pdExvYWR9IGZyb20gJy4vaW5pdExvYWQnO1xuaW1wb3J0IHtjb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHtob21lfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHttZW51fSBmcm9tIFwiLi9tZW51XCI7XG5cbmxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcblxuKGZ1bmN0aW9uKCl7XG4gICAgaG9tZShtYWluKTtcbn0pKCk7XG5cbmNvbnN0IG5hdmlnYXRlVGFicyA9IChmdW5jdGlvbigpICB7XG4gICAgLy9jYWNoZSBET01cbiAgICBsZXQgaG9tZWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lYnRuJyk7XG4gICAgbGV0IGNvbnRhY3RidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdGJ0bicpO1xuICAgIGxldCBtZW51YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVidG4nKTtcbiAgICBsZXQgbmF2YnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNuYXYgYnV0dG9uJyk7XG4gICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzICAgIFxuICAgIG5hdmJ1dHRvbnMuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRhYikpO1xuICAgIC8vbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGNoYW5nZVRhYihlKSAgIHtcbiAgICBjb25zb2xlLmxvZygnY2hhbmdldGFiJyk7XG4gICAgY2xlYXJfY29udGVudChtYWluKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIHN3aXRjaChlLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgY2FzZSAnY29udGFjdGJ0bic6XG4gICAgICAgICAgICAgICAgY29udGFjdChtYWluKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lbnVidG4nOlxuICAgICAgICAgICAgICAgIG1lbnUobWFpbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGhvbWUobWFpbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJfY29udGVudChkaXYpIHtcbiAgICAgICAgZGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICBuYXZidXR0b25zLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpKTtcbiAgICB9XG59KSgpO1xuIiwiaW1wb3J0IGxvZ28gZnJvbSAnLi9saW51eC5wbmcnO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL3N0YXRpYy9mb290ZXIuaHRtbCc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vc3RhdGljL2hlYWRlci5odG1sJztcbmltcG9ydCBuYXYgZnJvbSAnLi9zdGF0aWMvbmF2Lmh0bWwnO1xuXG5jb25zdCBpbml0YWxMb2FkID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdpbml0aWFsTG9hZCBzdWNjZXNzJyk7XG4gICAgLy9jYWNoZURPTVxuICAgIGxldCBfY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgLy9jcmVhdGUgdW5pcXVlIGRpdiBlbGVtZW50cyBhbmQgYXBwZW5kXG4gICAgY29uc3QgX2hlYWRlciA9IGFkZERpdignaGVhZGVyJyk7XG4gICAgY29uc3QgX25hdiA9IGFkZERpdignbmF2Jyk7XG4gICAgY29uc3QgX21haW4gPSBhZGREaXYoJ21haW4nKTtcbiAgICBjb25zdCBfZm9vdGVyID0gYWRkRGl2KCdmb290ZXInKTtcbiAgICAvL3BvcHVsYXRlIGRpdiBlbGVtZW50cyB3aXRoIGltcG9ydGVkIGh0bWxcbiAgICBfaGVhZGVyLmFwcGVuZENoaWxkKGFkZENvbXBvbmVudChoZWFkZXIpKTtcbiAgICBfbmF2LmFwcGVuZENoaWxkKGFkZENvbXBvbmVudChuYXYpKTtcbiAgICAvLyBfaGVhZGVyLmFwcGVuZENoaWxkKGFkZEltYWdlKGxvZ28pKTtcbiAgICBfZm9vdGVyLmFwcGVuZENoaWxkKGFkZENvbXBvbmVudChmb290ZXIpKVxuICAgIC8vbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGFkZERpdihuYW1lKSAgIHtcbiAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdEaXYuaWQgPSBuYW1lO1xuICAgICAgICBfY29udGVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICByZXR1cm4gbmV3RGl2O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDb21wb25lbnQoc3RyKSAgICB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBzdHI7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRJbWFnZShpbWcpICAgIHtcbiAgICAgICAgY29uc3QgX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIF9pbWFnZS5zcmMgPSBpbWc7XG4gICAgICAgIHJldHVybiBfaW1hZ2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFRleHQoc3RyKSAge1xuICAgICAgICBsZXQgX3RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHIpO1xuICAgICAgICByZXR1cm4gX3RleHQ7XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHtpbml0YWxMb2FkfTsiLCJpbXBvcnQgbG9nbyBmcm9tICcuL2xpbnV4LnBuZyc7XG5cbmNvbnN0IG1lbnUgPSBmdW5jdGlvbihtb2RpZnlEaXYpICB7XG4gICAgbGV0IGhlYWRlciA9IGA8aDI+TWVudTwvaDI+YFxuICAgIGxldCBmaWxsZXIgPSBgPHA+T2RpbidzIEVhdGVyeSBoYXMgYW4gYXNzb3J0bWVudCBvZiBzbmFja3MsIGVudHJlZXMsIGJldmVyYWdlcyBhbmQgZGVzc2VydHMuPC9wPmBcblxuICAgIG1vZGlmeURpdi5hcHBlbmRDaGlsZChhZGRDb21wb25lbnQoaGVhZGVyKSk7XG4gICAgbW9kaWZ5RGl2LmFwcGVuZENoaWxkKGFkZENvbXBvbmVudChmaWxsZXIpKTtcblxuICAgIGZ1bmN0aW9uIGFkZENvbXBvbmVudChzdHIpICAgIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHN0cjtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZEltYWdlKGltZykgICAge1xuICAgICAgICBjb25zdCBfaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgX2ltYWdlLnNyYyA9IGltZztcbiAgICAgICAgcmV0dXJuIF9pbWFnZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRzLmNsYXNzTGlzdCA9ICdjYXJkcyc7XG5cbiAgICBjb25zdCBtZW51ID0gW3tcbiAgICAgICAgbmFtZTogXCJTbmFja1wiLFxuICAgICAgICB0eXBlOiBcInNuYWNrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgbGlnaHQgc25hY2suXCIsXG4gICAgICAgIHByaWNlOiBcIiQ4XCJcbiAgICB9LCAge1xuICAgICAgICBuYW1lOiBcIkVudHJlZVwiLFxuICAgICAgICB0eXBlOiBcImVudHJlZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIG1vdXRoLXdhdGVyaW5nIGVudHJlZS5cIixcbiAgICAgICAgcHJpY2U6IFwiJDIzXCJcbiAgICB9LCAge1xuICAgICAgICBuYW1lOiBcIkJldmVyYWdlXCIsXG4gICAgICAgIHR5cGU6IFwiYmV2ZXJhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBkZWxpY2lvdXMgYmV2ZXJhZ2UuXCIsXG4gICAgICAgIHByaWNlOiBcIiQyXCJcbiAgICB9LCAge1xuICAgICAgICBuYW1lOiBcIkRlc3NlcnRcIixcbiAgICAgICAgdHlwZTogXCJkZXNzZXJ0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgdG8tZGllLWZvciBkZXNzZXJ0LlwiLFxuICAgICAgICBwcmljZTogXCIkMTJcIlxuICAgIH1dO1xuICAgIFxuICAgIG1lbnUuZm9yRWFjaChlbCA9PiAgICB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QgPSAnbWVudWNhcmQnO1xuICAgIFxuICAgICAgICBjb25zdCBjb250ZW50ID0gYFxuICAgICAgICA8aDM+JHtlbC5uYW1lfTwvaDM+XG4gICAgICAgIDxwPiR7ZWwuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8aW1nIGNsYXNzPSdpbWFnZScgc3JjPSR7bG9nb30gYWx0PSdpbWcnPlxuICAgICAgICA8cD4ke2VsLnByaWNlfTwvcD5cbiAgICAgICAgPHA+PGJ1dHRvbj5PcmRlciAke2VsLm5hbWV9PC9idXR0b24+PC9wPlxuICAgICAgICBgXG4gICAgICAgIGNhcmQuaW5uZXJIVE1MICs9IGNvbnRlbnQ7XG4gICAgICAgIGNhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pO1xuXG4gICAgbW9kaWZ5RGl2LmFwcGVuZENoaWxkKGNhcmRzKTtcbn07XG5cbmV4cG9ydCB7bWVudX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9