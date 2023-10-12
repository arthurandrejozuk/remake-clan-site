import styled from 'styled-components';
import modos from '../../../../public/json/modos.json';

const Info = styled.ul`
    
    display: flex;
    flex-direction: column;
;
    a{
        text-decoration: none;
        color: antiquewhite;
        border: 4px solid #77625e;
        margin-bottom:40px;
    }
    a:hover{
        border-bottom: 4px solid #410c03;
    }
`

export default function MenuInfo(){
    return(
        <Info>
            {modos.map(modo => {
                return(
                    <li key={modo.id}>
                        <a href={`/modos/${modo.id}`}>{modo.modo}</a>
                    </li>
                )
            })}
        </Info>
    )
}