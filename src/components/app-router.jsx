import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './chat'
import Login from './login'
import Main from './main'

export default function AppRouter({ user }) {
    //Роутинг для авторизованного пользователя
    return user ? (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='*' element={<Main />} />
        </Routes>
    )
        //Роутинг для неавторизованного пользователя
        :
        (
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/chat' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Main />} />
            </Routes>
        )
}
