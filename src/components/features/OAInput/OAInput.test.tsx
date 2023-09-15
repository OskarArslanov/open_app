import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OAInput from '.';

describe('OAInput', () => {
  test('Input as text is valid and exist', async () => {
    const handleChange = jest.fn();

    render(
      <OAInput name="test" type="text" id="test" onChange={handleChange} />,
    );

    const input: HTMLInputElement = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toEqual('123');
  });

  test('Input as number is valid and exist', async () => {
    const handleChange = jest.fn();

    render(
      <OAInput name="test" type="number" id="test" onChange={handleChange} />,
    );

    const input: HTMLInputElement = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toEqual('123');
  });

  test('Input as number is valid and exist', async () => {
    const handleChange = jest.fn();

    render(
      <OAInput name="test" type="number" id="test" onChange={handleChange} />,
    );

    const input: HTMLInputElement = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: 'qwe' } });
    expect(input.value).not.toEqual('qwe');
  });

  test('DisableFocus', async () => {
    render(<OAInput name="test" type="number" id="test" disableFocus />);

    const input: HTMLInputElement = screen.getByTestId('test');
    fireEvent.focus(input);
    expect(input).not.toHaveFocus();
  });
});
