import React from "react";
import './tasklist.css'

export default function TaskList({title, onAddTask, tasks}) {
    const addTask = () => {
        console.log("chamada dentro do TaskList");
        onAddTask("New task", "Pending")
    }
    return(
        <div className="tasklist">
           <div className="title">{title}</div>
           <div className="content">
            {tasks.map((task) => {
                return <div key={task.id}>{task.title}</div>
            })}
           </div>
           <button onClick={addTask}>Add task</button>
        </div>
    )
}