import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    
    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <hr/>
            
            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />
            
            <h4>Filtering Array Items</h4>
            <div className="d-flex gap-2 mb-3">
                <a id="wd-retrieve-completed-todos" className="btn btn-primary"
                   href={`${API}?completed=true`}>
                    Get Completed Todos
                </a>
                <a id="wd-retrieve-incomplete-todos" className="btn btn-secondary"
                   href={`${API}?completed=false`}>
                    Get Incomplete Todos
                </a>
            </div>
            <hr/>
            
            <h4>Creating new Items in an Array</h4>
            <a id="wd-create-todo" className="btn btn-primary"
               href={`${API}/create`}>
                Create Todo
            </a>
            <hr/>
            
            <h4>Deleting from an Array</h4>
            <a id="wd-delete-todo" className="btn btn-primary float-end" 
               href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <FormControl defaultValue={todo.id} className="w-50" 
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
            <hr/>
            
            <h4>Updating an Item in an Array</h4>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
                Update Todo
            </a>
            <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
            <FormControl defaultValue={todo.title} className="w-50 float-start"
                onChange={(e) => setTodo({ ...todo, title: e.target.value }) }/>
            <br /><br /><hr />
        </div>
    );
} 