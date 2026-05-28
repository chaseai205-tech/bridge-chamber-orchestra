type SectionTitleProps = {
  label?: string;
  title: string;
  text?: string;
};

export function SectionTitle({ label, title, text }: SectionTitleProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {label ? (
        <p className="mb-3 text-sm font-semibold uppercase text-clay">
          {label}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-ink">{title}</h2>
      {text ? <p className="mt-4 leading-8 text-ink/68">{text}</p> : null}
    </div>
  );
}
