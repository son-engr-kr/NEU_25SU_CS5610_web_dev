import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "CS5610", name: "Web Development",
        description: "Learn to build modern web applications",
        course: "CS5610"
    });

    return (
        <div id="wd-working-with-objects">
            <h3>Working with Objects</h3>
            
            {/* Assignment Section */}
            <h4>Assignment</h4>
            <div className="d-flex flex-column gap-2 mb-3">
                <a className="btn btn-primary" 
                   href={`${REMOTE_SERVER}/lab5/assignment`}>
                    Get Assignment
                </a>
                <a className="btn btn-secondary"
                   href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                    Get Assignment Title
                </a>
            </div>

            {/* Assignment Title Editor */}
            <div className="mb-3">
                <h5>Assignment Title:</h5>
                <FormControl 
                    className="mb-2"
                    defaultValue={assignment.title}
                    onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
                <a className="btn btn-warning"
                   href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}>
                    Update Assignment Title
                </a>
            </div>

            {/* Assignment Score Editor */}
            <div className="mb-3">
                <h5>Assignment Score:</h5>
                <FormControl 
                    type="number"
                    className="mb-2"
                    defaultValue={assignment.score}
                    onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} />
                <a className="btn btn-info"
                   href={`${REMOTE_SERVER}/lab5/assignment/score/${assignment.score}`}>
                    Update Assignment Score
                </a>
            </div>

            {/* Assignment Completed Editor */}
            <div className="mb-3">
                <h5>Assignment Completed:</h5>
                <div className="form-check mb-2">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={assignment.completed}
                        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
                    <label className="form-check-label">
                        Completed
                    </label>
                </div>
                <a className="btn btn-success"
                   href={`${REMOTE_SERVER}/lab5/assignment/completed/${assignment.completed}`}>
                    Update Assignment Completed
                </a>
            </div>

            <hr />

            {/* Module Section */}
            <h4>Module</h4>
            <div className="d-flex flex-column gap-2 mb-3">
                <a className="btn btn-primary"
                   href={`${REMOTE_SERVER}/lab5/module`}>
                    Get Module
                </a>
                <a className="btn btn-secondary"
                   href={`${REMOTE_SERVER}/lab5/module/name`}>
                    Get Module Name
                </a>
            </div>

            {/* Module Name Editor */}
            <div className="mb-3">
                <h5>Module Name:</h5>
                <FormControl 
                    className="mb-2"
                    defaultValue={module.name}
                    onChange={(e) => setModule({ ...module, name: e.target.value })} />
                <a className="btn btn-warning"
                   href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
                    Update Module Name
                </a>
            </div>

            {/* Module Description Editor */}
            <div className="mb-3">
                <h5>Module Description:</h5>
                <FormControl 
                    as="textarea"
                    rows={3}
                    className="mb-2"
                    defaultValue={module.description}
                    onChange={(e) => setModule({ ...module, description: e.target.value })} />
                <a className="btn btn-info"
                   href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}>
                    Update Module Description
                </a>
            </div>

            <hr />
        </div>
    );
}
