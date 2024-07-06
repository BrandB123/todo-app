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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: rgb(0, 0, 0, 0%);\n}\n\nbody{\n    background-color: black;\n}\n\n.header{\n    text-align: center;\n    font-size: 36px;\n    padding: 15px;\n    color: #fff;\n}\n\n.main-container{\n    display: grid;\n    grid-template: 1fr 15fr / 100%;\n    height: 90vh;\n}\n\n.project-list{\n    display: flex;\n    font-size: 16px;\n    gap: 10px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.project-list-item{\n    flex: 1 1 auto;\n    padding: 12px 0 0 0;\n    background-color: rgb(0, 0, 0, 0%);\n    color: #fff;\n    border: 2px solid #fff;\n    border-radius: 10px;\n    text-align: center;\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n}\n\n\n.todo-container{\n    display: grid;\n    grid-template: 100% / 1fr 4fr;\n    padding: 10px;\n    gap: 10px;\n    color: #fff;\n}\n\n.todo-list{\n    display: grid;\n    grid-template: repeat(auto-fit, 50px) / 1fr;\n    gap: 10px;\n}\n\n.todo-list-item{\n    padding: 15px 0px;\n    text-align: center;\n    color: #fff;\n    border: 2px solid #fff;\n    border-radius: 10px;\n    background-color: rgb(0, 0, 0, 0%);\n    font-size: 16px;\n}\n\n.todo-list-item.active, .project-list-item.active{\n    background-color: #333;\n}\n\n.todo-description{\n    display: grid;\n    grid-template: 95% 5% / 1fr 1fr;\n    grid-template-areas: \n        \"description-text description-text\"\n        \"edit-button delete-button\";\n    border: 2px solid #fff;\n    border-radius: 10px;\n    padding: 20px 20px 10px 30px;\n}\n\n.description-text{\n    grid-area: description-text;\n}\n\n.edit-button{\n    grid-area: edit-button;\n    width: 25px;\n    height: 25px;\n    border: none;\n}\n\n.delete-button{\n    grid-area: delete-button;\n    margin-left: auto;\n    width: 25px;\n    height: 25px;\n    border: none;\n}\n\npath{\n    fill: #ccc;\n}\n\n.todo-edit{\n    position: fixed;\n    left: 30%;\n    width: 40%;\n    border: 1px solid black;\n    box-shadow: 0 0 10vw 30vw rgb(0, 0, 0, 40%);\n    color: #fff;\n    background-color: #222;\n    visibility: hidden;\n    padding: 0 20px;\n    border-radius: 5px;\n    display: grid;\n    align-items: center;\n    grid-template: 1fr 1fr 1fr 1fr/ 2fr 3fr;\n    grid-template-areas: \n        \"edit-property select-input\"\n        \"edit-content edit-content\"\n        \"textarea-input textarea-input\"\n        \"edit-submit edit-submit\";\n    font-size: 20px;\n}\n\n.edit-property{\n    grid-area: edit-property;\n}\n\nselect{\n    grid-area: select-input;\n    height: 30px;\n    color: #fff;\n    font-size: 16px;\n    padding-left: 5px;\n}\n\n.edit-content{\n    grid-area: edit-content;\n}\n\n.edit-textarea{\n    grid-area: textarea-input;\n    padding: 5px;\n    font-size: 16px;\n    color: #fff;\n}\n\n.edit-submit{\n    grid-area: edit-submit;\n    color: white;\n    height: 30px;\n    width: 30%;\n    border-radius: 10px;\n    margin: auto;\n    background-color: #333;\n}\n\n.edit-close{\n    position: absolute;\n    border-top-right-radius: 5px;\n    color: #ccc;\n    top: 0px;\n    right: 0px;\n    height: 25px;\n    width: 25px;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 1px solid #222;\n    border-left: 1px solid #222;\n}\n\n.todo-add{\n    position: fixed;\n    left: 30%;\n    width: 40%;\n    box-shadow: 0 0 10vw 30vw rgb(0, 0, 0, 40%);\n    color: #fff;\n    background-color: #222;\n    visibility: hidden;\n    padding: 5px 15px 5px;\n    border-radius: 5px;\n    display: grid;\n    align-items: center;\n    grid-template: 1fr 1fr 1fr 3fr 1fr/ 1fr;\n    grid-template-areas: \n        \"add-title\"\n        \"add-title-input\"\n        \"add-description\"\n        \"add-textarea\"\n        \"add-submit\";\n    font-size: 20px;\n}\n\n.add-title{\n    grid-area: add-title;\n}\n\n.add-title-input{\n    grid-area: add-title-input;\n    height: 30px;\n    border: 1.5px solid #888;\n    padding-left: 5px;\n    color: #fff;\n}\n\n.add-description{\n    grid-area: add-description;\n}\n\n.add-textarea{\n    grid-area: add-textarea;\n    padding: 5px;\n    font-size: 16px;\n    border: 1.5px solid #888;\n    color: #fff;\n}\n\n.add-close{\n    position: absolute;\n    border-top-right-radius: 5px;\n    color: #ccc;\n    top: 0px;\n    right: 0px;\n    height: 25px;\n    width: 25px;\n    border-top: 0;\n    border-right: 0;\n    border-bottom: 1px solid #222;\n    border-left: 1px solid #222;\n}\n\n.add-submit{\n    grid-area: add-submit;\n    color: white;\n    height: 30px;\n    width: 30%;\n    border-radius: 10px;\n    margin: auto;\n    background-color: #333;\n}\n\n::placeholder{\n    color: #ccc;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMController.js":
/*!******************************!*\
  !*** ./src/DOMController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMController: () => (/* binding */ DOMController)\n/* harmony export */ });\n//import { projectList } from \"./projectList\";\n\nlet DOMController = (projectArrayObject) => {\n\n    function displayProjects(listOfProjects) {    \n        let projectListDiv = document.querySelector(\".project-list\");\n        projectListDiv.textContent = \"\";\n        listOfProjects.ProjectArray.forEach((project) => {\n            let listOfProjectsItem = document.createElement(\"button\");\n            project.status === true ? listOfProjectsItem.classList.add(\"project-list-item\", \"active\") : listOfProjectsItem.classList.add(\"project-list-item\");\n            listOfProjectsItem.textContent = project.title;\n            projectListDiv.appendChild(listOfProjectsItem);\n\n            listOfProjectsItem.addEventListener(\"mouseover\", (event) => {\n                event.target.style.backgroundColor = \"#333\";\n            });\n            listOfProjectsItem.addEventListener(\"mouseout\", (event) => {\n                project.status === true ? event.target.style.backgroundColor = \"#333\" : event.target.style.backgroundColor = \"#000\";\n            });\n        })\n    }\n\n    displayProjects(projectArrayObject);\n\n    function displayProjectItems(listOfProjects){    \n        let projectListItemsDiv = document.querySelector(\".todo-list\");\n        projectListItemsDiv.textContent = \"\";\n        listOfProjects.ProjectArray.forEach((project) => {\n                if (project.status === true){\n                    project.todoItems.forEach((item) => {\n                        if (item.title !== \"+\"){\n                            let ProjectTodoItem = document.createElement(\"button\");\n                            item.status === true ? ProjectTodoItem.classList.add(\"todo-list-item\", \"active\") : ProjectTodoItem.classList.add(\"todo-list-item\");\n                            ProjectTodoItem.textContent = item.title;\n                            projectListItemsDiv.appendChild(ProjectTodoItem); \n                            ProjectTodoItem.addEventListener(\"mouseover\", (event) => {\n                                event.target.style.backgroundColor = \"#333\";\n                            }); \n                            ProjectTodoItem.addEventListener(\"mouseout\", (event) => {\n                                item.status === true ? event.target.style.backgroundColor = \"#333\" : event.target.style.backgroundColor = \"#000\";\n                            });\n                        };\n                    });\n                    let AddingTodoItem = document.createElement(\"button\");\n                    project.todoItems[0].status === true ? AddingTodoItem.classList.add(\"todo-list-item\", \"active\", \"add-button\") : AddingTodoItem.classList.add(\"todo-list-item\", \"add-button\");\n                    AddingTodoItem.textContent = project.todoItems[0].title;\n                    projectListItemsDiv.appendChild(AddingTodoItem);\n                    AddingTodoItem.addEventListener(\"mouseover\", (event) => {\n                        event.target.style.backgroundColor = \"#222\";\n                    });\n                    AddingTodoItem.addEventListener(\"mouseout\", (event) => {\n                        event.target.style.backgroundColor = \"#000\";\n                    });\n                    const addButton = document.querySelector(\".add-button\");\n                    const addForm = document.querySelector(\".todo-add\");    \n                    addButton.addEventListener(\"click\", () => {\n                        addForm.style.visibility = \"visible\";\n                    });\n                };\n        });\n    }\n    displayProjectItems(projectArrayObject);\n\n\n    function displayTodoItemDescription(listOfProjects){\n        listOfProjects.ProjectArray.forEach((project) => {\n            if (project.status === true){\n                project.todoItems.forEach((item) => {\n                    let editButton = document.querySelector(\".edit-button\");\n                    let deleteButton = document.querySelector(\".delete-button\");\n                    if (item.status === true){\n                        let activeDescription = document.querySelector(\".description-text\");\n                        // activeDescription.textContent = item.description\n                        activeDescription.innerHTML = item.description;\n\n                        editButton.style.visibility = \"visible\";\n                        deleteButton.style.visibility = \"visible\";\n                    }\n                    if (item.title === \"+\"){\n                        editButton.style.visibility = \"hidden\";\n                        deleteButton.style.visibility = \"hidden\";\n                    }\n                });\n            }\n        });\n    }\n\n    displayTodoItemDescription(projectArrayObject);\n\n\n    return {DOMController}\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/DOMController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList.js */ \"./src/projectList.js\");\n/* harmony import */ var _projectCreator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectCreator.js */ \"./src/projectCreator.js\");\n/* harmony import */ var _DOMController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMController.js */ \"./src/DOMController.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\n\n\n\n// create an array for projects to be stored in\nconst Projects = (0,_projectList_js__WEBPACK_IMPORTED_MODULE_1__.projectList)();\nconst STORAGE = (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.storageHandling)();\n\n\n// add preset projects to the Projects array\nlet firstProject = (0,_projectCreator_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"Today\");\nProjects.addProject(firstProject);\nlet secondProject = (0,_projectCreator_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"This Week\");\nProjects.addProject(secondProject);\nlet thirdProject = (0,_projectCreator_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"This Month\");\nProjects.addProject(thirdProject);\n\n\n// add todo items to projects\nif (localStorage.length > 0){\n    STORAGE.getStoragePairs(Projects.ProjectArray);\n}\n\n\n// DISPLAY CONTENT ON LOAD\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    Projects.ProjectArray[0].status = true;\n    if (Projects.ProjectArray[0].todoItems[1]){\n        Projects.ProjectArray[0].todoItems[1].status = true;\n    } else {\n        Projects.ProjectArray[0].todoItems[0].status = true;\n    }\n    (0,_DOMController_js__WEBPACK_IMPORTED_MODULE_3__.DOMController)(Projects)\n});\n\n\n// DISPLAY ON CLICKING A PROJECT\nconst ProjectsListDiv = document.querySelector(\".project-list\");\nProjectsListDiv.addEventListener(\"click\", (event) => {\n    let target = event.target.textContent;\n    Projects.ProjectArray.forEach((project) => {\n        project.title === target ? project.status = true : project.status = false;\n        project.todoItems.forEach((item) => {item.status = false});\n        project.todoItems[1] ? project.todoItems[1].status = true : project.todoItems[0].status = true;\n    });\n    (0,_DOMController_js__WEBPACK_IMPORTED_MODULE_3__.DOMController)(Projects);\n});\n\n\n// DISPLAY ON CLICKING A TODO ITEM\nconst todoListDiv = document.querySelector(\".todo-list\");\ntodoListDiv.addEventListener(\"click\", (event) => {\n    let target = event.target.textContent;\n    Projects.ProjectArray.forEach((project) => {\n        if (project.status === true){\n            project.todoItems.forEach((item) => {\n                item.title === target ? item.status = true : item.status = false;\n            })\n        }\n    });\n    (0,_DOMController_js__WEBPACK_IMPORTED_MODULE_3__.DOMController)(Projects);\n});\n\n\n// DISPLAY ON ADD TODO ITEM\nconst addForm = document.querySelector(\".todo-add\");\nconst addSubmit = document.querySelector(\".add-submit\");\nconst closeAddForm = document.querySelector(\".add-close\");\n\naddSubmit.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    let titleInput = document.querySelector(\".add-title-input\");\n    let descriptionInput = document.querySelector(\".add-textarea\");\n\n    let addTitle = titleInput.value;\n\n    let addDescription = descriptionInput.value;\n    addDescription = addDescription.split(\"\\n\");\n    addDescription = addDescription.join('</br>');\n\n    Projects.ProjectArray.forEach((project) => {\n        if (project.status === true) {\n            project.createItem(addTitle, addDescription)\n            project.todoItems[0].status = false;\n            project.todoItems[1].status = true;\n        }\n    });\n    titleInput.value = \"\";\n    descriptionInput.value = \"\";\n    addForm.style.visibility = \"hidden\";\n    (0,_DOMController_js__WEBPACK_IMPORTED_MODULE_3__.DOMController)(Projects);\n    STORAGE.setStoragePairs(Projects.ProjectArray);\n});\n\n        \ncloseAddForm.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    addForm.style.visibility = \"hidden\";\n    Projects.ProjectArray[0].todoItems[0].status = false;\n    Projects.ProjectArray[0].todoItems[1].status = true;\n    (0,_DOMController_js__WEBPACK_IMPORTED_MODULE_3__.DOMController)(Projects);\n});\n\n\n// DISPLAY ON DELETE TODO ITEM\nconst deleteButton = document.querySelector(\".delete-button\");\n\ndeleteButton.addEventListener(\"click\", () => {\n    Projects.ProjectArray.forEach((project) => {\n        if (project.status === true){\n            project.todoItems.forEach((item) => {\n                if (item.status === true){\n                    project.deleteItem(item.title)\n                }\n            })\n        } \n    });\n    (0,_DOMController_js__WEBPACK_IMPORTED_MODULE_3__.DOMController)(Projects);\n    localStorage.clear();\n    STORAGE.setStoragePairs(Projects.ProjectArray);\n})\n\n\n// DISPLAY ON EDIT TODO ITEM\nconst editButton = document.querySelector(\".edit-button\");\nconst editForm = document.querySelector(\".todo-edit\");\neditButton.addEventListener(\"click\", () => {\n    editForm.style.visibility = \"visible\";\n    editSubmit.addEventListener(\"click\", editFormSubmit);\n});\n\nconst editSubmit = document.querySelector(\".edit-submit\");\n\nfunction editFormSubmit(event){\n    event.preventDefault();\n\tlet editSelect = document.querySelector(\".edit-select\");\n\tlet textareaInput = document.querySelector(\".edit-textarea\");\n\n\tProjects.ProjectArray.forEach((project) => {\n\t    if (project.status === true){\n\t\t    project.todoItems.forEach((item) => {\n\t\t        if (item.status === true){\n                    let itemProperty = editSelect.value.toLowerCase();\n                    let editTextArea = textareaInput.value;\n                    editTextArea = editTextArea.split(\"\\n\");\n                    editTextArea = editTextArea.join('</br>');\n                    project.editItem(item.title, itemProperty, editTextArea);\n                }\n\t        });\n        };\n    });\n    textareaInput.value = \"\";\n    editForm.style.visibility = \"hidden\";\n\t(0,_DOMController_js__WEBPACK_IMPORTED_MODULE_3__.DOMController)(Projects);\n    STORAGE.setStoragePairs(Projects.ProjectArray);\n    editSubmit.removeEventListener(\"click\", editFormSubmit);\n};\n\nconst closeEditForm = document.querySelector(\".edit-close\");\ncloseEditForm.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    editForm.style.visibility = \"hidden\";\n});\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/projectCreator.js":
