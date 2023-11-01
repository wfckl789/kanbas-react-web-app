import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import {Provider} from "react-redux";
import store from "./store";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime() }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
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

