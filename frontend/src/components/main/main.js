import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import jwtDecode from "jwt-decode";

function Main() {
    const [data, setData] = useState({
        data: "",
    });

    const email = localStorage.getItem("user");

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/me", {
                params: {
                    email: email,
                },
            })
            .then((data) => {
                setData(data.data);
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setData("");
        window.location.reload();
    };

    return (
        <div className="container">
            <nav>
                <h1>
                    Welcome {data.data.firstName} {data.data.lastName}
                </h1>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    );
}

export default Main;
