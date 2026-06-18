import { faqs } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function FAQSection() {
  return (
    <section id="duvidas" className="bg-tag-soft py-20 md:py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas que merecem respostas diretas antes de qualquer decisão."
        />

        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg border border-tag-line bg-white">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 px-5 py-4 text-base font-black text-tag-ink">
                {faq.question}
                <span className="text-2xl leading-none text-tag-purple group-open:hidden">+</span>
                <span className="hidden text-2xl leading-none text-tag-purple group-open:block">-</span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-tag-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
