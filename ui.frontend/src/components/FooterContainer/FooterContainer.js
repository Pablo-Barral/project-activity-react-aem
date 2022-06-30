import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { ContinueBtn, LogoutBtn, StyledFooter } from './styles'
import Timer from './Timer'

const FooterComp = ({time}) => {
    return(
        <StyledFooter>
            <p className='footerText'>Essa janela do navegador é usada para manter sua sessão de autenticação ativa.
             Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
            <span>|</span>
            <Timer time={time}/>
            <ContinueBtn>Continuar Navegando</ContinueBtn>
            <LogoutBtn>Logout</LogoutBtn>
        </StyledFooter>
    )
}

export default MapTo('compasslogon/components/content/footer-container')(FooterComp)