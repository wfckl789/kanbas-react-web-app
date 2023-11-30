import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";
import Signin from "./Users/signin";
import Account from "./Users/account";
import UserTable from "./Users/table";
import AccountNavigation from "./Users/AccountNavigation";
import Users from "./Users";


function Kanbas() {
    const [courses, setCourses] = useState([]);
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                   <Routes>
                       <Route path="/" element={<Navigate to="User" />} />
                       <Route path="Dashboard" element={<Dashboard />} />
                       <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                       <Route path="User/*" element={<Users />} />
                   </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;

