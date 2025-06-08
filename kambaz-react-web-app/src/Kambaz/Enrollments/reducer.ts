import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

const initialState = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollments }) => {
      console.log("setEnrollments reducer called with:", enrollments);
      state.enrollments = enrollments;
    },
    enrollUser: (state, { payload: { userId, courseId } }) => {
      console.log("enrollUser reducer called with:", { userId, courseId });
      console.log("Current enrollments before:", state.enrollments);
      
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
      
      console.log("New enrollment created:", newEnrollment);
      console.log("Current enrollments after:", state.enrollments);
    },
    unenrollUser: (state, { payload: { userId, courseId } }) => {
      console.log("unenrollUser reducer called with:", { userId, courseId });
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === userId && e.course === courseId)
      );
    },
  },
});

export const { setEnrollments, enrollUser, unenrollUser } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer; 