import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Nav() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const BASE = process.env.REACT_APP_BASE;
    const triggerURL = `${BASE}/a5/add/1/1`;
    const trigger = async (URL) => {
        const response = await axios.get(URL);
        console.log("trigger add api: ", response)
        navigate('/Kanbas');
    }
    return (
        <nav className="nav nav-tabs mt-2">
            <Link to="/Labs/a3"
                  className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
            <Link className="nav-link" to="/Labs/a4">A4</Link>
            <Link className="nav-link" to="/Labs/a5">A5</Link>
            <Link to="/hello"
                  className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
            <Link
                // to="/Kanbas"
                  onClick={() => trigger(triggerURL)}
                  className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>
                Kanbas
            </Link>
        </nav>
    );
}
export default Nav;


