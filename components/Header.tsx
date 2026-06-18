"use client";

import Image from "next/image";
import { useState } from "react";
import { navigationItems } from "@/lib/content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tag-line/80 bg-white/94 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] w-[min(1120px,calc(100%-40px))] items-center justify-between gap-6">
        <a href="#inicio" aria-label="TAG Digital Marketing" className="shrink-0">
          <Image
            src="/assets/tag-logo-color.png"
            alt="TAG Digital Marketing"
            width={184}
            height={96}
            priority
            className="h-auto w-[170px] md:w-[184px]"
          />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-md border border-tag-line bg-white text-tag-purple md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav
          aria-label="Navegação principal"
          className={`absolute left-5 right-5 top-[82px] grid gap-1 rounded-lg border border-tag-line bg-white p-2 shadow-soft transition md:static md:flex md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
          }`}
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm font-extrabold text-tag-muted transition hover:bg-tag-soft hover:text-tag-purple md:px-0 md:py-0 md:hover:bg-transparent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
