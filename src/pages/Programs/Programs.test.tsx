import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Programs } from "./Programs";
import { mockPrograms } from "src/utils/mocks";

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
