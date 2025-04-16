import React from "react";
import './tasklist.css'
import TaskItem from "../Tasktem/TaskItem";
import plusIcon from "../../assets/plus-icon.svg"

export default function TaskList({ title, onAddTask, tasks, taskState, onTaskUpdate, onDeleteTask }) {
    const addTask = () => {
        console.log("chamada dentro do TaskList");
        // Independent list with self-management.
        // Lista independente com gerenciamento próprio. 
        onAddTask("New task", taskState)
    }
    return (
        <div className="tasklist">
            <div className="title">{title}</div>
            <div className="content">
                {tasks.map((task) => {
                    return <TaskItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        taskState={task.state}
                        onTaskUpdate={onTaskUpdate}
                        onDeleteTask={onDeleteTask}
                    />
                })}
                {tasks.length === 0 && <div className="empty-list">Empty List</div>}
                <button onClick={addTask} className="btn">
                    <img src={plusIcon} alt="plus"/>
                    Add task
                </button>
            </div>
        </div>
    )
}