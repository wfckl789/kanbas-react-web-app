import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {HiOutlineMenu} from "react-icons/hi";
import './Courses.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

function Courses() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    // const URL = "http://localhost:4000/api/courses";
    // const URL = "https://kanbas-node-server-app-a4m7.onrender.com/api/courses";
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);
    const { pathname } = useLocation();
    const pathArr = pathname.split("/");
    const isEditCourse = pathArr.length === 6;
    return (
        <div>
            <div className="row">
                <nav>
                    <ol className="breadcrumb m-2 course-breadcrumb">
                        <HiOutlineMenu style={{color: "#c73838", fontSize:30, margin: " 5px 20px 0 25px"}}/>
                        <li className="breadcrumb-item mt-1" style={{color: "#c73838"}}>{course.name || ''}</li>
                        <li className={`breadcrumb-item mt-1 ${!isEditCourse && "active"}`}>{isEditCourse ? pathArr[pathArr.length - 2] : pathArr[pathArr.length - 1] || ''}</li>
                        { isEditCourse ?  <li className="breadcrumb-item mt-1 active">{pathArr[5] || ''}</li> : <></> }
                    </ol>
                </nav>
                <hr />
            </div>
            <em style={{marginLeft: 50, color: "grey", fontSize: 15}}>2024 {pathArr[pathArr.length - 3] || ''}</em>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;

