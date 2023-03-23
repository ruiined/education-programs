import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ProgramCard } from "./ProgramCard";

it("renders a program card with all the relevant information", () => {
  render(<ProgramCard title="Test title" />);

  const title = screen.getByText(/test title/i);
  expect(title).toBeInTheDocument();
});
