import Link from "next/link";
//modos é um arquivo json que tem configurações para criação de mais de uma pagina,
// nesse caso fizemos uma pagina para cada modo
import modos from '../../public/json/modos.json';
import PaginaDefault from "../../app/components/PaginaDefault";
import styled from 'styled-components';

// getStaticProps permite a criação de páginas estaticas 
//e também usar arquivos com json para mapear-lo 
//e criar uma pagina estatica para cada objeto nesse caso.
export const getStaticPaths = (async () => {
    const paths = modos.map((modo) => {
        return {params: {id: `${modo.id}`}}
    })
    //configurações padroes
    return {
        paths: paths,
        fallback: false,
    }
})
// como foi feito em cima, o parametro id é nosso id do modo tbm, porém poderia ser outro
export async function getStaticProps(context){
    //verifica se o id passado e undefined caso, não, retorna o parametro normal 
    const id = context.params.id !== undefined ? context.params.id : null;
    const modo = modos.find((atual) => {
        //compara o id do params com id do modo atual com o find 
        if(atual.id === id){
            return true
        }
        return false
    })
    return{ 
        //caso seja true retornara essas props para serem usadas no caso do modo espeficico
        //essas interrogações permitem que um modo não tenha determinado dado
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
// recebe props do getStaticProps
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