import { Program } from "./types";

export const getTopics = (programs: Program[]): string[] => {
  return Object.keys(
    programs.reduce((topics, program) => {
      topics[program.topic] = true;
      return topics;
    }, {})
  );
};

export const getLearningFormats = (programs: Program[]): string[] =>
  Object.keys(
    programs.reduce((formats, program) => {
      program?.learningFormats?.forEach((format: string) => {
        formats[format] = true;
      });
      return formats;
    }, {})
  );

export const formatTopicName = (topic: string): string => {
  return topic.replace(/-/g, " ").replace(/and/g, "&");
};
