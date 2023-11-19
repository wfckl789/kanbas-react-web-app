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
    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            ...courses,
            response.data,
        ]);
        setCourse({ name: "", number: "", startDate: "", endDate: "" });
        // setCourses([...courses, { ...course, _id: new Date().getTime() }]);
    };

    const deleteCourse = async (course) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter((c) => c._id !== course._id));
    };

    const updateCourse = async (course) => {
        console.log("updateCourse", course)
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        console.log("updateCourse response", response)
        setCourses(
            courses.map((c) => {
                return c._id === course._id ? course : c;
            })
        );
    };
    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                   <Routes>
                       <Route path="/" element={<Navigate to="Dashboard" />} />
                       <Route path="Account" element={<h1 style={{margin: "10px 0px 0px 30px"}}>Account</h1>} />
                       <Route path="Dashboard" element={
                           <Dashboard
                               courses={courses}
                               course={course}
                               setCourse={setCourse}
                               addNewCourse={addNewCourse}
                               deleteCourse={deleteCourse}
                               updateCourse={updateCourse}/>
                       } />
                       <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                   </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;

