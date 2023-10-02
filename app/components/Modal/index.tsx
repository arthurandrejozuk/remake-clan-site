import styled from 'styled-components';
import personagens from '../../../public/json/personagens.json';
import { useState } from 'react';

interface ModalProps {
    ativa: boolean
    children: React.ReactNode
}

const ModalDiv = styled.div`
  
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
`


interface PersonagensProps {
     
        nome: string;
        classe: string;
  
    }


let arrPerso = [{}]

export default function Modal({ativa, children}: ModalProps){

    const [nome, setNome] = useState('');
    const [classe, setClasse] = useState('')
    
    function criaPersonagem({nome, classe}:PersonagensProps) {
        const objPersonagens = {nome:nome, classe: classe} 
        const novoPersonagem = arrPerso.push(objPersonagens);
        console.log(arrPerso);
        return novoPersonagem;
    }

    if(ativa){
        return(
            <ModalDiv>
                {children}
                <section>
                        <form onSubmit={(evento => {
                            evento.preventDefault();

                            criaPersonagem({nome, classe});
                            
                        })}>
                                <input 
                                    type="text"
                                    value={nome}
                                    required
                                    placeholder='Nome'
                                    onChange={(event) => {setNome(event.target.value)}}
                                  />   
                                  <>
                                    <label> 
                                        <input 
                                        type="radio" 
                                        value='Caçador'
                                        checked={classe === 'Caçador'}
                                        onChange={(e) => {setClasse(e.target.value)}}
                                    /> Caçador</label>
                                    <label>
                                    <input 
                                        type="radio" 
                                        value='Titan'
                                        checked={classe === 'Titan'}
                                        onChange={(e) => {setClasse(e.target.value)}}
                                    />Titan</label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            value='Arcano'
                                            checked={classe === 'Arcano'}
                                            onChange={(e) => {setClasse(e.target.value)}}
                                        />Arcano</label>
                                  </>
                            <button>Adicionar</button>
                        </form> 
                </section>
            </ModalDiv>
        )
    }
    return(
        <>
        </>
    )
}