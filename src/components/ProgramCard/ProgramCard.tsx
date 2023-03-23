import * as React from "react";
import type { Program } from "src/utils/types";
import "./ProgramCard.css";

export const ProgramCard = ({
  title,
  topic,
  learningFormats,
  bestseller,
}: Partial<Program>): JSX.Element => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      {bestseller && <div>Best seller</div>}
      <p className="topic">{topic}</p>
      <p>
        {learningFormats?.map((format) => (
          <span key={format}>{format}</span>
        ))}
      </p>
    </div>
  );
};
