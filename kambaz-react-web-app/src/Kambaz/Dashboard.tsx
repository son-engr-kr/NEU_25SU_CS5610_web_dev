import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
// DONE(A2): 2.4.2 Your own dashboard styles
export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="fs-2 fw-bold mb-3">Dashboard</h1>
      <hr />
      <h2 className="fs-3 fw-bold my-3">Published Courses (12)</h2>
      <hr />
      
      <Row className="g-4">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/1234/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS1234 React JS</Card.Title>
                <Card.Text className="text-secondary small">Full Stack software developer</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/7150/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS7150 Deep Learning</Card.Title>
                <Card.Text className="text-secondary small">Advanced AI techniques and applications</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/6250/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">ME6250 Wearable Robotics</Card.Title>
                <Card.Text className="text-secondary small">Robotics in wearable technology</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/5610/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS5610 Web Development</Card.Title>
                <Card.Text className="text-secondary small">Building modern web</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/9986/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">ME9986 Research</Card.Title>
                <Card.Text className="text-secondary small">Research for PhD students</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/5374/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">ME5374 Human Movement Simulation</Card.Title>
                <Card.Text className="text-secondary small">Simulating human movement dynamics</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/3540/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS3540 Game Programming</Card.Title>
                <Card.Text className="text-secondary small">Game programming</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/5180/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "270px" }}>
              <Card.Img variant="top" src="/images/reactjs.jpg" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS5180 Reinforcement Learning</Card.Title>
                <Card.Text className="text-secondary small">Reinforcement learning</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
