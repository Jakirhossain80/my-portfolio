export type SkillTier = "primary" | "supporting";

export type Skill = {
  id: string;
  name: string;
  tier: SkillTier;
};

export type SkillCategoryId =
  | "frontend"
  | "backend-apis"
  | "database-authentication"
  | "tools-deployment";

export type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  description: string;
  skills: readonly Skill[];
};
