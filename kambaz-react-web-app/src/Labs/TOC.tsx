import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export default function TOC() {
 return (
   <Nav variant="pills">
     <Nav.Item>
       <Nav.Link to="/Labs" as={Link}>Labs</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab1" as={Link}>Lab 1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab2" as={Link} active>Lab 2</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Labs/Lab3" as={Link}>Lab 3</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/son-engr-kr/NEU_25SU_CS5610_web_dev" id="wd-github">GitHub repository</Nav.Link>
     </Nav.Item>
   </Nav>
);}
