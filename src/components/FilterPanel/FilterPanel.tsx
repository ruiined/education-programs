import * as React from "react";
import "./FilterPanel.css";

type Props = {
  categories: {
    topics: string[];
    learningFormats: string[];
  };
  filters: string[];
  setFilters: (filters: string[]) => void;
};

export const FilterPanel = ({ categories, filters, setFilters }: Props) => {
  const handleChange = (value: string) => {
    const updatedFilters = filters.includes(value)
      ? filters.filter((option) => option !== value)
      : [...filters, value];

    setFilters(updatedFilters);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  if (!categories?.topics?.length && !categories?.learningFormats?.length)
    return null;

  return (
    <div className="panel-container">
      <h5>Filter</h5>
      {Object.entries(categories).map(([category, values]) => (
        <div key={category} className="category-wrapper">
          <h2 className="category-heading">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>
          {values.map((value: string) => (
            <div key={value} className="option">
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleChange(value)}
                  checked={filters?.includes(value)}
                />
                <span>{value.replace(/-/g, " ").replace(/and/g, "&")}</span>
              </label>
            </div>
          ))}
        </div>
      ))}
      <h5 className="hover" onClick={clearFilters}>
        x Clear filters
      </h5>
    </div>
  );
};
