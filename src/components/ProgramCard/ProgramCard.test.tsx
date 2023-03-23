import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ProgramCard } from "./ProgramCard";
import { mockPrograms } from "src/utils/mocks";

const mockProgram = mockPrograms?.[0];

it("renders a program card with all the relevant information", () => {
  render(
    <ProgramCard
      title={mockProgram?.title}
      topic={mockProgram?.topic}
      learningFormats={mockProgram?.learningFormats}
      bestseller={true}
    />
  );

  const title = screen.getByText(mockProgram?.title);
  expect(title).toBeInTheDocument();
  const topic = screen.getByText(mockProgram?.topic);
  expect(topic).toBeInTheDocument();
  const learningFormat = screen.getByText(mockProgram?.learningFormats?.[0]);
  expect(learningFormat).toBeInTheDocument();
  const bestSeller = screen.getByText(/best seller/i);
  expect(bestSeller).toBeInTheDocument();
});

it("does not show best seller label when its not", () => {
  render(
    <ProgramCard
      title={mockProgram?.title}
      topic={mockProgram?.topic}
      learningFormats={mockProgram?.learningFormats}
      bestseller={false}
    />
  );
  expect(screen.queryByText(/best seller/i)).not.toBeInTheDocument();
});
