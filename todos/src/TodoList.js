import React from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList(){
    const [todos, setTodos] = useState([]);

    //add a new todo to the list
    const create = newTodo => {
        setTodos([...todos, newTodo]);
    };

    //update a todo with updatedTask
    const update = (id, updatedTask) => {
        setTodos(todos => todos.map(todo => todo.id === id ? {...todo, task: updatedTask} : todo));
    };

    //remove a todo by id
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoComponents = todos.map(todo => (
        <Todo
            id={todo.id}
            key={todo.id}
            task={todo.task}
            removeTodo={remove}
            updateTodo={update}
        />
    ));

    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{todoComponents}</ul>
        </div>
    );
}

export default TodoList;