import styled from 'styled-components';
import modos from '../../../public/json/modos.json';
import Link from 'next/link';

const ContainerDiv = styled.div`
    
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 4px;
    width: 600px; 
    img{
        max-width: 330px;
        border-radius: 4px;
    }
    h1,p,a{
        justify-self: center;
    }
    @media(max-width: 700px){
        flex-direction: column;
        width: 330px;
    }
`

const Descricao = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 12px;
    padding: 12px;
    h1,p,a{
        justify-self: center;
    }
   
    
`


export default function Cards(){
    return(
        <section>
            {modos.map((modo) => {
            return(
                <ContainerDiv style={{background: `${modo.cor}`}}>
                
                    <img src={modo.img} alt={modo.modo} />
                    
                    <Descricao>
                        <h1 style={{color: `${modo.corTexto}`}}>
                            {modo.modo}
                        </h1>
                        <p style={{color: `${modo.corTexto}`}}>
                            {modo.tipo}
                        </p> 
                        <Link href={`/modos/${modo.id}`}>{modo.modo}</Link>   
                    </Descricao>
                </ContainerDiv>
                )
            })}
        </section>
    )
}