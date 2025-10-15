import React, { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask.trim() === "") return;
    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      done: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  }

  function handleToggleDone(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="app-container">
      <h1>Lista de Tarefas Inteligente</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Digite uma nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Adicionar</button>
      </div>

      <TaskList
        tasks={tasks}
        onToggleDone={handleToggleDone}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
