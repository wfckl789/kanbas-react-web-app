import {deleteTodo, setTodo} from "./todosReducer";
import {useDispatch} from "react-redux";

function TodoItem({ todo,
  // deleteTodo,
  // setTodo
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
            <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
            {todo.title}
        </li>
    );
}
export default TodoItem;

