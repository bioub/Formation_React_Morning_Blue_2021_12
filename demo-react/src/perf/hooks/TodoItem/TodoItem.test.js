import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

test('renders', () => {
  const todo = {
    id: 123,
    title: 'ABC',
    completed: false,
  };
  const handleDeleteItem = () => {};
  render(<TodoItem item={todo} onDeleteItem={handleDeleteItem} />);
});

it('renders todo.title correctly', () => {
  const todo = {
    id: 123,
    title: 'ABC',
    completed: false,
  };
  const handleDeleteItem = () => {};
  render(<TodoItem item={todo} onDeleteItem={handleDeleteItem} />);
  expect(screen.getByText(/abc/i)).toBeInTheDocument();
});

it('calls onDeleteItem on click', () => {
  const todo = {
    id: 123,
    title: 'ABC',
    completed: false,
  };
  const handleDeleteItem = jest.fn();
  render(<TodoItem item={todo} onDeleteItem={handleDeleteItem} />);

  fireEvent.click(screen.getByRole('button'));

  expect(handleDeleteItem).toHaveBeenCalledTimes(1);
  expect(handleDeleteItem).toHaveBeenCalledWith({
    id: 123,
    title: 'ABC',
    completed: false,
  });
});