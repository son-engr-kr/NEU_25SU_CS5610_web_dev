import { ListGroup, Button } from "react-bootstrap";

export default function TodoItem({ todo, deleteTodo, setTodo }: {
  todo: { id: string; title: string };
  deleteTodo: (id: string) => void;
  setTodo: (todo: { id: string; title: string }) => void;
}) {
  return (
    <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
      <span>{todo.title}</span>
      <div>
        <Button onClick={() => deleteTodo(todo.id)}
                id="wd-delete-todo-click"
                className="btn btn-danger btn-sm me-2"> Delete </Button>
        <Button onClick={() => setTodo(todo)}
                id="wd-set-todo-click"
                className="btn btn-primary btn-sm"> Edit </Button>
      </div>
    </ListGroup.Item>
  );
}

// breaks out todo item
// todo to render
// event handler to remove todo
// event handler to select todo
// invoke delete todo with ID
// invoke select todo
// render todo's title 