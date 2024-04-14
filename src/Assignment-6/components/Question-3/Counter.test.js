import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("Counter Text Found", () => {
  render(<Counter />);
  const counterText = screen.getByText("Counter");
  expect(counterText).toBeInTheDocument();
});
test("Increment text is found", () => {
  render(<Counter />);
  const incrementText = screen.getByText("Increment");
  expect(incrementText).toBeInTheDocument();
});

test("Decrement text found", () => {
  render(<Counter />);
  const decrementText = screen.getByText("Decrement");
  expect(decrementText).toBeInTheDocument();
});

test("Increment button increments the count value", () => {
  render(<Counter />);
  const incrementButton = screen.getByText("Increment");
  const counterValue = screen.getByText("Counter is : 0");
  expect(counterValue).toBeInTheDocument(0);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const updateValue = screen.getByText("Counter is : 2");
  expect(updateValue).toBeInTheDocument();
});

test("Decrement button decrements the count value", () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");
  const countValue = screen.getByText("Counter is : 0");
  expect(countValue).toBeInTheDocument(0);
  fireEvent.click(decrementButton);
  const updateValue = screen.getByText("Counter is : -1");
  expect(updateValue).toBeInTheDocument();
});
