import styled from "styled-components";
import React from "react";
import MenuInfo from "./MenuInfo";
interface MenuProps {
    ativado: boolean
    children?:React.ReactNode
}

const StyledMenuHam = styled.div`
    
    position: fixed;
    opacity: 0.9;
    height: 100%;
    z-index: 2;
    display: flex;
    right: 0;
    top: 0;
    padding-left:12px ;
    background-color:  #77625e;
    width: 45%;
    justify-content: center;
    border-left: 2px solid  rgb(250, 235, 215);
    transition: 500ms;

    div{
        display: flex;
        align-items: center;
        margin-right:24px ;
    }


    @media (max-width: 500px) {
        width: 50%
    }
`


export default function MenuHam({ativado, children}:MenuProps){
   if(ativado){
        return(
        <StyledMenuHam>
            {children}
            <div>
                <MenuInfo/>  
            </div>
        </StyledMenuHam>
        )
   } 
   return(
        <>
        
        </>
   )

}