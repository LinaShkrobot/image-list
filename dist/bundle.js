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

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Api: () => (/* binding */ Api)\n/* harmony export */ });\nclass Api {\n  constructor() {\n    this.BaseUrl = 'http://localhost:3000/';\n  }\n\n  request(options) {\n    return fetch(`${this.BaseUrl}${options.path}`, {\n      method: options.method,\n      body: options.body,\n    }).then((r) =>\n      r[options.returnType]()\n    );\n  }\n\n  // getList() {\n  //   return fetch(`${this.BaseUrl}/images`).then((r) => r.json());\n  // }\n\n  getList() {\n    return this.request({\n      path:'images',\n      returnType:'json',\n    });\n  };\n\n\n  // uploadFile = (file) => {\n  //   const formData = new FormData();\n  //   formData.append('file', file);\n  //   return fetch(`${this.BaseUrl}/images/upload`, {\n  //     method: 'POST',\n  //     body: formData,\n  //   }).then((r) => r.text());\n  // };\n\n  uploadFile = (file) => {\n    const formData = new FormData();\n    formData.append('file', file);\n    return this.request({\n      method: 'POST',\n      body: formData,\n      returnType: 'text',\n      path: 'images/upload',\n    });\n  };\n\n  // downloadImage = (fileName) => {\n  //   return fetch(`${this.BaseUrl}/images/${fileName}`).then((r) => r.blob());\n  // };\n\n  downloadImage = (fileName) => {\n    return this.request({\n      path:`images/${fileName}`,\n      returnType:'blob',\n    });\n  };  \n}\n\n\n//# sourceURL=webpack://imagelist/./src/api/index.js?");

/***/ }),

/***/ "./src/components/downloadForm.js":
/*!****************************************!*\
  !*** ./src/components/downloadForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DownloadForm: () => (/* binding */ DownloadForm)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/observer.js\");\n\n\nclass DownloadForm {\n  constructor(node, api) {\n    this.node = node;\n    this.api = api;\n    this.input = node.querySelector('.form_text');\n    this.node.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const fileName = this.input.value;\n      this.api.downloadImage(fileName)\n      .then(file => {\n        const url = URL.createObjectURL(file);\n        const link = document.createElement('a');\n        link.href = url;\n        link.download = file.name;\n        link.click();\n        URL.revokeObjectURL(url);\n      })\n    })\n\n     _observer__WEBPACK_IMPORTED_MODULE_0__.observer.on('listClick', this.changeText);\n  }\n\n  changeText = (fileName) => {\n    this.input.value = fileName;\n  }\n}\n\n\n//# sourceURL=webpack://imagelist/./src/components/downloadForm.js?");

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   List: () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/observer.js\");\n\n\nclass List {\n  constructor(node, api) {\n    this.node = node;\n    this.api = api;\n    _observer__WEBPACK_IMPORTED_MODULE_0__.observer.on('fileUploaded', this.updateList);\n    this.node.addEventListener('click', (e) => {\n      const fileName = e.target.textContent;\n      _observer__WEBPACK_IMPORTED_MODULE_0__.observer.fire('listClick', fileName);\n    });\n    this.updateList();\n  }\n\n  updateList = () => {\n    this.api.getList().then((list) => {\n      this.renderList(list);\n    });\n  };\n\n  renderList = (list) => {\n    this.node.innerHTML = '';\n    list.forEach((item) => {\n      const listItem = document.createElement('li');\n      listItem.textContent = item;\n      this.node.appendChild(listItem);\n    });\n  };\n\n  // getList = () => {\n  //   return fetch('http://localhost:3000/images').then((r) => r.json());\n  // };\n}\n\n\n//# sourceURL=webpack://imagelist/./src/components/list.js?");

/***/ }),

/***/ "./src/components/mainImage.js":
/*!*************************************!*\
  !*** ./src/components/mainImage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainImage: () => (/* binding */ MainImage)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/observer.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\n\nclass MainImage {\n  constructor(node, api) {\n    this.node = node;\n    this.api = api;\n    _observer__WEBPACK_IMPORTED_MODULE_0__.observer.on('listClick', this.renderImage);\n  }\n\n  renderImage = (fileName) => {\n    this.node.src = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.imagePathResolve)(fileName);\n  };\n}\n\n\n//# sourceURL=webpack://imagelist/./src/components/mainImage.js?");

/***/ }),

/***/ "./src/components/uploadForm.js":
/*!**************************************!*\
  !*** ./src/components/uploadForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UploadForm: () => (/* binding */ UploadForm)\n/* harmony export */ });\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer */ \"./src/observer.js\");\n\n\nclass UploadForm {\n  constructor(node, api) {\n    this.node = node;\n    this.api = api;\n    this.node.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const file = e.target.sampleFile.files[0];\n      this.api.uploadFile(file).then((r) => {\n        _observer__WEBPACK_IMPORTED_MODULE_0__.observer.fire('fileUploaded');\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://imagelist/./src/components/uploadForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/list */ \"./src/components/list.js\");\n/* harmony import */ var _components_mainImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainImage */ \"./src/components/mainImage.js\");\n/* harmony import */ var _components_uploadForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/uploadForm */ \"./src/components/uploadForm.js\");\n/* harmony import */ var _components_downloadForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/downloadForm */ \"./src/components/downloadForm.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n\n\n\n\n\n\nconst listNode = document.querySelector('.sidebar_list');\nconst imageNode = document.querySelector('.imageDisplay');\nconst uploadNode = document.querySelector('.uploadForm');\nconst downloadNode = document.querySelector('.downloadForm');\n\nconst api = new _api__WEBPACK_IMPORTED_MODULE_4__.Api();\n\nnew _components_list__WEBPACK_IMPORTED_MODULE_0__.List(listNode, api);\nnew _components_mainImage__WEBPACK_IMPORTED_MODULE_1__.MainImage(imageNode, api);\nnew _components_uploadForm__WEBPACK_IMPORTED_MODULE_2__.UploadForm(uploadNode, api);\nnew _components_downloadForm__WEBPACK_IMPORTED_MODULE_3__.DownloadForm(downloadNode, api);\n\n\n//# sourceURL=webpack://imagelist/./src/index.js?");

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   observer: () => (/* binding */ observer)\n/* harmony export */ });\nclass Observer {\n  constructor() {\n    this.callbacks = {};\n  }\n\n  on(type, cb) {\n    if (!this.callbacks[type]) {\n      this.callbacks[type] = [];\n    }\n    this.callbacks[type].push(cb);\n  }\n\n  fire(type, data) {\n    const callbacks = this.callbacks[type];\n    if (callbacks) {\n      callbacks.forEach((cb) => cb(data));\n    }\n  }\n}\n\nconst observer = new Observer();\n\n\n//# sourceURL=webpack://imagelist/./src/observer.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   imagePathResolve: () => (/* binding */ imagePathResolve)\n/* harmony export */ });\nconst imagePathResolve = (imageName) =>\n  `http://localhost:3000/images/${imageName}`;\n\n\n//# sourceURL=webpack://imagelist/./src/utils/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;