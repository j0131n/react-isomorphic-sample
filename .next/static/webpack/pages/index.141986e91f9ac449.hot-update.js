"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Chat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const socketInstance = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"http://localhost:3000\");\n        socketInstance.emit(\"init\", \"Socket initialized\");\n        setSocket(socketInstance);\n        return ()=>socketInstance.close();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket) {\n            socket.on(\"chat_message\", (message)=>{\n                setMessages((prevMessages)=>[\n                        ...prevMessages,\n                        message\n                    ]);\n            });\n        }\n    }, [\n        socket\n    ]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (input.trim() !== \"\") {\n            const message = {\n                text: input.trim(),\n                timestamp: Date.now()\n            };\n            socket.emit(\"chat_message\", message);\n            setInput(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Sample App\"\n            }, void 0, false, {\n                fileName: \"/home/d3v/devbox/personal/react-isomorphic-sample/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"[\",\n                            new Date(message.timestamp).toLocaleTimeString(),\n                            \"] \",\n                            message.text\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/d3v/devbox/personal/react-isomorphic-sample/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/d3v/devbox/personal/react-isomorphic-sample/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: input,\n                        onChange: (e)=>setInput(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/d3v/devbox/personal/react-isomorphic-sample/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/home/d3v/devbox/personal/react-isomorphic-sample/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/d3v/devbox/personal/react-isomorphic-sample/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/d3v/devbox/personal/react-isomorphic-sample/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"f5eJ7jhgflLOMDfL8Z8avO2eu4w=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUNqQjtBQUVsQyxNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVUsaUJBQWlCUiw0REFBRUEsQ0FBQztRQUMxQlEsZUFBZUMsSUFBSSxDQUFDLFFBQVE7UUFDNUJGLFVBQVVDO1FBRVYsT0FBTyxJQUFNQSxlQUFlRSxLQUFLO0lBQ25DLEdBQUcsRUFBRTtJQUVMWixnREFBU0EsQ0FBQztRQUNSLElBQUlRLFFBQVE7WUFDVkEsT0FBT0ssRUFBRSxDQUFDLGdCQUFnQixDQUFDQztnQkFDekJULFlBQVksQ0FBQ1UsZUFBaUI7MkJBQUlBO3dCQUFjRDtxQkFBUTtZQUMxRDtRQUNGO0lBQ0YsR0FBRztRQUFDTjtLQUFPO0lBRVgsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJWixNQUFNYSxJQUFJLE9BQU8sSUFBSTtZQUN2QixNQUFNTCxVQUFVO2dCQUNkTSxNQUFNZCxNQUFNYSxJQUFJO2dCQUNoQkUsV0FBV0MsS0FBS0MsR0FBRztZQUNyQjtZQUVBZixPQUFPRyxJQUFJLENBQUMsZ0JBQWdCRztZQUU1QlAsU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBRUd0QixTQUFTdUIsR0FBRyxDQUFDLENBQUNiLFNBQVNjLHNCQUNyQiw4REFBQ0M7OzRCQUFlOzRCQUNaLElBQUlQLEtBQUtSLFFBQVFPLFNBQVMsRUFBRVMsa0JBQWtCOzRCQUFHOzRCQUFHaEIsUUFBUU0sSUFBSTs7dUJBRDNEUTs7Ozs7Ozs7OzswQkFNZiw4REFBQ0c7Z0JBQUtDLFVBQVVoQjs7a0NBQ2QsOERBQUNWO3dCQUNDMkIsTUFBSzt3QkFDTEMsT0FBTzVCO3dCQUNQNkIsVUFBVSxDQUFDbEIsSUFBTVYsU0FBU1UsRUFBRW1CLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUUxQyw4REFBQ0c7d0JBQU9KLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXpETTlCO0tBQUFBO0FBMkROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IENoYXQgPSAoKSA9PiB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc29ja2V0SW5zdGFuY2UgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDAwJyk7XG4gICAgc29ja2V0SW5zdGFuY2UuZW1pdCgnaW5pdCcsICdTb2NrZXQgaW5pdGlhbGl6ZWQnKTtcbiAgICBzZXRTb2NrZXQoc29ja2V0SW5zdGFuY2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHNvY2tldEluc3RhbmNlLmNsb3NlKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzb2NrZXQpIHtcbiAgICAgIHNvY2tldC5vbignY2hhdF9tZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc29ja2V0XSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlucHV0LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgIHRleHQ6IGlucHV0LnRyaW0oKSxcbiAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgfTtcblxuICAgICAgc29ja2V0LmVtaXQoJ2NoYXRfbWVzc2FnZScsIG1lc3NhZ2UpO1xuXG4gICAgICBzZXRJbnB1dCgnJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5TYW1wbGUgQXBwPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgW3tuZXcgRGF0ZShtZXNzYWdlLnRpbWVzdGFtcCkudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XSB7bWVzc2FnZS50ZXh0fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiQ2hhdCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJpbnB1dCIsInNldElucHV0Iiwic29ja2V0Iiwic2V0U29ja2V0Iiwic29ja2V0SW5zdGFuY2UiLCJlbWl0IiwiY2xvc2UiLCJvbiIsIm1lc3NhZ2UiLCJwcmV2TWVzc2FnZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwidGV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJkaXYiLCJoMSIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInRvTG9jYWxlVGltZVN0cmluZyIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});