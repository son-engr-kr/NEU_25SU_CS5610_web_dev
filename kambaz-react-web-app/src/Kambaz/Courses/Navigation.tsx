import { Link, useLocation, useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
// TODO(A2): Can I use location.pathname.includes to check if the current path is active?
export default function CourseNavigation() {
  const location = useLocation();
  const { courseId } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item
          key={link}
          as={Link}
          to={`/Kambaz/Courses/${courseId}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`border-0 ${location.pathname.includes(`/${link}`) ? "active" : "text-danger"}`}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
