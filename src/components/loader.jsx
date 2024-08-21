import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
    return (
        <div style={{ alignSelf: 'center' }}>
            <Backdrop
                sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
