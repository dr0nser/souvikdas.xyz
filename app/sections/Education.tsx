"use client";

import { EducationCard } from "@/components/education-card";
import { Section } from "@/components/section";
import { educations } from "@/data";

export function Education() {
  return (
    <Section id="education" title="Education" sectionIndex={3}>
      {educations.map((education) => (
        <EducationCard key={education.degree} {...education} />
      ))}
    </Section>
  );
}
