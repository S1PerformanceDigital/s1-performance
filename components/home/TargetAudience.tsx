import React from 'react';

const qualificationCriteria = [
  'Você tem dados, mas eles estão espalhados e ninguém confia neles de verdade',
  'As decisões importantes ainda dependem de "quem fala mais alto" na reunião',
  'Cada ponta da operação mede performance de um jeito diferente, impossibilitando comparações',
  'Você sente que está perdendo dinheiro em algum lugar, mas não sabe exatamente onde',
  'Você quer crescer com previsibilidade, não com sorte',
];

const diagnosticBenefits = [
  'Onde estão os principais gargalos de dados e decisão na sua empresa',
  'Quais oportunidades de ganho rápido (quick wins) já podem ser ativadas',
  'Se — e como — o Sistema S1 se encaixa no seu momento atual',
];

export default function TargetAudience() {
  return (
    <section className="py-16 bg-slate-950 text-white px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* ================= 7. PARA QUEM É ================= */}
        <div className="space-y-6">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full">
            PARA QUEM CONSTRUÍMOS O SISTEMA S1
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
            Para empresas que já cresceram e não podem mais crescer no achismo.
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl">
            O Sistema S1 foi feito para qualquer operação em que uma decisão errada custa caro — seja em vendedores, canais, produtos, unidades ou áreas.
          </p>

          {/* Bullets de Qualificação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {qualificationCriteria.map((criterion, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-sm text-gray-300">
                <span className="text-blue-400 font-bold mt-0.5">✓</span>
                <span>{criterion}</span>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold text-blue-400 italic">
            Se pelo menos duas dessas frases soaram familiares, o próximo passo é simples.
          </p>
        </div>
      </div>
    </section>
  );
}