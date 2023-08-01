import React from 'react';
import { render, screen } from '@testing-library/react';
import {MainCounterWithReducer} from "./MainCounterWithRedux";


test('renders learn react link', () => {
  render(<MainCounterWithReducer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
