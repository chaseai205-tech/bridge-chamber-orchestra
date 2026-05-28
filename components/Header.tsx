import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/15 bg-[#F4F1EA]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/logo-black.png"
            alt="Bridge Chamber Orchestra logo"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="poster-title min-w-0 text-sm font-black uppercase text-[#111111] sm:text-base">
            {site.shortName}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-xs font-bold uppercase text-black/62 transition hover:text-[#7A3D28]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/join"
          className="border border-black px-4 py-2 text-xs font-black uppercase text-[#111111] transition hover:bg-[#111111] hover:text-[#F4F1EA]"
        >
          加入我们
        </Link>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 border border-black/15 bg-[#F4F1EA] px-3 py-2 text-xs font-bold text-black/70"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
