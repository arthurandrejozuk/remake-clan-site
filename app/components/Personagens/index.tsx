import styled from "styled-components";
import personagens from "../../../public/json/personagens.json";
import { AiOutlinePlus } from 'react-icons/ai';
import {RiDeleteBack2Line} from 'react-icons/ri';
import { useState } from "react";
import Modal from "../Modal";
import { themes } from "../../../theme/theme";




const PersonagemDiv = styled.div`
    
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
   
`
const BotaoDiv = styled.div`
    
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
`
const Botao = styled.button`
    
        
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
        
`

function mostraPersonagens(quantidade, setQuantidade, setBotao) {
    if (quantidade !== personagens.length) {
        setQuantidade(quantidade + 1)
    }
    if (quantidade >= personagens.length) {
        setBotao("Acabou...")
    }
}

export default function Personagens() {
    
    const [ativado, setAtivado] = useState(false)
    const [quantidade, setQuantidade] = useState(1)
    const [botao, setBotao] = useState("Ver mais")
    const doisPersonagens = personagens.slice(0, quantidade);
  
    

    return (
        <>
            {doisPersonagens.map((personagem) => {
                let corFundo = personagem.corFundo
                console.log(themes)
                return (
                    <PersonagemDiv key={personagem.key} style={{ backgroundColor: `rgba(${corFundo}, 0.5)` }}>
    
                        <img className='imagem' width={300} height={500} src={personagem.imagem} alt="Caçador do Fonix" />

                        <h2 >{personagem.nome}</h2>
                        <h3>{personagem.classe_principal}</h3>
                        <h3>Subclasse favorita: <h3 id="sub" style={{color: themes.find(theme => personagem.subclasse_favorita === theme.identificado)?.fontColor || '#1b0229'}}>{personagem.subclasse_favorita}</h3></h3>
                        <p>
                            {personagem.descricao}
                        </p>
                    </PersonagemDiv>
                )
            }
            )}

            <Modal ativa={ativado}>
               <span>
                    <button onClick={() => setAtivado(false)}><RiDeleteBack2Line/></button>
               </span>
            </Modal>
            <BotaoDiv>
                <Botao onClick={() => {
                    mostraPersonagens(quantidade, setQuantidade, setBotao)
                }
                }>{botao}</Botao>
                <span>
                    <AiOutlinePlus onClick={() => { ativado === true ? setAtivado(false) : setAtivado(true); }} />
                </span>
            </BotaoDiv>
         
    </>
    )
}
