"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst register = ()=>{\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Bk\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hello@gmail.com\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hello\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // console.table({ name, email, password });\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(`http://localhost:8000/api/register`, {\n            name,\n            email,\n            password\n        });\n        console.log(\"Axios POST => \", data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center bg-primary square\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/brunosantos/Documents/WebDev/udemy/lms-udemy/client/pages/register.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-2\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value)\n                            ,\n                            placeholder: \"enter Name\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/brunosantos/Documents/WebDev/udemy/lms-udemy/client/pages/register.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-2\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value)\n                            ,\n                            placeholder: \"enter email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/brunosantos/Documents/WebDev/udemy/lms-udemy/client/pages/register.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-2\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                            ,\n                            placeholder: \"enter password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/brunosantos/Documents/WebDev/udemy/lms-udemy/client/pages/register.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary pt-1 mb-4\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brunosantos/Documents/WebDev/udemy/lms-udemy/client/pages/register.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/brunosantos/Documents/WebDev/udemy/lms-udemy/client/pages/register.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/brunosantos/Documents/WebDev/udemy/lms-udemy/client/pages/register.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNQO0FBRXpCLEtBQUssQ0FBQ0UsUUFBUSxPQUFTLENBQUM7SUFDdEIsS0FBSyxNQUFFQyxJQUFJLE1BQUVDLE9BQU8sTUFBSUosK0NBQVEsQ0FBQyxDQUFJO0lBQ3JDLEtBQUssTUFBRUssS0FBSyxNQUFFQyxRQUFRLE1BQUlOLCtDQUFRLENBQUMsQ0FBaUI7SUFDcEQsS0FBSyxNQUFFTyxRQUFRLE1BQUVDLFdBQVcsTUFBSVIsK0NBQVEsQ0FBQyxDQUFPO0lBRWhELEtBQUssQ0FBQ1MsWUFBWSxVQUFVQyxDQUFDLEdBQUssQ0FBQztRQUNqQ0EsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCLEVBQTRDO1FBRTVDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDWCxpREFBVSxFQUFFLGtDQUFrQyxHQUFHLENBQUM7WUFDdkVFLElBQUk7WUFDSkUsS0FBSztZQUNMRSxRQUFRO1FBQ1YsQ0FBQztRQUNETyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQixpQkFBRUgsSUFBSTtJQUNwQyxDQUFDO0lBRUQsTUFBTTs7d0ZBRURJLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5QzswQkFBQyxDQUFROzs7Ozs7d0ZBRS9EQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBcUM7c0dBQ2pERSxDQUFJO29CQUFDQyxRQUFRLEVBQUVYLFlBQVk7O29HQUN6QlksQ0FBSzs0QkFDSkMsSUFBSSxFQUFDLENBQU07NEJBQ1hMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLEtBQUssRUFBRXBCLElBQUk7NEJBQ1hxQixRQUFRLEdBQUdkLENBQUMsR0FBS04sT0FBTyxDQUFDTSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQ3ZDRyxXQUFXLEVBQUMsQ0FBWTs0QkFDeEJDLFFBQVE7Ozs7OztvR0FHVE4sQ0FBSzs0QkFDSkMsSUFBSSxFQUFDLENBQU87NEJBQ1pMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLEtBQUssRUFBRWxCLEtBQUs7NEJBQ1ptQixRQUFRLEdBQUdkLENBQUMsR0FBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQ3hDRyxXQUFXLEVBQUMsQ0FBYTs0QkFDekJDLFFBQVE7Ozs7OztvR0FHVE4sQ0FBSzs0QkFDSkMsSUFBSSxFQUFDLENBQVU7NEJBQ2ZMLFNBQVMsRUFBQyxDQUF1Qjs0QkFDakNNLEtBQUssRUFBRWhCLFFBQVE7NEJBQ2ZpQixRQUFRLEdBQUdkLENBQUMsR0FBS0YsV0FBVyxDQUFDRSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQzNDRyxXQUFXLEVBQUMsQ0FBZ0I7NEJBQzVCQyxRQUFROzs7Ozs7b0dBR1RDLENBQU07NEJBQUNOLElBQUksRUFBQyxDQUFROzRCQUFDTCxTQUFTLEVBQUMsQ0FBMkI7c0NBQUMsQ0FFNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0FBRUQsaUVBQWVmLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiQmtcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJoZWxsb0BnbWFpbC5jb21cIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJoZWxsb1wiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyYCwge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJBeGlvcyBQT1NUID0+IFwiLCBkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwianVtYm90cm9uIHRleHQtY2VudGVyIGJnLXByaW1hcnkgc3F1YXJlXCI+UmVnaXN0ZXI8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNCBvZmZzZXQtbWQtNCBwYi01XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC0yXCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgTmFtZVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTJcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGVtYWlsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtMlwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB0LTEgbWItNFwiPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();