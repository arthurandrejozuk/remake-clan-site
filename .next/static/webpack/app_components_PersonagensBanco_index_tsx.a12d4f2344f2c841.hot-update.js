"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app_components_PersonagensBanco_index_tsx",{

/***/ "./app/components/PersonagensBanco/index.tsx":
/*!***************************************************!*\
  !*** ./app/components/PersonagensBanco/index.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PersonagensBanco; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/theme */ \"./theme/theme.tsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal */ \"./app/components/Modal/index.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    border-radius: 12px;\\n    padding: 12px;\\n    max-width: 500px;\\n    color: #fffdf7;\\n    @media(max-width: 550px){\\n        width: 300px;\\n        .imagem{\\n            margin-bottom: 12px;\\n            max-width: 270px;\\n            width: auto;\\n        }\\n    }\\n    \\n \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 12px;\\n    span{\\n        color:#350701;\\n        font-size: 24px;\\n    }\\n    span:hover{\\n        cursor: pointer;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    \\n        \\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        width: 120px;\\n        padding: 12px;\\n        border: none;\\n        background-color: #d6d6d6;\\n        cursor: pointer;\\n        border-bottom: 1px solid #410c03;\\n        color:#410c03;\\n        font-size: 16px;\\n        font-weight: 600;\\n        \\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PersonagemDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div(_templateObject());\n_c = PersonagemDiv;\nconst BotaoDiv = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.div(_templateObject1());\n_c1 = BotaoDiv;\nconst Botao = styled_components__WEBPACK_IMPORTED_MODULE_5__.styled.button(_templateObject2());\n_c2 = Botao;\nfunction PersonagensBanco() {\n    _s();\n    // colocando a api em uma variante como array\n    const [quantidade, setQuantidade] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    const [botao, setBotao] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Ver mais\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const doisPersonagens = data.slice(0, quantidade);\n    const [ativado, setAtivado] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function mostraPersonagens(quantidade, setQuantidade, setBotao) {\n        if (quantidade !== data.length) {\n            setQuantidade(quantidade + 1);\n        }\n        if (quantidade >= data.length) {\n            setBotao(\"Acabou...\");\n        }\n    }\n    //capturando a api com useEffect\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // funcao assincrona pois é um promessa\n        async function fetchData() {\n            try {\n                const response = await fetch(\"/api/guardioes/optin\");\n                const responseData = await response.json();\n                setData(responseData.data);\n            } catch (error) {\n                console.error(\"Erro ao buscar dados da API:\", error);\n            }\n        }\n        // logo após aciona a funcao\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            doisPersonagens.map((personagem)=>{\n                var _themes_find;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PersonagemDiv, {\n                    style: {\n                        backgroundColor: \"rgba(\".concat(personagem.classe === \"Ca\\xe7ador\" ? \"08,83,95, 0.8\" : personagem.classe === \"Titan\" ? \"183,58,79, 0.8\" : personagem.classe === \"Arcano\" ? \"203,160,68,0.8\" : null, \")\")\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            className: \"imagem\",\n                            width: 300,\n                            height: 500,\n                            src: personagem.imagem === null ? \"https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80\" : personagem.imagem,\n                            alt: \"Ca\\xe7ador do Fonix\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: personagem.nome\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: personagem.classe\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: [\n                                \"Subclasse favorita: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    id: \"sub\",\n                                    style: {\n                                        color: ((_themes_find = _theme_theme__WEBPACK_IMPORTED_MODULE_3__.themes.find((theme)=>personagem.subclasse === theme.identificado)) === null || _themes_find === void 0 ? void 0 : _themes_find.fontColor) || \"#1b0229\"\n                                    },\n                                    children: personagem.subclasse\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 53\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: personagem.descricao\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, personagem.key, true, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 25\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                ativa: ativado,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: ()=>setAtivado(false),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiDeleteBack2Line, {}, void 0, false, {\n                            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 63\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 16\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                lineNumber: 127,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BotaoDiv, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Botao, {\n                        onClick: ()=>{\n                            mostraPersonagens(quantidade, setQuantidade, setBotao);\n                        },\n                        children: botao\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlinePlus, {\n                            onClick: ()=>{\n                                ativado === true ? setAtivado(false) : setAtivado(true);\n                            }\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projetos\\\\main-clan-site\\\\remake-clan-site\\\\app\\\\components\\\\PersonagensBanco\\\\index.tsx\",\n                lineNumber: 132,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PersonagensBanco, \"ykYoRHro+bopGEVNw7D+p4heywc=\");\n_c3 = PersonagensBanco;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"PersonagemDiv\");\n$RefreshReg$(_c1, \"BotaoDiv\");\n$RefreshReg$(_c2, \"Botao\");\n$RefreshReg$(_c3, \"PersonagensBanco\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9QZXJzb25hZ2Vuc0JhbmNvL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Q7QUFDRztBQUNDO0FBQ0U7QUFDcEI7QUFFN0IsTUFBTU8sZ0JBQWdCTCxxREFBTUEsQ0FBQ00sR0FBRztLQUExQkQ7QUFpQk4sTUFBTUUsV0FBV1AscURBQU1BLENBQUNNLEdBQUc7TUFBckJDO0FBY04sTUFBTUMsUUFBUVIscURBQU1BLENBQUNTLE1BQU07TUFBckJEO0FBK0JTLFNBQVNFOztJQUNwQiw2Q0FBNkM7SUFFN0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU1rQixrQkFBa0JGLEtBQUtHLEtBQUssQ0FBQyxHQUFHUDtJQUN0QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR3JCLCtDQUFRQSxDQUFDO0lBS3ZDLFNBQVNzQixrQkFBa0JWLFVBQVUsRUFBRUMsYUFBYSxFQUFFRSxRQUFRO1FBQzFELElBQUlILGVBQWVJLEtBQUtPLE1BQU0sRUFBRTtZQUM1QlYsY0FBY0QsYUFBYTtRQUMvQjtRQUNBLElBQUlBLGNBQWVJLEtBQUtPLE1BQU0sRUFBRTtZQUM1QlIsU0FBUztRQUNiO0lBQ0o7SUFFQSxnQ0FBZ0M7SUFFaENoQixnREFBU0EsQ0FBQztRQUNOLHVDQUF1QztRQUN2QyxlQUFleUI7WUFDWCxJQUFJO2dCQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsZUFBZSxNQUFNRixTQUFTRyxJQUFJO2dCQUN4Q1gsUUFBUVUsYUFBYVgsSUFBSTtZQUM3QixFQUFFLE9BQU9hLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQ2xEO1FBQ0o7UUFDQSw0QkFBNEI7UUFDNUJMO0lBQ0osR0FBRyxFQUFFO0lBR0wscUJBQ0k7O1lBQ0tOLGdCQUFnQmEsR0FBRyxDQUFDLENBQUNDO29CQVErQzlCO2dCQVBqRSxxQkFDUSw4REFBQ0k7b0JBQW1DMkIsT0FBTzt3QkFBRUMsaUJBQWlCLFFBQXVLLE9BQS9KRixXQUFXRyxNQUFNLEtBQUssZUFBWSxrQkFBa0JILFdBQVdHLE1BQU0sS0FBSyxVQUFVLG1CQUFtQkgsV0FBV0csTUFBTSxLQUFLLFdBQVUsbUJBQW1CLE1BQUs7b0JBQUc7O3NDQUVwTyw4REFBQ0M7NEJBQUlDLFdBQVU7NEJBQVNDLE9BQU87NEJBQUtDLFFBQVE7NEJBQUtDLEtBQUtSLFdBQVdTLE1BQU0sS0FBSyxPQUFPLDJLQUEyS1QsV0FBV1MsTUFBTTs0QkFBR0MsS0FBSTs7Ozs7O3NDQUV0Uiw4REFBQ0M7c0NBQUtYLFdBQVdZLElBQUk7Ozs7OztzQ0FDckIsOERBQUNDO3NDQUFJYixXQUFXRyxNQUFNOzs7Ozs7c0NBQ3RCLDhEQUFDVTs7Z0NBQUc7OENBQW9CLDhEQUFDQTtvQ0FBR0MsSUFBRztvQ0FBTWIsT0FBTzt3Q0FBRWMsT0FBTzdDLEVBQUFBLGVBQUFBLGdEQUFNQSxDQUFDOEMsSUFBSSxDQUFDQyxDQUFBQSxRQUFTakIsV0FBV2tCLFNBQVMsS0FBS0QsTUFBTUUsWUFBWSxlQUFoRWpELG1DQUFBQSxhQUFtRWtELFNBQVMsS0FBSTtvQ0FBVTs4Q0FBSXBCLFdBQVdrQixTQUFTOzs7Ozs7Ozs7Ozs7c0NBQ3ZLLDhEQUFDRztzQ0FDSXJCLFdBQVdzQixTQUFTOzs7Ozs7O21CQVJUdEIsV0FBV3VCLEdBQUc7Ozs7O1lBYTlDOzBCQUNDLDhEQUFDbEQsOENBQUtBO2dCQUFDbUQsT0FBT3BDOzBCQUNaLDRFQUFDcUM7OEJBQ0ksNEVBQUMvQzt3QkFBT2dELFNBQVMsSUFBTXJDLFdBQVc7a0NBQVEsNEVBQUNqQiw2REFBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHcEUsOERBQUNJOztrQ0FDRyw4REFBQ0M7d0JBQU1pRCxTQUFTOzRCQUNacEMsa0JBQWtCVixZQUFZQyxlQUFlRTt3QkFDakQ7a0NBQ0dEOzs7Ozs7a0NBQ0gsOERBQUMyQztrQ0FDRyw0RUFBQ3RELHlEQUFhQTs0QkFBQ3VELFNBQVM7Z0NBQVF0QyxZQUFZLE9BQU9DLFdBQVcsU0FBU0EsV0FBVzs0QkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03RztHQTFFd0JWO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1BlcnNvbmFnZW5zQmFuY28vaW5kZXgudHN4PzlmMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdGhlbWVzIH0gZnJvbSBcIi4uLy4uLy4uL3RoZW1lL3RoZW1lXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZVBsdXMgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7UmlEZWxldGVCYWNrMkxpbmV9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9Nb2RhbFwiO1xyXG5cclxuY29uc3QgUGVyc29uYWdlbURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGNvbG9yOiAjZmZmZGY3O1xyXG4gICAgQG1lZGlhKG1heC13aWR0aDogNTUwcHgpe1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAuaW1hZ2Vte1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuIGAgIFxyXG5cclxuY29uc3QgQm90YW9EaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjojMzUwNzAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIHNwYW46aG92ZXJ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IEJvdGFvID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MTBjMDM7XHJcbiAgICAgICAgY29sb3I6IzQxMGMwMztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBcclxuYFxyXG4vL1RpcGFuZG8gb3MgZGFkb3MgZGEgYXBpXHJcbnR5cGUgQ2FyYWN0ZXJzUHJvcHMgPSB7XHJcbiAgICBrZXk6bnVtYmVyO1xyXG4gICAgbm9tZTogc3RyaW5nO1xyXG4gICAgc3ViY2xhc3NlOiBzdHJpbmc7XHJcbiAgICBjbGFzc2U6IHN0cmluZztcclxuICAgIGltYWdlbTogc3RyaW5nO1xyXG4gICAgZGVzY3JpY2FvOiBzdHJpbmc7XHJcbiAgICBjb3JGdW5kbzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJzb25hZ2Vuc0JhbmNvKCkge1xyXG4gICAgLy8gY29sb2NhbmRvIGEgYXBpIGVtIHVtYSB2YXJpYW50ZSBjb21vIGFycmF5XHJcbiAgIFxyXG4gICAgY29uc3QgW3F1YW50aWRhZGUsIHNldFF1YW50aWRhZGVdID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtib3Rhbywgc2V0Qm90YW9dID0gdXNlU3RhdGUoXCJWZXIgbWFpc1wiKVxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZG9pc1BlcnNvbmFnZW5zID0gZGF0YS5zbGljZSgwLCBxdWFudGlkYWRlKVxyXG4gICAgY29uc3QgW2F0aXZhZG8sIHNldEF0aXZhZG9dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICBcclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIG1vc3RyYVBlcnNvbmFnZW5zKHF1YW50aWRhZGUsIHNldFF1YW50aWRhZGUsIHNldEJvdGFvKSB7XHJcbiAgICAgICAgaWYgKHF1YW50aWRhZGUgIT09IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldFF1YW50aWRhZGUocXVhbnRpZGFkZSArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChxdWFudGlkYWRlID49ICBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRCb3RhbyhcIkFjYWJvdS4uLlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2NhcHR1cmFuZG8gYSBhcGkgY29tIHVzZUVmZmVjdFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gZnVuY2FvIGFzc2luY3JvbmEgcG9pcyDDqSB1bSBwcm9tZXNzYVxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ3VhcmRpb2VzL29wdGluJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlRGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIGRhZG9zIGRhIEFQSTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbG9nbyBhcMOzcyBhY2lvbmEgYSBmdW5jYW9cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtdKVxyXG4gIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAge2RvaXNQZXJzb25hZ2Vucy5tYXAoKHBlcnNvbmFnZW06IENhcmFjdGVyc1Byb3BzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uYWdlbURpdiBrZXk9e3BlcnNvbmFnZW0ua2V5fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKCR7cGVyc29uYWdlbS5jbGFzc2UgPT09IFwiQ2HDp2Fkb3JcIiA/IFwiMDgsODMsOTUsIDAuOFwiIDogcGVyc29uYWdlbS5jbGFzc2UgPT09IFwiVGl0YW5cIiA/IFwiMTgzLDU4LDc5LCAwLjhcIiA6IHBlcnNvbmFnZW0uY2xhc3NlID09PSBcIkFyY2Fub1wiPyBcIjIwMywxNjAsNjgsMC44XCIgOiBudWxsfSlgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZW0nIHdpZHRoPXszMDB9IGhlaWdodD17NTAwfSBzcmM9e3BlcnNvbmFnZW0uaW1hZ2VtID09PSBudWxsID8gXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5OTUwODcwNDUxMi0yZjE5ZWZkMWUzNWY/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTAzNSZxPTgwXCIgOiBwZXJzb25hZ2VtLmltYWdlbSB9IGFsdD1cIkNhw6dhZG9yIGRvIEZvbml4XCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgPntwZXJzb25hZ2VtLm5vbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cGVyc29uYWdlbS5jbGFzc2V9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TdWJjbGFzc2UgZmF2b3JpdGE6IDxoMyBpZD1cInN1YlwiIHN0eWxlPXt7IGNvbG9yOiB0aGVtZXMuZmluZCh0aGVtZSA9PiBwZXJzb25hZ2VtLnN1YmNsYXNzZSA9PT0gdGhlbWUuaWRlbnRpZmljYWRvKT8uZm9udENvbG9yIHx8ICcjMWIwMjI5JyB9fT57cGVyc29uYWdlbS5zdWJjbGFzc2V9PC9oMz48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlcnNvbmFnZW0uZGVzY3JpY2FvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BlcnNvbmFnZW1EaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgPE1vZGFsIGF0aXZhPXthdGl2YWRvfT5cclxuICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBdGl2YWRvKGZhbHNlKX0+PFJpRGVsZXRlQmFjazJMaW5lLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8Qm90YW9EaXY+XHJcbiAgICAgICAgICAgICAgICA8Qm90YW8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vc3RyYVBlcnNvbmFnZW5zKHF1YW50aWRhZGUsIHNldFF1YW50aWRhZGUsIHNldEJvdGFvKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfT57Ym90YW99PC9Cb3Rhbz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVQbHVzIG9uQ2xpY2s9eygpID0+IHsgYXRpdmFkbyA9PT0gdHJ1ZSA/IHNldEF0aXZhZG8oZmFsc2UpIDogc2V0QXRpdmFkbyh0cnVlKTsgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Cb3Rhb0Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJ0aGVtZXMiLCJBaU91dGxpbmVQbHVzIiwiUmlEZWxldGVCYWNrMkxpbmUiLCJNb2RhbCIsIlBlcnNvbmFnZW1EaXYiLCJkaXYiLCJCb3Rhb0RpdiIsIkJvdGFvIiwiYnV0dG9uIiwiUGVyc29uYWdlbnNCYW5jbyIsInF1YW50aWRhZGUiLCJzZXRRdWFudGlkYWRlIiwiYm90YW8iLCJzZXRCb3RhbyIsImRhdGEiLCJzZXREYXRhIiwiZG9pc1BlcnNvbmFnZW5zIiwic2xpY2UiLCJhdGl2YWRvIiwic2V0QXRpdmFkbyIsIm1vc3RyYVBlcnNvbmFnZW5zIiwibGVuZ3RoIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtYXAiLCJwZXJzb25hZ2VtIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc2UiLCJpbWciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltYWdlbSIsImFsdCIsImgyIiwibm9tZSIsImgzIiwiaWQiLCJjb2xvciIsImZpbmQiLCJ0aGVtZSIsInN1YmNsYXNzZSIsImlkZW50aWZpY2FkbyIsImZvbnRDb2xvciIsInAiLCJkZXNjcmljYW8iLCJrZXkiLCJhdGl2YSIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/PersonagensBanco/index.tsx\n"));

/***/ })

});