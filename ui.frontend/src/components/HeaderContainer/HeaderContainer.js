import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { StyledHead } from './styles'
import CompClock from './ClockComp'
import compassBlack from '../../assets/compassblack.png'
import CompWeather from './WeatherComp'

const HeaderComp = ({color}) => {
    return(
        <StyledHead color={color}>
            <span><img draggable='false' src={compassBlack} alt='Compass Logo'/></span>
            <CompClock/>
            <CompWeather/>
        </StyledHead>
    )
}

export default MapTo('compasslogon/components/content/header-container')(HeaderComp)