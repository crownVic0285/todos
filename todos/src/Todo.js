import React, { useState } from "react";

function Todo({task = "default todo", id = "1", remove, update}) {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    };

    const handleChange = e => {
        setEditTask(e.target.value);
    };

    const handleDelete = () => {
        remove(id);
    };

    const handleUpdate = e => {
        e.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    };

    //default todo view
    let result = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    );

    //edit todo view
    if(isEditing){
        result = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input type="text" value={editTask} onChange={handleChange} />
                    <button>Save</button>
                </form>
            </div>
        );
    }

    return result;
}

export default Todo;
