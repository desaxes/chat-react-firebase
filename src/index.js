import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Импорт firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
//Конфиг
const firebaseConfig = {
  apiKey: "AIzaSyDDWIgR19pGi2cq94nVefYTi5TeaoOP2IM",
  authDomain: "chat-react-845ea.firebaseapp.com",
  projectId: "chat-react-845ea",
  storageBucket: "chat-react-845ea.appspot.com",
  messagingSenderId: "443649662982",
  appId: "1:443649662982:web:cf7c1442c994dcce5c2387"
};
//Подключение к firebase
firebase.initializeApp(firebaseConfig);

//Создаем контекст
export const Context = createContext(null)

//Подключение ф-ций авторизации и доступа к БД firebase
const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
//Передаем через провайдер необходимые приложению данные
root.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
