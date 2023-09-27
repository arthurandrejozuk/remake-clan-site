import Principal from "../app/components/Main";
import PaginaDefault from "../app/components/PaginaDefault";

export default function Home(){
    return(
        <PaginaDefault child="Início">
           <Principal/>
        </PaginaDefault>
    )
}