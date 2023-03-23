import * as React from "react";

type Props = {
  sort: string;
  setSort: (sort: string) => void;
};

const sortingOptions = [
  { value: "title", label: "Courses A to Z" },
  {
    value: "startDate",
    label: "Starting soon",
  },
  { value: "bestseller", label: "Best seller" },
];

export const SortDialog = ({ sort, setSort }: Props) => {
  return (
    <div>
      <h5>
        Sort by{" "}
        <select
          name="sorting"
          id="sorting"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {sortingOptions?.map(({ value, label }) => (
            <option key={value} value={value} label={label}>
              Volvo
            </option>
          ))}
        </select>
      </h5>
    </div>
  );
};
