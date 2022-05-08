import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Sidebar from "./components/Sidebar";

const root = ReactDOM.createRoot (document.getElementById("app"))
root.render(
    <>
        <Sidebar />
        <Router key='router'>
            <Routes key='routes'>
                <Route key='user' path="/user" element={<User/>} />
            </Routes>    
        </Router>
    </>
)