import { Routes, Route } from "react-router-dom";
import "../styles/app.less";

import Head from "../components/Header";
import Foot from "../components/Footer";
import Home from "../views/Home";
import Login from "../views/Login";

function Main(): any
{
    return (
        <>
            <Head />
            <Routes>
                <Route path="/" element={ <Home /> } /> 
                <Route path="/login" element={ <Login /> } /> 
                <Route path="*" element={ <Home /> } /> 
            </Routes>
            <Foot />
        </>
    )
}

export default Main;