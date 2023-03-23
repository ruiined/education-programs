import * as React from "react";
import { render, screen } from "@testing-library/react";
import { FilterPanel } from "./FilterPanel";

const mockCategories = {
  topics: ["change-and-culture", "business-strategy"],
  learningFormats: ["virtual", "residential"],
};

describe("FilterPanel", () => {
  it("renders a filter panel with categories and values", () => {
    render(<FilterPanel categories={mockCategories} />);

    const filterPanelHeading = screen.getByText("Filter");

    expect(filterPanelHeading).toBeInTheDocument();

    const categoryHeadings = screen.getAllByRole("heading", { level: 2 });

    expect(categoryHeadings).toHaveLength(2);
    expect(categoryHeadings[0]).toHaveTextContent(/topics/i);
    expect(categoryHeadings[1]).toHaveTextContent(/learning Formats/i);

    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(4);

    expect(screen.getByText("change & culture")).toBeInTheDocument();
    expect(screen.getByText("business strategy")).toBeInTheDocument();

    expect(screen.getByText("virtual")).toBeInTheDocument();
    expect(screen.getByText("residential")).toBeInTheDocument();
  });

  it("does not render anything if there are no categories", () => {
    render(<FilterPanel categories={{ topics: [], learningFormats: [] }} />);
    expect(screen.queryByText("Topics")).not.toBeInTheDocument();
  });
});
