import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Experiences</h1>

      {/* Grid */}
      {/* <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"> */}
      <div className="grid gap-2">
        {experiences.map((exp) => (
          // remember to update key
          <ExperienceCard key={exp.title} company={exp.company} title={exp.title} location={exp.location} startDate={exp.startDate} endDate={exp.endDate} technologies={exp.technologies} highlights={exp.highlights} logo={exp.logo} />
        ))}
      </div>
    </section>
  );
}
