import React, { useEffect, useState } from 'react'
import { MapTo } from '@adobe/aem-react-editable-components'
import { LoginForm, InputBox } from './styles'
import user from '../../assets/user.png'
import lock from '../../assets/lock.png'
import { useHistory } from 'react-router-dom'

const Form = ({height, url_variable}) => {

    const nav = useHistory()

    const [error, setError] = useState(false)
    const [userVal, setUserVal] = useState()
    const [passVal, setPassVal] = useState()
    let valid = false

    const handleSubmit = (e) => {
        e.preventDefault()
        if ( /^[a-zA-Z]+\.[a-zA-Z]+$/.test(sessionStorage.getItem('user')) && /^[0-9]{6,9}$/.test(sessionStorage.getItem('password'))){
            valid = true
            setError(false)
            login()
        }else{
            valid = false
            setError(true)
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('password')
        }
    }

    const login = () => {
        if(valid){
            document.title = 'Compass - Home'
            nav.push(url_variable)
        }
    }

    useEffect(()=>{
        sessionStorage.getItem('user') && setUserVal(sessionStorage.getItem('user'))
        sessionStorage.getItem('password') && setPassVal(sessionStorage.getItem('password'))
        if (/^[a-zA-Z]+\.[a-zA-Z]+$/.test(sessionStorage.getItem('user')) && /^[0-9]{6,9}$/.test(sessionStorage.getItem('password'))){
            valid = true
        }
        setTimeout(()=>{
            login()
        }, 5000)
    },[])

    return(
        <LoginForm height={height} error={error} onSubmit={(e)=>{handleSubmit(e)}}>
            <h2>Login</h2>
            <InputBox error={error}>
                <input placeholder='Usuário' value={userVal} onChange={(e)=>sessionStorage.setItem('user', e.target.value)} />
                <img src={user} alt='User Icon' />
            </InputBox>
            <InputBox error={error}>
                <input placeholder='Senha' type='password' value={passVal} onChange={(e)=>sessionStorage.setItem('password', e.target.value)} />
                <img src={lock} alt='Password Icon' />
            </InputBox>
            <p>Ops, usuário ou senha inválidos.</p>
            <p>Tente novamente!</p>
            <input value='Continuar' type='submit' />
        </LoginForm>
    )
}

export default MapTo('compasslogon/components/content/form')(Form)