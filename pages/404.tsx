import styled from 'styled-components';

const Page404 = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export default function page404() {
    return(
        <Page404>

          <h1>404 :( pagina não encontrada</h1> 

        </Page404>
    )
}