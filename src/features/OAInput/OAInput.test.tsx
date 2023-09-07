import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OAInput from '.';

describe('OAInput', () => {
  test('Add =', async () => {
    const handleClick = jest.fn();
    const handleChange = jest.fn();

    render(
      <OAInput name="test" type="text" id="test" onChange={handleChange} />,
    );

    const input: HTMLInputElement = screen.getByTestId('test');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toEqual('123');
  });
});
