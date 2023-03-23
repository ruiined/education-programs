import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Program, Programs } from "./Programs";

const mockPrograms: Program[] = [
  {
    id: 1,
    title: "Test Program 1",
    topic: "Test Topic 1",
    startDate: new Date(),
    learningFormats: ["Virtual"],
    bestseller: true,
  },
  {
    id: 2,
    title: "Test Program 2",
    topic: "Test Topic 2",
    startDate: new Date(),
    learningFormats: ["Virtual", "Residential"],
    bestseller: false,
  },
];

describe("Programs component", () => {
  it("should render programs", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPrograms),
      })
    ) as jest.Mock;

    render(<Programs />);

    await screen.findByText("Test Program 1");
    expect(screen.getByText("Test Program 1")).toBeInTheDocument();
    expect(screen.getByText("Test Program 2")).toBeInTheDocument();
    expect(screen.getByText("Showing 2 courses")).toBeInTheDocument();
  });
});
