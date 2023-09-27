import styled from 'styled-components';

const BannerStyled = styled.div`
    
    background-image: url("https://dotesports.com/wp-content/uploads/2023/08/2023_Final_Shape_Reveal_Press_Kit_Standard_Key_Art_16x9.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    opacity:0.9;
    h2{
        font-size: 44px;
        color: antiquewhite;
        text-shadow: #53150a 2px 0 10px;
    }
`

interface BannerProps {
    child?: string
}

export default function Banner({child}:BannerProps) {
    return(
        <BannerStyled>
            <h2>{child}</h2>
        </BannerStyled>
    )
}