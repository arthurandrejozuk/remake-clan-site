import styled from 'styled-components';
import Personagens from '../Personagens';
import Cards from '../Cards';

const PrincipalDiv = styled.div`
    
    display: flex;
    justify-content: center;
    margin-top: 24px;
    margin-right: 100px;
    margin-left: 100px;
    margin-bottom: 24px;
    flex-direction: column;
    div{
        margin-bottom: 32px;
    }
    h2{
        margin-bottom: 6px ;
    }
    h3{
        margin-bottom: 8px;
    }
    .volta{
      
    }
    .imagem{
        float: left;
        border-radius: 12px;
        margin-right: 12px;
        
    }
  
    a{
        text-decoration: none;
        color: antiquewhite; 
        border-bottom: 2px solid antiquewhite;
    }
    a:hover{
        border-bottom: 2px solid #410c03;
        
    }

    @media(min-width: 1000px){
        margin-right: 300px;
        margin-left: 300px;
        
    }
`

const Div = styled.div`
    display: flex;
    justify-content: center;
`
export default function Principal() {
    return(
        <PrincipalDiv>
            <Personagens/>
            <Div>
                <Cards/>
            </Div>
        </PrincipalDiv>
    )
}
