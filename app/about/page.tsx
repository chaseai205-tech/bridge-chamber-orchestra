import Image from "next/image";
import { about } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "关于我们"
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} intro={about.paragraphs[0]} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Image
            src="/images/rehearsal-1.jpg"
            alt="Bridge 室内乐团排练"
            width={900}
            height={680}
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
          />
          <div className="space-y-5 text-base leading-8 text-ink/72">
            {about.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle title="我们相信" text="乐团的生命力来自专业、公益与真实生活经验的交汇。" />
          <div className="grid gap-4 md:grid-cols-3">
            {about.values.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-rosewood/10 bg-white/70 p-6"
              >
                <h2 className="text-xl font-semibold text-ink">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-ink/68">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-paper sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden border-y border-paper/20 py-8 sm:py-12">
            <p className="poster-title pointer-events-none absolute -left-2 top-2 select-none text-7xl font-black uppercase leading-none text-paper/[0.06] sm:text-9xl lg:text-[10rem]">
              ARTISTIC
            </p>
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div className="relative min-h-[360px]">
                <div className="absolute left-8 top-8 h-64 w-44 border border-paper/25 sm:left-12" />
                <p className="poster-title absolute left-0 top-0 z-10 text-5xl font-black uppercase leading-none text-[#B9794C] sm:text-7xl">
                  CAI
                  <br />
                  BOYU
                </p>
                <Image
                  src="/images/cai-boyu.png"
                  alt="蔡博宇"
                  width={414}
                  height={579}
                  className="absolute bottom-0 left-20 z-20 h-80 w-56 object-cover shadow-[0_20px_70px_rgba(0,0,0,0.35)] sm:left-32"
                />
                <p className="absolute bottom-4 left-0 z-30 bg-ink px-3 py-2 text-xs font-black uppercase text-paper/70">
                  Composer / Director
                </p>
              </div>
              <div className="relative z-30 border-l border-paper/20 pl-5">
                <p className="text-sm font-semibold uppercase text-paper/50">
                  Artistic Director
                </p>
                <h2 className="mt-3 text-4xl font-black">
                  {about.director.name}
                </h2>
                <p className="mt-2 text-paper/62">{about.director.role}</p>
                <p className="mt-6 text-base leading-8 text-paper/74">
                  {about.director.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
