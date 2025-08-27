type Props = { title: string; tag: string };

export default function ProjectCard({ title, tag }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50">
      <div className="aspect-[16/10] w-full bg-neutral-800/60" />
      <div className="p-4">
        <h3 className="font-medium group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-neutral-400 mt-1">{tag}</p>
      </div>
    </article>
  );
}
