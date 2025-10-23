"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="flex items-center gap-2 border-b border-neutral-800 px-4 lg:px-6"
    >
      {links.map(({ href, label }) => {
        const active =
          (href === "/" && pathname === "/") ||
          (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`relative rounded-sm px-4 py-2 text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
              ${
                active
                  ? "text-accent border-b-2 border-accent"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/40"
              }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
