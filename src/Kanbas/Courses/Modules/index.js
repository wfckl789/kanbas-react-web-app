import ModuleList from "./ModuleList";
import {HiMiniEllipsisVertical} from "react-icons/hi2";
import {FiPlus} from "react-icons/fi";
import {FaRegCheckCircle} from "react-icons/fa";
function Modules() {
    return (
        <div>
            <div className="d-flex justify-content-end m-1" style={{maxWidth: 1500}}>
                <button className="btn btn-secondary m-1">Collapse All</button>
                <button className="btn btn-secondary m-1">View Progress</button>
                <div className="dropdown m-1">
                    <a className="btn btn-secondary dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                        <FaRegCheckCircle style={{color: "lightgreen"}}/> Publish All
                    </a>
                    <div className="dropdown-menu m-1">
                        <a className="dropdown-item">Action</a>
                        <a className="dropdown-item">Another action</a>
                        <a className="dropdown-item">Something else here</a>
                    </div>
                </div>
                <button className="btn btn-danger m-1"><FiPlus/> Module</button>
                <button className="btn btn-secondary m-1"><HiMiniEllipsisVertical/></button>
                <br/>
            </div>
            <hr style={{width: 1500}}/>
            <br/>
            <div className="list-group" style={{maxWidth: 1500}}>
                <ModuleList />
            </div>
        </div>
    );
}

export default Modules;