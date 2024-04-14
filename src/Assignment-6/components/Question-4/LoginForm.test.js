import LoginForm from "./LoginForm";
import "@testing-library/react";
import "@testing-library/jest-dom";
import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test("Login Form Text present", () => {
  render(<LoginForm />);
  const text = screen.getByText("Login Form");
  expect(text).toBeInTheDocument();
});

test("Username text present", () => {
  render(<LoginForm />);
  const username = screen.getByText("Username");
  expect(username).toBeInTheDocument();
});

test("Password text present", () => {
  render(<LoginForm />);
  const password = screen.getByText("Password");
  expect(password).toBeInTheDocument();
});

test("Username field is of type email", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByLabelText("Username");
  expect(usernameInput).toHaveAttribute("type", "email");
});

test("Password field is of type password", () => {
  render(<LoginForm />);
  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toHaveAttribute("type", "password");
});

test("Username field shows required on blur", async () => {
  render(<LoginForm />);
  const usernameInput = screen.getByPlaceholderText("Enter Username");
  fireEvent.blur(usernameInput);
  await waitFor(() => {
    const requiredText = screen.getByText("Required");
    expect(requiredText).toBeInTheDocument();
  });
});

test("password field shows required on blur", async () => {
  render(<LoginForm />);
  const passwordField = screen.getByPlaceholderText("Enter Password");
  fireEvent.blur(passwordField);
  await waitFor(() => {
    const requiredText = screen.getByText("Required");
    expect(requiredText).toBeInTheDocument();
  });
});

test("username field showss error on invalid format", async () => {
  render(<LoginForm />);
  const usernameInput = screen.getByPlaceholderText("Enter Username");
  fireEvent.change(usernameInput, { target: { value: "abcdaaa" } });
  await waitFor(() => {
    const errorText = screen.getByText("Enter a valid username");
    expect(errorText).toBeInTheDocument();
  });
});
