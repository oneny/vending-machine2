/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Resets */\\nbody,\\nheader,\\nh1,\\nh2,\\nh3,\\nmain,\\nsection,\\nul,\\nli,\\nbutton,\\ndiv,\\ninput,\\nspan,\\nstrong {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nh1,\\nh2,\\nh3,\\nstrong {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\nli {\\n  list-style-type: none;\\n}\\n\\n/* PC, 모바일용으로 사용된 이미지 내에서 의미있는 텍스트의 대체텍스트를 제공할 떄 */\\n.ir {\\n  display: block;\\n  overflow: hidden;\\n  font-size: 1px;\\n  line-height: 0;\\n  text-indent: -9999px;\\n  color: transparent;\\n}\\n\\n/* Componenets */\\nbody {\\n  background-color: #eae8fe;\\n  font-family: \\\"Noto Sans KR\\\", sans-serif;\\n  font-weight: 500;\\n}\\n\\n.tit-header {\\n  margin-bottom: 67px;\\n}\\n\\n.tit-header .tit-img {\\n  max-width: 386px;\\n  height: 180px;\\n  margin: 0 auto;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n/* Commons */\\n/* 거스름돈 반환 & 입금 & 획득 버튼 */\\n.btn-balance,\\n.btn-credit,\\n.btn-get {\\n  width: 94px;\\n  padding: 6px 9px;\\n  border: none;\\n  background: #ffffff;\\n  box-shadow: 0 0 3px rgb(0 0 0 / 50%);\\n  font-family: \\\"Noto Sans KR\\\", sans-serif;\\n  font-size: 13px;\\n  line-height: 19px;\\n  color: #000;\\n  border-radius: 5px;\\n  margin-left: 12px;\\n  cursor: pointer;\\n}\\n\\n/* Content */\\n.cont-main {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n/* Vending-machine Section */\\n.cont-main .vending-machine {\\n  position: relative;\\n  padding: 30px 27px;\\n  margin-right: 28px; /* 자판기 화면과 나의 정보 화면 간격 */\\n  background-color: #fff;\\n}\\n\\n.cont-main .vending-machine .btn-left,\\n.cont-main .vending-machine .btn-right {\\n  position: absolute;\\n  top: 28.5%;\\n  left: 5px;\\n  font-size: 14px;\\n  border: none;\\n  padding: 5px;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\\n.cont-main .vending-machine .btn-right {\\n  left: unset;\\n  right: 5px;\\n}\\n\\n/* 음료수 목록 */\\n.vending-machine .cont-lists {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 12px;\\n  margin-bottom: 20px;\\n}\\n\\n.cont-lists li .btn-item.sold-out {\\n  pointer-events: none;\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n.cont-lists li .btn-item.sold-out::after {\\n  content: \\\" \\\";\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n\\n.cont-lists li .btn-item.sold-out .img-soldOut {\\n  width: 70%;\\n  height: 70%;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 10;\\n}\\n\\n.cont-lists li .btn-item {\\n  width: 100%;\\n  padding: 8.5px 0;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  border-radius: 10px;\\n  background-color: #fff;\\n  box-shadow: 0px 0px 4px rgb(0 0 0 / 50%);\\n  cursor: pointer;\\n  transition: box-shadow 0.3s;\\n}\\n\\n.vending-machine .cont-lists .btn-item:hover {\\n  box-shadow: 0px 0px 0px 3px #6327fe;\\n}\\n\\n.cont-lists .btn-item .img-item {\\n  width: 36px;\\n  height: 65px;\\n  margin-bottom: 6px;\\n}\\n\\n.cont-lists .btn-item .txt-name {\\n  font-size: 9px;\\n  font-weight: 500;\\n  line-height: 13px;\\n  margin-bottom: 7px;\\n}\\n\\n.cont-lists .btn-item .txt-price {\\n  width: 70px;\\n  padding: 5px 15px;\\n  font-size: 12px;\\n  line-height: 100%;\\n  color: #fff;\\n  background-color: #6327fe;\\n  border-radius: 50px;\\n}\\n\\n.cont-lists .btn-item .txt-price::after {\\n  content: \\\"원\\\";\\n}\\n\\n/* 잔액 & 거스름돈 */\\n.vending-machine .cont-balance,\\n.vending-machine .cont-credit {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 11px;\\n}\\n\\n.vending-machine .cont-balance .info-balance {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  flex-grow: 1;\\n  height: 33px;\\n  background-color: #eae8fe;\\n  padding: 6px 10px;\\n  font-size: 14px;\\n  line-height: 20px;\\n  border-radius: 5px;\\n}\\n\\n.cont-balance .info-balance .txt-balance::after {\\n  content: \\\" 원\\\";\\n}\\n\\n/* 입금 */\\n.vending-machine .cont-credit .inp-credit {\\n  flex-grow: 1;\\n  height: 33px;\\n  padding: 5px;\\n  background-color: #fff;\\n  border: 1px solid #bdbdbd;\\n  border-radius: 5px;\\n  font-size: 13px;\\n  line-height: 19px;\\n}\\n\\n.vending-machine .cont-credit .inp-credit::placeholder {\\n  color: #bdbdbd;\\n}\\n\\n/* 카트 */\\n.vending-machine .cont-cart {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.vending-machine .cont-cart .list-cart {\\n  width: 200px; /* flex-grow로 늘리고 싶지만 오른쪽 수량이 absolute라 겹쳐진다 */\\n  height: 106px;\\n  background-color: #eae8fe;\\n  border: 1px solid #bdbdbd;\\n  border-radius: 5px;\\n  overflow: auto;\\n  padding: 12px 18px 12px 12px;\\n}\\n\\n.cont-cart .list-cart li .btn-cart {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  height: 46px;\\n  background-color: #fff;\\n  border: 1px solid #bdbdbd;\\n  cursor: pointer;\\n  overflow: hidden;\\n  position: relative;\\n  border-radius: 5px;\\n}\\n\\n.cont-cart .list-cart li + li {\\n  margin-top: 6px;\\n}\\n\\n.list-cart li .btn-cart > img {\\n  width: 18px;\\n  height: 33px;\\n  margin: 0 10px;\\n}\\n\\n.list-cart li .btn-cart .txt-cartName {\\n  font-size: 9px;\\n  font-weight: 500;\\n  line-height: 13px;\\n  color: #333;\\n}\\n\\n.list-cart li .btn-cart .txt-cartPrice {\\n  position: absolute;\\n  top: 50%;\\n  right: 8px;\\n  font-size: 14px;\\n  line-height: 20px;\\n  transform: translateY(-50%);\\n  padding: 4px 11px 6px;\\n  border: 1px solid #bdbdbd;\\n  border-radius: 5px;\\n}\\n\\n/* 획득 버튼 */\\n.vending-machine .cont-cart .btn-get {\\n  height: 106px;\\n  background-color: #6327fe;\\n  color: #fff;\\n}\\n\\n/* My-info Section */\\n.my-info .cont-mymoney {\\n  background-color: #fff;\\n  padding: 9px 27px;\\n  margin-bottom: 20px;\\n}\\n\\n/* 소지금 */\\n.my-info .cont-mymoney .btn-mymoney {\\n  width: 306px;\\n  background-color: #eae8fe;\\n  padding: 6px 10px;\\n  border-radius: 5px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 14px;\\n  line-height: 20px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.cont-mymoney .btn-mymoney .txt-mymoney::after {\\n  content: \\\" 원\\\";\\n}\\n\\n.my-info .cont-myBeverage {\\n  background-color: #fff;\\n  text-align: center;\\n  padding: 25px 27px 31px;\\n}\\n\\n/* 횓득한 음료 제목 */\\n.my-info .cont-myBeverage .tit-myCola {\\n  font-size: 14px;\\n  font-weight: 700;\\n  margin-bottom: 13px;\\n}\\n\\n/* 내 음료 목록 */\\n.my-info .cont-myBeverage .cont-myColaList {\\n  height: 364px;\\n  padding: 12px 18px 12px 12px;\\n  background-color: #eae8fe;\\n  border-radius: 5px;\\n  border: 1px solid #bdbdbd;\\n  margin-bottom: 6px;\\n  overflow: auto;\\n}\\n\\n.cont-myBeverage .cont-myColaList .item-myCola {\\n  display: flex;\\n  align-items: center;\\n  background-color: #fff;\\n  padding: 6px 10px 7px;\\n  position: relative;\\n  border-radius: 5px;\\n}\\n\\n.cont-myBeverage .cont-myColaList .item-myCola + .item-myCola {\\n  margin-top: 12px;\\n}\\n\\n.cont-myColaList .item-myCola .img-myCola {\\n  width: 18px;\\n  height: 33px;\\n  margin-right: 10px;\\n}\\n\\n.cont-myColaList .item-myCola .txt-myColaName {\\n  font-size: 9px;\\n  line-height: 13px;\\n  color: #333;\\n  font-weight: 500;\\n}\\n\\n.cont-myColaList .item-myCola .txt-myColaQuantity {\\n  padding: 4px 11px 6px;\\n  border: 1px solid #bdbdbd;\\n  border-radius: 5px;\\n  position: absolute;\\n  top: 50%;\\n  right: 8px;\\n  transform: translateY(-50%);\\n}\\n\\n/* 내가 산 음료가격 */\\n.my-info .cont-myBeverage .cont-totalPrice {\\n  text-align: right;\\n  font-size: 12px;\\n  line-height: 17px;\\n}\\n\\n@media screen and (max-width: 767px) {\\n  body {\\n    background-color: #fff;\\n  }\\n\\n  .tit-header {\\n    margin-bottom: 18px;\\n  }\\n\\n  .tit-header .tit-img {\\n    width: calc(166px * 2);\\n    height: calc(71px * 2);\\n  }\\n\\n  .cont-main {\\n    margin: 0 60px;\\n    flex-direction: column;\\n  }\\n\\n  .cont-main .vending-machine {\\n    margin-right: 0;\\n  }\\n\\n  .vending-machine .cont-cart .list-cart {\\n    flex-grow: 1;\\n  }\\n\\n  .my-info .cont-mymoney .btn-mymoney {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 500px) {\\n  .cont-main {\\n    margin: 0 20px;\\n  }\\n}\\n\\n@media screen and (max-width: 360px) {\\n  .tit-header .tit-img {\\n    width: 166px;\\n    height: 71px;\\n  }\\n\\n  .cont-main .vending-machine {\\n    padding: 0 27px;\\n    margin-bottom: 11px;\\n  }\\n\\n  .cont-main {\\n    margin: 0;\\n  }\\n\\n  .cont-lists .btn-item .img-item {\\n    width: 36px;\\n    height: 65px;\\n  }\\n\\n  .my-info .cont-myBeverage {\\n    padding: 11px 27px 43px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vending-machine2/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vending-machine2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://vending-machine2/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://vending-machine2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://vending-machine2/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vending-machine2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://vending-machine2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://vending-machine2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://vending-machine2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://vending-machine2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://vending-machine2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/dummy/cartList.js":
/*!**********************************!*\
  !*** ./src/js/dummy/cartList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n  {\n    // id\n    colaId: \"abcd1004\",\n    name: \"Original_Cola\",\n    price: 1000,\n    quantity: 1,\n    source: \"./src/img/beverageImg/Original_Cola.png\",\n  },\n  {\n    // id\n    colaId: \"npiq9284\",\n    name: \"Green_Cola\",\n    price: 1500,\n    quantity: 2,\n    source: \"./src/img/beverageImg/Green_Cola.png\",\n  },\n]);\n\n//# sourceURL=webpack://vending-machine2/./src/js/dummy/cartList.js?");

/***/ }),

/***/ "./src/js/dummy/cola.js":
/*!******************************!*\
  !*** ./src/js/dummy/cola.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n  {\n    id: \"abcd1004\",\n    name: \"Original_Cola\",\n    price: 1000,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Original_Cola.png\",\n  },\n  {\n    id: \"bcds3294\",\n    name: \"Violet_Cola\",\n    price: 1000,\n    quantity: 0,\n    source: \"./src/img/beverageImg/Violet_Cola.png\",\n  },\n  {\n    id: \"sfei9013\",\n    name: \"Yellow_Cola\",\n    price: 1500,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Yellow_Cola.png\",\n  },\n  {\n    id: \"hdok3920\",\n    name: \"Cool_Cola\",\n    price: 2000,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Cool_Cola.png\",\n  },\n  {\n    id: \"npiq9284\",\n    name: \"Green_Cola\",\n    price: 1500,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Green_Cola.png\",\n  },\n  {\n    id: \"zmit5821\",\n    name: \"Orange_Cola\",\n    price: 1000,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Orange_Cola.png\",\n  },\n  {\n    id: \"ssvw8433\",\n    name: \"Yellow_Cola2\",\n    price: 1500,\n    quantity: 0,\n    source: \"./src/img/beverageImg/Yellow_Cola.png\",\n  },\n  {\n    id: \"kwsdk0435\",\n    name: \"Cool_Cola2\",\n    price: 3000,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Cool_Cola.png\",\n  },\n  {\n    id: \"9kjd3l9j\",\n    name: \"Violet_Cola2\",\n    price: 4000,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Violet_Cola.png\",\n  },\n  {\n    id: \"l0j2m0\",\n    name: \"Original_Cola2\",\n    price: 5000,\n    quantity: 10,\n    source: \"./src/img/beverageImg/Original_Cola.png\",\n  },\n]);\n\n\n//# sourceURL=webpack://vending-machine2/./src/js/dummy/cola.js?");

/***/ }),

