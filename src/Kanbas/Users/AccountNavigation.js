import {Link, useLocation, useParams} from "react-router-dom";
import {Route} from "react-router";
import Signin from "./signin";
import Account from "./account";
import UserTable from "./table";

function AccountNavigation() {
    const links = ["Home", "Search", "Signin", "Signup", "Account"];
    const { pathname } = useLocation();
    return (
        <div style={{ width: 150 }}>
            <ul className="nav flex-column nav-pills course-nav">
                {
                    links.map((link, index) => {
                    return (
                        <li className="nav-item">
                            <Link
                                key={index}
                                to={`/Kanbas/User/${link.charAt(0).toLowerCase() + link.slice(1)}`}
                                className={`nav-link ${pathname.includes(link.toLowerCase()) && "active"}`}>
                                {link}
                            </Link>
                        </li>
                    )})
                }
            </ul>

        </div>
    );
}

export default AccountNavigation;