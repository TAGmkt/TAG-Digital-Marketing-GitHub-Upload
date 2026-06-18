import { LeadForm } from "@/components/LeadForm";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-black uppercase text-tag-purple">Próximo passo</p>
          <h2 className="text-3xl font-black leading-tight text-tag-purple md:text-5xl">
            Se você chegou até aqui, provavelmente sente que é hora de fazer diferente.
          </h2>
          <p className="mt-6 text-lg leading-8 text-tag-muted">
            Não de tentar mais uma vez do mesmo jeito. De ter clareza sobre o que realmente
            faz sentido para o seu consultório - e a partir daí, dar um passo com mais segurança.
          </p>
          <p className="mt-5 text-lg leading-8 text-tag-muted">
            O diagnóstico inicial é o começo disso. Sem compromisso, sem pressão. A equipe da
            TAG vai entender sua especialidade, seu histórico e o que já foi tentado para indicar
            um caminho que faça sentido para o seu momento.
          </p>
          <div className="mt-8 border-l-4 border-tag-lime pl-5">
            <p className="m-0 text-sm font-bold leading-7 text-tag-muted">
              O diagnóstico considera posicionamento atual, canais utilizados, histórico de campanhas,
              rotina de conteúdo e objetivo comercial.
            </p>
          </div>
        </div>

        <LeadForm source="final" />
      </div>
    </section>
  );
}
