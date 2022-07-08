import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { StyledHead } from './styles'
import CompClock from './ClockComp'
import compassBlack from '../../assets/compassblack.png'
import CompWeather from './WeatherComp'

const HeaderComp = ({color}) => {
    return(
        <StyledHead color={color}>
            <img className='headImg' draggable='false' src={compassBlack} alt='Compass Logo'/>
            <CompClock/>
            <CompWeather/>
        </StyledHead>
    )
}

export default MapTo('compasslogon/components/content/header-container')(HeaderComp)