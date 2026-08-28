import { skillCategories } from "@/data/skills";
import type { Skill, SkillId } from "@/types/skill";

export function getSkillById(skillId: SkillId): Skill {
  for (const category of skillCategories) {
    const skill = category.skills.find((item) => item.id === skillId);

    if (skill) {
      return skill;
    }
  }

  throw new Error(`Unknown skill ID: ${skillId}`);
}
