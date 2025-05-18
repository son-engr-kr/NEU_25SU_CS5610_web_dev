import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa";
import { Button, Offcanvas, ListGroup } from "react-bootstrap";
import { useState } from "react";
import PeopleTable from "./People/Table";
import { AiOutlineDashboard, AiOutlineCalendar, AiOutlineInbox } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaFlask } from "react-icons/fa";
import { Link } from "react-router-dom";

// DONE(A2): 2.4.4 - off canvas navigation 
// DONE(A2): 2.4.4 off canvas Kambas navigation - not perfect
export default function Courses() {
  const [showCourseNav, setShowCourseNav] = useState(false);
  const [showKambazNav, setShowKambazNav] = useState(false);

  return (
    <div id="wd-courses">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-danger mb-0">
          <FaAlignJustify 
            className="me-4 fs-4 mb-1 d-md-none" 
            style={{ cursor: 'pointer' }}
            onClick={() => setShowKambazNav(true)}
          />
          Course 1234
        </h2>
        <Button 
          variant="light" 
          className="d-md-none"
          onClick={() => setShowCourseNav(true)}
        >
          <FaAlignJustify />
        </Button>
      </div>
      <hr />
      
      <div className="d-flex">
        {/* Course Navigation Sidebar - Hidden on mobile */}
        <div className="d-none d-md-block" style={{ width: "200px" }}>
          <CourseNavigation />
        </div>

        {/* Main Content */}
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>

      {/* Mobile Course Navigation */}
      <div 
        className="d-md-none"
        style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          zIndex: 1050,
          backgroundColor: 'white',
          display: showCourseNav ? 'block' : 'none'
        }}
      >
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5 className="mb-0">Course Navigation</h5>
          <Button 
            variant="light" 
            onClick={() => setShowCourseNav(false)}
          >
            ×
          </Button>
        </div>
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <CourseNavigation />
        </div>
      </div>

      {/* Kambaz Navigation */}
      <Offcanvas 
        show={showKambazNav} 
        onHide={() => setShowKambazNav(false)}
        placement="start"
        style={{ width: "100%" }}
      >
        <Offcanvas.Body className="p-0">
          <ListGroup className="rounded-0 h-100 bg-black">
            <ListGroup.Item 
              action
              href="https://www.northeastern.edu/"
              target="_blank"
              className="bg-black border-0 text-center p-2">
              <img src="/images/NEU.png" width="75px" alt="NEU" />
            </ListGroup.Item>

            <ListGroup.Item 
              to="/Kambaz/Account" 
              as={Link}
              className="text-center border-0 p-2 bg-black text-white">
              <FaRegCircleUser className="fs-1" style={{ color: "white" }} />
              <div className="mt-1">Account</div>
            </ListGroup.Item>

            <ListGroup.Item 
              to="/Kambaz/Dashboard" 
              as={Link}
              className="text-center border-0 p-2 bg-black text-white">
              <AiOutlineDashboard className="fs-1" style={{ color: "#dc3545" }} />
              <div className="mt-1">Dashboard</div>
            </ListGroup.Item>

            <ListGroup.Item 
              to="/Kambaz/Courses" 
              as={Link}
              className="text-center border-0 p-2 bg-black text-white">
              <LiaBookSolid className="fs-1" style={{ color: "#dc3545" }} />
              <div className="mt-1">Courses</div>
            </ListGroup.Item>

            <ListGroup.Item 
              to="/Kambaz/Calendar" 
              as={Link}
              className="text-center border-0 p-2 bg-black text-white">
              <AiOutlineCalendar className="fs-1" style={{ color: "#dc3545" }} />
              <div className="mt-1">Calendar</div>
            </ListGroup.Item>

            <ListGroup.Item 
              to="/Kambaz/Inbox" 
              as={Link}
              className="text-center border-0 p-2 bg-black text-white">
              <AiOutlineInbox className="fs-1" style={{ color: "#dc3545" }} />
              <div className="mt-1">Inbox</div>
            </ListGroup.Item>

            <ListGroup.Item 
              to="/Labs" 
              as={Link}
              className="text-center border-0 p-2 bg-black text-white">
              <FaFlask className="fs-1" style={{ color: "#dc3545" }} />
              <div className="mt-1">Labs</div>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
