import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleDone, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa adicionada ainda.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleDone={onToggleDone}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
