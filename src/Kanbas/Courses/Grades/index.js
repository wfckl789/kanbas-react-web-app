import db from "../../Database";
import { useParams } from "react-router-dom";
import {FiFilter} from "react-icons/fi";
import {AiOutlineSearch} from "react-icons/ai";
import {FaFileExport, FaFileImport} from "react-icons/fa";
import {IoSettingsSharp} from "react-icons/io5";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="d-flex float-end">
                <button className="btn btn-secondary m-1"><FaFileImport/> Import</button>
                <button className="btn btn-secondary m-1"><FaFileExport/> Export</button>
                <button className="btn btn-secondary m-1"><IoSettingsSharp/></button>
            </div>
            <div className="d-flex input-group mt-2">
                <div className="col-6">
                    Student Names<br/>
                    <span><AiOutlineSearch/></span>
                    <input type="text" className="m-1" placeholder="Search Students"></input>
                </div>
                <div className="col-6">
                    Assignment Names<br/>
                    <span><AiOutlineSearch/></span>
                    <input type="text" className="m-1" placeholder="Search Assignments"/>
                </div>
            </div>
            <button type="button" className="btn btn-secondary m-1"><FiFilter/> Apply Filters</button>
            <div className="table-responsive">
                <table className="table table-striped table-lg border table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Student Name</th>
                            {assignments.map((assignment) => (<th scope="col" style={{textAlign: "center"}}>{assignment.title}</th>))}
                        </tr>
                    </thead>

                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <th scope="row" style={{color: "#c73838"}}>{user.firstName} {user.lastName}</th>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td style={{textAlign: "center"}}>{grade?.grade || ""}</td>);})}
                            </tr>);
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;

