import type { SkillId } from "@/types/skill";

export type ServiceIconName =
  | "interface"
  | "full-stack"
  | "api"
  | "authentication"
  | "integration"
  | "repair";

export type Service = {
  id: string;
  name: string;
  clientProblem: string;
  deliverables: readonly string[];
  technologyIds: readonly SkillId[];
  icon: ServiceIconName;
};
