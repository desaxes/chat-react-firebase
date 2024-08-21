import { Button, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '..'

export default function Login() {
    //Авторизация через Google
    const { auth, firebase } = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
    }
    return (
        <div style={{ alignSelf: 'center' }}>
            <Button onClick={() => { login() }} variant='contained'>Login with Google</Button>
        </div>
    )
}
