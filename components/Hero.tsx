import { LeadForm } from "@/components/LeadForm";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-tag-line bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_52%,#f7f4f8_100%)] py-14 md:py-20"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-tag-purple/20" />
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-black uppercase text-tag-purple">TAG Digital Marketing</p>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.03] text-tag-purple md:text-6xl">
            Autoridade e posicionamento para profissionais da saúde que valorizam o que entregam.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-tag-muted">
            O método TAG transforma o posicionamento de médicos, dentistas, biomédicas, clínicas e
            consultórios para atrair pacientes mais qualificados sem depender da sorte.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-tag-purple px-6 text-sm font-black text-white shadow-[0_12px_28px_rgba(91,42,122,0.24)] transition hover:bg-tag-purpleDark"
            >
              Solicite sua análise de diagnóstico
            </a>
            <a
              href="#solucoes"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-tag-purple/25 bg-white px-6 text-sm font-black text-tag-purple transition hover:border-tag-purple hover:bg-tag-soft"
            >
              Ver soluções
            </a>
          </div>

          <div className="mt-10 border-l-4 border-tag-lime pl-5 text-sm font-bold leading-7 text-tag-muted">
            <span>Método validado por dezenas de profissionais no Brasil desde 2021.</span>
          </div>
        </div>

        <div>
          <LeadForm source="hero" />
        </div>
      </div>
    </section>
  );
}
