import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Task from "./Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setAlertMessage("Task Added Successfully!");
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setAlertMessage("Task Deleted Successfully!");
  };

  const clearAlert = () => {
    setAlertMessage("");
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        clearAlert();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/calendar-2025-year-schedule-blank-600nw-2483159669.jpg')",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Task addTask={addTask} />
      <Todo tasks={tasks} onToggleCompletion={toggleTaskCompletion} onDelete={deleteTask} />
    </div>
  );
}

export default App;
