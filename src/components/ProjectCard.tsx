import Image from "next/image";
type Props = { title: string; tag: string, link: string, image: string };

export default function ProjectCard({ title, tag, link, image }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="aspect-[16/10] w-full bg-neutral-800/60">
          <Image
            src={image}
            alt={title}
            width={400}
            height={250}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium group-hover:text-yellow-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-neutral-400 mt-1">{tag}</p>
        </div>
      </a>
    </article>
  );
}
