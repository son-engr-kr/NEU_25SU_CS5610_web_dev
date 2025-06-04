import { FaSearch, FaPlus, FaCheckCircle, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDragIndicator } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
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

// Format date from "2024-05-06T00:00" to "May 6 at 12:00am"
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = ["January", "February", "March", "April", "May", "June", 
                 "July", "August", "September", "October", "November", "December"];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  
  return `${month} ${day} at ${formattedHours}:${formattedMinutes}${ampm}`;
}

interface Assignment {
  _id: string;
  title: string;
  course: string;
  module: string;
  available: string;
  due: string;
  points: number;
}

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter((assignment: Assignment) => assignment.course === cid);

  console.log("Assignments component rendered");
  console.log("Course ID:", cid);
  console.log("All assignments:", assignments);
  console.log("Course assignments:", courseAssignments);
  console.log("Current user:", currentUser);

  const handleDeleteAssignment = (assignmentId: string) => {
    console.log("handleDeleteAssignment called with:", assignmentId);
    const result = window.confirm("Are you sure you want to remove this assignment?");
    console.log("User confirmed:", result);
    if (result) {
      console.log("Dispatching deleteAssignment");
      dispatch(deleteAssignment(assignmentId));
    }
  };

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
          {currentUser.role === "FACULTY" && (
            <Link to={`/Kambaz/Courses/${cid}/Assignments/new`}>
              <Button variant="danger" className="fw-bold d-flex align-items-center">
                <FaPlus className="me-1" /> Assignment
              </Button>
            </Link>
          )}
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
        {courseAssignments.map((assignment: Assignment) => (
          <div
            key={assignment._id}
            className="d-flex align-items-center p-3 border-bottom"
            style={{ borderLeft: "4px solid #198754" }}
          >
            <MdDragIndicator className="me-3 text-secondary" />
            <AiOutlineFileText className="me-3 text-success fs-4" />
            <div className="flex-grow-1">
              <Link 
                to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                className="fw-bold fs-5 mb-1 text-decoration-none text-dark"
              >
                {assignment.title}
              </Link>
              <div className="text-primary" style={{ fontSize: "0.95em" }}>
                {assignment.module} <span className="text-secondary">| {formatDate(assignment.available)}</span>
              </div>
              <div className="text-secondary" style={{ fontSize: "0.95em" }}>
                <span className="fw-bold">Due</span> {formatDate(assignment.due)} | {assignment.points} pts
              </div>
            </div>
            
            {/* Control Buttons */}
            {currentUser.role === "FACULTY" && (
              <div className="float-end d-flex align-items-center">
                <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none">
                  <FaPencil className="text-primary me-3" style={{ cursor: "pointer" }} />
                </Link>
                <FaTrash 
                  className="text-danger me-3" 
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    console.log("Trash icon clicked!");
                    e.preventDefault();
                    e.stopPropagation();
                    handleDeleteAssignment(assignment._id);
                  }}
                />
              </div>
            )}
            
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
        {quizData.map((quiz) => (
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
        {examData.map((exam) => (
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
        {projectData.map((project) => (
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