/***/ "./src/js/dummy/myColaList.js":
/*!************************************!*\
  !*** ./src/js/dummy/myColaList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n  {\n    // id\n    colaId: \"abcd1004\",\n    name: \"Original_Cola\",\n    price: 1000,\n    quantity: 1,\n    source: \"./src/img/beverageImg/Original_Cola.png\",\n  },\n  {\n    // id\n    colaId: \"npiq9284\",\n    name: \"Green_Cola\",\n    price: 1500,\n    quantity: 1,\n    source: \"./src/img/beverageImg/Green_Cola.png\",\n  },\n  {\n    // id\n    colaId: \"zmit5821\",\n    name: \"Orange_Cola\",\n    price: 1000,\n    quantity: 1,\n    source: \"./src/img/beverageImg/Orange_Cola.png\",\n  },\n  {\n    // id\n    colaId: \"bcds3294\",\n    name: \"Violet_Cola\",\n    price: 1000,\n    quantity: 5,\n    source: \"./src/img/beverageImg/Violet_Cola.png\",\n  },\n]);\n\n//# sourceURL=webpack://vending-machine2/./src/js/dummy/myColaList.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dummy_cola_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy/cola.js */ \"./src/js/dummy/cola.js\");\n/* harmony import */ var _dummy_cartList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dummy/cartList.js */ \"./src/js/dummy/cartList.js\");\n/* harmony import */ var _dummy_myColaList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dummy/myColaList.js */ \"./src/js/dummy/myColaList.js\");\n/* harmony import */ var _utils_toKRW_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/toKRW.js */ \"./src/js/utils/toKRW.js\");\n/* harmony import */ var _utils_toNum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/toNum.js */ \"./src/js/utils/toNum.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/style.css */ \"./src/style/style.css\");\n\n\n\n\n\n\n\nconst state = {\n  cola: _dummy_cola_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  cartList: _dummy_cartList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  myColaList: _dummy_myColaList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  myOwnMoney: 0, // 소지금\n  myBalance: 0, // 잔액\n  currentPage: 0,\n};\n\nconst contListsEl = document.querySelector(\".cont-lists\");\nconst listCartEl = document.querySelector(\".list-cart\");\nconst contMyColaList = document.querySelector(\".cont-myColaList\");\nconst btnGetEl = document.querySelector(\".btn-get\");\nconst btnMyMoneyEl = document.querySelector(\".btn-mymoney\");\nconst txtMyMoneyEl = document.querySelector(\".txt-mymoney\");\nconst txtBalanceEl = document.querySelector(\".txt-balance\");\nconst inpCreditEl = document.querySelector(\".inp-credit\");\nconst btnCreditEl = document.querySelector(\".btn-credit\");\nconst btnBalanceEl = document.querySelector(\".btn-balance\");\nconst btnLeftEl = document.querySelector(\".btn-left\");\nconst btnRightEl = document.querySelector(\".btn-right\");\n\n// 자판기 콜라 렌더링\nfunction renderColaList(colas) {\n  removeChildNodes(contListsEl);\n\n  for (let i = state.currentPage * 6; i < state.currentPage * 6 + 6; i++) {\n    const el = colas[i];\n    if (!el) break;\n\n    const colaItem = document.createElement(\"li\");\n\n    const colaBtn = document.createElement(\"button\");\n    colaBtn.classList.add(\"btn-item\");\n    colaBtn.addEventListener(\"click\", addCartItem(el));\n    colaItem.appendChild(colaBtn);\n\n    const colaImg = document.createElement(\"img\");\n    colaImg.setAttribute(\"src\", el.source);\n    colaImg.classList.add(\"img-item\");\n\n    const colaName = document.createElement(\"strong\");\n    colaName.classList.add(\"txt-name\");\n    colaName.textContent = el.name;\n\n    const colaPrice = document.createElement(\"span\");\n    colaPrice.classList.add(\"txt-price\");\n    colaPrice.textContent = el.price;\n\n    colaBtn.append(colaImg, colaName, colaPrice);\n\n    // 품절 시 이미지 요소 추가 및 버튼 클릭 불가\n    if (el.quantity <= 0) {\n      const soldOutImg = document.createElement(\"img\");\n      soldOutImg.setAttribute(\"src\", \"./src/img/beverageImg/Sold-out.png\");\n      soldOutImg.setAttribute(\"alt\", \"품절\");\n      colaBtn.classList.add(\"sold-out\");\n      soldOutImg.classList.add(\"img-soldOut\");\n      colaBtn.appendChild(soldOutImg);\n      colaBtn.setAttribute(\"disabled\", \"\");\n    }\n\n    contListsEl.appendChild(colaItem);\n  }\n}\n\n// 카트 리스트 렌더링\nfunction renderCartList(cartItems) {\n  removeChildNodes(listCartEl);\n\n  cartItems.forEach((el) => {\n    const cartItem = document.createElement(\"li\");\n\n    const cartItemBtn = document.createElement(\"button\");\n    cartItemBtn.classList.add(\"btn-cart\");\n    cartItemBtn.addEventListener(\"click\", reduceCartItemQuantity(el));\n    cartItem.appendChild(cartItemBtn);\n\n    const cartItemImg = document.createElement(\"img\");\n    cartItemImg.setAttribute(\"src\", el.source);\n    cartItemImg.classList.add(\"img-cart\");\n\n    const cartItemName = document.createElement(\"strong\");\n    cartItemName.classList.add(\"txt-cartName\");\n    cartItemName.textContent = el.name;\n\n    const cartItemQuantity = document.createElement(\"span\");\n    cartItemQuantity.classList.add(\"txt-cartPrice\");\n    cartItemQuantity.textContent = el.quantity;\n\n    cartItemBtn.append(cartItemImg, cartItemName, cartItemQuantity);\n\n    listCartEl.appendChild(cartItem);\n  });\n}\n\n// 획득한 음료 리스트 렌더링\nfunction renderMyColaList(myColas) {\n  removeChildNodes(contMyColaList);\n\n  myColas.forEach((el) => {\n    const myColaItem = document.createElement(\"li\");\n    myColaItem.classList.add(\"item-myCola\");\n\n    const myColaItemImg = document.createElement(\"img\");\n    myColaItemImg.setAttribute(\"src\", el.source);\n    myColaItemImg.classList.add(\"img-myCola\");\n\n    const myColaItemName = document.createElement(\"strong\");\n    myColaItemName.classList.add(\"txt-myColaName\");\n    myColaItemName.textContent = el.name;\n\n    const myColaItemQuantity = document.createElement(\"span\");\n    myColaItemQuantity.classList.add(\"txt-myColaQuantity\");\n    myColaItemQuantity.textContent = el.quantity;\n\n    myColaItem.append(myColaItemImg, myColaItemName, myColaItemQuantity);\n\n    contMyColaList.appendChild(myColaItem);\n  });\n}\n\n// ---------------------------------------------------------------------------\n// 콜라 음료수 버튼 이벤트 추가\nfunction addCartItem(el) {\n  return function () {\n    const itemInCart = searchCartItemId(el.id);\n\n    if (itemInCart) {\n      itemInCart.quantity += 1;\n    } else {\n      const { id, name, price, source, alt } = el;\n      state.cartList.push({\n        colaId: id,\n        name,\n        price,\n        quantity: 1,\n        source,\n        alt,\n      });\n    }\n    el.quantity -= 1;\n\n    renderColaList(state.cola);\n    renderCartList(state.cartList);\n  };\n}\n\n// 카트 음료수 수량 이벤트 추가\nfunction reduceCartItemQuantity(el) {\n  return function () {\n    const cola = searchColaItemId(el.colaId);\n    cola.quantity += 1;\n    el.quantity -= 1;\n\n    if (el.quantity <= 0) {\n      state.cartList = state.cartList.filter((v) => v.colaId !== el.colaId);\n    }\n\n    renderColaList(state.cola);\n    renderCartList(state.cartList);\n  };\n}\n\n// 콜라 획득 이벤트 추가\nfunction getCola() {\n  let totalPrice = 0;\n  state.cartList.forEach((item) => {\n    totalPrice = totalPrice + item.quantity * item.price;\n  });\n  if (totalPrice > txtBalanceEl.textContent) return alert(\"잔액이 부족합니다.\");\n\n  state.cartList.forEach((myCola) => {\n    const itemInMyCola = searchMyColaId(myCola.colaId);\n    if (itemInMyCola) {\n      itemInMyCola.quantity += myCola.quantity;\n    } else {\n      const { colaId, name, price, source } = myCola;\n      state.myColaList.push({\n        colaId,\n        name,\n        price,\n        source,\n        quantity: myCola.quantity,\n      });\n    }\n  });\n\n  txtBalanceEl.textContent = (0,_utils_toKRW_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n    (0,_utils_toNum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(txtBalanceEl.textContent) - totalPrice\n  );\n  state.cartList = []; // 카트 비우기\n  renderCartList(state.cartList);\n  renderMyColaList(state.myColaList);\n}\n\n// 소지금 입력하기\nfunction inputMyOwnMoney() {\n  let myMoney = prompt(\"소지금을 입력해주세요.\");\n\n  while (true) {\n    // 문자가 들어있는 경우\n    if (isNaN(myMoney) && myMoney !== null) {\n      alert(\"금액을 입력해주세요.\");\n      myMoney = prompt(\"소지금을 입력해주세요.\");\n      continue;\n    }\n\n    // 취소를 눌렀을 경우\n    if (myMoney === null || myMoney.length === 0)\n      return (myMoney = txtMyMoneyEl.textContent);\n    break;\n  }\n\n  txtMyMoneyEl.textContent = (0,_utils_toKRW_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(myMoney);\n}\n\n// 입금하기\nfunction deposit() {\n  const myMoney = (0,_utils_toNum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(txtMyMoneyEl.textContent);\n  const myBalance = (0,_utils_toNum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(txtBalanceEl.textContent);\n  let inpMoney = inpCreditEl.value;\n\n  if (inpMoney.length <= 0 || isNaN(inpMoney)) {\n    alert(\"금액을 입력해주세요.\");\n    return (inpMoney = \"\");\n  }\n\n  if (inpMoney > myMoney) {\n    const result = confirm(\n      \"소지금이 부족합니다. 소지금을 입력 및 수정하시겠습니까?\"\n    );\n    if (result) return inputMyOwnMoney();\n    else return;\n  }\n  txtBalanceEl.textContent = (0,_utils_toKRW_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(myBalance + parseInt(inpMoney, 10));\n  txtMyMoneyEl.textContent = (0,_utils_toKRW_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(myMoney - inpMoney);\n  inpCreditEl.value = \"\";\n}\n\n// 거스름돈 반환\nfunction getMyBalance() {\n  const myBalance = (0,_utils_toNum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(txtBalanceEl.textContent);\n\n  if (myBalance === 0) return;\n\n  const myMoney = (0,_utils_toNum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(txtMyMoneyEl.textContent);\n  txtBalanceEl.textContent = \"0\";\n  txtMyMoneyEl.textContent = (0,_utils_toKRW_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(myBalance + myMoney);\n}\n\nfunction countUp() {\n  state.currentPage += 1;\n  if (state.currentPage > Math.floor(state.cola.length / 6))\n    state.currentPage = 0;\n  renderColaList(state.cola);\n}\n\nfunction countDown() {\n  state.currentPage -= 1;\n  if (state.currentPage < 0)\n    state.currentPage = Math.floor(state.cola.length / 6);\n  renderColaList(state.cola);\n}\n\n// ---------------------------------------------------------------------------\n\n// 자판기 음료id 찾기\nfunction searchColaItemId(id) {\n  return state.cola.find((v) => v.id === id);\n}\n\n// 카트 음료id 찾기\nfunction searchCartItemId(id) {\n  return state.cartList.find((v) => v.colaId === id);\n}\n\n// 획득한 음료id 찾기\nfunction searchMyColaId(id) {\n  return state.myColaList.find((v) => v.colaId === id);\n}\n\n// 자식요소들 제거\nfunction removeChildNodes(el) {\n  while (el.hasChildNodes()) {\n    el.removeChild(el.firstChild);\n  }\n}\n\n// ---------------------------------------------------------------------------\n\nfunction init() {\n  renderColaList(state.cola);\n  renderCartList(state.cartList);\n  renderMyColaList(state.myColaList);\n  btnGetEl.addEventListener(\"click\", getCola);\n  btnMyMoneyEl.addEventListener(\"click\", inputMyOwnMoney);\n  btnCreditEl.addEventListener(\"click\", deposit);\n  inpCreditEl.addEventListener(\"keyup\", (e) => {\n    if (e.keyCode === 13) deposit();\n  });\n  btnBalanceEl.addEventListener(\"click\", getMyBalance);\n  btnRightEl.addEventListener(\"click\", countUp);\n  btnLeftEl.addEventListener(\"click\", countDown);\n}\n\ninit();\n\n\n//# sourceURL=webpack://vending-machine2/./src/js/main.js?");

