import styled from 'styled-components'

export const LoginForm = styled.form`
position: relative;
bottom: 145vh;
left: 5vw;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 75%;
height: ${props => props.height ?? '50%'};
min-height: 310px;
@media(max-width: 768px){
    width: 80vw
}
h2{
    color: #FFFFFF;
    font-size: 1.875rem;
    margin: 0;
}
p{
    color: #E9B425;
    font-weight: 700;
    visibility: ${props => props.error ? 'visible' : 'hidden'};
    text-align: center;
    margin: 0;
}
input{
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1.125rem;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    border-radius: 50px; 
    border: 0;
    padding: 20px;
    box-sizing: border-box;
    text-align: center !important;
}
`

export const InputBox = styled.span`
position: relative;
width: 97%;
border: 1px solid ${props => props.error ? '#E9B425' : '#FFFFFF' };
border-radius: 50px;
input{
    background: transparent;
    outline: 0;
    text-align: left !important;
}
img{
    position: absolute;
    right: 3%;
    bottom: 38%;
    height: 20px;
    width: 20px;
}
`