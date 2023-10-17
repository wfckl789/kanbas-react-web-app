import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div>
               <Routes>
                   <Route path="/" element={<Navigate to="Dashboard" />} />
                   <Route path="Account" element={<h1 style={{margin: "10px 0px 0px 30px"}}>Account</h1>} />
                   <Route path="Dashboard" element={<Dashboard />} />
                   <Route path="Courses/:courseId/*" element={<Courses />} />
               </Routes>
            </div>
        </div>
    );
}
export default Kanbas;

