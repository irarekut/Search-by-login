/* eslint-disable no-undef */

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './input';

describe('<Input />', () => {
  describe('Attributes test', () => {
    it('should set type attribute', () => {
      const type = 'text';
      render(<Input type={type} />);

      expect(screen.getByRole('textbox')).toHaveAttribute('type', type);
    });
  });
  describe('OnChange test', () => {
    it('should call onChange prop', () => {
      const cb = jest.fn();

      render(<Input onClick={cb} />);
      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 'testVal' } });
      expect(input.value).toBe('testVal');
    });
  });
});
