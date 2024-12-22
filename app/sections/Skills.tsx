"use client";

import { Section } from "@/components/section";
import { SkillCard } from "@/components/skill-card";
import { skills } from "@/data";

export function Skills() {
  return (
    <Section id="skills" title="Skills"  sectionIndex={1}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.skill} {...skill} />
        ))}
      </div>
    </Section>
  );
}
