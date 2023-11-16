import React, {useEffect, useState} from "react";
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
    setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    useEffect(() => {
        client.findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item w-50">
                    <button
                        onClick={handleAddModule}
                        className="btn btn-success m-1"
                        type="button"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => dispatch(handleUpdateModule)}
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
                                        onClick={() => handleDeleteModule(module._id)}
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

