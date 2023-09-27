import styled from "styled-components";
import personagens from "../../../public/json/personagens.json";
import Image from "next/image";
import { useState } from "react";

const PersonagemDiv = styled.div`
    
    border-radius: 12px;
    padding: 12px;
    color: #fffdf7;
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

function mostraPersonagens(quantidade, setQuantidade, setBotao){
    if(quantidade !== personagens.length){
        setQuantidade(quantidade + 1)
    } 
    if(quantidade >= personagens.length){
        setBotao("Acabou...")
    }
}

export default function Personagens(){

    const [quantidade, setQuantidade] = useState(1)
    const [botao, setBotao] = useState("Ver mais")
    const doisPersonagens = personagens.slice(0, quantidade);

    return(
        <>
        {doisPersonagens.map((personagem)   => {
            let corFundo = personagem.estilo.corFundo;
            return(
                <PersonagemDiv  style={{backgroundColor: `rgba(${corFundo}, 0.5)`}}>
                    
                        <Image className='imagem' width={300} height={500} src={personagem.imagem} alt="Caçador do Fonix" />  
                    
                    <h2 key={personagem.key}>{personagem.nome}</h2>
                    <h3>{personagem.classe_principal}</h3>
                    <h3><span>Subclasse favorita: </span>{personagem.subclasse_favorita}</h3>
                    <p>
                        {personagem.descricao}
                    </p>
                </PersonagemDiv>
            )}
    )}
        <BotaoDiv>
            <Botao onClick={() => {
                mostraPersonagens(quantidade, setQuantidade, setBotao)
            }
                }>{botao}</Botao>
        </BotaoDiv>
    </>
    )}
