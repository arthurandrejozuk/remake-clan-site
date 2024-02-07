import styled from "styled-components";
import modos from "../../../../public/json/modos.json";
import { GiTatteredBanner } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
const Info = styled.ul`
  flex-direction: column;
  margin-top: 70px;
  margin-left: 12px;
  display: flex;
  text-align: center;
  gap: 12px;
  h1{
    color: #e5caa6;
    margin-bottom: 8px;
  }
  a {
    display: flex;
    gap: 4px;
    align-items: center;
    text-decoration: none;
    color: antiquewhite;
    transition: 500ms;
  }
  a:hover {
    color: #e5caa6;
  }
`;

const Titulo = styled.h2`
    
    display: flex;
    position: absolute;
    top: 18px;
    right: 100px;
    color: rgb(250, 235, 215);


`

export default function MenuInfo() {
  return (
    <Info>
        <Titulo>Julgamento</Titulo>
        <h1>Menu</h1>
        <li>
            <a href="/"><AiOutlineHome/> Home</a>
        </li>
        <li>
            <a href="/clan"><GiTatteredBanner/> Clan</a>
        </li>
        <h1>Modos</h1>
      {modos.map((modo) => {
        return (
          <li key={modo.id}>
            <a href={`/modos/${modo.id}`}>- {modo.modo}</a>
          </li>
        );
      })}
    </Info>
  );
}
