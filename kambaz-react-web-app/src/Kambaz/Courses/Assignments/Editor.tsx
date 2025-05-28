import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

// DONE(A2): 2.4.8 - Styling Edit Assignment Screen (On Your Own)
interface Assignment {
  _id: string;
  title: string;
  course: string;
  module: string;
  available: string;
  due: string;
  points: number;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: Assignment) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <Form id="wd-assignments-editor" className="p-4" style={{ maxWidth: 500, margin: "0 auto" }}>
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" value={assignment.title} />
      </Form.Group>

      <Card className="mb-3">
        <Card.Body>
          <div className="mb-2">
            <span className="text-danger">The assignment is available online</span>
          </div>
          <div className="mb-2">
            Submit a link to the landing page of your Web application running on Netlify.
          </div>
          <div className="mb-2">The landing page should include the following:</div>
          <ul className="mb-2">
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <div>The Kanbas application should include a link to navigate back to the landing page.</div>
        </Card.Body>
      </Card>

      {/* Points */}
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column md={4} className="text-md-end">Points</Form.Label>
        <Col md={8}>
          <Form.Control type="number" value={assignment.points} />
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
                <Form.Control type="datetime-local" defaultValue={assignment.due} />
              </Form.Group>
              <Form.Group className="mb-2" controlId="wd-available-from">
                <Form.Label className="mb-1">Available from</Form.Label>
                <Form.Control type="datetime-local" defaultValue={assignment.available} />
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
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="secondary">Cancel</Button>
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
        </Link>
      </div>
    </Form>
  );
}
