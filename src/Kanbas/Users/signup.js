import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        if (credentials.username === "" || credentials.password === "") {
            alert("Username and password can not be empty!")
            return;
        }
        try {
            await client.signup(credentials);
            navigate("/Kanbas/User/signin");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div>{error}</div>}
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="username">Username</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    value={credentials.username}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        username: e.target.value })}
                    aria-describedby="username"
                />
            </div>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="password">Password</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        password: e.target.value })}
                />
            </div>
            <button
                onClick={signup}
                type="button" className="btn btn-primary float-end">
                Sign up
            </button>
        </div>
    );
}
export default Signup;
