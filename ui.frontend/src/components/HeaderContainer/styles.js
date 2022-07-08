import styled from "styled-components";

export const StyledHead = styled.header`
display: flex;
justify-content: space-between;
width: 94%;
margin: 0 auto;
.headImg{
    position: static;
    max-width: 300px;
    max-height: 84px;
    @media (max-width: 768px){
        width: 50%;
    }
}
`