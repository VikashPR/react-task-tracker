import {FaTimes} from 'react-icons/fa'
import React from 'react'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={()=> onToggle(task.id)}>
            <h3 key={task.id}>{task.text}  <FaTimes onClick={() => onDelete(task.id)} style={{color:'red'}}/> </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task