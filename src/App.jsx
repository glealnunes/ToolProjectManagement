import React, { useState } from 'react';
import './App.css'

import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList'
function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    console.log("Função sendo chamada em app")
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <>
      <div className="App">
        <Navbar/>
        <div className="container">
          <TaskList title="Pending" onAddTask={addTask} tasks={tasks} />
        </div>
      </div>
    </>
  )
}

const task = {
  id:0,
  title: "new task",
  state: "pending"
};

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default App
