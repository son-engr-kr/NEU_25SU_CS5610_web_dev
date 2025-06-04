import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { enrollUser, unenrollUser } from "./Enrollments/reducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", 
    description: "New Description",
  });
  
  const [showAllCourses, setShowAllCourses] = useState(false);

  const addNewCourse = () => {
    dispatch(addCourse(course));
  };

  const handleDeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id &&
        enrollment.course === courseId
    );
  };

  const handleEnrollToggle = (courseId: string) => {
    console.log("handleEnrollToggle called with courseId:", courseId);
    console.log("currentUser._id:", currentUser._id);
    console.log("isEnrolled before:", isEnrolled(courseId));
    console.log("enrollments:", enrollments);
    
    if (isEnrolled(courseId)) {
      console.log("Dispatching unenrollUser");
      dispatch(unenrollUser({ userId: currentUser._id, courseId }));
    } else {
      console.log("Dispatching enrollUser");
      dispatch(enrollUser({ userId: currentUser._id, courseId }));
    }
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course: any) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <div className="d-flex justify-content-between align-items-center">
        <span></span>
        <Button 
          variant={showAllCourses ? "success" : "primary"} 
          onClick={() => setShowAllCourses(!showAllCourses)}
          className="mb-3"
        >
          {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
        </Button>
      </div>
      <hr />
      
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} > Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5><br />
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl as="textarea" value={course.description} rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? `All Courses (${courses.length})` : `Published Courses (${displayedCourses.length})`}
      </h2> 
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={isEnrolled(course._id) ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                  className={`wd-dashboard-course-link text-decoration-none text-dark ${!isEnrolled(course._id) ? 'pe-none' : ''}`}
                  onClick={(e) => {
                    if (!isEnrolled(course._id)) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} 
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} 
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      {isEnrolled(course._id) ? (
                        <Button variant="primary"> Go </Button>
                      ) : (
                        <span></span>
                      )}

                      {!showAllCourses && currentUser.role === "FACULTY" && (
                        <>
                          <button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end" >
                            Edit
                          </button>

                          <button onClick={(event) => {
                            event.preventDefault();
                            handleDeleteCourse(course._id);
                          }} className="btn btn-danger"
                            id="wd-delete-course-click">
                            Delete
                          </button>
                        </>
                      )}

                      {showAllCourses && (
                        <Button 
                          variant={isEnrolled(course._id) ? "danger" : "success"}
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnrollToggle(course._id);
                          }}
                        >
                          {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}