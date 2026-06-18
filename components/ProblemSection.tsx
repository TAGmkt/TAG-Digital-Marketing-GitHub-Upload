import { SectionHeading } from "@/components/SectionHeading";

const problems = [
  "Conteúdo que não comunica seus diferenciais reais",
  "Campanhas que trazem volume, mas não qualidade",
  "Perfil que gera curiosos em vez de pacientes comprometidos",
  "Rotina de publicação que depende da sua disponibilidade",
  "Falta de clareza sobre o que dizer, como dizer e para quem",
  "Histórico com agências que não entregaram o que prometeram"
];

export function ProblemSection() {
  return (
    <section className="bg-tag-soft py-20 md:py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="O problema real"
          title="Seu perfil não transmite o real valor dos procedimentos."
          description="Você investe tempo e dinheiro, mas ainda assim atrai pessoas que comparam preço, não reconhecem seu valor ou simplesmente somem depois do primeiro contato. Enquanto isso, você vê concorrentes com menos qualificação técnica crescendo nas redes e acaba sempre se questionando. O problema dificilmente é falta de dedicação e esforço. É falta de método."
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
