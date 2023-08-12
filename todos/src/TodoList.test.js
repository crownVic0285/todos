import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

function addTodo(todoList, task='write tests') {
    const taskInput = todoList.getByLabelText('Task:');
    fireEvent.change(taskInput, { target: { value: task } });
    const submitButton = todoList.getByText('Add Todo');
    fireEvent.click(submitButton);
}

it ('renders without crashing', () => {
    render(<TodoList />);
}
);

it ('matches snapshot', function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
}
);

it ('should add a new todo', function () {
    const todoList = render(<TodoList />);
    addTodo (todoList);
    expect(todoList.getByText('write tests')).toBeInTheDocument();
    expect(todoList.queryByText('X')).toBeInTheDocument();
}
);

it ('should remove a todo', function () {
    const todoList = render(<TodoList />);
    addTodo (todoList);
    const deleteButton = todoList.getByText('X');
    fireEvent.click(deleteButton);
    expect(todoList.queryByText('write tests')).not.toBeInTheDocument();
}
);

it ('should edit a todo', function () {
    const todoList = render(<TodoList />);
    addTodo (todoList);
    const editButton = todoList.getByText('Edit');
    fireEvent.click(editButton);
    const editInput = todoList.getByLabelText('Edit task:');
    fireEvent.change(editInput, { target: { value: 'new task' } });
    const saveButton = todoList.getByText('Save');
    fireEvent.click(saveButton);
    expect(todoList.getByText('new task')).toBeInTheDocument();
    expect(todoList.queryByText('write tests')).not.toBeInTheDocument();
}
);

