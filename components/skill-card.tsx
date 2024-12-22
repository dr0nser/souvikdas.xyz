"use client";

import Link from "next/link";

export function SkillCard({ skill, link }: { skill: string; link: string }) {
  return (
    <div className="relative w-full h-12 group p-3">
      <div className="absolute inset-0 bg-black dark:bg-white rounded-lg shadow-lg p-3 subpixel-antialiased"></div>
      <Link
        href={link}
        target="_blank"
        className="absolute inset-0 w-full h-full p-3 border border-black dark:border-white rounded-lg bg-white dark:bg-black subpixel-antialiased transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        <h3 className="text-sm">{skill}</h3>
      </Link>
    </div>
  );
}
