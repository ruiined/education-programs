import * as React from "react";
import { ProgramCard } from "src/components";
import { API_URL } from "src/utils/consts";
import type { Program } from "src/utils/types";
import "./Programs.css";

export const Programs = () => {
  const [programs, setPrograms] = React.useState<Program[]>([]);

  const getPrograms = async () => {
    const response = await fetch(`${API_URL}/programs`);
    const programs = await response.json();
    setPrograms(programs);
  };

  React.useEffect(() => {
    getPrograms();
  }, []);

  return (
    <div className="programs-container">
      <h5>Showing {programs?.length} courses</h5>
      {programs?.map((program: Program) => (
        <div key={program?.id}>
          <ProgramCard title={program?.title} />
        </div>
      ))}
    </div>
  );
};