/*!*******************************!*\
  !*** ./src/projectCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\nlet createProject =  (projectName) => {\n    let title = projectName;\n    let status = false;\n    let todoItems = [{title: \"+\", description: \"\", status: false}];\n    let createItem = (title, description) => {\n        let item = {title, description, status : \"false\"};\n        todoItems.push(item);\n    }\n    let editItem = (itemTitle, property, content) => {\n        todoItems.map((item) => {\n            if (item.title === itemTitle){\n                item[property] = content;\n            }\n        });\n    }\n    let deleteItem = (itemTitle) => {\n        let itemTitles = todoItems.map((item) => item.title);\n        if (itemTitles.includes(itemTitle)){\n            let index = itemTitles.indexOf(itemTitle);\n            todoItems.splice(index, 1);\n            todoItems[1] !== undefined ? todoItems[1].status = true : todoItems[0].status = true;\n            }\n    }\n    return {title, status, todoItems, createItem, editItem, deleteItem}\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/projectCreator.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\nlet projectList = () => {\n    let ProjectArray = [];\n    let addProject = (projectObject) => ProjectArray.push(projectObject);\n    let deleteProject = (projectTitle) => {\n        let projectTitles = ProjectArray.map((project) => project.title);\n        if (projectTitles.includes(projectTitle)){\n            let index = projectTitles.indexOf(projectTitle);\n            ProjectArray.splice(index, 1);\n        }\n    }\n    return {ProjectArray, addProject, deleteProject}\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/projectList.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   storageHandling: () => (/* binding */ storageHandling)\n/* harmony export */ });\nlet storageHandling = () => {\n    // check if localStorage is compatible and set up localStorage on window\n\n    // SET UP LOCALSTORAGE\n    let setStoragePairs = (projectArray) => {\n        projectArray.forEach((project) => {\n            let storageKey = `project${projectArray.indexOf(project)}`;\n            let storageValue;\n            if (project.todoItems.length < 2){\n                storageValue = ['none']\n            } else {\n                let todoItems = project.todoItems.reduce(function(accumulator, currentTodoObject,) {\n                    let title = currentTodoObject.title\n                    let description  = currentTodoObject.description\n                    accumulator.push({title, description});\n                    return accumulator\n                }, []);\n                storageValue = JSON.stringify(todoItems)\n            }\n            localStorage.setItem(storageKey, storageValue)\n        });\n    }\n\n    // GET DATA FROM LOCALSTORAGE\n    let getStoragePairs = (projectArray) => {\n        projectArray.forEach((project) => {\n            let storageProjectValue = localStorage.getItem(`project${projectArray.indexOf(project)}`);\n            if (storageProjectValue !== \"none\"){\n                let projectObject = JSON.parse(storageProjectValue);\n                projectObject.forEach((object) => {\n                    if (object.title !== \"+\"){\n                        project.createItem(object.title, object.description);\n                    };\n                });\n            };\n        }); \n    }\n\n    return {setStoragePairs, getStoragePairs}\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/storage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;