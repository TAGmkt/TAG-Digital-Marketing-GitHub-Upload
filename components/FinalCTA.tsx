import { LeadForm } from "@/components/LeadForm";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-black uppercase text-tag-purple">Próximo passo</p>
          <h2 className="text-3xl font-black leading-tight text-tag-purple md:text-5xl">
            Solicite um diagnóstico digital para a sua realidade.
          </h2>
          <p className="mt-6 text-lg leading-8 text-tag-muted">
            Envie seu contato e a equipe da TAG vai entender seu momento, sua especialidade e o que já
            foi feito no digital para indicar um caminho mais seguro, seja para consultório, clínica ou marca pessoal.
          </p>
          <div className="mt-8 border-l-4 border-tag-lime pl-5">
            <p className="m-0 text-sm font-bold leading-7 text-tag-muted">
              O diagnóstico inicial depende das informações sobre posicionamento atual, canais usados,
              histórico de campanhas, rotina de conteúdo e objetivo comercial.
            </p>
          </div>
        </div>

        <LeadForm source="final" />
      </div>
    </section>
  );
}
