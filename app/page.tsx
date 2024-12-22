"use client"

import ImageSun from "@/public/sun.png";
import Image from "next/image";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Social } from "./sections/Social";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Social />
      <footer className="container py-12">
        <Image
          src={ImageSun}
          alt="^_^"
          height={40}
          width={40}
          className="mx-auto mb-3"
        />
        <p className="text-sm text-center">
          You have reached the end of the website. Thank you for showing
          interest in my work ^_^.
        </p>
      </footer>
    </div>
  );
}
