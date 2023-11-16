import { createSlice } from "@reduxjs/toolkit";
import assignments from "./index";

const initialState = {
    assignments: [],
    assignment: { title: "NEW COURSE" },
};

const assignmentsReducer = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignments: (state, action) => {
            state.assignments = [action.payload, ...state.assignments];
        },
        deleteAssignments: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignments: (state, action) => {
            state.assignments = state.assignments.map(
                (assignment) => {
                    return assignment._id === action.payload._id ? action.payload : assignment;
                }
            );
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        }
    }
});

export const {
    addAssignments,
    deleteAssignments,
    updateAssignments,
    setAssignments,
    setAssignment} =
assignmentsReducer.actions;
export default assignmentsReducer.reducer;