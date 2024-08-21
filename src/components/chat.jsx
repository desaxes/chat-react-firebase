import React, { useContext, useState } from 'react'
import { Context } from '..'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, Grid, TextField } from '@mui/material'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './loader'
import firebase from 'firebase/compat/app';
export default function Chat() {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    //Получение коллекции сообщений из БД
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    //Отправка сообщения в коллекцию firebase
    const sendMessage = async () => {
        firestore.collection('messages').add(
            {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        setValue('')
    }
    if (loading) {
        return <Loader />
    }
    return (
        <div style={{ gap: '10px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
                width: '60%', height: '90%', border: 'blue 2px solid',
                overflowY: 'auto', borderRadius: '12px', display: 'flex',
                flexDirection: 'column', padding: '20px', gap: '10px'
            }}>
                {messages.map(e => <div style={{
                    display: 'flex', flexDirection: 'column', 
                    alignItems: user.uid === e.uid ? 'flex-end' : 'flex-start'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontWeight: '500' }}>
                        {e.displayName}
                        <img style={{ width: '25px', height: '25px', borderRadius: '50%' }} src={e.photoURL} alt='photo' />
                    </div>
                    <div style={{borderBottom:'green 1px solid'}}>{e.text}</div>
                </div>)}
            </div>
            <Grid
                container direction={'column'} alignItems={'flex-end'} style={{ width: '60%' }} gap={'10px'}
            >
                <TextField value={value} onChange={(e) => setValue(e.target.value)} variant='outlined' style={{ width: '100%' }} />
                <Button onClick={sendMessage} variant='outlined'>Send</Button>
            </Grid>
        </div>
    )
}
