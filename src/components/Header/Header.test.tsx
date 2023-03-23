import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

it("renders a header", () => {
  render(<Header />);
  const header = screen.getByText(/all programs/i);
  expect(header).toBeInTheDocument();
});
