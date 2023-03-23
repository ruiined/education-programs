import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the page", () => {
  render(<App />);
  const header = screen.getByText(/all programs/i);
  expect(header).toBeInTheDocument();
});
