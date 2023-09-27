import styled from 'styled-components';
import Imagem from '../../public/images/logo-site_clan-remake.jpg'
const ImagemLogo = styled.img`
    
    width: 200px;
 
`

export default function Logo() {
    return(
        <ImagemLogo className='logo-image' src='https://images.contentstack.io/v3/assets/blte410e3b15535c144/bltfd59ef77fa3c5cc1/63d01595a5695963fc8be4ef/lfl-media-wallpaper-1-full.jpg' alt="imagem da logo" />
    )
}

//" alt="imagem da logo