import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OAButton from '.';

describe('OAButton', () => {
  test('Add =', async () => {
    render(<OAButton type="submit" id="submit" />);

    const button: HTMLButtonElement = screen.getByTestId('submit');
    screen.debug();
    fireEvent.click(button, { target: { value: '123' } });
    expect(button.value).toEqual('123');
  });
});
