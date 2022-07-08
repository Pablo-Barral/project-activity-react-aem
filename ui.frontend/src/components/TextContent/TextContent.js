import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { StyledText } from './styles'

const TextContent = ({text, size, weight, color}) => {
    return(
        <StyledText size={size ? size : '16px'} weight={weight} color={color}>{text ? text : 'XXXXXXXXXXXXXX'}</StyledText>
    )
}

export default MapTo('compasslogon/components/content/text-content')(TextContent)