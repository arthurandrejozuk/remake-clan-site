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

/***/ "./app/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./app/components/Main/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Principal; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards */ \"./app/components/Cards/index.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    display: flex;\\n    justify-content: center;\\n    margin-top: 24px;\\n    margin-right: 100px;\\n    margin-left: 100px;\\n    margin-bottom: 24px;\\n    flex-direction: column;\\n    div{\\n        margin-bottom: 32px;\\n    }\\n    h2{\\n        margin-bottom: 6px ;\\n    }\\n    h3{\\n        margin-bottom: 8px;\\n    }\\n    \\n    .volta{\\n      \\n    }\\n    .imagem{\\n        float: left;\\n        border-radius: 12px;\\n        margin-right: 12px;\\n        \\n    }\\n  \\n    a{\\n        text-decoration: none;\\n        color: antiquewhite; \\n        border-bottom: 2px solid antiquewhite;\\n    }\\n    a:hover{\\n        border-bottom: 2px solid #410c03;\\n        \\n    }\\n\\n    @media(min-width: 1000px){\\n        margin-right: 300px;\\n        margin-left: 300px;\\n        \\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 40vh;\\n    .loading-spinner {\\n        border: 6px solid #f3f3f3;\\n        border-top: 6px solid #e7380c;\\n        border-radius: 50%;\\n        width: 40px;\\n        height: 40px;\\n        animation: spin 0.7s linear infinite;\\n}\\n\\n    @keyframes spin {\\n    0% { transform: rotate(0deg); }\\n    100% { transform: rotate(360deg); }\\n    }\\n\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n// import Personagens from '../Personagens';\n\n\n\nconst Personagens = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"app_components_Personagens_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../Personagens */ \"./app/components/Personagens/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\app\\\\components\\\\Main\\\\index.tsx -> \" + \"../Personagens\"\n        ]\n    }\n});\n_c = Personagens;\nconst PrincipalDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c1 = PrincipalDiv;\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c2 = Div;\nconst LoadingComponents = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c3 = LoadingComponents;\nfunction Principal() {\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsClient(true);\n        }, 2000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isClient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PrincipalDiv, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Personagens, {}, void 0, false, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n            lineNumber: 98,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingComponents, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"loading-spinner\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n            lineNumber: 104,\n            columnNumber: 11\n        }, this)\n    }, void 0, false);\n}\n_s(Principal, \"k460N28PNzD7zo1YW47Q9UigQis=\");\n_c4 = Principal;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Personagens\");\n$RefreshReg$(_c1, \"PrincipalDiv\");\n$RefreshReg$(_c2, \"Div\");\n$RefreshReg$(_c3, \"LoadingComponents\");\n$RefreshReg$(_c4, \"Principal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdkMsNENBQTRDO0FBQ2Y7QUFDTTtBQUNTO0FBRTVDLE1BQU1LLGNBQWNILG1EQUFPQSxDQUFDLElBQU0saU1BQU87Ozs7Ozs7S0FBbkNHO0FBRU4sTUFBTUMsZUFBZU4seURBQU1BLENBQUNPLEdBQUc7TUFBekJEO0FBOENOLE1BQU1FLE1BQU1SLHlEQUFNQSxDQUFDTyxHQUFHO01BQWhCQztBQUtOLE1BQU1DLG9CQUFvQlQseURBQU1BLENBQUNPLEdBQUc7TUFBOUJFO0FBcUJTLFNBQVNDOztJQUdwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ05VLFdBQVc7WUFFUEQsWUFBWTtRQUNoQixHQUFHO0lBRVAsR0FBRyxFQUFFO0lBR0wscUJBQ0k7a0JBQ0NELHlCQUNHLDhEQUFDTDs7OEJBQ0csOERBQUNEOzs7Ozs4QkFDRCw4REFBQ0c7OEJBQ0csNEVBQUNQLDhDQUFLQTs7Ozs7Ozs7Ozs7Ozs7O2lDQUdoQiw4REFBQ1E7c0JBQ0MsNEVBQUNGO2dCQUFJTyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJM0I7R0E1QndCSjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeD8xMDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG4vLyBpbXBvcnQgUGVyc29uYWdlbnMgZnJvbSAnLi4vUGVyc29uYWdlbnMnO1xyXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi4vQ2FyZHMnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUGVyc29uYWdlbnMgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vUGVyc29uYWdlbnMnKSlcclxuXHJcbmNvbnN0IFByaW5jaXBhbERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweCA7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC52b2x0YXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW1hZ2Vte1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGFudGlxdWV3aGl0ZTsgXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGFudGlxdWV3aGl0ZTtcclxuICAgIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MTBjMDM7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogMTAwMHB4KXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgTG9hZGluZ0NvbXBvbmVudHMgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgLmxvYWRpbmctc3Bpbm5lciB7XHJcbiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgI2YzZjNmMztcclxuICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgI2U3MzgwYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAwLjdzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgfVxyXG5cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmluY2lwYWwoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzZXRJc0NsaWVudCh0cnVlKVxyXG4gICAgICAgIH0sIDIwMDApXHJcblxyXG4gICAgfSwgW10pXHJcbiBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7aXNDbGllbnQgPyAgIFxyXG4gICAgICAgICAgICA8UHJpbmNpcGFsRGl2PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbmFnZW5zLz5cclxuICAgICAgICAgICAgICAgIDxEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRzLz5cclxuICAgICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICA8L1ByaW5jaXBhbERpdj4gXHJcbiAgICAgICAgOiA8TG9hZGluZ0NvbXBvbmVudHM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLXNwaW5uZXInPjwvZGl2PlxyXG4gICAgICAgICAgPC9Mb2FkaW5nQ29tcG9uZW50cz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkNhcmRzIiwiZHluYW1pYyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGVyc29uYWdlbnMiLCJQcmluY2lwYWxEaXYiLCJkaXYiLCJEaXYiLCJMb2FkaW5nQ29tcG9uZW50cyIsIlByaW5jaXBhbCIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJzZXRUaW1lb3V0IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/Main/index.tsx\n"));

/***/ })

});