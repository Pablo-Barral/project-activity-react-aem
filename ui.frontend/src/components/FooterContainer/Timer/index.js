import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const Timer = ({time}) => {

    const nav = useNavigate()

    const[timer, setTimer] = useState(time)
    let timeControl = parseInt(localStorage.getItem('time'))

    const count = () => {
        if(timeControl){
            const counter = setInterval(()=>{
                if(timeControl > 0){
                    timeControl -= 1
                    if(parseInt(localStorage.getItem('time')) === timeControl + 1 || parseInt(localStorage.getItem('time')) === timeControl){
                        localStorage.setItem('time', timeControl)
                    }else{
                        timeControl = parseInt(localStorage.getItem('time'))
                    }
                    setTimer(localStorage.getItem('time'))
                }else{
                    clearInterval(counter)
                    nav(url_variable)
                }
            }, 1000)
        }else{
            console.log('else')
        }
    }
    
    
    useEffect(()=>{
        localStorage.setItem('time', time)
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
font-size: 2.9rem;
font-weight: 700;
margin: 0;
`
const Seconds = styled.p`
color: white;
margin: 0;
font-size: 0.75rem;
`

export default Timer