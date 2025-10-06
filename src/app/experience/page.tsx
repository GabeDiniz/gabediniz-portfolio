import ExperienceCard from "@/components/ExperienceCard";
import { Experiences } from "@/data/experiences";

export default function ExperiencesPage() {
    // write a function to retrieve set of tags

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Experiences</h1>

      {/* Filter tabs (static for now) */}
      {/* <div className="flex gap-2 text-sm">
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
      </div> */}

      {/* Grid */}
      {/* <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"> */}
      <div className="grid gap-2">
        {Experiences.map((exp) => (
          // remember to update key
          <ExperienceCard key={exp.title} company={exp.company} title={exp.title} location={exp.location} startDate={exp.startDate} endDate={exp.endDate} technologies={exp.technologies} highlights={exp.highlights} />
        ))}
      </div>
    </section>
  );
}
