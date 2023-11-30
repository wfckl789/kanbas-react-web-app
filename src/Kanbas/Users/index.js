import AccountNavigation from "./AccountNavigation";
import {Navigate, Route, Routes} from "react-router";
import Signin from "./signin";
import Account from "./account";
import UserTable from "./table";
import Signup from "./signup";

function Users() {
    return (
        <div className="d-flex">
            <div>
                <AccountNavigation/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/User/signin" />}/>
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="account" element={<Account />} />
                    <Route path="account/:id" element={<Account />} />
                    <Route path="admin/users" element={<UserTable />} />
                </Routes>
            </div>
        </div>
    )
}

export default Users;