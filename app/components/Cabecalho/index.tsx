import styled from "styled-components";
import Logo from "../Logo";
import { GiTatteredBanner, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { RiDeleteBack2Line } from "react-icons/ri";
import MenuHam from "../MenuHam";
import { useState } from "react";
import Link from "next/link";

const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center; 
  justify-content: space-between;
  background-color: #ad9c99;
  border-bottom: 1px solid #350701;

  section{
    margin-right: 40px;
  }
  
  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
    text-decoration: none;
    color: #410c03;
    font-size: 24px;
    transition: 100ms;
    display: flex;
    align-items: center;
  }
  .home,
  .clan {
    text-decoration: none;
    color: #410c03;
    font-size: 28px;
    border-bottom: 2px solid #ad9c99;
    transition: 100ms;
    font-weight: 500;
  }
  .home:hover,
  .clan:hover {
    color: #2b0a05;
  }
  span {
    margin-top: 6px;
    font-size: 40px;
    color: #410c03;
  }
  span:hover {
    color: #350701;
    cursor: pointer;
  }

  button {
    font-size: 40px;
    background-color: #77625e;
    color: rgb(250, 235, 215);
    border: none;
    height: 36px;
    margin-top: 12px;
  }
  button:hover {
    color: #4d0d03;
    cursor: pointer;
  }
  .logo-image {
    border-right: 2px solid #350701;
    margin-right: 12px;
  }
  .icon__banner {
    color: #350701;
  }
  .icon__home {
    display: none;
  }

  @media (max-width: 800px) {
    .home,
    .clan {
      display: none;
    }
    .icon__home,
    .icon__banner {
      display: block;
      color: #350701;
      font-size: 36px;
    }
    ul {
      margin-right: 12px;
    }
  }
`;
const HeaderDescription = styled.div`
    gap: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 120px;
    color: #043d6b;
    text-align: center;
`;

const HeaderOpcoes = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
`;



export default function Cabecalho() {
  const [ativa, setAtiva] = useState(false);

  return (
    <>
      <Header id="inicio">
        <HeaderOpcoes>
          <Logo title={'Julgamento'}/>
        </HeaderOpcoes>
        <HeaderDescription>
          <Link href="/">
            <li className="home">
              Início
              <AiOutlineHome className="icon__home" />
            </li>
          </Link>
          <Link href="/clan">
            <li className="clan">
              Clan
              <GiTatteredBanner />
            </li>
          </Link>
          </HeaderDescription>
          <section>
            <span>
              <GiHamburgerMenu
                onClick={() => {
                  ativa === true ? setAtiva(false) : setAtiva(true);
                }}
              />
            </span>
            <MenuHam
              children={
                <button onClick={() => setAtiva(false)}>
                  <RiDeleteBack2Line />
                </button>
              }
              ativado={ativa}
            />
          </section>
       
      </Header>
    </>
  );
}
