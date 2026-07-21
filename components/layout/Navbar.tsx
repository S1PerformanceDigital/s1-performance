"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <div className="mx-auto mt-4 md:mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#08111F]/80 px-5 py-3.5 backdrop-blur-2xl shadow-xl">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="/logo-s1.png"
              alt="S1 Performance"
              width={40}
              height={40}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="leading-tight">
            <h2 className="text-base font-bold text-white tracking-wide">
              S1 <span className="text-[#0A84FF] font-light">Performance</span>
            </h2>
            <p className="text-[11px] text-slate-400 font-medium tracking-wider uppercase">
              Sistema de Decisão
            </p>
          </div>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#ciclo"
            className="text-sm font-medium text-slate-300 transition hover:text-[#0A84FF]"
          >
            Ciclo DECIDE®
          </a>

          <a
            href="#porque-s1"
            className="text-sm font-medium text-slate-300 transition hover:text-[#0A84FF]"
          >
            Por que a S1
          </a>

          <a
            href="#resultados"
            className="text-sm font-medium text-slate-300 transition hover:text-[#0A84FF]"
          >
            Resultados
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-slate-300 transition hover:text-[#0A84FF]"
          >
            FAQ
          </a>
        </nav>

        {/* Ações / CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#diagnostico"
            className="group flex items-center gap-2 rounded-xl bg-[#0A84FF] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#2494ff] hover:shadow-[0_0_25px_rgba(10,132,255,.45)]"
          >
            <span>Pedir Diagnóstico</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* Botão Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#08111F]/95 p-6 backdrop-blur-2xl lg:hidden shadow-2xl">
          <nav className="flex flex-col gap-4">
            <a
              href="#ciclo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-[#0A84FF]"
            >
              Ciclo DECIDE®
            </a>
            <a
              href="#porque-s1"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-[#0A84FF]"
            >
              Por que a S1
            </a>
            <a
              href="#resultados"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-[#0A84FF]"
            >
              Resultados
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-[#0A84FF]"
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}