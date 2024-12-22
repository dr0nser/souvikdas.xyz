"use client";

import { Section } from "@/components/section";
import { ThemeToggler } from "@/components/theme-toggler";
import AvatarImage from "@/public/souvik.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <Section id="hero" sectionIndex={0}>
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col max-w-full md:max-w-md lg:max-w-sm pt-10 md:pt-0">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-semibold">Souvik Das</h1>
            <ThemeToggler />
          </div>

          <p className="text-sm mb-3">UI Developer</p>
          <p className="text-sm">
            Hey, I&apos;m a 3+ years experienced React developer creating highly
            interactive UIs. I love exploring new technologies related to the
            web. Currently, I am focused on learning full-stack web development.
          </p>
        </div>
        <Image
          src={AvatarImage}
          alt="Souvik Das"
          className="rounded-lg w-40 h-40 lg:w-44 lg:h-44"
        />
      </div>
    </Section>
  );
}
