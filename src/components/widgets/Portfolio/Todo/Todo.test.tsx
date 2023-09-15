import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from '@/components/widgets/Portfolio/Todo';

describe('Todo', () => {
  test('Create todo item and it is in document', () => {
    render(<Todo />);
    const input: HTMLInputElement = screen.getByTestId('input');
    const create = screen.getByTestId('create');

    fireEvent.input(input, { target: { value: '123' } });
    fireEvent.click(create);

    const checkbox = screen.getByTestId('checkbox-123');

    expect(checkbox).toBeInTheDocument();
  });

  test('1st click on todo checkbox reduce items left', () => {
    render(<Todo />);
    const input: HTMLInputElement = screen.getByTestId('input');
    const create = screen.getByTestId('create');

    fireEvent.input(input, { target: { value: '123' } });
    fireEvent.click(create);

    const itemsLeft = screen.getByTestId('items-left');
    const checkbox = screen.getByTestId('checkbox-123');

    expect(itemsLeft.textContent).toEqual('1');
    fireEvent.click(checkbox);
    expect(itemsLeft.textContent).toEqual('0');
  });

  test('Create and check element, click "Active", hide element', async () => {
    render(<Todo />);
    const input: HTMLInputElement = screen.getByTestId('input');
    const create = screen.getByTestId('create');

    fireEvent.input(input, { target: { value: '123' } });
    fireEvent.click(create);

    const checkbox = screen.getByTestId('checkbox-123');

    fireEvent.click(checkbox);
    expect(checkbox).toBeInTheDocument();

    const active = screen.getByTestId('active');
    fireEvent.click(active);
    expect(checkbox).toBeInTheDocument();
  });

  test('Create 2 elements, click "Clear", clear all elements', async () => {
    render(<Todo />);
    const input: HTMLInputElement = screen.getByTestId('input');
    const create = screen.getByTestId('create');

    fireEvent.input(input, { target: { value: '1' } });
    fireEvent.click(create);

    fireEvent.input(input, { target: { value: '2' } });
    fireEvent.click(create);

    const checkbox1 = screen.getByTestId('checkbox-1');
    const checkbox2 = screen.getByTestId('checkbox-2');

    expect(checkbox1).toBeInTheDocument();
    expect(checkbox2).toBeInTheDocument();

    const clear = screen.getByTestId('clear');
    fireEvent.click(clear);

    expect(checkbox1).not.toBeInTheDocument();
    expect(checkbox2).not.toBeInTheDocument();
  });
});
