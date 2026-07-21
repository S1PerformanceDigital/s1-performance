import React from "react";
import SystemPreview from "./SystemPreview";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#0B1326] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/10 text-[#0A84FF] text-xs font-semibold uppercase tracking-wider mb-6">
            S1 Transformação & Performance Digital
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Sua empresa já gera dados. O <span className="text-[#0A84FF]">Sistema S1</span> transforma isso em decisões estratégicas.
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-2xl">
            Empresas orientadas por opinião crescem por acaso. Empresas orientadas por dados crescem por estratégia.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="px-8 py-4 rounded-xl bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#0A84FF]/25 hover:scale-105"
            >
              Solicitar Diagnóstico
            </a>
            <a
              href="#ciclo"
              className="px-8 py-4 rounded-xl border border-white/15 hover:bg-white/5 text-white font-semibold text-sm transition-all"
            >
              Conhecer Ciclo DECIDE®
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <SystemPreview />
        </div>
      </div>
    </section>
  );
}