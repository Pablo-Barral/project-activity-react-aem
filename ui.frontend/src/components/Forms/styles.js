import styled from 'styled-components'

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
height: ${props => props.height ?? '50%'};
p{
    color: #E9B425;
    font-weight: 700;
    visibility: ${props => props.error ? 'visible' : 'hidden'}
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
}
`

export const InputBox = styled.span`
position: relative;
width: 100%;
border: 1px solid ${props => props.error ? '#E9B425' : '#FFFFFF' };
border-radius: 50px;
input{
    background: transparent;
    outline: 0;
    width: 100%;
}
img{
    position: absolute;
    height: 20px;
    width: 20px;
}
`