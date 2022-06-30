import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Timer = ({time}) => {

    const[timer, setTimer] = useState(time)

    const count = () => {
        if(time){
            const counter = setInterval(()=>{
                if(time > 0){
                    time -= 1
                    setTimer(time)
                }else{
                    clearInterval(counter)
                }
            }, 1000)
        }else{
            console.log('else')
        }
    }
    
    
    useEffect(()=>{
        count()
    },[])

    return(
        <StyledTimer>
            <Refresh>Application refresh in</Refresh>
            <div>
                <Time>{timer}</Time>
                <Seconds>seconds</Seconds>
            </div>
        </StyledTimer>
    )
}

const StyledTimer = styled.div`
display: flex;
justify-content: space-between;
padding-top: 3%;
grid-column: 5;
@media(max-width: 768px){
        display: none;
    }
div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
const Refresh = styled.p`
width: 50%;
color: white;
font-size: 0.75rem;
text-align: right;
`
const Time = styled.p`
color: white;
font-size: 3rem;
font-weight: 700;
margin: 0;
`
const Seconds = styled.p`
color: white;
margin: 0;
font-size: 0.75rem;
`

export default Timer