import Image from "next/image";
import { navigationItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-tag-line bg-white py-10">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <Image
            src="/assets/tag-logo-color.png"
            alt="TAG Digital Marketing"
            width={170}
            height={88}
            className="h-auto w-[160px]"
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-tag-muted">
            TAG Digital Marketing | Marketing de autoridade para profissionais da saúde.
            Estratégia, conteúdo e tráfego com clareza, organização e acompanhamento.
          </p>
        </div>

        <div className="grid gap-3">
          <p className="text-xs font-black uppercase text-tag-purple">Links rápidos</p>
          <nav className="grid gap-2" aria-label="Links do rodapé">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-bold text-tag-muted transition hover:text-tag-purple">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
