export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-neutral-300 leading-relaxed">
        Hi there! I’m Gabe Diniz, graduated from the University of Waterloo and looking to make an impact in the Software Engineering world. 💪
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
          <h3 className="font-medium">What I do</h3>
          <p className="text-neutral-400 text-sm mt-1">
            Fullstack development, automation, web development, helpful bots, and more!
          </p>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
          <h3 className="font-medium">Stack</h3>
          <p className="text-neutral-400 text-sm mt-1">
            Python, TypeScript, Next.js, Tailwind, Docker, Linux.
          </p>
        </div>
      </div>
    </section>
  );
}
