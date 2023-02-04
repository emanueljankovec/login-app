import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const onChangeHandler = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitHandler = async (e: any) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/");
            console.log(res.message);
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
                <h1>Create Account</h1>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={data.firstName}
                    required
                    onChange={onChangeHandler}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    required
                    onChange={onChangeHandler}
                />
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
                <button type="submit">Sing Up</button>
            </form>
            <h3>Already have account?</h3>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Register;
