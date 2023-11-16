import React, {useEffect, useState} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {FaRegCheckCircle} from "react-icons/fa";
import {HiMiniEllipsisVertical} from "react-icons/hi2";
import {useDispatch, useSelector} from "react-redux";
import {addAssignments, deleteAssignments, setAssignments, setAssignment, updateAssignments} from "../assignmentsReducer";
import * as client from "../client";
import axios from "axios";

function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();
    const [assignment, setAssignment] = useState({
        _id: assignmentId
    });
    useEffect(() => {
        client.getAssignment(assignmentId).then((res) => {
            setAssignment({ ...res,
                title: res.title || '',
                description: res.description || '',
                points: res.points || '',
                dueDate: res.dueDate || '',
                availableFromDate: res.availableFromDate || '',
                availableUntilDate: res.availableUntilDate || '',
                isNew: res.isNew
            });
        })
    }, [assignmentId]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddAssignment = async (courseId, assignment) => {
        const createRes = await client.createAssignment(courseId, assignment);
        dispatch(addAssignments(assignment));
    };
    const handleUpdateAssignment = async (assignment) => {
        const updateRes = await client.updateAssignment(assignment);
        dispatch(updateAssignments(assignment));
    };
    const handleSave = async () => {
        if (assignment.isNew === true) {
            await handleAddAssignment(courseId, assignment);
        } else if (assignment.isNew === false) {
            await handleUpdateAssignment(assignment);
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
                        value={ assignment.title }
                        onChange={(e) => setAssignment({...assignment, title: e.target.value})}
                        className="form-control" id="assignmentName" placeholder="assignment name:"
                    />
                </div>
                <div className="form-group m-1 w-75">
                    <textarea
                        value={ assignment.description }
                        rows="3"
                        onChange={(e) => setAssignment({...assignment, description: e.target.value})}
                    />
                </div>
                <div className="form-group m-1 w-75">
                    Points
                    <input
                        type="text"
                        value={ assignment.points }
                        onChange={(e) => setAssignment({...assignment, points: e.target.value})}
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
                                        value={assignment.dueDate}
                                        onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})}
                                    />
                                </div>
                                <br/>
                                <div className="form-group m-1">
                                    <label htmlFor="availableFromDate">Available from </label>
                                    <input
                                        type="date"
                                        id="availableFromDate"
                                        value={assignment.availableFromDate}
                                        onChange={(e) => setAssignment({...assignment, availableFromDate: e.target.value})}
                                    />
                                    <label htmlFor="availableUntilDate"> Until </label>
                                    <input
                                        type="date"
                                        id="availableUntilDate"
                                        value={assignment.availableUntilDate}
                                        onChange={(e) => setAssignment({...assignment, availableUntilDate: e.target.value})}
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

