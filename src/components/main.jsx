import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {
    const navigate = useNavigate()
    return (
        <div style={{ alignSelf: 'center' }}>
            <Button onClick={() => navigate('chat')} variant='contained'>
                Open Chat
            </Button>
        </div>
    )
}
