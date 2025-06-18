import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FaUserCircle, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as usersClient from "./client";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    loginId: string;
    section: string;
    role: string;
    lastActivity: string;
    totalActivity: string;
    username?: string;
    email?: string;
}

export default function PeopleTable({ users = [] }: { users?: any[] }) {
    // const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const [users, setUsers] = useState<User[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [formData, setFormData] = useState<Partial<User>>({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        loginId: "",
        section: "",
        role: "STUDENT",
        lastActivity: "",
        totalActivity: ""
    });

    // const fetchUsers = async () => {
    //     try {
    //         const courseUsers = await usersClient.findUsersForCourse(cid as string);
    //         // setUsers(courseUsers);
    //     } catch (error) {
    //         console.error("Failed to fetch users:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchUsers();
    // }, [cid]);

    const handleCreateUser = () => {
        setEditingUser(null);
        setFormData({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            loginId: "",
            section: "",
            role: "STUDENT",
            lastActivity: new Date().toISOString().split('T')[0],
            totalActivity: "00:00:00"
        });
        setShowModal(true);
    };

    const handleEditUser = (user: User) => {
        setEditingUser(user);
        setFormData(user);
        setShowModal(true);
    };

    const handleDeleteUser = async (userId: string) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await usersClient.deleteUser(userId);
                // fetchUsers();
            } catch (error) {
                console.error("Failed to delete user:", error);
            }
        }
    };

    const handleSaveUser = async () => {
        try {
            if (editingUser) {
                await usersClient.updateUser(editingUser._id, formData);
            } else {
                await usersClient.createUser(formData);
            }
            setShowModal(false);
            // fetchUsers();
        } catch (error) {
            console.error("Failed to save user:", error);
        }
    };

    const isFaculty = currentUser?.role === "FACULTY";

    return (
        <div id="wd-people-table">
            <PeopleDetails />
            {isFaculty && (
                <div className="mb-3">
                    <Button variant="primary" onClick={handleCreateUser}>
                        <FaPlus className="me-2" />
                        Add User
                    </Button>
                </div>
            )}

            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                        {isFaculty && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => (
                        <tr key={user._id}>
                            <td className="wd-full-name text-nowrap">
                                <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">{user.firstName}</span>{" "}
                                    <span className="wd-last-name">{user.lastName}</span>
                                </Link>
                            </td>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td>
                            {isFaculty && (
                                <td>
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => handleEditUser(user)}
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => handleDeleteUser(user._id)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* User Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{editingUser ? "Edit User" : "Create User"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.firstName || ""}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.lastName || ""}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.username || ""}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={formData.email || ""}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Login ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.loginId || ""}
                                        onChange={(e) => setFormData({ ...formData, loginId: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.section || ""}
                                        onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                value={formData.role || "STUDENT"}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            >
                                <option value="STUDENT">Student</option>
                                <option value="TA">TA</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="ADMIN">Admin</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        {editingUser ? "Update" : "Create"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}