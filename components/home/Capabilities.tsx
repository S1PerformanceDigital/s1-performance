import React from "react";

export default function Capabilities() {
  return (
    <section className="py-24 bg-[#090F1E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#0A84FF] font-semibold">
              Tecnologia & IA
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
              Não entregamos ferramentas. Construímos <span className="text-[#0A84FF]">operações inteligentes</span>.
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              A tecnologia é o meio. Utilizamos automações, integrações e Inteligência Artificial para aumentar a velocidade da sua equipe, eliminar falhas e ampliar sua capacidade de análise.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Integrações nativas entre CRM, ERP e Mídias",
                "Camada de Inteligência Artificial para identificação de riscos",
                "Dashboards unificados em tempo real",
                "Automações operacionais que eliminam retrabalho",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-[#0A84FF]/20 border border-[#0A84FF] flex items-center justify-center text-[#0A84FF] text-xs font-bold">
                    ✓
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-[#111C2E] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A84FF]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-sm font-semibold text-white">
                Camada de IA na Operação S1
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              &quot;Detectamos uma queda de 12% na taxa de conversão do canal Google Ads em relação à semana anterior. Sugestão: Revisar a etapa de qualificação no CRM.&quot;
            </p>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-[#0A84FF]">Alerta Preditivo</span>
              <span className="text-xs text-slate-500">Ação Automática</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}