import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { Button, InputGroup, FormControl, Row, Col, Card } from "react-bootstrap";
// DONE(A2): 2.4.7 - Styling the Assignments Screen (On Your Own)
export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3" style={{ background: "#f5f5f5", minHeight: "100vh", marginBottom: 0 }}>
      {/* Top bar: Search + Buttons */}
      <div className="d-flex align-items-center mb-3">
        <InputGroup style={{ maxWidth: 300 }}>
          <InputGroup.Text className="bg-white border-end-0">
            <FaSearch className="text-secondary" />
          </InputGroup.Text>
          <FormControl
            placeholder="Search..."
            className="border-start-0"
            style={{ background: "#fff" }}
          />
        </InputGroup>
        <div className="ms-auto d-flex gap-2">
          <Button variant="outline-secondary" className="fw-bold d-flex align-items-center">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" className="fw-bold d-flex align-items-center">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      {/* Assignments Header */}
      <Card className="mb-0 rounded-0 rounded-top">
        <Card.Body className="p-2 pb-0">
          <div className="d-flex align-items-center">
            <MdDragIndicator className="me-2 text-secondary" />
            <span className="fw-bold">ASSIGNMENTS</span>
            <span className="ms-2 text-secondary">40% of Total</span>
            <div className="ms-auto d-flex align-items-center gap-2">
              {/* Remove dots here, move to each item */}
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Assignment List */}
      <div className="bg-white border-top-0 rounded-0" style={{ borderTop: "none" }}>
        {[1, 2, 3].map((num, idx, arr) => (
          <div
            key={num}
            className={`d-flex align-items-center p-3 border-bottom${idx === arr.length - 1 ? "" : ""}`}
            style={{ borderLeft: "4px solid #198754" }}
          >
            <MdDragIndicator className="me-3 text-secondary" />
            <AiOutlineFileText className="me-3 text-success fs-4" />
            <div className="flex-grow-1">
              <div className="fw-bold fs-5 mb-1">A{num}</div>
              <div className="text-primary" style={{ fontSize: "0.95em" }}>Multiple Modules <span className="text-secondary">| Not available until May {6 + (num - 1) * 7} at 12:00am</span></div>
              <div className="text-secondary" style={{ fontSize: "0.95em" }}>
                <span className="fw-bold">Due</span> May {13 + (num - 1) * 7} at 11:59pm | 100 pts
              </div>
            </div>
            <FaCheckCircle className="text-success fs-4 ms-2" />
            <Button variant="light" size="sm" className="ms-2 p-1">
              <BsThreeDotsVertical />
            </Button>
          </div>
        ))}
      </div>

      {/* Quizzes Section */}
      <h3 id="wd-quizzes-title">
        QUIZZES 10% of Total <select><option>Edit</option></select>
      </h3>
      <ul id="wd-quiz-list">
        <li><a href="#">Q1 - HTML</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Q2 - CSS</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Q3 - JS, ES6</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Q4 - NODE</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">A5 - MONGO</a><br/>Multiple Modules | Not Available Yet</li>
      </ul>

      {/* Exams Section */}
      <h3 id="wd-exams-title">
        EXAMS 20% of Total <select><option>Edit</option></select>
      </h3>
      <ul id="wd-exam-list">
        <li><a href="#">Midterm</a><br/>Multiple Modules | Not Available Yet</li>
        <li><a href="#">Final</a><br/>Multiple Modules | Not Available Yet</li>
      </ul>

      {/* Project Section */}
      <h3 id="wd-project-title">
        PROJECT 30% of Total <select><option>Edit</option></select>
      </h3>
      <ul id="wd-project-list">
        <li><a href="#">Project</a><br/>Multiple Modules | Not Available Yet</li>
      </ul>
    </div>
  );
}
