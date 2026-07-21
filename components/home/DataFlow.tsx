import React from "react";

export default function Problems() {
  const tools = [
    { name: "CRM", color: "from-[#0A84FF]/20 to-[#0A84FF]/5" },
    { name: "ERP", color: "from-blue-600/20 to-blue-600/5" },
    { name: "WhatsApp", color: "from-emerald-500/20 to-emerald-500/5" },
    { name: "Meta Ads", color: "from-blue-500/20 to-blue-500/5" },
    { name: "Google Ads", color: "from-amber-500/20 to-amber-500/5" },
    { name: "Planilhas", color: "from-emerald-600/20 to-emerald-600/5" },
  ];

  return (
    <section className="relative py-24 bg-[#090F1E] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#0A84FF] font-semibold">
            O Problema Real
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
            Toda empresa gera <span className="text-[#0A84FF]">dados</span>. O problema são as ilhas de informação.
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Sua operação possui diversas ferramentas separadas. Sem conexão, elas geram decisões lentas, desperdício de dinheiro, retrabalho e falta de previsibilidade.
          </p>
        </div>

        {/* Mapeamento Visual de Ferramentas Desconectadas */}
        <div className="mt-12 relative flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto p-8 rounded-3xl border border-white/10 bg-[#0E172A]/60 backdrop-blur-md">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`px-5 py-3 rounded-2xl border border-white/10 bg-gradient-to-b ${tool.color} text-white font-medium text-sm shadow-lg backdrop-blur-sm transition-transform hover:scale-105`}
            >
              {tool.name}
            </div>
          ))}
          <div className="w-full mt-4 text-center">
            <span className="text-xs text-slate-500 uppercase tracking-widest">
              Sistemas Isolados = Visão Incompleta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}