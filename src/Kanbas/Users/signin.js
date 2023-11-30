import * as client from "./client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "iron_man", password: "stark123" });
    const navigate = useNavigate();
    const signin = async () => {
        const currentUser = await client.signin(credentials);
        if (!currentUser) {
            alert("Account doesn't exist! Please sign up a new account first.");
            return;
        }
        const id  = currentUser._id || '';
        navigate(`/Kanbas/User/account/${id}`);
    };
    return (
        <div>
            <h1>Signin</h1>
            <div className="input-group input-group-sm mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="username">Username</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                />
            </div>
            <div className="input-group input-group-sm mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="password">Password</span>
                </div>
                <input
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    type="text"
                    className="form-control"
                    aria-describedby="password"
                />
            </div>
            <button type="button" className="btn btn-primary float-end" onClick={signin}> Sign in </button>
        </div>
    );
}
export default Signin;

