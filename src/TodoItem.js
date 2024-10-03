import "./TodoItem.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <AiOutlineCheckCircle
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <AiOutlineCloseCircle
        className="Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
