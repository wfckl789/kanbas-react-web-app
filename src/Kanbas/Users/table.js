import React, { useState, useEffect } from "react";
import * as client from "./client";
import {BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill} from "react-icons/bs";
import {Link} from "react-router-dom";
function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            if (user.username.length === 0 || user.password.length === 0) {
                alert("New account's username and password can not be empty!");
                return;
            }
            console.log("new user", user);
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };
    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            if (user.username.length === 0 || user.password.length === 0) {
                alert("You must first select an account!");
                return;
            }
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Update</th>
                        <th scope="col">Create</th>
                    </tr>
                    <tr>
                        <td>
                            <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                        </td>
                        <td>
                            <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        </td>
                        <td>
                            <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                        </td>
                        <td>
                            <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                        </td>
                        <td>
                            <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td className="text-nowrap">
                            <BsFillCheckCircleFill onClick={updateUser}
                                                   className="me-2 text-success fs-1 text" />
                        </td>
                        <td className="text-nowrap">
                            <BsPlusCircleFill onClick={createUser}
                                              className="text-success fs-1 text" />
                        </td>
                    </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <Link to={`/Kanbas/User/account/${user._id}`}>
                            {user.username}
                        </Link>
                        <td>{user.password.charAt(0) + "..."}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.role || ''}</td>
                        <td className="text-nowrap">
                            <button className="btn btn-danger me-2">
                                <BsTrash3Fill onClick={() => deleteUser(user)} />
                            </button>
                            <button className="btn btn-warning me-2">
                                <BsPencil onClick={() => selectUser(user)} />
                            </button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;

