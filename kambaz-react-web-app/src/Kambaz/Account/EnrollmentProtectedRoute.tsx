import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function EnrollmentProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams();

  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  // Faculty can access any course
  if (currentUser.role === "FACULTY") {
    return children;
  }

  // Students can only access enrolled courses
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id &&
      enrollment.course === cid
  );

  if (isEnrolled) {
    return children;
  } else {
    return <Navigate to="/Kambaz/Dashboard" />;
  }
} 