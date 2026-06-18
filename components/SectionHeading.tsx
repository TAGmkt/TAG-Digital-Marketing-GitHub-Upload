type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`mb-4 text-xs font-black uppercase tracking-normal ${light ? "text-tag-lime" : "text-tag-purple"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-black leading-tight md:text-5xl ${light ? "text-white" : "text-tag-ink"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-white/75" : "text-tag-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
