import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";

function Task({ addTask }) {
    const [taskText, setTaskText] = useState("");
    const [taskDate, setTaskDate] = useState(null); // Store Date object
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskText && taskDate) {
        const newTask = {
          id: Date.now(),
          text: taskText,
          date: taskDate.toLocaleString(), // Convert to readable format
          completed: false,
        };
        addTask(newTask);
        setTaskText("");
        setTaskDate(null);
      } else {
        alert("Please fill out both fields");
      }
    };
  
  return (
    <>
   <div className="d-flex gap-3 align-items-center justify-content-center">
  <Form onSubmit={handleSubmit} className="d-flex gap-2 align-items-center">
    <Form.Group className="mb-3 mt-3 d-flex align-items-center" controlId="formBasicEmail">
      <Form.Label style={{ width: "180px", fontSize: "20px" }}>Add a Task</Form.Label>
      <Form.Control 
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        required 
        type="text" 
        placeholder="Enter what you're gonna do" 
      />
    </Form.Group>

    {/* DatePicker and Button */}
    <DatePicker
      selected={taskDate}
      onChange={(date) => setTaskDate(date)}
      required
      showTimeSelect
      dateFormat="MM/dd/yyyy h:mm aa"
      placeholderText="mm/dd/yyyy --:-- --"
      className="form-control"
      style={{ width: "200px" }}
    />
    <button 
      type="submit"
      style={{
        padding: "8px 15px",
        backgroundColor: "green",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      Add
    </button>
  </Form>
</div>

    
    </>
  )
}

export default Task
