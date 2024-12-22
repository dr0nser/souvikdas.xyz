"use client";

import { Section } from "@/components/section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" sectionIndex={2}>
      <>
        <div className="flex justify-between items-start">
          <h3 className="text-base font-semibold">UI Developer</h3>
          <p className="text-sm text-neutral-500">2021 - Present</p>
        </div>
        <p className="text-sm text-neutral-500 mb-2">
          Tata Consultancy Services
        </p>
        <p className="text-sm">
          Working as a UI developer in the retail domain developing UI for a
          transport management application for a global client. The application
          operates across multiple countries across the world, helping them
          manage their shipments and tax documents. I collaborate with
          cross-functional teams to design and implement features that enhance
          usability and efficiency, ensuring seamless management of
          transportation logistics.
        </p>
      </>
    </Section>
  );
}
