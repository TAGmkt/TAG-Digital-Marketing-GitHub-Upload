import { SectionHeading } from "@/components/SectionHeading";

const problems = [
  "Conteúdo que não mostra seu diferencial",
  "Campanhas sem leitura real de dados",
  "Perfil que atrai curiosos e pedidos de preço",
  "Falta de rotina para gravar, aprovar e publicar",
  "Pouca clareza sobre oferta e diferenciais",
  "Experiências anteriores que reduziram sua confiança no marketing"
];

export function ProblemSection() {
  return (
    <section className="bg-tag-soft py-20 md:py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="O problema real"
          title="O digital mostra quem aparece. Mas nem sempre mostra quem é melhor."
          description="Muitas perdas de oportunidade estão em mensagens genéricas, conteúdos sem jornada, tráfego sem estratégia, falta de monitoramento e uma rotina digital que depende demais da improvisação."
        />

        <div className="grid gap-3">
          {problems.map((item) => (
            <div key={item} className="flex items-center gap-4 rounded-lg border border-tag-line bg-white p-5">
              <span className="h-3 w-3 shrink-0 rounded-sm bg-tag-lime" />
              <p className="m-0 text-sm font-extrabold text-tag-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
