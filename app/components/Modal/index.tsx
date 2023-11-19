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
  
  input{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-bottom: 1px solid;
    padding: 8px;
    border-radius: 4px;
    color: #350701;
    background-color: antiquewhite;
  }

  .radio{
    background-image: -webkit-linear-gradient(0deg, transparent 20%, hsla(0,0%,100%,.7), transparent 80%),
                      -webkit-linear-gradient(90deg, transparent 20%, hsla(0,0%,100%,.7), transparent 80%);
    border-radius: 10px;          
    cursor: pointer;
    display: inline-block;
    margin-right: 15px;
    position: relative;
    -webkit-appearance: none;
  }
  .radio::after{
    border-radius: 25px;
    content: '';
    display: block;
    height: 7px;
    width: 7px;
  }
  .radio:checked::after{
    background-color: #350701;        
  }

  input::placeholder{
    color: #350701;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-bottom: 1px solid;
    padding: 4px;
    color: #350701;
    background-color: #d4bda2;
  }

  button:hover{
    background-color: #dac2a4;
    cursor: pointer;
  }
  
  section{
    text-align: center;
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
  span{
        position: relative;
        left: 450px;
        bottom: 180px;
        button{
          border-bottom: none;
          background-color:#e9d6bf;
          font-size: 32px;
          padding: 10px;
          border-radius: 100%;
        }
      }
  @media(max-width: 500px){
   
      span{
        left: 400px;
        bottom: 180px;
      }
      .radio{
        margin-right: 2px;
      }
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
              subclasse: "",
              descricao:"",
              imagem:""
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
        subclasse: "",
        descricao: "",
        imagem: ""
      }
    })
   
    // ativa é uma props que tem valor booleano, pois um modal não deve aparecer caso 
    // ativa = false;
    // permitindo que essa mudança ocorra por outro componente

    if(ativa){
        return(
          <>
          
            <ModalDiv>
            {children}
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
                              console.log(await resposta.json())
                            })
                            form.clearForm();
                            window.location.reload();
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
                                        className='radio'
                                        type="radio" 
                                        value='Caçador'
                                        name='classe'
                                        checked={form.values.classe === 'Caçador'}
                                        onChange={form.handleChange}
                                    /> Caçador</label>
                                    <label>
                                    <input 
                                        className='radio'
                                        type="radio" 
                                        value="Titan"
                                        name='classe'
                                        checked={form.values.classe  === 'Titan'}
                                        onChange={form.handleChange}
                                    />Titan</label>
                                    <label>
                                        <input 
                                            className='radio'
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
                                        className='radio'
                                        type="radio" 
                                        value='Solar'
                                        name='subclasse'
                                        checked={form.values.subclasse === 'Solar'}
                                        onChange={form.handleChange}
                                    /> Solar</label>
                                    <label>
                                    <input 
                                        className='radio'
                                        type="radio" 
                                        value="Vacuo"
                                        name='subclasse'
                                        checked={form.values.subclasse  === 'Vacuo'}
                                        onChange={form.handleChange}
                                    />Vácuo</label>
                                    <label>
                                        <input 
                                            className='radio'
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
                                            className='radio'
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
                                            className='radio'
                                            type="radio" 
                                            value="Stasis"
                                            name='subclasse'
                                            checked={form.values.subclasse  === 'Stasis'}
                                            onChange={form.handleChange}
                                        />
                                        Stasis
                                      </label>
                                  </StyledLabels>
                                  <StyledLabels>
                                    <input type="text" value={form.values.descricao} required name="descricao" placeholder='Descrição' onChange={form.handleChange} />
                                  </StyledLabels>
                                  <StyledLabels>
                                    <input style={{width: "300px"}} type="text" value={form.values.imagem} required name="imagem" placeholder='Coloque um endereço de imagem' onChange={form.handleChange} />
                                  </StyledLabels>
                            <button className='botao_form'>Adicionar</button>
                        </form> 
                </section>
            </ModalDiv>
          </>
        )
    }
    return(
        <>
        </>
    )
}