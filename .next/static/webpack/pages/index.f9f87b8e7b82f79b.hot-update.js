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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Principal; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards */ \"./app/components/Cards/index.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-right:12px;\\n    margin-left:12px;\\n    margin-top: 24px;\\n    margin-bottom: 24px;\\n    flex-direction: column;\\n    div{\\n        margin-bottom: 32px;\\n    }\\n    h2{\\n        margin-bottom: 6px ;\\n    }\\n    h3{\\n        margin-bottom: 8px;\\n    }\\n\\n    .imagem{\\n        float: left;\\n        border-radius: 12px;\\n        margin-right: 12px;\\n        \\n    }\\n  \\n    a{\\n        text-decoration: none;\\n        color: antiquewhite; \\n        border-bottom: 2px solid antiquewhite;\\n    }\\n    a:hover{\\n        border-bottom: 2px solid #410c03;\\n        \\n    }\\n\\n    @media(min-width: 1000px){\\n        margin-right: 200px;\\n        margin-left: 200px\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 40vh;\\n    \\n    .loading-spinner {\\n        border: 6px solid #f3f3f3;\\n        border-top: 6px solid #e7380c;\\n        border-radius: 50%;\\n        width: 40px;\\n        height: 40px;\\n        animation: spin 0.7s linear infinite;\\n}\\n\\n    @keyframes spin {\\n    0% { transform: rotate(0deg); }\\n    100% { transform: rotate(360deg); }\\n    }\\n\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n// import Personagens from '../Personagens';\n\n\n\n// serve para fazer um foco e importar primeiro o PersonagensBanco\nconst PersonagensBanco = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"app_components_PersonagensBanco_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../PersonagensBanco */ \"./app/components/PersonagensBanco/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\app\\\\components\\\\Main\\\\index.tsx -> \" + \"../PersonagensBanco\"\n        ]\n    }\n});\n_c = PersonagensBanco;\nconst PrincipalDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c1 = PrincipalDiv;\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c2 = Div;\nconst LoadingComponents = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c3 = LoadingComponents;\nfunction Principal() {\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // useEffect serve para tirar o erro de hydration do componente \n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsClient(true);\n        }, 500);\n    }, []);\n    // se isClient é verdadeiro, ele vai retornar o componente, caso não \n    // o loading , nesse caso ele começa como falso e dps true \n    // então é false == loading por 0.5s, true == componente Principal\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isClient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PrincipalDiv, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PersonagensBanco, {}, void 0, false, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n            lineNumber: 99,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingComponents, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"loading-spinner\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n            lineNumber: 105,\n            columnNumber: 11\n        }, this)\n    }, void 0, false);\n}\n_s(Principal, \"k460N28PNzD7zo1YW47Q9UigQis=\");\n_c4 = Principal;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"PersonagensBanco\");\n$RefreshReg$(_c1, \"PrincipalDiv\");\n$RefreshReg$(_c2, \"Div\");\n$RefreshReg$(_c3, \"LoadingComponents\");\n$RefreshReg$(_c4, \"Principal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdkMsNENBQTRDO0FBQ2Y7QUFDTTtBQUNTO0FBRTVDLGtFQUFrRTtBQUNsRSxNQUFNSyxtQkFBbUJILG1EQUFPQSxDQUFDLElBQU0sZ05BQU87Ozs7Ozs7S0FBeENHO0FBRU4sTUFBTUMsZUFBZU4seURBQU1BLENBQUNPLEdBQUc7TUFBekJEO0FBMkNOLE1BQU1FLE1BQU1SLHlEQUFNQSxDQUFDTyxHQUFHO01BQWhCQztBQUtOLE1BQU1DLG9CQUFvQlQseURBQU1BLENBQUNPLEdBQUc7TUFBOUJFO0FBc0JTLFNBQVNDOztJQUdwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsZ0VBQWdFO0lBQ2hFRCxnREFBU0EsQ0FBQztRQUNOVSxXQUFXO1lBRVBELFlBQVk7UUFDaEIsR0FBRztJQUVQLEdBQUcsRUFBRTtJQUNMLHFFQUFxRTtJQUNyRSwyREFBMkQ7SUFDM0Qsa0VBQWtFO0lBRWxFLHFCQUNJO2tCQUNDRCx5QkFDRyw4REFBQ0w7OzhCQUNHLDhEQUFDRDs7Ozs7OEJBQ0QsOERBQUNHOzhCQUNHLDRFQUFDUCw4Q0FBS0E7Ozs7Ozs7Ozs7Ozs7OztpQ0FHaEIsOERBQUNRO3NCQUNDLDRFQUFDRjtnQkFBSU8sV0FBVTs7Ozs7Ozs7Ozs7O0FBSzNCO0dBL0J3Qko7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3g/MTA2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IFBlcnNvbmFnZW5zIGZyb20gJy4uL1BlcnNvbmFnZW5zJztcclxuaW1wb3J0IENhcmRzIGZyb20gJy4uL0NhcmRzJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jzs7XHJcblxyXG4vLyBzZXJ2ZSBwYXJhIGZhemVyIHVtIGZvY28gZSBpbXBvcnRhciBwcmltZWlybyBvIFBlcnNvbmFnZW5zQmFuY29cclxuY29uc3QgUGVyc29uYWdlbnNCYW5jbyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9QZXJzb25hZ2Vuc0JhbmNvJykpXHJcblxyXG5jb25zdCBQcmluY2lwYWxEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGl2e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHggO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZW17XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogYW50aXF1ZXdoaXRlOyBcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYW50aXF1ZXdoaXRlO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlcntcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQxMGMwMztcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IExvYWRpbmdDb21wb25lbnRzID0gc3R5bGVkLmRpdmBcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIFxyXG4gICAgLmxvYWRpbmctc3Bpbm5lciB7XHJcbiAgICAgICAgYm9yZGVyOiA2cHggc29saWQgI2YzZjNmMztcclxuICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgI2U3MzgwYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAwLjdzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gICAgfVxyXG5cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmluY2lwYWwoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICAvLyB1c2VFZmZlY3Qgc2VydmUgcGFyYSB0aXJhciBvIGVycm8gZGUgaHlkcmF0aW9uIGRvIGNvbXBvbmVudGUgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc2V0SXNDbGllbnQodHJ1ZSlcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgIH0sIFtdKVxyXG4gICAgLy8gc2UgaXNDbGllbnQgw6kgdmVyZGFkZWlybywgZWxlIHZhaSByZXRvcm5hciBvIGNvbXBvbmVudGUsIGNhc28gbsOjbyBcclxuICAgIC8vIG8gbG9hZGluZyAsIG5lc3NlIGNhc28gZWxlIGNvbWXDp2EgY29tbyBmYWxzbyBlIGRwcyB0cnVlIFxyXG4gICAgLy8gZW50w6NvIMOpIGZhbHNlID09IGxvYWRpbmcgcG9yIDAuNXMsIHRydWUgPT0gY29tcG9uZW50ZSBQcmluY2lwYWxcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7aXNDbGllbnQgPyAgIFxyXG4gICAgICAgICAgICA8UHJpbmNpcGFsRGl2PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbmFnZW5zQmFuY28gLz5cclxuICAgICAgICAgICAgICAgIDxEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRzLz5cclxuICAgICAgICAgICAgICAgIDwvRGl2PlxyXG4gICAgICAgICAgICA8L1ByaW5jaXBhbERpdj4gXHJcbiAgICAgICAgOiA8TG9hZGluZ0NvbXBvbmVudHM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkaW5nLXNwaW5uZXInPjwvZGl2PlxyXG4gICAgICAgICAgPC9Mb2FkaW5nQ29tcG9uZW50cz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ2FyZHMiLCJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQZXJzb25hZ2Vuc0JhbmNvIiwiUHJpbmNpcGFsRGl2IiwiZGl2IiwiRGl2IiwiTG9hZGluZ0NvbXBvbmVudHMiLCJQcmluY2lwYWwiLCJpc0NsaWVudCIsInNldElzQ2xpZW50Iiwic2V0VGltZW91dCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/Main/index.tsx\n"));

/***/ })

});