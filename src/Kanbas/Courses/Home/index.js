import ModuleList from "../Modules/ModuleList";
import {FaRegCheckCircle} from "react-icons/fa";
import {FiPlus} from "react-icons/fi";
import {HiMiniEllipsisVertical} from "react-icons/hi2";
import CourseHomeSidebar from "../../Component/CourseHomeSidebar";


function Home() {
    return (
        <div className="row d-flex">
            <div className="col-8 col-sm-8 col-md-8 mt-2">
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
                </div>
                <hr />
                <div className="list-group" style={{maxWidth: 1500}}>
                    <ModuleList />
                </div>
            </div>

            <div className="col-4 col-sm-4 col-md-4">
                <CourseHomeSidebar/>
            </div>
        </div>
    );
}
export default Home;

