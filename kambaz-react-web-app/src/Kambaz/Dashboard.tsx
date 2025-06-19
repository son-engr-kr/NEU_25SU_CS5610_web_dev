import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
// import { useState } from "react";
import { enrollUser, unenrollUser } from "./Enrollments/reducer";
import * as userClient from "./Account/client";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling }: any) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const handleDeleteCourse = (courseId: string) => {
    deleteCourse(courseId);
  };

  const handleUpdateCourse = () => {
    updateCourse();
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const handleEnrollToggle = async (courseId: string) => {
    console.log("handleEnrollToggle called with courseId:", courseId);
    console.log("currentUser._id:", currentUser._id);

    const enrolled = isEnrolled(courseId);

    try {
      if (enrolled) {
        // Unenroll the user
        await userClient.unenrollFromCourse(currentUser._id, courseId);
        dispatch(unenrollUser({ userId: currentUser._id, courseId }));
        console.log("Successfully unenrolled from course:", courseId);
      } else {
        // Enroll the user
        await userClient.enrollInCourse(currentUser._id, courseId);
        dispatch(enrollUser({ userId: currentUser._id, courseId }));
        console.log("Successfully enrolled in course:", courseId);
      }
    } catch (error) {
      console.error("Failed to toggle enrollment:", error);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      {/* <div className="d-flex justify-content-between align-items-center">
        <span></span>
        <Button
          variant={showAllCourses ? "success" : "primary"}
          onClick={toggleShowAllCourses}
          className="mb-3"
        >
          {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
        </Button>
      </div> */}
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
        {enrolling ? `All Courses (${courses.length})` : `Published Courses (${courses.length})`}
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                {/* Image and Content - Link only when enrolled */}
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="text-decoration-none text-dark">
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {enrolling && (
                        <button className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                  </Card.Body>
                </Link>

                {/* Buttons Section - Outside of Link */}
                <Card.Body className="pt-0">
                  <div className="d-flex justify-content-between">
                    <Link to={`/Kambaz/Courses/${course._id}/Home`} className="text-decoration-none">
                      <Button variant="primary">Go</Button>
                    </Link>

                    {!enrolling && currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={() => setCourse(course)}
                          className="btn btn-warning me-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course._id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}