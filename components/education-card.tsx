"use client";

export function EducationCard({
  degree,
  institute,
  duration,
  score,
}: {
  degree: string;
  institute: string;
  duration: string;
  score: string;
}) {
  return (
    <div className="pb-3 mb-3">
      <div className="flex justify-between items-start">
        <h3 className="text-base font-semibold max-w-60 md:max-w-full">{degree}</h3>
        <p className="text-sm text-neutral-500">{duration}</p>
      </div>
      <p className="text-sm text-neutral-500 mb-2">{institute}</p>
      <p className="text-sm">{score}</p>
    </div>
  );
}
