import styled from "styled-components";
import {GiTatteredBanner} from 'react-icons/gi';
const FooterD = styled.div`
    
    background-color: #ad9c99;
    border-top: 1px solid #410c03;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2,p{
        color:#410c03;
    }
`

export default function Footer(){
    return(
        <FooterD>
            <h2>Julgamento<GiTatteredBanner/></h2>
            <p>Feito por @arthurandrejozuk</p>
        </FooterD>
    )
}