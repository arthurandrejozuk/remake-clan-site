import styled from 'styled-components';
// import Personagens from '../Personagens';
import Cards from '../Cards';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Personagens = dynamic(() => import('../Personagens'))

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

const LoadingComponents = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    .loading-spinner {
        border: 6px solid #f3f3f3;
        border-top: 6px solid #e7380c;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
}

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

`
export default function Principal() {


    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
        setIsClient(true)
    }, [])
 

    return(
        <>
        {isClient ?   
            <PrincipalDiv>
                <Personagens/>
                <Div>
                    <Cards/>
                </Div>
            </PrincipalDiv> 
        : <LoadingComponents>
            <div className='loading-spinner'></div>
          </LoadingComponents>}
        </>
    )
}
