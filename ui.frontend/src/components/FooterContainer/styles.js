import styled from "styled-components";

export const StyledFooter = styled.footer`
position: relative;
width: 100%;
bottom: 10vh;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
display: grid;
grid-template-columns: 18.5% 28% 4% 4.5% 12% 19% 7% 7%;
height: 10vh;
z-index: 2;
@media(max-width: 1444px){
    grid-template-columns: 9% 35.5% 4% 3.5% 15% 13% 10% 10%;

}
@media(max-width: 768px){
    grid-template-columns: 27% 73%;
}
.footerText{
    grid-column: 2;
    color: white;
    font-size: 0.75rem;
    text-align: right;
    padding-top: 3%;
    @media(max-width: 1444px){
        font-size: 0.7rem;
    }
    @media(max-width: 768px){
        display: none;
    }
}
span{
    grid-column: 3;
    text-align: center;
    color: white;
    font-size: 4.5rem;
    padding: 7% 10% 15% 10%;
    @media(max-width: 1000px){
        padding: 7% 5%;
        font-size: 4rem;
    }
    @media(max-width: 768px){
        display: none;
    }
}
`
export const ContinueBtn = styled.button`
background: white;
color: #C13216;
font-size: 0.75rem;
border: 0;
grid-column: 7;
text-align: center !important;
@media(max-width: 768px){
        grid-column: 2;
    }
`

export const LogoutBtn = styled.button`
background: transparent;
font-size: 0.75rem;
color: white;
font-weight: 700;
border: 0;
grid-column: 8;
text-align: center !important;
@media(max-width: 768px){
        position: absolute;
        width: 27%;
        height: 100%;
        grid-column: 1;
        background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    }
`