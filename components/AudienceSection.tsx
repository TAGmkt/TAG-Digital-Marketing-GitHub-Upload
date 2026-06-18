import { audienceCards } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function AudienceSection() {
  return (
    <section id="para-quem" className="bg-white py-20 md:py-28">
      <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
        <SectionHeading
          eyebrow="Para quem é"
          title="Para quem já é bom no atendimento, mas ainda não é lembrado como referência."
          description="A TAG foi pensada para profissionais da saúde que atendem particular, valorizam ética e precisam transformar excelência técnica em percepção de autoridade."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((card) => (
            <article key={card.title} className="min-h-64 rounded-lg border border-tag-line bg-tag-soft p-6">
              <h3 className="text-xl font-black text-tag-purple">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-tag-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
