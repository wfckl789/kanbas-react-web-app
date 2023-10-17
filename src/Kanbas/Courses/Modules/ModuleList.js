import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {BsGripVertical} from "react-icons/bs";
import {BiCaretRight} from "react-icons/bi";
import {HiMiniEllipsisVertical} from "react-icons/hi2";
import {AiOutlineCheckCircle} from "react-icons/ai";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div>
            {
            modules
                .filter((module) => module.course === courseId)
                .map((module, index) => {
                    return (
                        <div style={{margin: "20px 5px 20px 5px"}}>
                            <a className="list-group-item list-group-item-action list-group-item-secondary">
                                <BsGripVertical /> <BiCaretRight /> {module.name || ''}
                                {/*<AiOutlineCheckCircle className="float-end" /> <HiMiniEllipsisVertical className="float-end"/>*/}
                                {/*<p>{module.description}</p>*/}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default ModuleList;

