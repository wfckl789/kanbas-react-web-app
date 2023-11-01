import React, {useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {FaRegCheckCircle} from "react-icons/fa";
import {HiMiniEllipsisVertical} from "react-icons/hi2";
import {useDispatch, useSelector} from "react-redux";
import {addAssignment, deleteAssignment, setAssignment, updateAssignment} from "../assignmentsReducer";

function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = assignments.find( (assignment) => assignment._id === assignmentId ) || {};
    let obj = {
        _id: assignmentId === "new" ? new Date().getTime().toString() : assignmentId,
        title: assignment.title || '',
        course: courseId,
        description: assignment.description || '',
        points: assignment.points || '',
        dueDate: assignment.dueDate || '',
        availableFromDate: assignment.availableFromDate || '',
        availableUntilDate: assignment.availableUntilDate || ''
    };
    const [assignmentObj, setAssignmentObj] = useState(obj);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log(assignmentObj);
        if (assignmentId && assignmentId === "new") {
            dispatch(addAssignment(assignmentObj));
        } else if (assignmentId && assignmentId !== "new") {
            dispatch(updateAssignment(assignmentObj));
        }
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
            <form>
                <div className="form-group m-1 w-75">
                    <label htmlFor="assignmentName">Assignment Name</label>
                    <input
                        value={ assignmentObj.title }
                        onChange={(e) => setAssignmentObj({...assignmentObj, title: e.target.value})}
                        className="form-control" id="assignmentName" placeholder="assignment name:"
                    />
                </div>
                <div className="form-group m-1 w-75">
                    <textarea
                        value={ assignmentObj.description }
                        rows="3"
                        onChange={(e) => setAssignmentObj({...assignmentObj, description: e.target.value})}
                    />
                </div>
                <div className="form-group m-1 w-75">
                    Points
                    <input
                        type="text"
                        value={ assignmentObj.points }
                        onChange={(e) => setAssignmentObj({...assignmentObj, points: e.target.value})}
                    />
                </div>
                <div className="form-group m-1 w-75">
                    Assign
                    <div className="card w-50">
                        <div className="card-body">
                            <form>
                                <div className="form-group m-1">
                                    <label htmlFor="assignDueDate">Due </label>
                                    <input
                                        type="date"
                                        id="assignDueDate"
                                        value={assignmentObj.dueDate}
                                        onChange={(e) => setAssignmentObj({...assignmentObj, dueDate: e.target.value})}
                                    />
                                </div>
                                <br/>
                                <div className="form-group m-1">
                                    <label htmlFor="availableFromDate">Available from </label>
                                    <input
                                        type="date"
                                        id="availableFromDate"
                                        value={assignmentObj.availableFromDate}
                                        onChange={(e) => setAssignmentObj({...assignmentObj, availableFromDate: e.target.value})}
                                    />
                                    <label htmlFor="availableUntilDate"> Until </label>
                                    <input
                                        type="date"
                                        id="availableUntilDate"
                                        value={assignmentObj.availableUntilDate}
                                        onChange={(e) => setAssignmentObj({...assignmentObj, availableUntilDate: e.target.value})}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
            <hr/>
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-secondary m-1" >
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger m-1">
                    Save
                </button>
            </div>
            <hr/>
        </div>
    );
}


export default AssignmentEditor;

