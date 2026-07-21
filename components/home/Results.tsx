import React from "react";

export default function Stats() {
  const metrics = [
    {
      title: "Receita Operacional",
      value: "+38%",
      desc: "Crescimento previsível e escalável",
    },
    {
      title: "Redução de Retrabalho",
      value: "-62%",
      desc: "Eficiência e processos otimizados",
    },
    {
      title: "Visibilidade de Dados",
      value: "100%",
      desc: "Fonte única e confiável de informação",
    },
    {
      title: "Decisões Guiadas por IA",
      value: "24/7",
      desc: "Monitoramento e alertas contínuos",
    },
  ];

  return (
    <section className="py-20 bg-[#0B1326] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#0A84FF] font-semibold">
            Resultados Reais
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Quando todos os dados trabalham juntos, sua empresa evolui mais rápido.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.title}
              className="p-6 rounded-3xl border border-white/10 bg-[#111C2E]/60 text-center"
            >
              <h3 className="text-4xl font-extrabold text-[#0A84FF]">{m.value}</h3>
              <p className="mt-2 text-sm font-semibold text-white">{m.title}</p>
              <p className="mt-1 text-xs text-slate-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}