import * as React from "react";
import "./Programs.css";

export type Program = {
  id: number;
  title: string;
  topic: string;
  startDate: Date;
  learningFormats: string[];
  bestseller: boolean;
};

const API_URL = "http://localhost:3010";

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
    <div>
      <h5>Showing {programs?.length} courses</h5>
      {programs?.map((program) => (
        <div key={program?.id}>{program?.title}</div>
      ))}
    </div>
  );
};
