import Banner from "../Banner";
import Cabecalho from "../Cabecalho";
import Footer from "../Footer";
import styled from "styled-components";

interface PaginaProps{
    children: React.ReactNode;
    child:string
}



export default function PaginaDefault({children, child}:PaginaProps){
    
    return(
        <>
            <Cabecalho/>
            <Banner child={child}/>
            {children}
            <Footer/>
        </>
    )
}