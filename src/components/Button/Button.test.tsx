import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from './Button';

describe('Button', () => {
  it('renders a button with the correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });

  it('does not call the onClick function when disabled', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} disabled>Click me</Button>);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies the correct className prop', () => {
    const className = 'my-class';
    const { container } = render(<Button className={className}>Click me</Button>);
    expect(container.firstChild).toHaveClass(className);
  });

  it('applies the correct type prop', () => {
    const { getByRole } = render(<Button type="submit">Click me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  it('applies the correct name prop', () => {
    const name = 'my-button';
    const { getByRole } = render(<Button name={name}>Click me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveAttribute('name', name);
  });
});