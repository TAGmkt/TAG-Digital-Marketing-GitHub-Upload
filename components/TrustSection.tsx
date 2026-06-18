import Image from "next/image";
import { trustItems } from "@/lib/content";

export function TrustSection() {
  return (
    <section className="bg-tag-purple py-20 text-white md:py-28">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10">
          <Image
            src="/assets/tag-equipe-rafaella-lisboa.jpg"
            alt="Equipe da TAG Digital Marketing em ambiente profissional"
            width={1100}
            height={1653}
            className="h-[430px] w-full object-cover object-[center_58%] md:h-[520px]"
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-black uppercase text-tag-lime">Confiança</p>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Para quem já investiu e não quer errar de novo.
          </h2>

          <div className="mt-7 grid gap-5 text-base leading-8 text-white/75">
            <p>
              Sabemos que você provavelmente chegou aqui com alguma reserva. Já tentou,
              já gastou, já esperou resultado que não veio. Isso deixa marcas - e faz
              sentido ser mais exigente desta vez.
            </p>
            <p>
              A TAG foi construída exatamente para esse perfil: o profissional que sabe
              que precisa do digital, mas não vai dar mais um passo no escuro.
            </p>
            <p>
              Por isso, antes de qualquer execução, existe estratégia. Antes de qualquer
              proposta, existe diagnóstico. E durante todo o processo, existe transparência:
              sobre o que está sendo feito, por que está sendo feito e o que os dados estão
              mostrando.
            </p>
            <p>
              Não inventamos números. Não prometemos agenda cheia. Não usamos cases genéricos
              para impressionar. O que a TAG entrega é organização, clareza e um trabalho que
              respeita a responsabilidade de comunicar na área da saúde.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-extrabold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
