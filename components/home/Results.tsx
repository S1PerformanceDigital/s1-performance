import React from "react";

export default function Results() {
  const metrics = [
    {
      title: "Receita Operacional",
      value: "+38%",
      desc: "Maior previsibilidade de vendas e crescimento sustentável da operação.",
    },
    {
      title: "Redução de Retrabalho",
      value: "-62%",
      desc: "Processos integrados, fim das tarefas manuais e ganho real de produtividade.",
    },
    {
      title: "Visibilidade dos Dados",
      value: "100%",
      desc: "Uma única versão da verdade para decisões rápidas e confiáveis.",
    },
    {
      title: "Monitoramento Inteligente",
      value: "24/7",
      desc: "Indicadores acompanhados continuamente para antecipar gargalos e oportunidades.",
    },
  ];

  return (
    <section id="resultados" className="py-20 bg-[#0B1326] border-t border-white/5 relative overflow-hidden">
      {/* Glow de fundo discreto */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#0A84FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#0A84FF] font-semibold bg-[#0A84FF]/10 px-3 py-1 rounded-full border border-[#0A84FF]/20 inline-block">
            RESULTADOS
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Empresas que decidiram{" "}
            <span className="text-[#0A84FF]">parar de achar.</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed pt-2">
            Através do Sistema S1 e do Ciclo DECIDE, transformamos dados espalhados em decisões práticas, previsibilidade e crescimento contínuo.
          </p>
        </div>

        {/* Grid de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.title}
              className="group rounded-2xl border border-white/10 bg-[#111C2E]/70 p-6 text-center hover:border-[#0A84FF]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="text-5xl font-black text-[#0A84FF] tracking-tight group-hover:scale-105 transition-transform duration-300 font-mono">
                  {m.value}
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {m.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Fechamento */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-[#0A84FF]/20 bg-gradient-to-r from-[#111C2E]/80 via-[#111C2E]/40 to-[#111C2E]/80 p-8 text-center relative overflow-hidden backdrop-blur-sm shadow-2xl">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#0A84FF]/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-xl font-bold text-white relative z-10">
            O resultado não vem apenas da tecnologia.
          </h3>

          <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed relative z-10">
            Ele acontece quando <strong className="text-white">processos, pessoas, dados e execução</strong> trabalham juntos. O Sistema S1 conecta todos esses pontos para que sua empresa pare de crescer por sorte e passe a crescer por decisão.
          </p>
        </div>

      </div>
    </section>
  );
}