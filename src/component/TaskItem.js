import { FaTimes } from 'react-icons/fa';

const TaskItem = ({ task, deleteTask, toggleTask }) => {

    return (

        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => toggleTask(task.id)}
        >
            <h3>
                {task.text}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => deleteTask(task.id)}
                />
            </h3>
            <p>  {task.day} </p>
        </div >

    )
}

export default TaskItem;