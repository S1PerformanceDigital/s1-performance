import React from "react";

export default function CTA() {
  return (
    <section id="contato" className="py-24 bg-[#090F1E] relative overflow-hidden">
      {/* Luzes de Fundo / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0A84FF]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111C2E]/90 p-8 md:p-14 shadow-2xl backdrop-blur-xl text-center">
          
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/10 text-[#0A84FF] text-xs font-semibold uppercase tracking-widest mb-6">
            Transformação Operacional
          </span>

          {/* Título Principal */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Vamos implantar o <span className="text-[#0A84FF]">Sistema S1®</span> na sua empresa?
          </h2>

          {/* Subtítulo / Tese */}
          <p className="mt-6 text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Empresas orientadas por opinião crescem por acaso. Empresas orientadas por dados crescem por estratégia. Agende um diagnóstico inicial e descubra os gargalos da sua operação.
          </p>

          {/* Botões de Ação */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20da%20minha%20opera%C3%A7%C3%A3o%20com%20a%20S1."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white font-semibold text-sm transition-all shadow-lg shadow-[#0A84FF]/30 hover:scale-105 flex items-center justify-center gap-2"
            >
              Solicitar Diagnóstico Operational
            </a>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              Falar com um Consultor
            </a>
          </div>

          {/* Destaques do Processo */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Etapa 1</p>
              <p className="text-sm font-semibold text-white mt-1">Diagnóstico Sem Compromisso</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Etapa 2</p>
              <p className="text-sm font-semibold text-white mt-1">Identificação de Quick Wins</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Etapa 3</p>
              <p className="text-sm font-semibold text-white mt-1">Plano do Ciclo DECIDE®</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}