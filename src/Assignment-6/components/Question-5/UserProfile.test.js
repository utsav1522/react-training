/**
 * Implement a React component (UserProfile) that displays user profile information
 * such as name, email, and phone number.
 * Write tests to ensure that the user profile information is correctly displayed when the component
 * receives user data as props.
 */

import { screen, render, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";
import "@testing-library/jest-dom";
import IndexFive from ".";

test("Profile View present", () => {
  render(<UserProfile />);
  const profileText = screen.getByText("Profile View");
  expect(profileText).toBeInTheDocument();
});

test("Name Field Present", () => {
  render(<UserProfile />);
  const nameText = screen.getByText("Name");
  expect(nameText).toBeInTheDocument();
});

test("Email Field Present", () => {
  render(<UserProfile />);
  const emailtext = screen.getByText("Email");
  expect(emailtext).toBeInTheDocument();
});

test("Username Field Present", () => {
  render(<UserProfile />);
  const emailtext = screen.getByText("Email");
  expect(emailtext).toBeInTheDocument();
});

test("Phone Number Field Present", () => {
  render(<UserProfile />);
  const phoneNoText = screen.getByText("Phone Number");
  expect(phoneNoText).toBeInTheDocument();
});

test("Name Field is not empty", async () => {
  render(<IndexFive />);
  const nameField = screen.getByTestId("nameDisplay");
  await waitFor(() => {
    expect(nameField.innerHTML.toString().length).toBeGreaterThan(0);
  });
});

test("Email Field is not empty", async () => {
  render(<IndexFive />);
  const emailField = screen.getByTestId("emailDisplay");
  await waitFor(() => {
    expect(emailField.innerHTML.toString().length).toBeGreaterThan(0);
  });
});

test("Username Field is not empty", async () => {
  render(<IndexFive />);
  const usernameField = screen.getByTestId("usernameDisplay");
  await waitFor(() => {
    expect(usernameField.innerHTML.toString().length).toBeGreaterThan(0);
  });
});

test("Phone Number Field is not empty", async () => {
  render(<IndexFive />);
  const phoneField = screen.getByTestId("phoneDisplay");
  await waitFor(() => {
    expect(phoneField.innerHTML.toString().length).toBeGreaterThan(0);
  });
});
