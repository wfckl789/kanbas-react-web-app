import * as client from "./client";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/User/signin");
    };
    const save = async () => {
        console.log("save account", account);
        await client.updateUser(account);
        alert("User info has been edited!");
    };
    useEffect(() => {
        console.log("1111111", id)
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="row">
            <div>
                <div className="w-100">
                    <h1>Account</h1>
                    {!account && (
                        "Can not find your account in mongodb, please sign up a new account first."
                    )}
                    {account && (
                        <div>
                            <h3>User name: {account.username || ''}</h3>
                            <div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="password">Password</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control col-10"
                                        aria-describedby="password"
                                        value={account.password}
                                        onChange={(e) => setAccount({ ...account,
                                            password: e.target.value })}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="firstName">First name</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control col-10"
                                        value={account.firstName}
                                        aria-describedby="firstName"
                                        onChange={(e) => setAccount({ ...account,
                                               firstName: e.target.value })}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="lastName">Last name</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control col-10"
                                        value={account.lastName}
                                        aria-describedby="lastName"
                                        onChange={(e) => setAccount({ ...account,
                                               lastName: e.target.value })}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="dob">Birthday</span>
                                    </div>
                                    <input
                                        type="date"
                                        className="form-control col-10"
                                        value={!account.dob ? '' : (new Date(account.dob).toISOString().split('T')[0])}
                                        aria-describedby="dob"
                                        onChange={(e) => setAccount({ ...account,
                                               dob: e.target.value })}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="email">Email</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control col-10"
                                        value={account.email}
                                        aria-describedby="email"
                                        onChange={(e) => setAccount({ ...account,
                                               email: e.target.value })}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="role">Role</span>
                                    </div>
                                    <select
                                        aria-describedby="role"
                                        onChange={(e) => setAccount({ ...account,
                                        role: e.target.value })}
                                    >
                                        <option value="USER" selected={account.role === "USER"}>User</option>
                                        <option value="ADMIN" selected={account.role === "ADMIN"}>Admin</option>
                                        <option value="FACULTY" selected={account.role === "FACULTY"}>Faculty</option>
                                        <option value="STUDENT" selected={account.role === "STUDENT"}>Student</option>
                                    </select>
                                </div>
                                <button type="button" className="btn btn-primary float-end m-2" onClick={signout}>
                                    Signout
                                </button>
                                <button type="button" className="btn btn-primary float-end m-2" onClick={save}>
                                    Save
                                </button>
                                <div>
                                    <Link to="/Kanbas/User/admin/users" className="btn btn-warning w-100">
                                        User List
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Account;

