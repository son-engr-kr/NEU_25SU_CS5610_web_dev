import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item key={todo.id}>
      <Button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </Button>
      <Button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </Button>
      {todo.title}
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