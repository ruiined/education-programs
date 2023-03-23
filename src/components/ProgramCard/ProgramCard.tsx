import * as React from "react";
import type { Program } from "src/utils/types";
import "./ProgramCard.css";

export const ProgramCard = ({ title }: Partial<Program>): JSX.Element => {
  return <div>{title}</div>;
};
