import Image from "next/image";
import Link from "next/link";
import { join, site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "招募加入"
};

export default function JoinPage() {
  return (
    <>
      <PageHero title={join.title} intro={join.intro} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionTitle
              title="招募声部"
              text="我们欢迎具备基础识谱能力、愿意长期合奏的朋友加入。"
            />
            <div className="flex flex-wrap gap-3">
              {join.instruments.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-mist px-4 py-2 text-sm text-ink/78"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-paper p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-ink">加入要求</h2>
            <ul className="mt-5 space-y-3">
              {join.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-ink/72">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rosewood" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={site.joinFormUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-full bg-rosewood px-6 py-3 text-center font-medium text-white transition hover:bg-ink"
            >
              填写报名表
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            label="Member voices"
            title="团员语录"
            text="很多人的音乐生活, 都是在离开课堂之后重新开始的。"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {join.quotes.map((quote) => (
              <figure
                key={quote.name}
                className="rounded-lg bg-white/80 p-6 shadow-soft"
              >
                <blockquote className="text-sm leading-7 text-ink/72">
                  “{quote.text}”
                </blockquote>
                <figcaption className="mt-5 font-semibold text-rosewood">
                  {quote.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr]">
          <Image
            src="/images/atmosphere-4.png"
            alt="招募氛围照片"
            width={900}
            height={680}
            className="aspect-[16/10] w-full object-cover shadow-soft"
          />
          <div className="flex flex-col justify-end border-t border-rosewood/30 pt-5">
            <p className="text-sm font-semibold uppercase text-clay">
              Join the room
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink">
              不只是加入一个声部，也是在加入一间有回声的排练室。
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
