import React from "react";

export default function TaskItem({ task, onToggleDone, onDeleteTask }) {
  return (
    <li className={`task-item ${task.done ? "done" : ""}`}>
      <span onClick={() => onToggleDone(task.id)}>
        {task.text}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>🗑️</button>
    </li>
  );
}
