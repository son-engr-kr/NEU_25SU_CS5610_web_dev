import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
// TODO(A2): Can I use location.pathname.includes to check if the current path is active?
export default function CourseNavigation() {
  const location = useLocation();
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <ListGroup.Item 
        as={Link}
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className={`border-0 ${location.pathname.includes("/Home") ? "active" : "text-danger"}`}>
        Home
      </ListGroup.Item>
      <ListGroup.Item 
        as={Link}
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`border-0 ${location.pathname.includes("/Modules") ? "active" : "text-danger"}`}>
        Modules
      </ListGroup.Item>
      <ListGroup.Item 
        as={Link}
        to="/Kambaz/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`border-0 ${location.pathname.includes("/Piazza") ? "active" : "text-danger"}`}>
        Piazza
      </ListGroup.Item>
      <ListGroup.Item 
        as={Link}
        to="/Kambaz/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`border-0 ${location.pathname.includes("/Zoom") ? "active" : "text-danger"}`}>
        Zoom
      </ListGroup.Item>
      <ListGroup.Item 
        as={Link}
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className={`border-0 ${location.pathname.includes("/Assignments") ? "active" : "text-danger"}`}>
        Assignments
      </ListGroup.Item>
      <ListGroup.Item 
        as={Link}
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className={`border-0 ${location.pathname.includes("/Quizzes") ? "active" : "text-danger"}`}>
        Quizzes
      </ListGroup.Item>
      <ListGroup.Item 
        as={Link}
        to="/Kambaz/Courses/1234/People"
        id="wd-course-people-link"
        className={`border-0 ${location.pathname.includes("/People") ? "active" : "text-danger"}`}>
        People
      </ListGroup.Item>
    </ListGroup>
  );
}
