import React, { useState } from 'react';
import './App.css'

import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList'

let idAcc = 0;
const generateId = () => {
idAcc = idAcc + 1;
return idAcc;
};
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
  // Update current task state.
  // Atualização do estado atual da tarefa.
  const updateTask = (id, title, state) => {
    console.log("Entrou na função updateTask")
    // Callback function.
    // Função de retorno de chamada (callback).
    setTasks((existingTasks) => {
      return existingTasks.map((task) =>{
        if(task.id === id) {
          return {...task, title, state };
        } else {
          return task;
        }
      })
    });
  };

  // Remove task from list.
  // Remover a tarefa da lista.
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <>
      <div className="App">
        <Navbar/>
        <div className="container">
          <TaskList 
          title="Pending" 
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Pending")} 
          onTaskUpdate={updateTask} 
          taskState="Pending" 
          onDeleteTask={deleteTask}/>
          <TaskList 
          title="Doing" 
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Doing")} 
          onTaskUpdate={updateTask} 
          taskState="Doing" 
          onDeleteTask={deleteTask}/>
          <TaskList 
          title="Complete" 
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Complete")} 
          onTaskUpdate={updateTask} 
          taskState="Complete" 
          onDeleteTask={deleteTask}/>
        </div>
      </div>
    </>
  )
}

export default App
