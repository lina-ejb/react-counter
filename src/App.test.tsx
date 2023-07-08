import React from 'react';
import { render, screen } from '@testing-library/react';
import {MainCounter} from "./MainCounter";

test('renders learn react link', () => {
  render(<MainCounter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
