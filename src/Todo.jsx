import React from "react";

function Todo({ tasks, onToggleCompletion, onDelete }) {
  return (
    <>
      <div className="d-flex flex-column gap-2 align-items-start justify-content-center mt-3 ms-5">
        <h3>PENDING TASKS</h3>
        <ul className="list-group">
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={task.id}
              >
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    onChange={() => onToggleCompletion(task.id)}
                  />
                  <div
                    style={{
                      width: "300px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {task.text} - {task.date}
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>

        <h3>COMPLETED TASKS</h3>
        <ul className="list-group">
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={task.id}
              >
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked
                    onChange={() => onToggleCompletion(task.id)}
                  />
                  <div
                    style={{
                      width: "300px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    className="text-decoration-line-through"
                  >
                    {task.text} - {task.date}
                  </div>
                </div>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => onToggleCompletion(task.id)}
                >
                  Undo
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
