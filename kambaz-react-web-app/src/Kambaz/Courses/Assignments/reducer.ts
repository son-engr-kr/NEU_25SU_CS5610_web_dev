import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },
    addAssignment: (state, { payload: assignment }) => {
      state.assignments = [...state.assignments, assignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      console.log("deleteAssignment reducer called with:", assignmentId);
      console.log("Current assignments before delete:", state.assignments);
      
      const originalLength = state.assignments.length;
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
      
      console.log("Assignments after delete:", state.assignments);
      console.log("Length changed from", originalLength, "to", state.assignments.length);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer; 