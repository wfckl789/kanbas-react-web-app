import { Link } from "react-router-dom";
import db from "../Database";
import DashboardCard from "../Component/DashboardCard";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <div className="row">
                <h1 style={{margin: "10px 0px 0px 30px"}}>Dashboard<hr style={{width: 1000}}/></h1>
                <h3 style={{marginLeft: 50}}>Published Courses (8)<hr style={{width: 1000}}/></h3>
            </div>
            <div className="row" style={{marginLeft: 40}}>
                {courses.map((course) => (
                    <DashboardCard course={course}/>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;

