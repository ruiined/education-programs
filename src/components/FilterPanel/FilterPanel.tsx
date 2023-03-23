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
        <div key={category}>
          <h2>{category}</h2>
          {values.map((value) => (
            <p key={value}>
              <input type="checkbox" />
              {value}
            </p>
          ))}
        </div>
      ))}
      <h5>x Clear filters</h5>
    </div>
  );
};
