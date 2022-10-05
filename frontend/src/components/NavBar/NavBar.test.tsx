import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";

test("renders learn react link", () => {
  render(<NavBar />);
  const logotype = screen.getByText(/logotype/i);
  expect(logotype).toBeInTheDocument();
});
