import React, {useEffect, useRef, useState} from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {BsGripVertical} from "react-icons/bs";
import {BiCaretRight, BiDotsVerticalRounded} from "react-icons/bi";
import {AiFillCaretDown, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {
    addAssignments,
    deleteAssignments,
    setAssignment,
    setAssignments,
    updateAssignments
} from "./assignmentsReducer";
import {setModule} from "../Modules/modulesReducer";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Example from "./DeleteModal";
import DeleteModal from "./DeleteModal";
import * as client from "./client";

function Assignments() {
    const { courseId } = useParams();
    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    // const courseAssignments = assignments.filter(
    //     (assignment) => assignment.course === courseId);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShowDelete = async () => {
        console.log("delete", assignment);
        const deleteRes = await client.deleteAssignment(assignment);
        dispatch(deleteAssignments(assignment._id));
    }

    return (
        <div>
            <div className="row">
                {/*<h2>Assignments for course {courseId}</h2>*/}
                <div>
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${new Date().getTime().toString()}`}
                    >
                        <button
                            type="button"
                            className="btn btn-danger mx-2 float-end">
                            <AiOutlinePlus/> Add Assignment
                        </button>
                    </Link>
                </div>
            </div>
            <hr/>

            <DeleteModal
                show = {show}
                onClose = {() => handleClose()}
                onDelete = {() => handleShowDelete()}
            />
            <div className="list-group m-2  w-75" id="assignments-list">
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
                        {assignments.map((assignment) => {
                            return (
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-item list-group-item-action"
                                >
                                    <BsGripVertical/> {assignment.title}
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            handleShow();
                                            dispatch(setAssignment(assignment));
                                        }}
                                        className="btn btn-sm btn-danger m-1 float-end"
                                    > delete </button>
                                </Link>
                            )}
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Assignments;

