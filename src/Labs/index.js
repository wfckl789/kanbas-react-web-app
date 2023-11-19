import {Link} from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import {Navigate, Route, Routes} from "react-router";
import Assignment4 from "./a4";
import React, {useEffect} from "react";
import store from "./store";
import { Provider } from "react-redux";
import Assignment5 from "./a5";
import axios from "axios";

function Labs() {
    const BASE = process.env.REACT_APP_BASE;
    const triggerRequestURL = `${BASE}/a5/welcome`;
    const trigger = async (URL) => {
        const response = await axios.get(URL);
        console.log("trigger: ", response)
    }
    useEffect(() => {
        trigger(triggerRequestURL);
    }, []);
    return(
        <Provider store={store}>
            <div>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Navigate to="a3"/>} />
                    <Route path="a3" element={<Assignment3/>} />
                    <Route path="a4" element={<Assignment4/>} />
                    <Route path="a5" element={<Assignment5/>} />
                </Routes>
            </div>
        </Provider>
    )
}
export default Labs;

