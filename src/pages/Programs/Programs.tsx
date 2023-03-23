import * as React from "react";
import { ProgramCard } from "src/components";
import { FilterPanel } from "src/components/FilterPanel/FilterPanel";
import { API_URL } from "src/utils/consts";
import {
  formatTopicName,
  getLearningFormats,
  getTopics,
} from "src/utils/hooks";
import type { Program } from "src/utils/types";
import "./Programs.css";

export const Programs = () => {
  const [programs, setPrograms] = React.useState<Program[]>([]);
  const [filters, setFilters] = React.useState<string[]>([]);
  console.log(filters);
  const getPrograms = async () => {
    const response = await fetch(`${API_URL}/programs`);
    const programs = await response.json();
    setPrograms(programs);
  };

  React.useEffect(() => {
    getPrograms();
  }, []);

  const topics = React.useMemo(
    () => getTopics(programs).map((topic) => formatTopicName(topic)),
    [programs]
  );

  const learningFormats = React.useMemo(
    () => getLearningFormats(programs),
    [programs]
  );

  // const handleFilterChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {};

  // const clearFilters = () => {
  //   setFilters({});
  // };

  return (
    <div className="programs-container">
      <FilterPanel
        categories={{ topics, learningFormats }}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="results-wrapper">
        <h5>Showing {programs?.length} courses</h5>
        {programs?.length
          ? programs?.map((program: Program) => (
              <ProgramCard
                key={program?.id}
                title={program?.title}
                topic={program?.topic}
                learningFormats={program?.learningFormats}
                bestseller={program?.bestseller}
              />
            ))
          : "No results found"}
      </div>
    </div>
  );
};
