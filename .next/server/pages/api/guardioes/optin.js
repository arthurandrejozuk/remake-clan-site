"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 5249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fguardioes_2Foptin_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fguardioes_2Foptin_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/guardioes/optin.ts
var optin_namespaceObject = {};
__webpack_require__.r(optin_namespaceObject);
__webpack_require__.d(optin_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: external "@supabase/supabase-js"
const supabase_js_namespaceObject = require("@supabase/supabase-js");
;// CONCATENATED MODULE: ./pages/api/guardioes/optin.ts

//chaves que estarão no .env
// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_KEY = process.env.SUPABASE_KEY; 
const dbClient = (0,supabase_js_namespaceObject.createClient)("https://joxjgdureqxzledklsuv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveGpnZHVyZXF4emxlZGtsc3V2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjUxMDAzMCwiZXhwIjoyMDEyMDg2MDMwfQ.Tm2CJXcc8pes8Jtvb9gPAOIGASHUsj7A7Yn9_KHT3HM");
//configurando os status padrões
const httpStatus = {
    Success: 200,
    BadRequest: 400,
    Failure: 500
};
//aqui você colocara os metodos CRUD 
const controllerByMethods = {
    async POST (req, res) {
        // veremos mais como utilizar esse metodo para cadastrar no banco de dados
        const { nome, classe, subclasse, descricao, imagem } = req.body;
        //Aqui colocaremos os valores pegos lá no modal no banco de dados
        await dbClient.from("guardian").insert({
            nome: nome,
            classe: classe,
            subclasse: subclasse,
            descricao: descricao,
            imagem: imagem
        });
        await dbClient.auth.admin.createUser({});
        res.status(httpStatus.Success).json({
            messsage: "Cadastrado",
            nome
        });
        return;
    },
    async GET (req, res) {
        // pegando os dados do dbClient no caso data = dados error = caso não seja possivel conectar devido a algum erro
        const { data, error } = await dbClient.from("guardian").select("*");
        if (data) {
            res.status(httpStatus.Success).json({
                message: "Get request!",
                data
            });
            return;
        }
        res.status(httpStatus.BadRequest).json({
            message: "N\xe3o foi possivel usar o methodo",
            error
        });
        return;
    }
};
async function handler(req, res) {
    //handler será que metodo foi requisitado, caso o tal metodo não exista então um erro ocorrerá
    const controller = controllerByMethods[req.method];
    // if(!controller){
    //     res.status(httpStatus.Failure).json({ error: "Method not allowed" });;
    //     return;
    // }
    await controller(req, res);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fguardioes%2Foptin&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fguardioes%2Foptin.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fguardioes_2Foptin_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fguardioes_2Foptin_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(optin_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(optin_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/guardioes/optin",
        pathname: "/api/guardioes/optin",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: optin_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(5249)));
module.exports = __webpack_exports__;

})();