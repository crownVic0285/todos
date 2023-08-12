import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        createTodo({
            task,
            id: uuid()
        });
        setTask("");
    };

    return (
        <div>        
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input
                type="text"
                placeholder="New Todo"
                id="task"
                name="task"
                value={task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
        </div>
    );
}

export default NewTodoForm;