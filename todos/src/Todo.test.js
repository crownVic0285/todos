import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

it ('renders without crashing', () => {
    render(<Todo />);
}
);

it ('matches snapshot', function () {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
}
);

it ('matches snapshot when editing', function () {
    const { asFragment, getByText } = render(<Todo />);
    const editButton = getByText('Edit');
    fireEvent.click(editButton);
    expect(asFragment()).toMatchSnapshot();
}
);

it ('runs the update function when submitted', function () {
    const update = jest.fn();
    const { getByText, getByLabelText } = render(<Todo update={update} />);
    const editButton = getByText('Edit');
    fireEvent.click(editButton);
    const editInput = getByLabelText('Edit task:');
    fireEvent.change(editInput, { target: { value: 'new task' } });
    const saveButton = getByText('Save');
    fireEvent.click(saveButton);
    expect(update).toHaveBeenCalled();
}
);

it ('runs the remove function when submitted', function () {
    const remove = jest.fn();
    const { getByText } = render(<Todo remove={remove} />);
    const deleteButton = getByText('X');
    fireEvent.click(deleteButton);
    expect(remove).toHaveBeenCalled();
}
);
