import { ListGroup, Button, Form } from "react-bootstrap";

export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
  todo: { id: string; title: string };
  setTodo: (todo: { id: string; title: string }) => void;
  addTodo: (todo: { id: string; title: string }) => void;
  updateTodo: (todo: { id: string; title: string }) => void;
}) {
  return (
    <ListGroup.Item>
      <div className="d-flex gap-2 align-items-center">
        <Button onClick={() => addTodo(todo)}
                id="wd-add-todo-click"
                className="btn btn-success"> Add </Button>
        <Button onClick={() => updateTodo(todo)}
                id="wd-update-todo-click"
                className="btn btn-warning"> Update </Button>
        <Form.Control 
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          placeholder="Enter todo title"
          className="flex-grow-1"
        />
      </div>
    </ListGroup.Item>
  );
}

// breaks out todo form
// todo to be added or edited
// event handler to update todo's title
// event handler to add new todo
// event handler to update todo
// invoke add new todo
// invoke update todo
// input field to update todo's title
// update title on each key stroke 