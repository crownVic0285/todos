import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it ('renders without crashing', () => {
    render(<NewTodoForm />);
}
);

it ('matches snapshot', function () {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
}
);

it ('should call createTodo when form is submitted', function () {
    const createTodo = jest.fn();
    const { getByText } = render(<NewTodoForm createTodo={createTodo} />);
    const submitButton = getByText('Add Todo');
    fireEvent.click(submitButton);
    expect(createTodo).toHaveBeenCalled();
}
);
