import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        {task.date} <p style={{ fontSize: "10px" }}>{task.time}</p>
      </p>
    </div>
  );
};

export default Task;
