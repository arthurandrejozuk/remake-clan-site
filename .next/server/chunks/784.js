"use strict";
exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 5784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Personagens)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./public/json/personagens.json
const personagens_namespaceObject = JSON.parse('[{"key":"1","nome":"Fonix","classe_principal":"Caçador","subclasse_favorita":"Strand","imagem":"/images/hunter_fonix.png","descricao":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.","corFundo":"08,83,95","subclasses":["Solar","Arco","Vacuo","Strand","Stasis"]},{"key":"2","nome":"Apodiense","classe_principal":"Caçador","subclasse_favorita":"Solar","imagem":"/images/hunter_apo.png","descricao":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.","corFundo":"08,83,95","subclasses":["Solar","Arco","Vacuo","Strand","Stasis"]},{"key":"3","nome":"Luffy","classe_principal":"Arcano","subclasse_favorita":"Incógnita","imagem":"/images/arcano_.png","descricao":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.","corFundo":"203,160,68","subclasses":["Solar","Arco","Vacuo","Strand","Stasis"]},{"key":"4","nome":"Josney","classe_principal":"Titan","subclasse_favorita":"Incógnita","imagem":"/images/titan_josney.png","descricao":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.","corFundo":"183,58,79","subclasses":["Solar","Arco","Vacuo","Strand","Stasis"]}]');
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./app/components/Modal/index.tsx



const ModalDiv = (external_styled_components_default()).div`
  
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    display: flex;
  }
  section{
    padding: 20px;
    background-color: antiquewhite;
    display: flex;
    width: 450px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
  form{
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap ;
    gap: 12px;
  }
  li{
    list-style-type: none;
  }
  label{
    display: flex;
    align-items: center;
  }
`;
let arrPerso = [
    {}
];
function Modal({ ativa, children }) {
    const [nome, setNome] = (0,external_react_.useState)("");
    const [classe, setClasse] = (0,external_react_.useState)("");
    function criaPersonagem({ nome, classe }) {
        const objPersonagens = {
            nome: nome,
            classe: classe
        };
        const novoPersonagem = arrPerso.push(objPersonagens);
        console.log(arrPerso);
        return novoPersonagem;
    }
    if (ativa) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModalDiv, {
            children: [
                children,
                /*#__PURE__*/ jsx_runtime.jsx("section", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        onSubmit: (evento)=>{
                            evento.preventDefault();
                            criaPersonagem({
                                nome,
                                classe
                            });
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                type: "text",
                                value: nome,
                                required: true,
                                placeholder: "Nome",
                                onChange: (event)=>{
                                    setNome(event.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Ca\xe7ador",
                                                checked: classe === "Ca\xe7ador",
                                                onChange: (e)=>{
                                                    setClasse(e.target.value);
                                                }
                                            }),
                                            " Ca\xe7ador"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Titan",
                                                checked: classe === "Titan",
                                                onChange: (e)=>{
                                                    setClasse(e.target.value);
                                                }
                                            }),
                                            "Titan"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Arcano",
                                                checked: classe === "Arcano",
                                                onChange: (e)=>{
                                                    setClasse(e.target.value);
                                                }
                                            }),
                                            "Arcano"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                children: "Adicionar"
                            })
                        ]
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {});
}

;// CONCATENATED MODULE: ./theme/theme.tsx
const solarTheme = {
    identificado: "Solar",
    fontColor: "#FF6969"
};
const vacuoTheme = {
    identificado: "V\xe1cuo",
    fontColor: "#27005D"
};
const arcoTheme = {
    identificado: "Arco",
    fontColor: "#337CCF"
};
const strandTheme = {
    identificado: "Strand",
    fontColor: "#96C291"
};
const stasisTheme = {
    identificado: "Stasis",
    fontColor: "#96B6C5"
};
const themes = [
    solarTheme,
    vacuoTheme,
    arcoTheme,
    strandTheme,
    stasisTheme
] // export {
 //     solarTheme,
 //     vacuoTheme,
 //     arcoTheme,
 //     strandTheme,
 //     stasisTheme
 // }
;

;// CONCATENATED MODULE: ./app/components/Personagens/index.tsx









const PersonagemDiv = (external_styled_components_default()).div`
    
    border-radius: 12px;
    padding: 12px;
    color: #fffdf7;
    #sub{
        
    }
    @media(max-width: 550px){
        width: 300px;
        .imagem{
            margin-bottom: 12px;
            max-width: 270px;
            width: auto;
        }
    }
   
`;
const BotaoDiv = (external_styled_components_default()).div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    span{
        color:#350701;
        font-size: 24px;
    }
    span:hover{
        cursor: pointer;
    }
`;
const Botao = (external_styled_components_default()).button`
    
        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        padding: 12px;
        border: none;
        background-color: #d6d6d6;
        cursor: pointer;
        border-bottom: 1px solid #410c03;
        color:#410c03;
        font-size: 16px;
        font-weight: 600;
        
`;
function mostraPersonagens(quantidade, setQuantidade, setBotao) {
    if (quantidade !== personagens_namespaceObject.length) {
        setQuantidade(quantidade + 1);
    }
    if (quantidade >= personagens_namespaceObject.length) {
        setBotao("Acabou...");
    }
}
function Personagens() {
    const [ativado, setAtivado] = (0,external_react_.useState)(false);
    const [quantidade, setQuantidade] = (0,external_react_.useState)(1);
    const [botao, setBotao] = (0,external_react_.useState)("Ver mais");
    const doisPersonagens = personagens_namespaceObject.slice(0, quantidade);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            doisPersonagens.map((personagem)=>{
                let corFundo = personagem.corFundo;
                console.log(themes);
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(PersonagemDiv, {
                    style: {
                        backgroundColor: `rgba(${corFundo}, 0.5)`
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            className: "imagem",
                            width: 300,
                            height: 500,
                            src: personagem.imagem,
                            alt: "Ca\xe7ador do Fonix"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: personagem.nome
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: personagem.classe_principal
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                            children: [
                                "Subclasse favorita: ",
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    id: "sub",
                                    style: {
                                        color: themes.find((theme)=>personagem.subclasse_favorita === theme.identificado)?.fontColor || "#1b0229"
                                    },
                                    children: personagem.subclasse_favorita
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: personagem.descricao
                        })
                    ]
                }, personagem.key);
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Modal, {
                ativa: ativado,
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        onClick: ()=>setAtivado(false),
                        children: /*#__PURE__*/ jsx_runtime.jsx(ri_.RiDeleteBack2Line, {})
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BotaoDiv, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Botao, {
                        onClick: ()=>{
                            mostraPersonagens(quantidade, setQuantidade, setBotao);
                        },
                        children: botao
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlinePlus, {
                            onClick: ()=>{
                                ativado === true ? setAtivado(false) : setAtivado(true);
                            }
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;