import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { ContinueBtn, LogoutBtn, StyledFooter } from './styles'
import Timer from './Timer'

const FooterComp = ({time, url_variable, text}) => {

    const timeStore = time

    const resetTime = () => {
        localStorage.setItem('time', timeStore)
    }
    const logout = () => {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('password')
        localStorage.setItem('time', '0')
    }

    return(
        <StyledFooter>
            <p className='footerText'>{text ? text : 'DEFAULT FOOTER TEXT'}</p>
            <span></span>
            <Timer time={time} url_variable={url_variable}/>
            <ContinueBtn onClick={resetTime}>Continuar Navegando</ContinueBtn>
            <LogoutBtn onClick={logout}>Logout</LogoutBtn>
        </StyledFooter>
    )
}

export default MapTo('compasslogon/components/content/footer-container')(FooterComp)