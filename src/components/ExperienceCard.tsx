type Props = {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  highlights: string[];
};

export default function ExperienceCard({ title, company, location, startDate, endDate, technologies, highlights }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:cursor-pointer">
      <div className="aspect-[16/10] w-full bg-neutral-800/60" />
      <div className="p-4">
        <h3 className="font-medium group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-neutral-400 mt-1">{title}</p>
      </div>
    </article>
  );
}
