import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./common/Home";
import Register from "./common/Register";
import Login from './common/Login';
import Profile from "./common/Profile";
import Error404 from "./common/Error404";
import PasswordRecovery from "./common/PasswordRecovery";
import NewPassword from "./common/NewPassword";
import RoutingComponent from "./routes/routingComponent";

// логинизация
// регистрация
// профайл
// 404 (можно застилизовать заранее)
// восстановление пароля
// ввод нового пароля
// тестовая - отобразить/продемонстрировать все SuperКопмоненты


function App() {

  return (
        <>
            {/*<Main/>*/}
            <Router>
                {/*<div>*/}
                {/*    Navigation*/}
                {/*    <div><NavLink to={'/'}>Home</NavLink></div>*/}
                {/*    <div><NavLink to={'/login'}>Login</NavLink></div>*/}
                {/*    <div><NavLink to={'/register'}>Register+</NavLink></div>*/}
                {/*    <div><NavLink to={'/profile'}>Profile</NavLink></div>*/}
                {/*    <div><NavLink to={'/404'}>404</NavLink></div>*/}
                {/*    <div><NavLink to={'/password-recovery'}>Recovery password</NavLink></div>*/}
                {/*    <div><NavLink to={'/enter-new-password'}>New password</NavLink></div>*/}
                {/*</div>*/}
                <RoutingComponent/>
            </Router>
        </>

  );
}

export default App;
