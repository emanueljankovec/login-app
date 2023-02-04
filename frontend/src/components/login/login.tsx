import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const onChangeHandler = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        try {
            const email: any = data.email;
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);

            localStorage.setItem("token", res.data);
            localStorage.setItem("user", email);
            window.location.href = "/";
        } catch (error: any) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Log In To Existing Account</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    required
                    onChange={onChangeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password}
                    required
                    onChange={onChangeHandler}
                />
                {error && <div>{error}</div>}
                <button type="submit">Sing in</button>
                <h3>Don't Have Account? Create one</h3>
                <Link to="/register">Sing Up</Link>
            </form>
        </div>
    );
};

export default Login;
