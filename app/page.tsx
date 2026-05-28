import Image from "next/image";
import Link from "next/link";
import { about, contact, events, join, site } from "@/data/site";

const playModes = [
  {
    number: "01",
    title: "REHEARSAL",
    cn: "排练",
    text: "在稳定的排练节奏里打磨音准、呼吸和声部关系。",
    image: "/images/rehearsal-2.jpg"
  },
  {
    number: "02",
    title: "PUBLIC CONCERT",
    cn: "公益演出",
    text: "把室内乐带进社区、街区与公共文化空间。",
    image: "/images/concert-1.jpg"
  },
  {
    number: "03",
    title: "CHAMBER SALON",
    cn: "室内乐沙龙",
    text: "用轻量讲解与近距离演奏，让更多人走近古典音乐。",
    image: "/images/concert-2.jpg"
  }
];

const instruments = [
  "VIOLIN",
  "VIOLA",
  "CELLO",
  "DOUBLE BASS",
  "PIANO",
  "WOODWINDS"
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#F4F1EA] text-[#111111]">
      <section className="poster-section relative min-h-[calc(100vh-96px)] border-b border-black/15 px-4 py-10 sm:px-6 lg:px-10">
        <p className="pointer-events-none absolute left-3 top-20 hidden select-none text-[11rem] font-black leading-none text-transparent [-webkit-text-stroke:1px_rgba(17,17,17,0.08)] lg:block">
          MUSIC
        </p>
        <p className="pointer-events-none absolute bottom-0 right-0 select-none text-7xl font-black leading-none text-black/[0.04] sm:text-9xl lg:text-[11rem]">
          BRIDGE
        </p>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative z-10 pt-8 sm:pt-14">
            <div className="mb-8 flex items-center gap-4 text-xs font-bold uppercase text-[#7A3D28]">
              <span>Chengdu</span>
              <span className="h-px w-14 bg-[#7A3D28]" />
              <span>Public Chamber Project</span>
            </div>

            <h1 className="poster-title max-w-5xl text-5xl font-black uppercase leading-[0.9] sm:text-7xl lg:text-8xl 2xl:text-9xl">
              CHENGDU
              <br />
              BRIDGE
              <br />
              CHAMBER
              <br />
              ORCHESTRA
            </h1>

            <div className="mt-8 max-w-2xl border-l-4 border-[#7A3D28] pl-5">
              <p className="text-2xl font-black sm:text-3xl">
                成都 Bridge 室内乐团
              </p>
              <p className="mt-4 text-base leading-8 text-black/68 sm:text-lg">
                一个由成都本地音乐爱好者组成的公益性质业余室内乐团
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join"
                className="poster-button bg-[#111111] text-[#F4F1EA] hover:bg-[#7A3D28]"
              >
                加入我们
              </Link>
              <Link
                href="#about"
                className="poster-button border border-black/35 text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-[#F4F1EA]"
              >
                了解乐团
              </Link>
            </div>
          </div>

          <div className="relative z-10 min-h-[520px] sm:min-h-[680px] lg:min-h-[760px]">
            <figure className="group absolute right-0 top-0 w-[78%] overflow-hidden border-8 border-[#F4F1EA] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:w-[70%]">
              <Image
                src="/images/rehearsal-1.jpg"
                alt="Bridge 室内乐团排练现场"
                width={980}
                height={1220}
                className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:contrast-105 sm:h-[580px] lg:h-[650px]"
                priority
              />
              <figcaption className="absolute bottom-4 left-4 bg-[#F4F1EA] px-3 py-2 text-xs font-black uppercase">
                Rehearsal / 2026
              </figcaption>
            </figure>

            <figure className="group absolute bottom-6 left-0 w-[52%] overflow-hidden bg-black sm:w-[46%]">
              <Image
                src="/images/concert-2.jpg"
                alt="公益演出现场"
                width={720}
                height={520}
                className="aspect-[5/4] w-full object-cover opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:contrast-105"
              />
            </figure>

            <div className="absolute bottom-0 right-4 hidden max-w-[16rem] border-t border-black pt-4 text-sm font-bold uppercase leading-6 text-black/70 sm:block">
              String sound, local people, shared city nights.
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="poster-section border-b border-black/15 px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#7A3D28]">
              01 / About
            </p>
            <h2 className="poster-title mt-5 text-6xl font-black uppercase leading-none sm:text-8xl">
              ABOUT
              <br />
              BRIDGE
            </h2>
          </div>
          <div className="border-t border-black pt-6 lg:pt-8">
            <p className="max-w-3xl text-2xl font-black leading-tight sm:text-4xl">
              {about.title}
            </p>
            <div className="mt-8 grid gap-7 text-base leading-8 text-black/70 md:grid-cols-2">
              {about.paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-6 border-t border-black/20 pt-8 sm:grid-cols-3">
              {about.values.map((value, index) => (
                <div key={value.title}>
                  <p className="text-4xl font-black text-[#7A3D28]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-black">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/62">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="poster-section relative border-b border-black/15 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <p className="pointer-events-none absolute -right-6 top-8 select-none text-7xl font-black uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(122,61,40,0.18)] sm:text-9xl">
          JOIN US
        </p>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[420px] sm:min-h-[560px]">
            <Image
              src="/images/rehearsal-3.jpg"
              alt="乐团排练局部"
              width={780}
              height={980}
              className="absolute left-0 top-0 h-[360px] w-[72%] object-cover transition duration-700 hover:scale-[1.025] hover:contrast-105 sm:h-[500px]"
            />
            <Image
              src="/images/concert-1.jpg"
              alt="Bridge 室内乐团舞台"
              width={620}
              height={460}
              className="absolute bottom-0 right-0 h-[220px] w-[58%] border-8 border-[#F4F1EA] object-cover transition duration-700 hover:scale-[1.025] hover:contrast-105 sm:h-[300px]"
            />
            <p className="absolute bottom-4 left-0 bg-[#111111] px-4 py-3 text-xs font-black uppercase text-[#F4F1EA]">
              Ensemble / Amateur / Public
            </p>
          </div>

          <div className="relative z-10">
            <p className="text-sm font-black uppercase text-[#7A3D28]">
              Recruitment
            </p>
            <h2 className="poster-title mt-4 text-5xl font-black uppercase leading-none sm:text-7xl">
              JOIN THE
              <br />
              ENSEMBLE
            </h2>
            <p className="mt-5 text-2xl font-black">加入我们</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/68">
              {join.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-y border-black py-6">
              {instruments.map((item) => (
                <span
                  key={item}
                  className="poster-title text-3xl font-black uppercase leading-none text-[#111111] sm:text-4xl"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={site.joinFormUrl}
              target="_blank"
              rel="noreferrer"
              className="poster-button mt-8 inline-flex bg-[#7A3D28] text-[#F4F1EA] hover:bg-[#111111]"
            >
              填写报名表
            </Link>
          </div>
        </div>
      </section>

      <section className="poster-section border-b border-black/15 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-black pb-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#7A3D28]">
                Gallery
              </p>
              <h2 className="poster-title mt-4 text-6xl font-black uppercase leading-none sm:text-8xl">
                MUSIC
                <br />
                IN FRAME
              </h2>
            </div>
            <p className="max-w-md text-sm uppercase leading-7 text-black/60">
              Rehearsal / String / Chamber Music / Chengdu Local Ensemble
            </p>
          </div>

          <div className="magazine-collage">
            <figure className="group collage-a">
              <Image
                src="/images/concert-3.jpg"
                alt="演出照片"
                width={980}
                height={720}
                className="collage-image"
              />
              <figcaption>PUBLIC CONCERT</figcaption>
            </figure>
            <figure className="group collage-b">
              <Image
                src="/images/rehearsal-2.jpg"
                alt="排练照片"
                width={560}
                height={700}
                className="collage-image"
              />
              <figcaption>REHEARSAL</figcaption>
            </figure>
            <figure className="group collage-c">
              <Image
                src="/images/concert-1.jpg"
                alt="室内乐舞台照片"
                width={760}
                height={520}
                className="collage-image"
              />
              <figcaption>CHAMBER MUSIC</figcaption>
            </figure>
            <figure className="group collage-d">
              <Image
                src="/images/rehearsal-3.jpg"
                alt="乐团排练照片"
                width={760}
                height={520}
                className="collage-image"
              />
              <figcaption>STRING DETAIL</figcaption>
            </figure>
            <figure className="group collage-e">
              <Image
                src="/images/concert-2.jpg"
                alt="舞台演出照片"
                width={720}
                height={540}
                className="collage-image"
              />
              <figcaption>STAGE</figcaption>
            </figure>
            <div className="collage-text">
              <p className="poster-title text-5xl font-black uppercase leading-none sm:text-7xl">
                CHENGDU
                <br />
                STRING
                <br />
                SOUND
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="poster-section border-b border-black/15 px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase text-[#7A3D28]">
                Events
              </p>
              <h2 className="poster-title mt-4 text-6xl font-black uppercase leading-none sm:text-8xl">
                WHAT
                <br />
                WE DO
              </h2>
              <p className="mt-6 max-w-md leading-8 text-black/64">
                {events.intro}
              </p>
            </div>

            <div className="border-t border-black">
              {playModes.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-4 border-b border-black/20 py-5 sm:grid-cols-[72px_92px_1fr] sm:items-center"
                >
                  <p className="poster-title text-4xl font-black leading-none text-[#7A3D28] sm:text-5xl">
                    {item.number}
                  </p>
                  <Image
                    src={item.image}
                    alt={`${item.cn} 氛围图`}
                    width={220}
                    height={180}
                    className="hidden aspect-square w-full object-cover sm:block"
                  />
                  <div>
                    <h3 className="poster-title text-3xl font-black uppercase leading-none sm:text-4xl">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <p className="text-lg font-black">{item.cn}</p>
                      <span className="h-px w-14 bg-black/25" />
                      <p className="text-xs font-black uppercase text-black/40">
                        Chengdu / Bridge
                      </p>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-black/64">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-20 text-[#F4F1EA] sm:px-6 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#B9794C]">
              Contact
            </p>
            <h2 className="poster-title mt-4 text-7xl font-black uppercase leading-none sm:text-9xl">
              SAY
              <br />
              HI
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/68">
              {contact.intro}
            </p>
            <div className="mt-10 grid gap-5 border-t border-white/25 pt-8 text-sm sm:grid-cols-2">
              <div>
                <p className="text-white/45">小红书</p>
                <p className="mt-2 text-lg font-black">{site.xiaohongshu}</p>
              </div>
              <div>
                <p className="text-white/45">邮箱</p>
                <Link
                  href={`mailto:${site.email}`}
                  className="mt-2 block break-words text-lg font-black text-[#F4F1EA] hover:text-[#B9794C]"
                >
                  {site.email}
                </Link>
              </div>
              <div className="sm:col-span-2">
                <Link
                  href={site.joinFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="poster-button mt-3 inline-flex border border-white/35 text-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#111111]"
                >
                  报名链接
                </Link>
              </div>
            </div>
          </div>

          <div className="grid max-w-[360px] grid-cols-2 gap-3 justify-self-start lg:content-end lg:justify-self-end">
            <figure className="border border-white/20 p-3">
              <Image
                src="/images/xiaohongshu-qrcode.jpg"
                alt="小红书二维码"
                width={520}
                height={520}
                className="aspect-square w-full bg-[#F4F1EA] object-contain p-2"
              />
              <figcaption className="mt-3 text-xs font-black uppercase text-white/55">
                Xiaohongshu
              </figcaption>
            </figure>
            <figure className="border border-white/20 p-3">
              <Image
                src="/images/wechat-qrcode.jpg"
                alt="微信二维码"
                width={520}
                height={520}
                className="aspect-square w-full bg-[#F4F1EA] object-contain p-2"
              />
              <figcaption className="mt-3 text-xs font-black uppercase text-white/55">
                WeChat
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
