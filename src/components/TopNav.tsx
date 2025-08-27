"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1 border-b border-neutral-800 px-4 lg:px-6">
      {links.map(({ href, label }) => {
        const active =
          (href === "/" && pathname === "/") ||
          (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={`rounded-md px-3 py-3 text-sm font-medium ${
              active
                ? "text-yellow-400"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {label}
          </Link>
        );
      })}
      <div className="ml-auto py-3 px-2 text-xs text-neutral-500">
        {/* Right-side space for theme toggle/search later */}
      </div>
    </nav>
  );
}
