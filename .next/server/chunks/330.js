"use strict";
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 9346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./theme/GlobalStyles.tsx

const GlobalStyles = external_styled_components_.createGlobalStyle`

  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex: 1;
    flex-direction: column;
    background-image: linear-gradient( #beb7b7, #d6d6d6);

  }
  #__next {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
 
  * {
 
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  
`;
/* harmony default export */ const theme_GlobalStyles = (GlobalStyles);

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "Julgamento"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(theme_GlobalStyles, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 2699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    static async getInitialProps(ctx) {
        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                                ...props
                            }))
                });
            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [
                    initialProps.styles,
                    sheet.getStyleElement()
                ]
            };
        } finally{
            sheet.seal();
        }
    }
}


/***/ })

};
;