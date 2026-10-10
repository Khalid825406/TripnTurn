import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, dark = false }: Props) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">
        <span className="h-px w-8 bg-sunset-500" aria-hidden="true" />
        {eyebrow}
        <span className="h-px w-8 bg-sunset-500" aria-hidden="true" />
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-navy-100/80" : "text-navy/70"}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
