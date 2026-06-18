import { methodSteps } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function MethodSection() {
  return (
    <section id="como-funciona" className="bg-tag-ink py-20 md:py-28">
      <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
        <SectionHeading
          eyebrow="Como funciona"
          title="Da insegurança com marketing a uma presença digital estruturada."
          description="O processo foi desenhado para dar clareza ao profissional e reduzir a sobrecarga operacional."
          light
        />

        <div className="mt-12 grid border border-white/10 md:grid-cols-5">
          {methodSteps.map((step) => (
            <article key={step.label} className="min-h-72 border-b border-white/10 bg-white/[0.04] p-6 md:border-b-0 md:border-r last:md:border-r-0">
              <span className="text-xs font-black uppercase text-tag-lime">{step.label}</span>
              <h3 className="mt-14 text-lg font-black leading-snug text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
