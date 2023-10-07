"use strict";
exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 5057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PaginaDefault)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./app/components/Banner/index.tsx


const BannerStyled = (external_styled_components_default()).div`
    
    background-image: url("https://dotesports.com/wp-content/uploads/2023/08/2023_Final_Shape_Reveal_Press_Kit_Standard_Key_Art_16x9.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    opacity:0.9;
    h2{
        font-size: 44px;
        color: antiquewhite;
        text-shadow: #53150a 2px 0 10px;
    }
`;
function Banner({ child }) {
    return /*#__PURE__*/ jsx_runtime.jsx(BannerStyled, {
        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
            children: child
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Logo/index.tsx


const ImagemLogo = (external_styled_components_default()).img`
    
    width: 200px;
 
`;
function Logo() {
    return /*#__PURE__*/ jsx_runtime.jsx(ImagemLogo, {
        className: "logo-image",
        src: "https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltfd59ef77fa3c5cc1/63d01595a5695963fc8be4ef/lfl-media-wallpaper-1-full.jpg",
        alt: "imagem da logo"
    });
} //" alt="imagem da logo

// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__(8866);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/json/modos.json
var modos = __webpack_require__(4486);
;// CONCATENATED MODULE: ./app/components/MenuHam/MenuInfo/index.tsx



const Info = (external_styled_components_default()).ul`
    
    display: flex;
    flex-direction: column;
    a{
        text-decoration: none;
        color: antiquewhite;
        border: 4px solid #77625e;
    }
    a:hover{
        border-bottom: 4px solid #410c03;
    }
`;
function MenuInfo() {
    return /*#__PURE__*/ jsx_runtime.jsx(Info, {
        children: modos.map((modo)=>{
            return /*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    href: `/modos/${modo.id}`,
                    children: modo.modo
                })
            }, modo.id);
        })
    });
}

;// CONCATENATED MODULE: ./app/components/MenuHam/index.tsx




const StyledMenuHam = (external_styled_components_default()).div`
    
    position: fixed;
    opacity: 0.9;
    height: 100%;
    z-index: 2;
    display: flex;
    right: 0;
    top: 0;
    padding-left:12px ;
    background-color:  #77625e;
    width: 45%;
    justify-content: center;
    border-left: 2px solid  rgb(250, 235, 215);
    transition: 500ms;

    div{
        display: flex;
        align-items: center;
        margin-right:24px ;
    }


    @media (max-width: 500px) {
        width: 50%
    }
`;
function MenuHam({ ativado, children }) {
    if (ativado) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledMenuHam, {
            children: [
                children,
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx(MenuInfo, {})
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/components/Cabecalho/index.tsx









const Header = (external_styled_components_default()).div`
    
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #ad9c99;
    border-bottom: 1px solid #350701;

    h1{
        color: #350701;
    }

    ul{
        display: flex;
        align-items: center;
        gap: 80px;
        width: 100%;

        justify-content: center;
    }
    li{
        list-style-type: none;
        text-decoration: none;
        color: #410c03;
        font-size: 32px;
        transition: 100ms;
        display: flex;
        align-items: center;
    }
     .home, .clan{
        text-decoration: none;
        color: #410c03;
        font-size: 28px;
        border-bottom: 2px solid #ad9c99 ;
        transition: 100ms;
        
    }
    .home:hover, .clan:hover{
        border-bottom: 2px solid antiquewhite;
        border-radius: 4px
        
    }
    span{
        margin-right: 40px;
        font-size: 40px;
        color: #410c03;
    }
    span:hover{
        color: #350701;
        cursor: pointer;
    }

    button{
        font-size: 40px;
        background-color: #77625e;
        color: rgb(250, 235, 215);
        border:none;
        height: 36px;
        margin-top: 12px;
    }
    button:hover{
        color: #4d0d03;
        cursor: pointer;
    }
    .logo-image{
        border-right: 2px solid #350701;
        margin-right: 12px;
        
    }
    .icon__banner{
        color: #350701;
       
    }
    .icon__home{
        display: none;
       
    }

    @media(max-width: 1000px){
        h1{
            display: none;
        }
        .home, .clan{
            display: none;
        };
        .icon__home, .icon__banner{
            display:  block;
            color: #350701;
            font-size: 40px;
        }
        ul{
            gap: 60px;
        }
    }


`;
function Cabecalho() {
    const [ativa, setAtiva] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Header, {
            id: "inicio",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(Logo, {}),
                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    children: "Julgamento"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "home",
                                    href: "/",
                                    children: "In\xedcio"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    className: "icon__home",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineHome, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    className: "clan",
                                    href: "/clan",
                                    children: "Clan"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/clan",
                                    className: "icon__banner",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(gi_.GiTatteredBanner, {})
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime.jsx(gi_.GiHamburgerMenu, {
                                onClick: ()=>{
                                    ativa === true ? setAtiva(false) : setAtiva(true);
                                }
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(MenuHam, {
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                onClick: ()=>setAtiva(false),
                                children: /*#__PURE__*/ jsx_runtime.jsx(ri_.RiDeleteBack2Line, {})
                            }),
                            ativado: ativa
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/components/Footer/index.tsx



const FooterD = (external_styled_components_default()).div`
    
    background-color: #ad9c99;
    border-top: 1px solid #410c03;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2,p{
        color:#410c03;
    }
`;
function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FooterD, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                children: [
                    "Julgamento",
                    /*#__PURE__*/ jsx_runtime.jsx(gi_.GiTatteredBanner, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: "Feito por @arthurandrejozuk"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/components/PaginaDefault/index.tsx




function PaginaDefault({ children, child }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Cabecalho, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Banner, {
                child: child
            }),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"1","modo":"Crisol","tipo":"PvP","descricao":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","img":"/images/modos/crisol.png","cor":"rgba(255, 0, 45, 0.8)","corTexto":"#fca2a2"},{"id":"2","modo":"Vanguarda","tipo":"PvE","descricao":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","img":"/images/modos/vanguarda.png","cor":"rgba(22, 93, 237, 0.8)","corTexto":"#152999"},{"id":"3","modo":"Incursão","tipo":"PvE","descricao":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","img":"/images/modos/raid.png","cor":"rgba(58, 71, 96, 0.8)","corTexto":"#132831"},{"id":"4","modo":"Desafios de Osiris","tipo":"PvP","descricao":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","img":"/images/modos/osiris.png","cor":"rgba(255, 124, 23, 0.8)","corTexto":"#ffdd6b"}]');

/***/ })

};
;