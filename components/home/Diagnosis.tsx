import React from 'react';

const deliverables = [
  {
    number: '01',
    title: 'Mapeamento de Gargalos',
    description: 'Identificamos onde estão os gargalos de dados e as falhas de tomada de decisão na sua operação atual.'
  },
  {
    number: '02',
    title: 'Oportunidades de Quick Wins',
    description: 'Encontramos ganhos rápidos que já podem ser ativados para estancar perdas ou acelerar resultados imediatamente.'
  },
  {
    number: '03',
    title: 'Plano de Encaixe do Sistema S1',
    description: 'Avaliamos se — e como — a metodologia S1 se aplica ao seu momento de negócio, de forma objetiva.'
  }
];

export default function Diagnosis() {
  return (
    <section id="diagnostico" className="py-20 bg-slate-950 text-white px-4 border-t border-slate-800 relative overflow-hidden">
      {/* Elemento de iluminação/glow ao fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            O PRIMEIRO PASSO
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Tudo começa com um Diagnóstico.
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Antes de qualquer proposta ou contrato, a S1 entende sua operação de verdade. É a etapa <strong className="text-blue-400">"D" do Ciclo DECIDE</strong> acontecendo com você, na prática.
          </p>
        </div>

        {/* Card de Entregáveis / O que você vai descobrir */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-xl space-y-3 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-blue-500 font-mono block">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Ação / Form / CTA */}
        <div className="p-8 md:p-10 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-6 max-w-3xl mx-auto shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              Pronto para parar de decidir no achismo?
            </h3>
            <p className="text-sm text-gray-400">
              Uma conversa objetiva sobre onde você está e onde sua empresa poderia estar.
            </p>
          </div>

          <div className="pt-2 flex flex-col items-center gap-3">
            <a
              href="#contato" // ou o link do Typeform/Calendly
              className="w-full sm:w-auto px-8 py-4 bg-[#0A84FF] hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all text-lg"
            >
              Quero meu Diagnóstico S1
            </a>
            <span className="text-xs text-gray-400 font-medium">
              ⚡ 20 minutos. Sem compromisso. Só clareza.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}