import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {BsGripVertical} from "react-icons/bs";
import {BiCaretRight} from "react-icons/bi";
import {HiMiniEllipsisVertical} from "react-icons/hi2";
import {AiOutlineCheckCircle} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item w-50">
                    <button
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                        className="btn btn-success m-1"
                        type="button"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => dispatch(updateModule(module))}
                        type="button" className="btn btn-primary"
                    >
                        Update
                    </button>
                    <input
                        value={module.name}
                        type="text" className="form-control w-50 m-1"
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                    }/>
                    <textarea
                        value={module.description}
                        className="form-control w-50 m-1"
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }
                    />
                </li>
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => {
                        return (
                            <div style={{margin: "20px 5px 20px 5px"}}>
                                <a key={index} className="list-group-item list-group-item-action list-group-item-secondary">
                                    <BsGripVertical /> <BiCaretRight />

                                    <h3>{module.name || ''}</h3>
                                    <p>{module.description || ''}</p>
                                    <p>{module._id || ''}</p>
                                    <button
                                        onClick={() => dispatch(setModule(module))}
                                        className="btn btn-sm btn-warning m-1"
                                    >Edit</button>
                                    <button
                                        onClick={() => dispatch(deleteModule(module._id))}
                                        className="btn btn-sm btn-danger m-1"
                                    >
                                        Delete
                                    </button>
                                    {/*<AiOutlineCheckCircle className="float-end" /> <HiMiniEllipsisVertical className="float-end"/>*/}
                                    {/*<p>{module.description}</p>*/}
                                </a>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default ModuleList;

