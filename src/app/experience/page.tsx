import ExperienceCard from "@/components/ExperienceCard";

const Experiences = [
  {
    company: "OpenText",
    title: "Build Engineer",
    location: "Waterloo",
    startDate: "Jan 2023",
    endDate: "Present",
    technologies: [
      "Python",
      "Flask",
      "GitLab",
      "Git",
      "REST API",
      "YAML",
      "CI/CD",
      "System Hooks"
    ],
    highlights: [
      "Designed and deployed a Flask-based internal API service to consume GitLab System Webhooks, asynchronously process team access events, and enforce access policies on personal repositories using a threaded queue-based architecture.",
      "Led the migration of over 1,000+ projects from Perforce to GitLab, leveraging CI pipelines, YAML, and Python to ensure the complete preservation of all branches and history.",
      "Collaborated with multiple development teams to streamline processes and resolve build errors. Developed Python scripts utilizing GitLab/TeamCity/Jira REST API, reducing branch creation, build configuration, and release candidate setup time from 5+ minutes to < 15 seconds, eliminating potential manual errors.",
      "Deployed all automation scripts to Waterloo, Bangalore, and Hyderabad teams, significantly enhancing productivity and consistency across global teams."
    ]
  }
];

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
        {Experiences.map((exp) => (
          // remember to update key
          <ExperienceCard key={exp.title} title={exp.title} location={exp.location} startDate={exp.startDate endDate={exp.endDate} technologies={exp.technologies highlights={exp.highlights />
        ))}
      </div>
    </section>
  );
}
