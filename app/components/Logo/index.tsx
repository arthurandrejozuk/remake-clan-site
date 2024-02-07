import styled from 'styled-components';

const Image = styled.img`
    
        
        align-self: start;
        justify-self: start;
        width: 200px;
    
    
    

`

const Titulo = styled.h1`
    
    color: #410c03;
    @media(max-width: 500px){
        display: none;
    }
`

export default function Logo({title}) {
    return(
        <>
            
            <Image className='logo-image' src='https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltfd59ef77fa3c5cc1/63d01595a5695963fc8be4ef/lfl-media-wallpaper-1-full.jpg' alt="imagem da logo" />
            <Titulo>{title}</Titulo>
        </> 
    )
}

//" alt="imagem da logo