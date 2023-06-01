/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './button';

describe('<BtnLogin />', () => {
  describe('Attributes tests', () => {
    it('should set type="submit"', () => {
      render(<Button />);

      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });
  describe('Callbacks tests', () => {
    it("should call 'onClick' prop", () => {
      const cb = jest.fn();

      render(<Button onClick={cb} />);

      fireEvent.click(screen.getByRole('button'));

      expect(cb).toBeCalledTimes(1);
    });
  });
});
