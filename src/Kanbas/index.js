import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";



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
                       <Route path="/" element={<Navigate to="Dashboard" />} />
                       <Route path="Account" element={<h1 style={{margin: "10px 0px 0px 30px"}}>Account</h1>} />
                       <Route path="Dashboard" element={
                           <Dashboard />
                       } />
                       <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                   </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;

