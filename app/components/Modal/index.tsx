import styled from 'styled-components';
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
`

const StyledLabels = styled.div`
  
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;

`
// useForm é uma função onde guardaremos os valores 
//e onde criaremos funções com handleChange : 
// que 
// clearForm
// ele se torna um meio termo para criação de novos objetos sem que precisemos colocar um por um dos obj e classifica-los
    function useForm (initialValues) {
      const [values, setValues] = useState(initialValues)
      
      return {
          values, 
          //escutará a o evento de mudança no target e entao fará as mudanças com setValues, que recebe um obj
          handleChange(evento) {
              // separa o name que classifica em um input o que esta sendo o target 
              // e o value é o valor do name 
              const {name, value} = evento.target
              setValues({
                // pega os valores anteriores
                  ...values,
                  //são valores e nomes genericos para representar os do obj concreto
                  [name]:value
              })
        
          },
          clearForm() {
            //esse codigo pode mudar, pois no caso de novos valores para preencher eu terei de coloca-los aqui tbm
            setValues({
              nome: "",
              classe: "",
              subclasse: ""
            })
          }
      }
  }

export default function Modal({ativa, children}: ModalProps){

    const form = useForm({
      // criando um form com as configs do form que será usado
      initialValue: {
        nome: "",
        classe: "",
        subclasse: ""
      }
    })
   
    // ativa é uma props que tem valor booleano, pois um modal não deve aparecer caso 
    // ativa = false;
    // permitindo que essa mudança ocorra por outro componente

    if(ativa){
        return(
            <ModalDiv>
              <StyledLabels>
                {children}
              </StyledLabels>
                
              
                <section>
                        <form onSubmit={(evento => {
                            evento.preventDefault();
                            console.log(form);
                            //utilizamos nossa api, no caso aqui seria o metodo post
                            // que recebe um body 
                            fetch("/api/guardioes/optin", {
                              method:"POST",
                              body: JSON.stringify(form.values),
                              headers: {
                                "Content-Type":"application/json"
                              },
                            }).then(async(resposta) => {
                              console.log(resposta.json())
                            })
                            form.clearForm();
                        })}>
                            <StyledLabels>
                              <input 
                                  type="text"
                                  value={form.values.nome}
                                  name='nome'
                                  required
                                  placeholder='Nome'
                                  onChange={form.handleChange}
                                />   
                            </StyledLabels>
                                  <StyledLabels>
                                    <label> 
                                        <input 
                                        type="radio" 
                                        value='Caçador'
                                        name='classe'
                                        checked={form.values.classe === 'Caçador'}
                                        onChange={form.handleChange}
                                    /> Caçador</label>
                                    <label>
                                    <input 
                                        type="radio" 
                                        value="Titan"
                                        name='classe'
                                        checked={form.values.classe  === 'Titan'}
                                        onChange={form.handleChange}
                                    />Titan</label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            value="Arcano"
                                            name='classe'
                                            checked={form.values.classe  === 'Arcano'}
                                            onChange={form.handleChange}
                                        />
                                        Arcano
                                      </label>
                                  </StyledLabels>
                                  <StyledLabels>
                                    <label> 
                                        <input 
                                        type="radio" 
                                        value='Solar'
                                        name='subclasse'
                                        checked={form.values.subclasse === 'Solar'}
                                        onChange={form.handleChange}
                                    /> Solar</label>
                                    <label>
                                    <input 
                                        type="radio" 
                                        value="Vacuo"
                                        name='subclasse'
                                        checked={form.values.subclasse  === 'Vacuo'}
                                        onChange={form.handleChange}
                                    />Vácuo</label>
                                    <label>
                                        <input 
                                            type="radio" 
                                            value="Arco"
                                            name='subclasse'
                                            checked={form.values.subclasse  === 'Arco'}
                                            onChange={form.handleChange}
                                        />
                                        Arco
                                      </label>
                                      <label>
                                        <input 
                                            type="radio" 
                                            value="Strand"
                                            name='subclasse'
                                            checked={form.values.subclasse  === 'Strand'}
                                            onChange={form.handleChange}
                                        />
                                        Strand
                                      </label>
                                      <label>
                                        <input 
                                            type="radio" 
                                            value="Stasis"
                                            name='subclasse'
                                            checked={form.values.subclasse  === 'Stasis'}
                                            onChange={form.handleChange}
                                        />
                                        Stasis
                                      </label>
                                  </StyledLabels>
                            <button className='botao_form'>Adicionar</button>
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