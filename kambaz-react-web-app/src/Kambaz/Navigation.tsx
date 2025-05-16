import { AiOutlineDashboard, AiOutlineCalendar, AiOutlineInbox } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaFlask } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function KambazNavigation() {
  const location = useLocation();
  {/* DONE(A2): 2.4.1, Style the navigation bar */}
  return (
    <ListGroup id="wd-kambaz-navigation" 
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: "110px" }}>
      
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
        className={`text-center border-0 p-2 ${location.pathname === "/Kambaz/Account" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className="fs-1" style={{ color: location.pathname === "/Kambaz/Account" ? "#dc3545" : "white" }} />
        <div className="mt-1">Account</div>
      </ListGroup.Item>

      <ListGroup.Item 
        to="/Kambaz/Dashboard" 
        as={Link}
        className={`text-center border-0 p-2 ${location.pathname === "/Kambaz/Dashboard" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <AiOutlineDashboard className="fs-1" style={{ color: "#dc3545" }} />
        <div className="mt-1">Dashboard</div>
      </ListGroup.Item>

      <ListGroup.Item 
        to="/Kambaz/Courses" 
        as={Link}
        className={`text-center border-0 p-2 ${location.pathname === "/Kambaz/Courses" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <LiaBookSolid className="fs-1" style={{ color: "#dc3545" }} />
        <div className="mt-1">Courses</div>
      </ListGroup.Item>

      <ListGroup.Item 
        to="/Kambaz/Calendar" 
        as={Link}
        className={`text-center border-0 p-2 ${location.pathname === "/Kambaz/Calendar" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <AiOutlineCalendar className="fs-1" style={{ color: "#dc3545" }} />
        <div className="mt-1">Calendar</div>
      </ListGroup.Item>

      <ListGroup.Item 
        to="/Kambaz/Inbox" 
        as={Link}
        className={`text-center border-0 p-2 ${location.pathname === "/Kambaz/Inbox" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <AiOutlineInbox className="fs-1" style={{ color: "#dc3545" }} />
        <div className="mt-1">Inbox</div>
      </ListGroup.Item>

      <ListGroup.Item 
        to="/Labs" 
        as={Link}
        className={`text-center border-0 p-2 ${location.pathname === "/Labs" ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaFlask className="fs-1" style={{ color: "#dc3545" }} />
        <div className="mt-1">Labs</div>
      </ListGroup.Item>
    </ListGroup>
  );
}