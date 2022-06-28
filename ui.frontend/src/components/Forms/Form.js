import React, { useState } from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { LoginForm, InputBox } from './styles'

const Form = (props) => {

    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (sessionStorage.getItem('user') === 'admin' && sessionStorage.getItem('password') === 'admin'){
            setError(false)

        }else{
            setError(true)
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('password')
        }
    }

    return(
        <LoginForm height={props.height} error={error} onSubmit={(e)=>{handleSubmit(e)}}>
            <h2>Login</h2>
            <InputBox error={error}>
                <input placeholder='Usuário' value={sessionStorage.getItem('user')} onChange={(e)=>sessionStorage.setItem('user', e.target.value)} />
                <img alt='User Icon' />
            </InputBox>
            <InputBox error={error}>
                <input placeholder='Senha' type='password' value={sessionStorage.getItem('password')} onChange={(e)=>sessionStorage.setItem('password', e.target.value)} />
                <img alt='Password Icon' />
            </InputBox>
            <p>Ops, usuário ou senha inválidos. Tente novamente!</p>
            <input value='Continuar' type='submit' />
        </LoginForm>
    )
}

export default MapTo('compasslogon/components/content/form')(Form)