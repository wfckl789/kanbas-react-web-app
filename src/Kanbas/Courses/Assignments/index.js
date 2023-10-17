import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {BsGripVertical} from "react-icons/bs";
import {BiCaretRight, BiDotsVerticalRounded} from "react-icons/bi";
import {AiFillCaretDown, AiOutlinePlus} from "react-icons/ai";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="list-group" id="assignments-list">
                <a className="list-group-item list-group-item-action list-group-item-secondary" data-toggle="collapse">
                    <BsGripVertical/> <AiFillCaretDown /> Assignments
                    <i className="fas fa-ellipsis-v fa-sm float-right"></i>
                    <i className="fas fa-plus fa-sm float-right"></i>
                    <BiDotsVerticalRounded className="float-end m-2"/>
                    <AiOutlinePlus className="float-end m-2"/>
                    <button type="button" className="btn round btn-sm btn-outline-secondary float-end">40% of Total</button>
                </a>
                <div className="collapse show">
                    <div className="list-group">
                        {courseAssignments.map((assignment) => (
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item list-group-item-action">
                                <BsGripVertical/> {assignment.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Assignments;

