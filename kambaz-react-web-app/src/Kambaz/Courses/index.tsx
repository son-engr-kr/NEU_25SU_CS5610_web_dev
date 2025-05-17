import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

// DONE(A2): 2.4.4 - off canvas navigation  
export default function Courses() {
  const [showCourseNav, setShowCourseNav] = useState(false);

  return (
    <div id="wd-courses">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-danger mb-0">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
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
    </div>
  );
}
