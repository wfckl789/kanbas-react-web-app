import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaRegCheckCircle} from "react-icons/fa";
import {HiMiniEllipsisVertical} from "react-icons/hi2";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="d-flex justify-content-end">
                <a className="btn dropdown-toggle m-1" data-toggle="dropdown" style={{color: "darkgreen"}}>
                    <FaRegCheckCircle style={{color: "darkgreen"}}/> Published
                </a>
                <button className="btn btn-secondary m-1"><HiMiniEllipsisVertical/></button>
            </div>
            <hr/>
            <p className="m-1">Assignment Name</p>
            <input value={assignment.title}
                   className="form-control mb-2" />
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-danger m-1" style={{}}>
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success m-1">
                    Save
                </button>
            </div>
            <hr/>
        </div>
    );
}


export default AssignmentEditor;

