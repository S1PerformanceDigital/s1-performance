import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 px-4 max-w-7xl mx-auto text-center overflow-hidden">
      {/* Luzes de Fundo / Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#0A84FF]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Eyebrow */}
        <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#0A84FF] uppercase bg-[#0A84FF]/10 border border-[#0A84FF]/20 px-4 py-1.5 rounded-full">
          SISTEMA S1 · PERFORMANCE E TRANSFORMAÇÃO DIGITAL
        </span>

        {/* H1 Headline */}
        <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Todo dia sua empresa toma dezenas de decisões. <span className="text-[#0A84FF]">Quantas delas são um chute?</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Vendedor, produto, canal, unidade: em algum lugar da sua operação, alguém está decidindo agora com base em achismo — porque o dado existe, mas está espalhado, atrasado ou não conversa com o resto. A S1 conecta o que sua empresa já tem e transforma isso em decisão certa, todos os dias.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#diagnostico"
            className="w-full sm:w-auto px-8 py-4 bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white font-bold rounded-xl shadow-lg shadow-[#0A84FF]/25 hover:scale-105 transition-all text-base md:text-lg flex items-center justify-center gap-2"
          >
            Pedir meu Diagnóstico S1
            <span>→</span>
          </a>
        </div>

        {/* Microcopy / CTA secundário */}
        <p className="mt-4 text-xs md:text-sm text-slate-400 font-medium">
          Sem enrolação. 20 minutos para descobrir onde sua empresa está perdendo dinheiro sem ninguém perceber.
        </p>
      </div>
    </section>
  );
}