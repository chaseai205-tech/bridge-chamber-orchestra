import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "联系我们"
};

export default function ContactPage() {
  return (
    <>
      <PageHero title={contact.title} intro={contact.intro} />

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-3">
          {contact.channels.map((channel) => (
            <article
              key={channel.label}
              className="rounded-lg border border-rosewood/10 bg-paper p-6 shadow-soft"
            >
              <h2 className="text-2xl font-semibold text-ink">
                {channel.label}
              </h2>
              {channel.image ? (
                <Image
                  src={channel.image}
                  alt={`${channel.label} 二维码`}
                  width={520}
                  height={520}
                  className="mt-5 aspect-square w-full rounded-lg bg-white object-contain p-3"
                />
              ) : null}
              {channel.href ? (
                <Link
                  href={channel.href}
                  className="mt-5 block break-words text-base font-medium text-rosewood"
                >
                  {channel.value}
                </Link>
              ) : (
                <p className="mt-5 break-words text-base font-medium text-ink/72">
                  {channel.value}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
