import React from "react";
import SystemPreview from "./SystemPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1326] pt-36 pb-28">

      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#0A84FF]/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,132,255,0.06),transparent_65%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* Conteúdo */}

          <div className="lg:col-span-6">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.30em] text-[#0A84FF]">

              Sistema S1 • Ciclo DECIDE

            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight leading-[1.02] text-white">

              Toda empresa
              <br />

              gera dados.

              <span className="block mt-3 text-[#0A84FF]">
                Poucas sabem transformá-los em crescimento.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl leading-8 text-slate-400">

              A S1 conecta processos, pessoas, tecnologia e Inteligência
              Artificial para transformar informações dispersas em decisões
              estratégicas. Com o <strong className="text-white">Sistema S1</strong> e o
              <strong className="text-[#0A84FF]"> Ciclo DECIDE</strong>, sua empresa
              evolui com mais previsibilidade, eficiência e performance.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contato"
                className="rounded-2xl bg-[#0A84FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(10,132,255,.30)] transition-all duration-300 hover:scale-105 hover:bg-[#0077EB]"
              >
                Solicitar Diagnóstico
              </a>

              <a
                href="#ciclo"
                className="rounded-2xl border border-white/10 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-[#0A84FF]/40 hover:bg-white/5"
              >
                Conhecer o Ciclo DECIDE
              </a>

            </div>

            {/* Barra de confiança */}

            <div className="mt-14 border-t border-white/10 pt-8">

              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">

                O Sistema S1 conecta toda a sua operação

              </p>

              <div className="mt-5 flex flex-wrap gap-3">

                {[
                  "CRM",
                  "ERP",
                  "Financeiro",
                  "Marketing",
                  "WhatsApp",
                  "Google Ads",
                  "Meta Ads",
                  "Dashboards",
                  "IA"
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* Sistema */}

          <div className="relative lg:col-span-6">

            <div className="absolute inset-0 rounded-[40px] bg-[#0A84FF]/15 blur-3xl scale-90" />

            <div className="relative lg:translate-x-10 lg:scale-[1.08]">

              <SystemPreview />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}