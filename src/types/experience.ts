export type ExperienceHighlight = {
  title: string;
  description: string;
};

export type ExperienceEntry = {
  id: string;
  label: string;
  title: string;
  context: string;
  summary: string;
  highlights: readonly ExperienceHighlight[];
};
