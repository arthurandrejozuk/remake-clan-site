import Link from "next/link";
import modos from '../../public/json/modos.json';
import PaginaDefault from "../../app/components/PaginaDefault";
import styled from 'styled-components';

export const getStaticPaths = (async () => {
    const paths = modos.map((modo) => {
        return {params: {id: `${modo.id}`}}
    })
    return {
        paths: paths,
        fallback: false,
    }
})

export async function getStaticProps(context){
    const id = context.params.id !== undefined ? context.params.id : null;
    const modo = modos.find((atual) => {
        if(atual.id === id){
            return true
        }
        return false
    })
    return{ 
        props: {
            id: modo?.id,
            title: modo?.modo,
            type: modo?.tipo,
            description: modo?.descricao,
            image: modo?.img,
            textColor: modo?.cor
        }
    }
}

const ModosContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 24px;
    margin-bottom: 24px;
    ul{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        margin-top: 12px;
    }
    h1, h2{
        text-shadow: 1px 1px 2px gray;
    }
    p{
        text-align: center;
        width: 500px;
        margin-bottom: 12px;
    }
    img{
        border-radius: 12px;
        width: 400px;
    }
    
`

export default function Post(props){
	
	return(
		<PaginaDefault child={props.title}>
             <ModosContainer>
                <ul>
                    <li>
                        <Link href='/'>
                            Ir para Home
                        </Link>
                    </li>
                </ul>
                <div>
                    <h1 style={{color:`${props.textColor}`}}>{props.title}</h1>
                    <h2 style={{color:`${props.textColor}`}}>{props.type}</h2>
                </div>
                <p>{props.description}</p>
                <img src={props.image} alt="imagem do modo" />
            </ModosContainer>
        </PaginaDefault>
	)
}