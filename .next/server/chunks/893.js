"use strict";
exports.id = 893;
exports.ids = [893];
exports.modules = {

/***/ 6893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PersonagensBanco)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
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

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
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
  .botao_form{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    padding: 4px;
    color: #350701;
    border-radius: 4px;
    background-color: antiquewhite;
  }
  .botao_form:hover {
    background-color: #dac2a4;
    cursor: pointer;
  }
  input{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    padding: 4px;
    border-radius: 4px;
    color: #350701;
    background-color: antiquewhite;
  }
  input::placeholder{
    color: #350701;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-right: none;
    padding: 4px;
    color: #350701;
    border-bottom-left-radius: 4px;
    border-top-left-radius:4px;
    background-color: antiquewhite;
  }
  button:hover{
    background-color: #dac2a4;
    cursor: pointer;
  }
  section{
    padding: 32px;
    background-color: #e9d6bf;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 2px solid #350701;
  }
  form{
    flex-direction: column;
    display: flex;
    gap: 12px;
    justify-content: center;
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
const StyledLabels = (external_styled_components_default()).div`
  
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;

`;
// useForm é uma função onde guardaremos os valores 
//e onde criaremos funções com handleChange : 
// que 
// clearForm
// ele se torna um meio termo para criação de novos objetos sem que precisemos colocar um por um dos obj e classifica-los
function useForm(initialValues) {
    const [values, setValues] = (0,external_react_.useState)(initialValues);
    return {
        values,
        //escutará a o evento de mudança no target e entao fará as mudanças com setValues, que recebe um obj
        handleChange (evento) {
            // separa o name que classifica em um input o que esta sendo o target 
            // e o value é o valor do name 
            const { name, value } = evento.target;
            setValues({
                // pega os valores anteriores
                ...values,
                //são valores e nomes genericos para representar os do obj concreto
                [name]: value
            });
        },
        clearForm () {
            //esse codigo pode mudar, pois no caso de novos valores para preencher eu terei de coloca-los aqui tbm
            setValues({
                nome: "",
                classe: "",
                subclasse: ""
            });
        }
    };
}
function Modal({ ativa, children }) {
    const form = useForm({
        // criando um form com as configs do form que será usado
        initialValue: {
            nome: "",
            classe: "",
            subclasse: ""
        }
    });
    // ativa é uma props que tem valor booleano, pois um modal não deve aparecer caso 
    // ativa = false;
    // permitindo que essa mudança ocorra por outro componente
    if (ativa) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModalDiv, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(StyledLabels, {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime.jsx("section", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        onSubmit: (evento)=>{
                            evento.preventDefault();
                            console.log(form);
                            //utilizamos nossa api, no caso aqui seria o metodo post
                            // que recebe um body 
                            fetch("/api/guardioes/optin", {
                                method: "POST",
                                body: JSON.stringify(form.values),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then(async (resposta)=>{
                                console.log(resposta.json());
                            });
                            form.clearForm();
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(StyledLabels, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "text",
                                    value: form.values.nome,
                                    name: "nome",
                                    required: true,
                                    placeholder: "Nome",
                                    onChange: form.handleChange
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledLabels, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Ca\xe7ador",
                                                name: "classe",
                                                checked: form.values.classe === "Ca\xe7ador",
                                                onChange: form.handleChange
                                            }),
                                            " Ca\xe7ador"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Titan",
                                                name: "classe",
                                                checked: form.values.classe === "Titan",
                                                onChange: form.handleChange
                                            }),
                                            "Titan"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Arcano",
                                                name: "classe",
                                                checked: form.values.classe === "Arcano",
                                                onChange: form.handleChange
                                            }),
                                            "Arcano"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledLabels, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Solar",
                                                name: "subclasse",
                                                checked: form.values.subclasse === "Solar",
                                                onChange: form.handleChange
                                            }),
                                            " Solar"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Vacuo",
                                                name: "subclasse",
                                                checked: form.values.subclasse === "Vacuo",
                                                onChange: form.handleChange
                                            }),
                                            "V\xe1cuo"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Arco",
                                                name: "subclasse",
                                                checked: form.values.subclasse === "Arco",
                                                onChange: form.handleChange
                                            }),
                                            "Arco"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Strand",
                                                name: "subclasse",
                                                checked: form.values.subclasse === "Strand",
                                                onChange: form.handleChange
                                            }),
                                            "Strand"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "radio",
                                                value: "Stasis",
                                                name: "subclasse",
                                                checked: form.values.subclasse === "Stasis",
                                                onChange: form.handleChange
                                            }),
                                            "Stasis"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "botao_form",
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

;// CONCATENATED MODULE: ./app/components/PersonagensBanco/index.tsx







const PersonagemDiv = external_styled_components_.styled.div`
    
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
const BotaoDiv = external_styled_components_.styled.div`
    
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
const Botao = external_styled_components_.styled.button`
    
        
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
function PersonagensBanco() {
    // colocando a api em uma variante como array
    const [quantidade, setQuantidade] = (0,external_react_.useState)(1);
    const [botao, setBotao] = (0,external_react_.useState)("Ver mais");
    const [data, setData] = (0,external_react_.useState)([]);
    const doisPersonagens = data.slice(0, quantidade);
    const [ativado, setAtivado] = (0,external_react_.useState)(false);
    function mostraPersonagens(quantidade, setQuantidade, setBotao) {
        if (quantidade !== data.length) {
            setQuantidade(quantidade + 1);
        }
        if (quantidade >= data.length) {
            setBotao("Acabou...");
        }
    }
    //capturando a api com useEffect
    (0,external_react_.useEffect)(()=>{
        // funcao assincrona pois é um promessa
        async function fetchData() {
            try {
                const response = await fetch("/api/guardioes/optin");
                const responseData = await response.json();
                setData(responseData.data);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        }
        // logo após aciona a funcao
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            doisPersonagens.map((personagem)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(PersonagemDiv, {
                    style: {
                        backgroundColor: `rgba(${personagem.corFundo || "blue"}, 0.5)`
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
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
                            children: personagem.classe
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                            children: [
                                "Subclasse favorita: ",
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    id: "sub",
                                    style: {
                                        color: themes.find((theme)=>personagem.subclasse === theme.identificado)?.fontColor || "#1b0229"
                                    },
                                    children: personagem.subclasse
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