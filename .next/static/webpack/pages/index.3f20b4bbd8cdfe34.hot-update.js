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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Principal; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards */ \"./app/components/Cards/index.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    display: flex;\\n    justify-content: center;\\n    margin-top: 24px;\\n    margin-right: 100px;\\n    margin-left: 100px;\\n    margin-bottom: 24px;\\n    flex-direction: column;\\n    div{\\n        margin-bottom: 32px;\\n    }\\n    h2{\\n        margin-bottom: 6px ;\\n    }\\n    h3{\\n        margin-bottom: 8px;\\n    }\\n    \\n    .volta{\\n      \\n    }\\n    .imagem{\\n        float: left;\\n        border-radius: 12px;\\n        margin-right: 12px;\\n        \\n    }\\n  \\n    a{\\n        text-decoration: none;\\n        color: antiquewhite; \\n        border-bottom: 2px solid antiquewhite;\\n    }\\n    a:hover{\\n        border-bottom: 2px solid #410c03;\\n        \\n    }\\n\\n    @media(min-width: 1000px){\\n      margin-right: 0;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    display: flex;\\n    justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 40vh;\\n    \\n    .loading-spinner {\\n        border: 6px solid #f3f3f3;\\n        border-top: 6px solid #e7380c;\\n        border-radius: 50%;\\n        width: 40px;\\n        height: 40px;\\n        animation: spin 0.7s linear infinite;\\n}\\n\\n    @keyframes spin {\\n    0% { transform: rotate(0deg); }\\n    100% { transform: rotate(360deg); }\\n    }\\n\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n// import Personagens from '../Personagens';\n\n\n\n// serve para fazer um foco e importar primeiro o PersonagensBanco\nconst PersonagensBanco = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/*! import() */ \"app_components_PersonagensBanco_index_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../PersonagensBanco */ \"./app/components/PersonagensBanco/index.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\app\\\\components\\\\Main\\\\index.tsx -> \" + \"../PersonagensBanco\"\n        ]\n    }\n});\n_c = PersonagensBanco;\nconst PrincipalDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c1 = PrincipalDiv;\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c2 = Div;\nconst LoadingComponents = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c3 = LoadingComponents;\nfunction Principal() {\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // useEffect serve para tirar o erro de hydration do componente \n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n            setIsClient(true);\n        }, 500);\n    }, []);\n    // se isClient é verdadeiro, ele vai retornar o componente, caso não \n    // o loading , nesse caso ele começa como falso e dps true \n    // então é false == loading por 0.5s, true == componente Principal\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: isClient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PrincipalDiv, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PersonagensBanco, {}, void 0, false, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n            lineNumber: 100,\n            columnNumber: 13\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LoadingComponents, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"loading-spinner\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\Main\\\\index.tsx\",\n            lineNumber: 106,\n            columnNumber: 11\n        }, this)\n    }, void 0, false);\n}\n_s(Principal, \"k460N28PNzD7zo1YW47Q9UigQis=\");\n_c4 = Principal;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"PersonagensBanco\");\n$RefreshReg$(_c1, \"PrincipalDiv\");\n$RefreshReg$(_c2, \"Div\");\n$RefreshReg$(_c3, \"LoadingComponents\");\n$RefreshReg$(_c4, \"Principal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDdkMsNENBQTRDO0FBQ2Y7QUFDTTtBQUNTO0FBRTVDLGtFQUFrRTtBQUNsRSxNQUFNSyxtQkFBbUJILG1EQUFPQSxDQUFDLElBQU0sZ05BQU87Ozs7Ozs7S0FBeENHO0FBRU4sTUFBTUMsZUFBZU4seURBQU1BLENBQUNPLEdBQUc7TUFBekJEO0FBNENOLE1BQU1FLE1BQU1SLHlEQUFNQSxDQUFDTyxHQUFHO01BQWhCQztBQUtOLE1BQU1DLG9CQUFvQlQseURBQU1BLENBQUNPLEdBQUc7TUFBOUJFO0FBc0JTLFNBQVNDOztJQUdwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsZ0VBQWdFO0lBQ2hFRCxnREFBU0EsQ0FBQztRQUNOVSxXQUFXO1lBRVBELFlBQVk7UUFDaEIsR0FBRztJQUVQLEdBQUcsRUFBRTtJQUNMLHFFQUFxRTtJQUNyRSwyREFBMkQ7SUFDM0Qsa0VBQWtFO0lBRWxFLHFCQUNJO2tCQUNDRCx5QkFDRyw4REFBQ0w7OzhCQUNHLDhEQUFDRDs7Ozs7OEJBQ0QsOERBQUNHOzhCQUNHLDRFQUFDUCw4Q0FBS0E7Ozs7Ozs7Ozs7Ozs7OztpQ0FHaEIsOERBQUNRO3NCQUNDLDRFQUFDRjtnQkFBSU8sV0FBVTs7Ozs7Ozs7Ozs7O0FBSzNCO0dBL0J3Qko7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3g/MTA2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuLy8gaW1wb3J0IFBlcnNvbmFnZW5zIGZyb20gJy4uL1BlcnNvbmFnZW5zJztcclxuaW1wb3J0IENhcmRzIGZyb20gJy4uL0NhcmRzJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jzs7XHJcblxyXG4vLyBzZXJ2ZSBwYXJhIGZhemVyIHVtIGZvY28gZSBpbXBvcnRhciBwcmltZWlybyBvIFBlcnNvbmFnZW5zQmFuY29cclxuY29uc3QgUGVyc29uYWdlbnNCYW5jbyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9QZXJzb25hZ2Vuc0JhbmNvJykpXHJcblxyXG5jb25zdCBQcmluY2lwYWxEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZGl2e1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHggO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudm9sdGF7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmltYWdlbXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7IFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBhbnRpcXVld2hpdGU7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVye1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDEwYzAzO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDEwMDBweCl7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgTG9hZGluZ0NvbXBvbmVudHMgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgXHJcbiAgICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjZTczODBjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDAuN3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4gICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICB9XHJcblxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaW5jaXBhbCgpIHtcclxuXHJcblxyXG4gICAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIHVzZUVmZmVjdCBzZXJ2ZSBwYXJhIHRpcmFyIG8gZXJybyBkZSBoeWRyYXRpb24gZG8gY29tcG9uZW50ZSBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzZXRJc0NsaWVudCh0cnVlKVxyXG4gICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgfSwgW10pXHJcbiAgICAvLyBzZSBpc0NsaWVudCDDqSB2ZXJkYWRlaXJvLCBlbGUgdmFpIHJldG9ybmFyIG8gY29tcG9uZW50ZSwgY2FzbyBuw6NvIFxyXG4gICAgLy8gbyBsb2FkaW5nICwgbmVzc2UgY2FzbyBlbGUgY29tZcOnYSBjb21vIGZhbHNvIGUgZHBzIHRydWUgXHJcbiAgICAvLyBlbnTDo28gw6kgZmFsc2UgPT0gbG9hZGluZyBwb3IgMC41cywgdHJ1ZSA9PSBjb21wb25lbnRlIFByaW5jaXBhbFxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtpc0NsaWVudCA/ICAgXHJcbiAgICAgICAgICAgIDxQcmluY2lwYWxEaXY+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uYWdlbnNCYW5jbyAvPlxyXG4gICAgICAgICAgICAgICAgPERpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZHMvPlxyXG4gICAgICAgICAgICAgICAgPC9EaXY+XHJcbiAgICAgICAgICAgIDwvUHJpbmNpcGFsRGl2PiBcclxuICAgICAgICA6IDxMb2FkaW5nQ29tcG9uZW50cz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRpbmctc3Bpbm5lcic+PC9kaXY+XHJcbiAgICAgICAgICA8L0xvYWRpbmdDb21wb25lbnRzPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDYXJkcyIsImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBlcnNvbmFnZW5zQmFuY28iLCJQcmluY2lwYWxEaXYiLCJkaXYiLCJEaXYiLCJMb2FkaW5nQ29tcG9uZW50cyIsIlByaW5jaXBhbCIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJzZXRUaW1lb3V0IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/Main/index.tsx\n"));

/***/ })

});