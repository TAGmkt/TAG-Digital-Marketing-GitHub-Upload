import { solutionCards } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
        <SectionHeading
          eyebrow="Soluções"
          title="Um sistema de marketing para sustentar autoridade, não só frequência."
          description="Cada frente é construída de forma consultiva. A TAG não vende fórmula pronta nem promete agenda cheia: organiza estratégia, execução e análise para melhorar a qualidade da sua presença digital."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map((card, index) => (
            <article
              key={card.title}
              className="min-h-64 rounded-lg border border-tag-line bg-white p-6 shadow-[0_10px_34px_rgba(22,20,27,0.06)] transition hover:-translate-y-1 hover:border-tag-purple/40 hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-tag-lime text-xs font-black text-tag-navy">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-xl font-black text-tag-ink">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-tag-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
