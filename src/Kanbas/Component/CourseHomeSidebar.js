import {FaFileImport} from "react-icons/fa";
import {AiOutlineBell, AiOutlineLogout, AiOutlineNotification} from "react-icons/ai";
import {ImTarget} from "react-icons/im";
import {BsFileBarGraph} from "react-icons/bs";

function CourseHomeSidebar() {
    return (
        <div>
            <div className="btn-group btn-group-vertical btn-group-sm">
                <button type="button" className="btn btn-outline-secondary m-1" style={{textAlign: "left"}}><FaFileImport/> Import Existing Content</button>
                <button type="button" className="btn btn-outline-secondary m-1" style={{textAlign: "left"}}><AiOutlineLogout/> Import from Commons</button>
                <button type="button" className="btn btn-outline-secondary m-1" style={{textAlign: "left"}}><ImTarget /> Choose Home Page</button>
                <button type="button" className="btn btn-outline-secondary m-1" style={{textAlign: "left"}}><BsFileBarGraph/> View Course Stream</button>
                <button type="button" className="btn btn-outline-secondary m-1" style={{textAlign: "left"}}><AiOutlineNotification /> New Announcement</button>
                <button type="button" className="btn btn-outline-secondary m-1" style={{textAlign: "left"}}><BsFileBarGraph/> New Analytics</button>
                <button type="button" className="btn btn-outline-secondary m-1" style={{textAlign: "left"}}><AiOutlineBell /> View Course Notifications</button>
            </div>
            <h5 className="m-2">To Do</h5>
            <hr className="m-1"/>
            <div className="card text-grey border-light mb-3" style={{maxWidth: '18rem'}}>
                {/*<div className="card-header">Header</div>*/}
                <div className="card-body">
                    <h5 className="card-title" style={{color: "#c73838"}}>Grade A1 - ENV + HTML</h5>
                    <p className="card-text">100 points · Sep 18 at 11:59pm</p>
                </div>
            </div>
            <div className="card text-grey border-light mb-3" style={{maxWidth: '18rem'}}>
                {/*<div className="card-header">Header</div>*/}
                <div className="card-body">
                    <h5 className="card-title" style={{color: "#c73838"}}>Grade A2 - CSS + BOOTSTRAP</h5>
                    <p className="card-text">100 points · Oct 2 at 11:59pm</p>
                </div>
            </div>
        </div>
    )
}

export default CourseHomeSidebar