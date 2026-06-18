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
            Estratégia com verdade para quem cansou de investir no escuro.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-extrabold">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-7 text-base leading-8 text-white/75">
            A TAG não inventa números, cases ou garantias. O trabalho começa pela análise do contexto,
            respeita a responsabilidade da comunicação em saúde e evolui com decisões sustentadas por
            estratégia, consistência e dados.
          </p>
        </div>
      </div>
    </section>
  );
}
