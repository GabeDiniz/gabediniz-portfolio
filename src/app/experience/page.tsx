import ExperienceCard from "@/components/ExperienceCard";

const Experiences = [
  { title: "Proj1", tag: "Web design", link: "/not-linked"},
  { title: "Proj2", tag: "Applications", link: "/not-linked" },
  { title: "Proj3", tag: "Web development", link: "/not-linked" },
  { title: "Proj4", tag: "Automation", link: "/not-linked" },
  { title: "Proj5", tag: "Internal app", link: "/not-linked" },
  { title: "Proj6", tag: "AI/LLM", link: "/not-linked" },
];

const tags = [
  "All",
  "Web design",
  "Applications",
  "Web development"
]

export default function ExperiencesPage() {
    // write a function to retrieve set of tags

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Experiences</h1>

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
        {Experiences.map((p) => (
          <ExperienceCard key={p.title} title={p.title} tag={p.tag} link={p.link} />
        ))}
      </div>
    </section>
  );
}
