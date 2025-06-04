import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState, useEffect } from "react";

// DONE(A2): 2.4.8 - Styling Edit Assignment Screen (On Your Own)
interface Assignment {
  _id: string;
  title: string;
  course: string;
  module: string;
  available: string;
  due: string;
  points: number;
  description?: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const isNew = aid === "new";
  const existingAssignment = assignments.find((a: Assignment) => a._id === aid);

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "New Assignment",
    course: cid || "",
    module: "Module",
    available: "2024-05-06T00:00",
    due: "2024-05-13T23:59",
    points: 100,
    description: "New Assignment Description"
  });

  useEffect(() => {
    if (!isNew && existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [isNew, existingAssignment]);

  const handleSave = () => {
    if (isNew) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Form id="wd-assignments-editor" className="p-4" style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control 
          type="text" 
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </Form.Group>

      <Card className="mb-3">
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={assignment.description}
              onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            />
          </Form.Group>
        </Card.Body>
      </Card>

      {/* Points */}
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column md={4} className="text-md-end">Points</Form.Label>
        <Col md={8}>
          <Form.Control 
            type="number" 
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
          />
        </Col>
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as={Row} className="mb-3" controlId="wd-group">
        <Form.Label column md={4} className="text-md-end">Assignment Group</Form.Label>
        <Col md={8}>
          <Form.Select>
            <option>ASSIGNMENTS</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Display Grade as */}
      <Form.Group as={Row} className="mb-3" controlId="wd-display-grade">
        <Form.Label column md={4} className="text-md-end">Display Grade as</Form.Label>
        <Col md={8}>
          <Form.Select>
            <option>Percentage</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Submission Type + Online Entry Options */}
      <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
        <Form.Label column md={4} className="text-md-end">Submission Type</Form.Label>
        <Col md={8}>
          <Form.Select className="mb-2">
            <option>Online</option>
          </Form.Select>
          <div className="border rounded p-2 bg-light">
            <div className="fw-bold mb-1">Online Entry Options</div>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Col>
      </Form.Group>

      {/* Assign label left, Card right */}
      <Row className="mb-3 align-items-start">
        <Col md={4} className="text-md-end pt-2 fw-bold">Assign</Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Form.Group className="mb-2" controlId="wd-assign-to">
                <Form.Label className="mb-1">Assign to</Form.Label>
                <Form.Control type="text" value="Everyone" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="wd-due">
                <Form.Label className="mb-1">Due</Form.Label>
                <Form.Control 
                  type="datetime-local" 
                  value={assignment.due}
                  onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="wd-available-from">
                <Form.Label className="mb-1">Available from</Form.Label>
                <Form.Control 
                  type="datetime-local" 
                  value={assignment.available}
                  onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="wd-until">
                <Form.Label className="mb-1">Until</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        <Button variant="danger" onClick={handleSave}>Save</Button>
      </div>
    </Form>
  );
}
