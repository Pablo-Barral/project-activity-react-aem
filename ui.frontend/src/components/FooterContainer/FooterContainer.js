import React, { useState } from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { ContinueBtn, LogoutBtn, StyledFooter } from './styles'
import Timer from './Timer'
import { Link } from 'react-router-dom'

const FooterComp = ({time, url_variable}) => {

    const timeStore = time

    const resetTime = () => {
        localStorage.setItem('time', timeStore)
    }

    return(
        <StyledFooter>
            <p className='footerText'>Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
             Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            <span>|</span>
            <Timer time={time}/>
            <div onClick={resetTime}>
                <ContinueBtn>Continuar Navegando</ContinueBtn>
            </div>
            <Link to={url_variable}>
                <LogoutBtn>Logout</LogoutBtn>
            </Link>
        </StyledFooter>
    )
}

export default MapTo('compasslogon/components/content/footer-container')(FooterComp)