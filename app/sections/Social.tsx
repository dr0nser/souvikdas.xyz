"use client";

import { Section } from "@/components/section";
import { SocialCard } from "@/components/social-card";
import { socials } from "@/data";

export function Social() {
  return (
    <Section id="Social" title="Social" sectionIndex={5}>
      <div className="grid md:grid-cols-3 gap-3">
        {socials.map((social) => (
          <SocialCard key={social.label} {...social} />
        ))}
      </div>
    </Section>
  );
}
