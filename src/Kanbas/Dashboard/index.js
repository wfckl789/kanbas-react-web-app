import { Link } from "react-router-dom";
import db from "../Database";
import DashboardCard from "../Component/DashboardCard";
import {useState} from "react";

function Dashboard(
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }
) {
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

