'use client'
import React, { useState, useCallback } from "react";

type Props = {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  highlights: string[];
};

const ExperienceCard = ({ title, company, location, startDate, endDate, technologies, highlights }: Props) => {
  const [open, setOpen] = useState(false);

  // Toggle dropdown with click or keyboard (Enter/Space)
  const handleToggle = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    // Prevent toggling when clicking inside the dropdown content
    if (e.target !== e.currentTarget) return;
    setOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  }, []);

  return (
    <article
      className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
      tabIndex={0}
      role="button"
      aria-expanded={open}
      aria-label={`Show details for ${title} at ${company}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <div className="aspect-[16/10] w-full bg-neutral-800/60 flex items-center justify-center select-none pointer-events-none">
        {/* Company logo or icon could go here */}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium group-hover:text-yellow-400 transition-colors">
            {title}
          </h3>
          <span className="text-xs text-neutral-400 ml-2">{company}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-neutral-400">{startDate} - {endDate}</span>
          <span className="text-xs text-neutral-400">{open ? "▲" : "▼"}</span>
        </div>
        {open && (
          <div className="mt-4 animate-fade-in">
            <div className="mb-2">
              <span className="font-semibold text-neutral-300">Location: </span>
              <span className="text-neutral-400">{location}</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-neutral-300">Technologies: </span>
              <span className="text-neutral-400">{technologies.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-neutral-300">Highlights:</span>
              <ul className="list-disc list-inside text-neutral-400 mt-1">
                {highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default React.memo(ExperienceCard);
