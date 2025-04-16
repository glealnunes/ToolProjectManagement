
import React, { useState } from 'react';
import "./taskitem.css"
export default function TaskItem({ id, title, taskState, onTaskUpdate, onDeleteTask }) {

    // Flag to control task state, enabling display and editing.
    // Flag para controlar o estado da tarefa, permitindo exibição e edição.
    const [isEditing, setIsEditing] = useState(false);

    // Mutable function that allows value changes.
    // Função mutável que permite alteração de valores.
    const [editTableTitle, setEditTableTitle] = useState(title);

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        setEditTableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    };

    // Listen for Enter key event to finish operation.
    // Escutar evento de tecla Enter para finalizar a operação.
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            setIsEditing(false);
            if (editTableTitle.length === 0) {
                onDeleteTask(id);
            }
        }
    };
    // Change task status.
    // Alterar o estado da tarefa.
    const onTaskStateChange = (event) => {
        onTaskUpdate(id, title, event.target.value);
    }

    // Conditional rendering based on state.
    // Renderização condicional baseada em estado.
    if (isEditing) {
        return (
            <div className="task-item">
                <input
                    type="text"
                    value={editTableTitle}
                    onChange={onTitleChange}
                    onKeyPress={onKeyPress}
                />
            </div>
        );
    } else {
        return (
            <div className="taskItem">
                <div onClick={(e) => setIsEditing(true)}>{editTableTitle}</div>
                <select onChange={onTaskStateChange} value={taskState}>
                    <option value="Pending">Pending</option>
                    <option value="Doing">Doing</option>
                    <option value="Complete">Complete</option>
                </select>
            </div>
        );
    }
}