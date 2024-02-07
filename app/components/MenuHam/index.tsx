import styled from "styled-components";
import React from "react";
import MenuInfo from "./MenuInfo";
interface MenuProps {
  ativado: boolean;
  children?: React.ReactNode;
}

const StyledMenuHam = styled.div`
  position: fixed;
  opacity: 0.9;
  height: 100%;
  z-index: 2;
  display: flex;
  right: 0;
  top: 0;
  padding-left: 12px;
  background-color: #77625e;
  width: 300px;
  border-left: 2px solid rgb(250, 235, 215);
  transition: 500ms;
  
  button{
    position: absolute;
  }
`;

export default function MenuHam({ ativado, children }: MenuProps) {
  if (ativado) {
    return (
      <StyledMenuHam>
        {children}
        <MenuInfo />
      </StyledMenuHam>
    );
  }
  return <></>;
}
