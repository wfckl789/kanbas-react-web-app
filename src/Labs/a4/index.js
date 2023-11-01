import React from "react";
import Add from "./Add";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayIndexAndLength from "../a3/ArrayIndexAndLength";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }
    return(
        <>
            <h1>Assignment 4</h1>
            <ReduxExamples/>
            <Add a={1} b={2} />
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello} />
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
        </>
    );
};
export default Assignment4;

