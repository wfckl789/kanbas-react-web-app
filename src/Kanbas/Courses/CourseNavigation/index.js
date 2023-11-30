import { Link, useParams, useLocation } from "react-router-dom";
import "./CourseNavigation.css"

function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div style={{ width: 150 }}>
            <ul className="nav flex-column nav-pills course-nav">
                {links.map((link, index) => (
                    <li className="nav-item">
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`nav-link ${pathname.includes(link) && "active"}`}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;

