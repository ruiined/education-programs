import * as React from "react";
import "./FilterPanel.css";

type Props = {
  categories: {
    topics: string[];
    learningFormats: string[];
  };
};

export const FilterPanel = ({ categories }: Props) => {
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
          {values.map((value) => (
            <div key={value} className="option">
              <input type="checkbox" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      ))}
      <h5 className="hover">x Clear filters</h5>
    </div>
  );
};
