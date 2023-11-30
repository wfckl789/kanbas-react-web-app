import { Link, useLocation } from "react-router-dom";
import './KanbasNavigation.css';
import {FaSmile, FaStar, FaUserCircle} from "react-icons/fa";
import {TfiDashboard} from "react-icons/tfi";
import {BiBook, BiHelpCircle} from "react-icons/bi";
import {FaCalendarDays} from "react-icons/fa6";
import {AiOutlineClockCircle} from "react-icons/ai";
import {RiLogoutCircleRLine} from "react-icons/ri";
import {BsInbox} from "react-icons/bs";
import {MdOutlineLaptopChromebook} from "react-icons/md";

function KanbasNavigation() {
    const links = ["User", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const { pathname } = useLocation();
    const logoURL = "https://instructure-uploads.s3.amazonaws.com/account_145230000000000001/attachments/949/NU_MonoLVX_RGB_RW.png";
    const icons = [
        <FaUserCircle style={{fontSize: 30, color: "#9ca1ab"}}/>, <TfiDashboard className="nav-icon"/>,
        <BiBook className="nav-icon"/>, <FaCalendarDays className="nav-icon"/>,
        <BsInbox className="nav-icon"/>, <AiOutlineClockCircle className="nav-icon"/>,
        <MdOutlineLaptopChromebook className="nav-icon"/>, <RiLogoutCircleRLine className="nav-icon"/>,
        <BiHelpCircle className="nav-icon"/>
    ];

    return (
        <div style={{backgroundColor: "black", width: 85, maxHeight: "100%"}}>
            <img src={logoURL} style={{maxWidth: "100%", maxHeight: "100%"}}/>

            <div className="nav flex-column nav-pills">
                {
                    links.map((link, index) => {
                        return (
                            <li className="nav-item">
                                <Link
                                    key={index}
                                    to={`/Kanbas/${link}`}
                                    className={`nav-link ${pathname.includes(link) && "active"}`}
                                >
                                    {icons[index]}
                                    <p style={{fontSize: 16}}>{link === 'User' ? 'Account' : link}</p>
                                </Link>
                            </li>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default KanbasNavigation;


