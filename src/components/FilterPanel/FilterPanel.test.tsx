import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterPanel } from "./FilterPanel";

const mockCategories = {
  topics: ["change-and-culture", "business-strategy"],
  learningFormats: ["virtual", "residential"],
};
const mockFilters = ["change-and-culture", "virtual"];

describe("FilterPanel", () => {
  const setFilters = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders a filter panel with categories and values", () => {
    render(
      <FilterPanel
        categories={mockCategories}
        filters={mockFilters}
        setFilters={setFilters}
      />
    );

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

  it("updates filters correctly when checkbox is clicked", () => {
    render(
      <FilterPanel
        categories={mockCategories}
        filters={mockFilters}
        setFilters={setFilters}
      />
    );

    const businessStrategyCheckbox = screen.getByLabelText("business strategy");
    fireEvent.click(businessStrategyCheckbox);

    expect(setFilters).toHaveBeenCalledTimes(1);
    expect(setFilters).toHaveBeenCalledWith([
      "change-and-culture",
      "virtual",
      "business-strategy",
    ]);
  });

  it('clears filters when "Clear filters" is clicked', () => {
    render(
      <FilterPanel
        categories={mockCategories}
        filters={mockFilters}
        setFilters={setFilters}
      />
    );

    const clearFiltersLink = screen.getByText("x Clear filters");
    fireEvent.click(clearFiltersLink);

    expect(setFilters).toHaveBeenCalledTimes(1);
    expect(setFilters).toHaveBeenCalledWith([]);
  });

  it("does not render anything if there are no categories", () => {
    render(
      <FilterPanel
        categories={{ topics: [], learningFormats: [] }}
        filters={mockFilters}
        setFilters={setFilters}
      />
    );
    expect(screen.queryByText("Topics")).not.toBeInTheDocument();
  });
});
