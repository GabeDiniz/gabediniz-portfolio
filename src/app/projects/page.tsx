"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const tags = ["All", ...Array.from(new Set(projects.map(p => p.tag)))];


export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const filteredProjects =
    selectedTag === "All" ? projects : projects.filter((p) => p.tag === selectedTag);
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p>Each project has a linked GitHub repository with a README to further explain the project.</p>

      {/* Filter tabs (static for now) */}
      <div className="flex gap-2 text-sm">
        {tags.map((t, i) => (
          <button
            key={t}
            type="button"
            aria-pressed={selectedTag === t}
            onClick={() => setSelectedTag(t)}
            className={`rounded-full border px-3 py-1 hover:cursor-pointer ${
              t === selectedTag
                ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                : "border-neutral-800 hover:bg-neutral-900"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            tag={p.tag}
            link={p.link}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
