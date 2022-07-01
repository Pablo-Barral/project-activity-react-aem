import React, { useEffect, useState } from 'react'
import { weekDays, months } from './parseDays'
import styled from 'styled-components'


const CompClock = ({color})=>{

    const [time, setTime] = useState('00:00')
    const [today, setToday] = useState('Please wait while we load your date and time...')


    const clockTime = ()=>{
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let monthDay = date.getDate();
        let weekDay = date.getDay();
        let hour = date.getHours();
        let minute = date.getMinutes();
        month = months[month]
        weekDay = weekDays[weekDay]
        hour < 10 ? hour = '0' + hour : hour = hour
        minute < 10 ? minute = '0' + minute : minute = minute
        setTime(`${hour}:${minute}`)
        setToday(`${weekDay}, ${monthDay} de ${month} de ${year}`)
      }

    useEffect(()=>{
        setInterval(clockTime, 1000)
    },[])

    return(
        <StyledClock color={color}>
            <h2>{time}</h2>
            <p>{today}</p>
        </StyledClock>
    )
}

const StyledClock = styled.div`
color: ${props=>props.color};
display: flex;
flex-direction: column;
align-items: center;
h2{
    font-size: clamp(7.6rem, 8.5vw, 9rem);
    font-weight: 700;
    margin: 0;
}
p{
    font-size: 0.875rem;
    margin: 0;
}
@media(max-width: 768px){
    display: none;
}
`

export default CompClock