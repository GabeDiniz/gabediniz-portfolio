import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const tags = [
  "All",
  "Web design",
  "Applications",
  "Web development"
]

export default function ProjectsPage() {
    // write a function to retrieve set of tags

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>

      {/* Filter tabs (static for now) */}
      <div className="flex gap-2 text-sm">
        {tags.map((t, i) => (
          <button
            key={t}
            className={`rounded-full border px-3 py-1 ${
              i === 0
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
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} tag={p.tag} link={p.link} image={p.image} />
        ))}
      </div>
    </section>
  );
}
