import React from "react";

export default function SystemSection() {
  const steps = [
    {
      letter: "D",
      title: "Diagnosticar",
      desc: "Compreender completamente a operação, mapear processos, gargalos e aplicar Quick Wins de alto impacto.",
      highlight: "Visão clara do cenário atual",
    },
    {
      letter: "E",
      title: "Estruturar",
      desc: "Definir KPIs, metas, processos, governança e preparar a infraestrutura para métricas confiáveis.",
      highlight: "Operação pronta para medir",
    },
    {
      letter: "C",
      title: "Conectar",
      desc: "Centralizar dados do CRM, ERP, Ads e WhatsApp em uma única fonte confiável de informação.",
      highlight: "Fim das ilhas de informação",
    },
    {
      letter: "I",
      title: "Interpretar",
      desc: "Transformar números brutos em hipóteses e inteligência para descobrir o que impede o crescimento.",
      highlight: "Dados transformados em insights",
    },
    {
      letter: "D",
      title: "Decidir",
      desc: "Plano de ação estratégico com responsáveis, prioridades e metas claras sustentadas por evidências.",
      highlight: "Decisões rápidas e seguras",
    },
    {
      letter: "E",
      title: "Evoluir",
      desc: "Executar, medir impacto/ROI e aprender continuamente para reiniciar o ciclo em um patamar superior.",
      highlight: "Crescimento sustentável",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1326] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#0A84FF] font-semibold">
            Metodologia Proprietária
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            O Ciclo <span className="text-[#0A84FF]">DECIDE®</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Um sistema permanente de evolução para garantir que toda decisão importante seja respaldada por dados confiáveis.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.letter + step.title}
              className="relative p-6 rounded-3xl border border-white/10 bg-[#111C2E] hover:border-[#0A84FF]/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#0A84FF]/15 border border-[#0A84FF]/30 text-[#0A84FF] font-bold text-xl flex items-center justify-center">
                  {step.letter}
                </span>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {step.highlight}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[#0A84FF] transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}