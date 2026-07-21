import React from "react";

export default function Stats() {
  const metrics = [
    {
      title: "Receita Operacional",
      value: "+38%",
      desc: "Maior previsibilidade e crescimento sustentável da operação.",
    },
    {
      title: "Redução de Retrabalho",
      value: "-62%",
      desc: "Processos mais eficientes, menos tarefas manuais e maior produtividade.",
    },
    {
      title: "Visibilidade dos Dados",
      value: "100%",
      desc: "Indicadores centralizados para decisões rápidas e confiáveis.",
    },
    {
      title: "Monitoramento Inteligente",
      value: "24/7",
      desc: "IA acompanhando indicadores e identificando oportunidades continuamente.",
    },
  ];

  return (
    <section id="resultados" className="py-24 bg-[#0B1326] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">

          <span className="text-xs uppercase tracking-[0.3em] text-[#0A84FF] font-semibold">
            Resultados
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Empresas orientadas por dados tomam melhores decisões
            <span className="text-[#0A84FF]"> e crescem com mais previsibilidade.</span>
          </h2>

          <p className="mt-5 text-slate-400 leading-relaxed">
            Através do Sistema S1 e do Ciclo DECIDE, transformamos dados em ações,
            ações em resultados e resultados em evolução contínua.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {metrics.map((m) => (
            <div
              key={m.title}
              className="group rounded-3xl border border-white/10 bg-[#111C2E]/70 p-8 text-center hover:border-[#0A84FF]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="text-5xl font-black text-[#0A84FF] tracking-tight group-hover:scale-105 transition-transform duration-300">
                {m.value}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {m.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {m.desc}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-[#0A84FF]/20 bg-[#111C2E]/40 p-8 text-center relative overflow-hidden backdrop-blur-sm">

          <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#0A84FF]/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-xl font-semibold text-white relative z-10">
            O resultado não vem da tecnologia.
          </h3>

          <p className="mt-4 text-slate-400 leading-relaxed relative z-10">
            Ele acontece quando processos, pessoas, dados e tecnologia trabalham
            juntos. O Sistema S1 conecta todos esses elementos para que sua empresa
            tome decisões mais inteligentes, execute com eficiência e evolua de
            forma contínua.
          </p>

        </div>

      </div>
    </section>
  );
}