import * as React from "react";
import { ProgramCard, SortDialog } from "src/components";
import { FilterPanel } from "src/components/FilterPanel/FilterPanel";
import { API_URL } from "src/utils/consts";
import { getLearningFormats, getTopics } from "src/utils/hooks";
import type { Program } from "src/utils/types";
import "./Programs.css";

export const Programs = () => {
  const [programs, setPrograms] = React.useState<Program[]>([]);
  const [filters, setFilters] = React.useState<string[]>([]);
  const [sort, setSort] = React.useState<string>("");

  const getPrograms = async () => {
    const response = await fetch(`${API_URL}/programs`);
    const programs = await response.json();
    setPrograms(programs);
  };

  React.useEffect(() => {
    getPrograms();
  }, []);

  const topics = React.useMemo(() => getTopics(programs), [programs]);

  const learningFormats = React.useMemo(
    () => getLearningFormats(programs),
    [programs]
  );

  const filteredEntries = React.useMemo(() => {
    if (!filters?.length) return programs;
    return programs?.filter((program) =>
      filters.every(
        (filter) =>
          program?.topic?.includes(filter) ||
          program?.learningFormats?.includes(filter)
      )
    );
  }, [filters, programs]);

  const sortedPrograms = React.useMemo(() => {
    if (!sort) return filteredEntries;
    return [...filteredEntries].sort((a, b) => {
      if (sort === "bestseller") {
        if (a.bestseller && !b.bestseller) {
          return -1;
        } else if (!a.bestseller && b.bestseller) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (!a[sort] || !b[sort]) {
          return 0;
        }
        return a[sort].localeCompare(b[sort]);
      }
    });
  }, [sort, filteredEntries]);

  return (
    <div className="programs-container">
      <FilterPanel
        categories={{ topics, learningFormats }}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="results-wrapper">
        <div className="space-between">
          <h5>
            Showing {sortedPrograms?.length} of {programs?.length} courses
          </h5>
          <SortDialog sort={sort} setSort={setSort} />
        </div>
        {sortedPrograms?.length
          ? sortedPrograms?.map((program: Program) => (
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
