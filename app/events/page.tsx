import Image from "next/image";
import { events } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "活动演出"
};

export default function EventsPage() {
  return (
    <>
      <PageHero title={events.title} intro={events.intro} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {events.items.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg bg-paper shadow-soft">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={520}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/68">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            label="Next"
            title="未来计划"
            text="Bridge 会继续保持公益初心, 并在专业化、品牌化与城市文化连接上持续发力。"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {events.future.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-rosewood/10 bg-white/70 p-6 text-sm leading-7 text-ink/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle title="影像记录" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ...events.gallery,
              "/images/atmosphere-1.png",
              "/images/atmosphere-2.jpg",
              "/images/atmosphere-3.png"
            ].map((image, index) => (
              <Image
                key={image}
                src={image}
                alt={`活动照片 ${index + 1}`}
                width={700}
                height={520}
                className="aspect-[4/3] w-full rounded-lg object-cover shadow-soft"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
