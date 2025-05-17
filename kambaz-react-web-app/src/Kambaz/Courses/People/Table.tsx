import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td></tr>
                    {/* DONE(A2): Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Nikola</span>{" "}
                        <span className="wd-last-name">Tesla</span></td>
                        <td className="wd-login-id">001234562T</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2023-09-15</td>
                        <td className="wd-total-activity">12:34:56</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Albert</span>{" "}
                        <span className="wd-last-name">Einstein</span></td>
                        <td className="wd-login-id">001234563E</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2023-08-20</td>
                        <td className="wd-total-activity">08:45:12</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">John</span>{" "}
                        <span className="wd-last-name">von Neumann</span></td>
                        <td className="wd-login-id">001234564N</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2023-07-10</td>
                        <td className="wd-total-activity">09:12:34</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Paul</span>{" "}
                        <span className="wd-last-name">Dirac</span></td>
                        <td className="wd-login-id">001234565D</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2023-06-05</td>
                        <td className="wd-total-activity">11:22:33</td></tr>
                </tbody>
            </Table>
        </div>);
}