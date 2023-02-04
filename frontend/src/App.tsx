import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main/main";
import Register from "./components/register/register";
import Login from "./components/login/login";

function App() {
    const user = localStorage.getItem("token");
    return (
        <div className="container">
            <Routes>
                {user && <Route path="/" element={<Main />} />}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default App;
