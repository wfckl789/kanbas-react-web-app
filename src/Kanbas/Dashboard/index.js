import { Link } from "react-router-dom";
import db from "../Database";
import DashboardCard from "../Component/DashboardCard";
import {useEffect, useState} from "react";
import { Spinner } from 'react-bootstrap';
import axios from "axios";

function Dashboard() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;

    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    useEffect(() => {
        findAllCourses();
    }, []);
    const findAllCourses = async () => {
        try {
            setLoading(true);
            // await new Promise((resolve) => setTimeout(resolve, 8000));
            const response = await axios.get(URL);
            setCourses(response.data);
            setLoading(false);
        } catch (e) {
            console.log("fetch course error: ", e)
        } finally {
            setLoading(false);
        }
    };

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
    const onSetCourse = (course) => setCourse(course);

    return (
        <div>
            <div className="row">
                <h1 style={{margin: "10px 0px 0px 30px"}}>Dashboard<hr style={{width: 1000}}/></h1>
                <h3 style={{marginLeft: 50}}>Published Courses ({courses.length})<hr style={{width: 1000}}/></h3>
            </div>
            <div className="card w-50 mx-4">
                <div className="card-body input-group">
                    <input value={course.name} className="form-control w-25 m-1"
                           onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                    <input value={course.number} className="form-control w-25 m-1"
                           onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                    <input value={course.startDate} className="form-control w-25 m-1" type="date"
                           onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
                    <input value={course.endDate} className="form-control w-25 m-1" type="date"
                           onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                    <button onClick={addNewCourse} type="button" className="btn btn-success m-1">Add</button>
                    <button onClick={() => updateCourse(course)} type="button" className="btn btn-primary m-1">Update</button>
                </div>
            </div>
            {loading && (
                <div>
                    <div className="text-center">
                        <div className="spinner-border text-danger m-3" style={{width: '100px', height: '100px'}} role="status"></div>
                        <br/>
                        Loading Courses...
                        <br/>
                        <button className="btn btn-primary m-2" type="button" disabled>
                            Please Wait for about 10 Seconds to Wake Up Node Server : )
                            <br/>
                            This is due to the restriction of Render: <p className="text-warning">"Free instance type will spin down with inactivity."</p>
                        </button>
                    </div>

                </div>
            )}
            <div className="row" style={{marginLeft: 40}}>
                {courses.map((course) => (
                    <DashboardCard
                        course={course}
                        onDelete={deleteCourse}
                        onSetCourse={onSetCourse}
                    />
                ))}
            </div>
        </div>
    );
}
export default Dashboard;

