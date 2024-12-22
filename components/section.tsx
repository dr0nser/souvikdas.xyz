"use client"

import { motion } from "motion/react";
import { ReactNode } from "react";

export function Section({
  id,
  title,
  sectionIndex,
  children,
}: {
  id: string;
  title?: string;
  sectionIndex: number;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
        viewport={{ once: true }}
      >
        {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
        {children}
      </motion.div>
    </section>
  );
}
