import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Calculator from "../Views/calculator";
import DigitalWatch from "../Views/digitalWatch";
import LinkCalculator from "../components/linkCalculator";

const Rout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={< Calculator />}></Route>
                <Route exact path='/about' element={< DigitalWatch />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;