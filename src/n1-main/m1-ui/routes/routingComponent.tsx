import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../common/Home";
import Login from "../common/Login";
import Register from "../common/Register";
import Profile from "../common/Profile";
import Error404 from "../common/Error404";
import PasswordRecovery from "../common/PasswordRecovery";
import NewPassword from "../common/NewPassword";
import TestingComponents from "../common/testComponents/testComponents";

const RoutingComponent = () => {
    return (
        <Routes>
            <Route path={'/'}  element={<Home/>} />
            <Route path={'/login'} element={<Login/>} />
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/404'} element={<Error404/>}/>
            <Route path={'/password-recovery'} element={<PasswordRecovery/>}/>
            <Route path={'/enter-new-password'} element={<NewPassword/>}/>
            <Route path={'/testing-components'} element={<TestingComponents/>}/>
        </Routes>
    );
};

export default RoutingComponent;