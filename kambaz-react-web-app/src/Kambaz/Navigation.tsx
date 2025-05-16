import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function KambazNavigation() {
  return (
    <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <ListGroup.Item id="wd-neu-link" target="_blank" action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></ListGroup.Item><br />
      <ListGroup.Item to="/Kambaz/Account" as={Link}
        className="text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </ListGroup.Item>
      <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
        className="text-center border-0
                  bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </ListGroup.Item>
      <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
        className="text-white
                  bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </ListGroup.Item>
      {/* complete styling the rest of the links */}
    </ListGroup>);
}