import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Context } from '..';

export default function ButtonAppBar({ user }) {
    const navigate = useNavigate()
    const { auth } = React.useContext(Context)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography onClick={() => navigate('/main')} style={{ cursor: 'pointer' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CHAT-REACT
                    </Typography>
                    {user && <div style={{
                        display: 'flex', alignItems: 'center', gap: '10px', marginRight: '20px'
                    }}>
                        <p>{user?.displayName}</p>
                        <img style={{
                            width: '40px', height: '40px', borderRadius: '50%'
                        }} src={user?.photoURL} />
                    </div>}
                    {!user && <Button onClick={() => navigate('/login')} color="inherit">Login</Button>}
                    {user && <Button onClick={() => { auth.signOut() }} color="inherit">Logout</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}