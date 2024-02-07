import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { themes } from "../../../theme/theme";
import { AiOutlinePlus } from 'react-icons/ai';
import {RiDeleteBack2Line} from 'react-icons/ri';
import Modal from "../Modal";

const PersonagemDiv = styled.div`
    
    border-radius: 12px;
    padding: 12px;
    max-width: 800px;
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
const DescStyled = styled.div`
    
    width: 750px;
    @media(max-width: 550px){
        width: auto;
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
//Tipando os dados da api
type CaractersProps = {
    key:number;
    nome: string;
    subclasse: string;
    classe: string;
    imagem: string;
    descricao: string;
    corFundo: string;
}




export default function PersonagensBanco() {
    // colocando a api em uma variante como array
   
    const [quantidade, setQuantidade] = useState(1)
    const [botao, setBotao] = useState("Ver mais")
    const [data, setData] = useState([]);
    const doisPersonagens = data?.slice(0, quantidade)
    const [ativado, setAtivado] = useState(false)

   
    

    function mostraPersonagens(quantidade, setQuantidade, setBotao) {
        if (quantidade !== data?.length) {
            setQuantidade(quantidade + 1)
        }
        if (quantidade >=  data?.length) {
            setBotao("Acabou...")
        }
    }

    //capturando a api com useEffect

    useEffect(() => {
        // funcao assincrona pois é um promessa
        async function fetchData() {
            try {
                const response = await fetch('/api/guardioes/optin');
                const responseData = await response.json();
                setData(responseData.data);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        // logo após aciona a funcao
        fetchData();
    }, [])
  

    return (
        <>                                 
            {doisPersonagens?.map((personagem: CaractersProps) => {
                return (
                        <PersonagemDiv key={personagem.key} style={{ backgroundColor: `rgba(${personagem.classe === "Caçador" ? "08,83,95, 0.8" : personagem.classe === "Titan" ? "183,58,79, 0.8" : personagem.classe === "Arcano"? "203,160,68,0.8" : null})` }}>

                            <img className='imagem' width={300} height={500} src={personagem.imagem === null ? "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80" : personagem.imagem } alt="Caçador do Fonix" />
                        <DescStyled>
                            <h2 >{personagem.nome}</h2>
                            <h3>{personagem.classe}</h3>
                            <h3>Subclasse favorita: <h3 id="sub" style={{ color: themes.find(theme => personagem.subclasse === theme.identificado)?.fontColor || '#1b0229' }}>{personagem.subclasse}</h3></h3>
                            <p>
                                {personagem.descricao}
                            </p>
                        </DescStyled>
                        </PersonagemDiv>
  
                )
            })}
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