import { FaSearch, FaPlus, FaCheckCircle } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// DONE(A2): 2.4.7 - Styling the Assignments Screen (On Your Own)

const quizData = [
  { title: "Q1 - HTML" },
  { title: "Q2 - CSS" },
  { title: "Q3 - JS, ES6" },
  { title: "Q4 - NODE" },
  { title: "A5 - MONGO" },
];
const examData = [
  { title: "Midterm" },
  { title: "Final" },
];
const projectData = [
  { title: "Project" },
];

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
              <Button variant="light" size="sm" className="d-flex align-items-center p-1 border-0 bg-transparent shadow-none">
                <FaPlus />
              </Button>
              <Button variant="light" size="sm" className="p-1">
                <BsThreeDotsVertical />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* Assignment List */}
      <div className="bg-white border-top-0 rounded-0" style={{ borderTop: "none" }}>
        {[1, 2, 3].map((num, idx, arr) => (
          <div
            key={num}
            className={`d-flex align-items-center p-3 border-bottom`}
            style={{ borderLeft: "4px solid #198754" }}
          >
            <MdDragIndicator className="me-3 text-secondary" />
            <AiOutlineFileText className="me-3 text-success fs-4" />
            <div className="flex-grow-1">
              <a href="#/Kambaz/Courses/1234/Assignments/123" className="fw-bold fs-5 mb-1 text-decoration-none text-dark">
                A{num}
              </a>
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
      <Card className="mb-0 mt-4 rounded-0 rounded-top">
        <Card.Body className="p-2 pb-0">
          <div className="d-flex align-items-center">
            <MdDragIndicator className="me-2 text-secondary" />
            <span className="fw-bold">QUIZZES</span>
            <span className="ms-2 text-secondary">10% of Total</span>
            <div className="ms-auto d-flex align-items-center gap-2">
              <Button variant="light" size="sm" className="d-flex align-items-center p-1 border-0 bg-transparent shadow-none">
                <FaPlus />
              </Button>
              <Button variant="light" size="sm" className="p-1">
                <BsThreeDotsVertical />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="bg-white border-top-0 rounded-0" style={{ borderTop: "none" }}>
        {quizData.map((quiz, idx) => (
          <div
            key={quiz.title}
            className="d-flex align-items-center p-3 border-bottom"
            style={{ borderLeft: "4px solid #198754" }}
          >
            <MdDragIndicator className="me-3 text-secondary" />
            <AiOutlineFileText className="me-3 text-success fs-4" />
            <div className="flex-grow-1">
              <span className="fw-bold fs-5 mb-1">{quiz.title}</span>
              <div className="text-primary" style={{ fontSize: "0.95em" }}>Multiple Modules <span className="text-secondary">| Not Available Yet</span></div>
            </div>
            <FaCheckCircle className="text-success fs-4 ms-2" />
            <Button variant="light" size="sm" className="ms-2 p-1">
              <BsThreeDotsVertical />
            </Button>
          </div>
        ))}
      </div>

      {/* Exams Section */}
      <Card className="mb-0 mt-4 rounded-0 rounded-top">
        <Card.Body className="p-2 pb-0">
          <div className="d-flex align-items-center">
            <MdDragIndicator className="me-2 text-secondary" />
            <span className="fw-bold">EXAMS</span>
            <span className="ms-2 text-secondary">20% of Total</span>
            <div className="ms-auto d-flex align-items-center gap-2">
              <Button variant="light" size="sm" className="d-flex align-items-center p-1 border-0 bg-transparent shadow-none">
                <FaPlus />
              </Button>
              <Button variant="light" size="sm" className="p-1">
                <BsThreeDotsVertical />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="bg-white border-top-0 rounded-0" style={{ borderTop: "none" }}>
        {examData.map((exam, idx) => (
          <div
            key={exam.title}
            className="d-flex align-items-center p-3 border-bottom"
            style={{ borderLeft: "4px solid #198754" }}
          >
            <MdDragIndicator className="me-3 text-secondary" />
            <AiOutlineFileText className="me-3 text-success fs-4" />
            <div className="flex-grow-1">
              <span className="fw-bold fs-5 mb-1">{exam.title}</span>
              <div className="text-primary" style={{ fontSize: "0.95em" }}>Multiple Modules <span className="text-secondary">| Not Available Yet</span></div>
            </div>
            <FaCheckCircle className="text-success fs-4 ms-2" />
            <Button variant="light" size="sm" className="ms-2 p-1">
              <BsThreeDotsVertical />
            </Button>
          </div>
        ))}
      </div>

      {/* Project Section */}
      <Card className="mb-0 mt-4 rounded-0 rounded-top">
        <Card.Body className="p-2 pb-0">
          <div className="d-flex align-items-center">
            <MdDragIndicator className="me-2 text-secondary" />
            <span className="fw-bold">PROJECT</span>
            <span className="ms-2 text-secondary">30% of Total</span>
            <div className="ms-auto d-flex align-items-center gap-2">
              <Button variant="light" size="sm" className="d-flex align-items-center p-1 border-0 bg-transparent shadow-none">
                <FaPlus />
              </Button>
              <Button variant="light" size="sm" className="p-1">
                <BsThreeDotsVertical />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div className="bg-white border-top-0 rounded-0" style={{ borderTop: "none" }}>
        {projectData.map((project, idx) => (
          <div
            key={project.title}
            className="d-flex align-items-center p-3 border-bottom"
            style={{ borderLeft: "4px solid #198754" }}
          >
            <MdDragIndicator className="me-3 text-secondary" />
            <AiOutlineFileText className="me-3 text-success fs-4" />
            <div className="flex-grow-1">
              <span className="fw-bold fs-5 mb-1">{project.title}</span>
              <div className="text-primary" style={{ fontSize: "0.95em" }}>Multiple Modules <span className="text-secondary">| Not Available Yet</span></div>
            </div>
            <FaCheckCircle className="text-success fs-4 ms-2" />
            <Button variant="light" size="sm" className="ms-2 p-1">
              <BsThreeDotsVertical />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
