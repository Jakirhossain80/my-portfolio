import { SectionHeading } from "@/components/common/section-heading";
import { TechnologyBadge } from "@/components/common/technology-badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import type { Skill, SkillTier } from "@/types/skill";

const skillGroups = [
  {
    tier: "primary",
    title: "Primary technologies",
    description: "Core technologies used most prominently in learning and project work.",
  },
  {
    tier: "supporting",
    title: "Supporting and familiar",
    description: "Additional tools and technologies used in supporting workflows.",
  },
] as const satisfies readonly {
  tier: SkillTier;
  title: string;
  description: string;
}[];

function skillsForTier(skills: readonly Skill[], tier: SkillTier) {
  return skills.filter((skill) => skill.tier === tier);
}

export function Skills() {
  return (
    <Section aria-labelledby="skills-heading" id="skills">
      <Container>
        <SectionHeading
          description="A practical full-stack toolkit developed through structured learning and project work. Primary labels indicate focus, not a claim of mastery."
          eyebrow="Technical capabilities"
          title="Skills and technologies"
          titleId="skills-heading"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          {skillCategories.map((category) => (
            <Card className="h-full" key={category.id} padding="lg">
              <h3 className="text-xl leading-[var(--line-height-heading)] font-semibold text-foreground sm:text-2xl">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {category.description}
              </p>

              <div className="mt-6 space-y-6">
                {skillGroups.map((group) => {
                  const groupedSkills = skillsForTier(category.skills, group.tier);

                  return (
                    <div key={group.tier}>
                      <h4 className="font-mono text-xs font-semibold tracking-[var(--letter-spacing-label)] text-foreground uppercase">
                        {group.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-subtle-foreground">
                        {group.description}
                      </p>
                      <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                        {groupedSkills.map((skill) => (
                          <li className="max-w-full" key={skill.id}>
                            <TechnologyBadge
                              name={skill.name}
                              variant={group.tier === "primary" ? "primary" : "neutral"}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
