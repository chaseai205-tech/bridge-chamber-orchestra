import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-rosewood/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-paper/72">
            {site.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paper/72 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-paper/55 sm:px-6">
        © {new Date().getFullYear()} {site.englishName}. Static site for Cloudflare Pages.
      </div>
    </footer>
  );
}
