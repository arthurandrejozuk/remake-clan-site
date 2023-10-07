"use strict";
(() => {
var exports = {};
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 1108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fmodos_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fmodos_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fmodos_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fmodos_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fmodos_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fmodos_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/modos/[id].tsx
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (Post),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.tsx
var _document = __webpack_require__(2699);
// EXTERNAL MODULE: ./pages/_app.tsx + 1 modules
var _app = __webpack_require__(9346);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/json/modos.json
var modos = __webpack_require__(4486);
// EXTERNAL MODULE: ./app/components/PaginaDefault/index.tsx + 6 modules
var PaginaDefault = __webpack_require__(5057);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./pages/modos/[id].tsx


//modos é um arquivo json que tem configurações para criação de mais de uma pagina,
// nesse caso fizemos uma pagina para cada modo



// getStaticProps permite a criação de páginas estaticas 
//e também usar arquivos com json para mapear-lo 
//e criar uma pagina estatica para cada objeto nesse caso.
const getStaticPaths = async ()=>{
    const paths = modos.map((modo)=>{
        return {
            params: {
                id: `${modo.id}`
            }
        };
    });
    //configurações padroes
    return {
        paths: paths,
        fallback: false
    };
};
// como foi feito em cima, o parametro id é nosso id do modo tbm, porém poderia ser outro
async function getStaticProps(context) {
    //verifica se o id passado e undefined caso, não, retorna o parametro normal 
    const id = context.params.id !== undefined ? context.params.id : null;
    const modo = modos.find((atual)=>{
        //compara o id do params com id do modo atual com o find 
        if (atual.id === id) {
            return true;
        }
        return false;
    });
    return {
        //caso seja true retornara essas props para serem usadas no caso do modo espeficico
        //essas interrogações permitem que um modo não tenha determinado dado
        props: {
            id: modo?.id,
            title: modo?.modo,
            type: modo?.tipo,
            description: modo?.descricao,
            image: modo?.img,
            textColor: modo?.cor
        }
    };
}
const ModosContainer = (external_styled_components_default()).div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 24px;
    margin-bottom: 24px;
    ul{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-top: 12px;
    }
    h1, h2{
        text-shadow: 1px 1px 2px gray;
    }
    p{
        text-align: center;
        width: 500px;
        margin-bottom: 12px;
    }
    img{
        border-radius: 12px;
        width: 400px;
    }
    
`;
// recebe props do getStaticProps
function Post(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(PaginaDefault/* default */.Z, {
        child: props.title,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModosContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: "Ir para Home"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            style: {
                                color: `${props.textColor}`
                            },
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            style: {
                                color: `${props.textColor}`
                            },
                            children: props.type
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: props.description
                }),
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: props.image,
                    alt: "imagem do modo"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fmodos%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fmodos%2F%5Bid%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fmodos_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fmodos_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fmodos_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fmodos_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Fmodos_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fmodos_2F_5Bid_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_id_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_id_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/modos/[id]",
        pathname: "/modos/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _id_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 8866:
/***/ ((module) => {

module.exports = require("react-icons/gi");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,664,330,57], () => (__webpack_exec__(1108)));
module.exports = __webpack_exports__;

})();