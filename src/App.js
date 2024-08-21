import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import AppRouter from './components/app-router';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useContext } from 'react';
import { Context } from '.';
import Loader from './components/loader';

function App() {
  //Запрос на авторизацию пользователя приложения
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)
  //Передаем данные о пользователе компонентам и вешаем loader на загрузку с сервера
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <div style={{ margin: '50px 200px', display: 'flex', justifyContent: 'center', height: '80vh' }}>
        {loading ? <Loader /> : <AppRouter user={user} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
