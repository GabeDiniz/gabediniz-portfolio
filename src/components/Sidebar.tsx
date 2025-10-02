import Image from "next/image";
import { Mail, CalendarDays, MapPin } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="rounded-2xl border border-neutral-700 bg-primary-dark-bg p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="overflow-hidden rounded-2xl ring-1 ring-neutral-800">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={100}
            height={100}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Gabe Diniz</h2>
          <p className="text-sm text-neutral-400">Software Engineer • DevOps</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-br-neutral" />

      <dl className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-neutral-400" />
          <a href="mailto:gabriel.sundiniz@gmail.com" className="text-neutral-300 hover:underline">
            gabriel.sundiniz@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <CalendarDays className="h-4 w-4 text-neutral-400" />
          <span className="text-neutral-300">October 25, 2000/</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-neutral-400" />
          <span className="text-neutral-300">Waterloo, Canada</span>
        </div>
      </dl>

      <div className="mt-6">
        <a
          href="/resume.pdf"
          className="inline-flex w-full items-center justify-center rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400 hover:bg-yellow-500/15"
        >
          Download resume
        </a>
      </div>
    </div>
  );
}
