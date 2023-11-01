import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database"
import assignments from "./index";

const initialState = {
    assignments: db.assignments,
    assignment: { title: "NEW COURSE" },
};

const assignmentsReducer = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map(
                (assignment) => {
                    return assignment._id === action.payload._id ? action.payload : assignment;
                }
            );
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    }
});

export const {addAssignment, deleteAssignment, updateAssignment, setAssignment} = assignmentsReducer.actions;
export default assignmentsReducer.reducer;