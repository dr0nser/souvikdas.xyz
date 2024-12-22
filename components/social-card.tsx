"use client";

import { IconArrowUp } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

export function SocialCard({
  icon,
  label,
  link,
}: {
  icon: ReactNode;
  label: string;
  link: string;
}) {
  return (
    <div className="relative w-full h-12 group p-3">
      <div className="absolute inset-0 bg-black dark:bg-white rounded-lg shadow-lg p-3 subpixel-antialiased"></div>
      <Link
        href={link}
        target="_blank"
        className="absolute inset-0 w-full h-full p-2 border border-black dark:border-white rounded-lg bg-white dark:bg-black subpixel-antialiased transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 flex justify-between items-center"
      >
        <div className="flex space-x-2 items-center">
          {icon}
          <p>{label}</p>
        </div>
        <IconArrowUp className="w-4 h-4 rotate-45" />
      </Link>
    </div>
  );
}