/***/ }),

/***/ "./src/js/utils/toKRW.js":
/*!*******************************!*\
  !*** ./src/js/utils/toKRW.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeChildNodes\": () => (/* binding */ removeChildNodes),\n/* harmony export */   \"toNum\": () => (/* binding */ toNum)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(num) {\n  if (num.length <= 3) return num;\n\n  let result = \"\";\n  num = num.toString();\n  for (let i = 0; i < num.length; i++) {\n\n    if (i % 3 === 0 && i !== 0) {\n      result = num[num.length - i - 1] + \",\" + result;\n      continue;\n    }\n\n    result = num[num.length - i - 1] + result; \n  }\n  \n  return result;\n};\n\nconst toNum = (str) => {\n  return parseInt(str.split(\" \")[0].split(\",\").join(\"\"), 10);\n}\n\nconst removeChildNodes = (el) => {\n  while (el.hasChildNodes()) {\n    el.removeChild(el.firstChild);\n  }\n}\n\n//# sourceURL=webpack://vending-machine2/./src/js/utils/toKRW.js?");

/***/ }),

/***/ "./src/js/utils/toNum.js":
/*!*******************************!*\
  !*** ./src/js/utils/toNum.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(str) {\n  return parseInt(str.split(\",\").join(\"\"), 10);\n}\n\n//# sourceURL=webpack://vending-machine2/./src/js/utils/toNum.js?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c556d9cc72692fb56b7c.png\";\n\n//# sourceURL=webpack://vending-machine2/./src/img/logo.png?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;