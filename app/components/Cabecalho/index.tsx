import styled from "styled-components";
import Logo from "../Logo";
import {GiTatteredBanner, GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineHome} from 'react-icons/ai';
import {RiDeleteBack2Line} from 'react-icons/ri'
import MenuHam from "../MenuHam";
import { useState } from "react";
import Link from "next/link";

const Header = styled.div`
    
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #ad9c99;
    border-bottom: 1px solid #350701;

    h1{
        color: #350701;
    }

    ul{
        display: flex;
        align-items: center;
        gap: 80px;
        width: 100%;

        justify-content: center;
    }
    li{
        list-style-type: none;
        text-decoration: none;
        color: #410c03;
        font-size: 32px;
        transition: 100ms;
        display: flex;
        align-items: center;
    }
     .home, .clan{
        text-decoration: none;
        color: #410c03;
        font-size: 28px;
        border-bottom: 2px solid #ad9c99 ;
        transition: 100ms;
        
    }
    .home:hover, .clan:hover{
        border-bottom: 2px solid antiquewhite;
        border-radius: 4px
        
    }
    span{
        margin-right: 40px;
        font-size: 40px;
        color: #410c03;
    }
    span:hover{
        color: #350701;
        cursor: pointer;
    }

    button{
        font-size: 40px;
        background-color: #77625e;
        color: rgb(250, 235, 215);
        border:none;
        height: 36px;
        margin-top: 12px;
    }
    button:hover{
        color: #4d0d03;
        cursor: pointer;
    }
    .logo-image{
        border-right: 2px solid #350701;
        margin-right: 12px;
        
    }
    .icon__banner{
        color: #350701;
       
    }
    .icon__home{
        display: none;
       
    }

    @media(max-width: 1000px){
        h1{
            display: none;
        }
        .home, .clan{
            display: none;
        };
        .icon__home, .icon__banner{
            display:  block;
            color: #350701;
            font-size: 36px;
        }
        ul{
            gap: 20px;
            margin-right:12px;
        }
    }


`

export default function Cabecalho(){

    const [ativa, setAtiva] = useState(false)

    return(
        <>
            <Header id="inicio"> 
                <Logo/>
                <h1>Julgamento</h1>
                <ul>
                    <li>
                        <Link className="home" href="/">
                            Início      
                        </Link>
                        <Link href="/" className="icon__home"><AiOutlineHome/></Link>
                    </li>
                    <li>
                        <Link className="clan" href="/clan">
                            Clan                       
                        </Link>
                        <Link href="/clan" className="icon__banner"><GiTatteredBanner/></Link>
                    </li>
                  
                        
                   
                </ul>
                <div>
                    <span>
                        <GiHamburgerMenu onClick={() => {ativa === true ? setAtiva(false) : setAtiva(true);}}/>
                    </span>
                    <MenuHam children={<button onClick={() => setAtiva(false)}><RiDeleteBack2Line/></button>} ativado={ativa}/>
                </div>
            </Header>
        </>
    )
}