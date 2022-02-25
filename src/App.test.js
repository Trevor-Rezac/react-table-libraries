import { render, screen } from '@testing-library/react';
import App from './App';

test('1 + 1 = 2', () => {
  render(<App />);
  
  expect(1 + 1).toEqual(2);
});
