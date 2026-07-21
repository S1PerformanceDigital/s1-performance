import React from 'react';

const symptoms = [
  'Relatórios defasados (30, 60 ou 90 dias de atraso)',
  'Cada área/gestor com uma "verdade" diferente sobre os números',
  'Falta de clareza sobre o custo, margem e retorno real de cada operação',
  'Decisões importantes virando reuniões de opinião em vez de evidência',
];

export default function DataFlow() {
  return (
    <section className="py-16 bg-slate-950 text-white px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* ================= 2. O PROBLEMA ================= */}
        <div className="space-y-6">
          <span className="text-xs font-semibold text-red-400 tracking-widest uppercase bg-red-500/10 px-3 py-1 rounded-full">
            O QUE ESTÁ TE CUSTANDO CARO
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Sua empresa cresce por acaso — ou porque sabe exatamente o que fazer?
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            A maioria dos negócios decide no <strong className="text-white">feeling</strong>. Vendas, financeiro e operação olham para relatórios que não se cruzam. Todo mundo "acha" — e o dinheiro vai embora sem ninguém notar.
          </p>

          {/* Grid de Sintomas Rápido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-sm text-gray-300">
                <span className="text-red-500 font-bold">✕</span>
                <span>{symptom}</span>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold text-red-400">
            Empresas orientadas por opinião crescem por acaso.
          </p>
        </div>

        {/* ================= 3. A TESE ================= */}
        <div className="pt-10 border-t border-slate-800 space-y-6">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full">
            NOSSA TESE
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Empresas orientadas por dados crescem com previsibilidade.
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Não é sobre ter dezenas de dashboards. É sobre ter <strong className="text-blue-400">uma única verdade</strong>. Quando os dados se conectam, a discussão muda de <em>"eu acho"</em> para <em>"os números mostram"</em>.
          </p>

          {/* Frase de Destaque Compacta */}
          <div className="p-6 bg-gradient-to-r from-blue-950/40 to-slate-900 border-l-4 border-[#0A84FF] rounded-r-lg">
            <blockquote className="text-xl md:text-2xl font-bold text-white">
              "Toda decisão começa com dados. Decidir melhor é crescer mais rápido."
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}