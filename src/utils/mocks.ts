import { Program } from "./types";

export const mockPrograms: Program[] = [
  {
    id: 1,
    title: "Test Program 1",
    topic: "Test Topic 1",
    startDate: new Date(),
    learningFormats: ["Virtual"],
    bestseller: true,
  },
  {
    id: 2,
    title: "Test Program 2",
    topic: "Test Topic 2",
    startDate: new Date(),
    learningFormats: ["Virtual", "Residential"],
    bestseller: false,
  },
];
