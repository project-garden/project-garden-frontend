import { render, screen } from '@testing-library/react';
import { NavigationBar, Profile, Article, Body, Footer, App} from './main.js';

test('Navigation Bar render Project Garden Text', () => {
  render(<NavigationBar />);
  const linkElement = screen.getByText(/Project Garden/i);
  expect(linkElement).toBeInTheDocument();
});

test('Profile render Project Contributors Text', () => {
  render(<Profile />);
  const linkElement = screen.getByText(/Project Contributors/i);
  expect(linkElement).toBeInTheDocument();
});

test('Article render Heading 2 Text', () => {
  render(<Article />);
  const linkElement = screen.getByText(/This is Content Placeholder/i);
  expect(linkElement).toBeInTheDocument();
});

test('Body render Heading 2 Text', () => {
  render(<Body />);
  const linkElement = screen.getByText(/Body/i);
  expect(linkElement).toBeInTheDocument();
});

// test('App render All Components', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Project Garden/i);
//   expect(linkElement).toBeInTheDocument();
// });


