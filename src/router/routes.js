import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Calculator from "../Views/calculator";
import DigitalWatch from "../Views/digitalWatch";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={< Calculator />}></Route>
                <Route exact path='/about' element={< DigitalWatch />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;