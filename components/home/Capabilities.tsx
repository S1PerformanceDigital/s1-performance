import React from 'react';

const values = [
  {
    title: 'Foco em resultado',
    description: 'Cada etapa do Ciclo DECIDE existe para gerar impacto mensurável, não relatório de prateleira.',
    tag: 'DADOS'
  },
  {
    title: 'Decisões com inteligência',
    description: 'Dados só importam quando viram ação prática no dia a dia.',
    tag: 'INTELIGÊNCIA'
  },
  {
    title: 'Transparência e confiança',
    description: 'Você acompanha o ciclo em tempo real, sem promessas vagas ou "confia em mim".',
    tag: 'DECISÕES'
  },
  {
    title: 'Inovação contínua',
    description: 'O ciclo não para, porque o mercado e sua empresa também não param.',
    tag: 'CRESCIMENTO'
  },
  {
    title: 'Parceria de verdade',
    description: 'Aceleramos o crescimento dos nossos clientes como se fosse o nosso próprio negócio.',
    tag: 'SISTEMA S1'
  }
];

export default function Capabilities() {
  return (
    <section className="py-16 bg-slate-900 text-white px-4 border-t border-slate-800" id="porque-s1">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full">
            POR QUE A S1
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Somos analíticos, inquietos e movidos por performance.
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            Unimos estratégia, dados e tecnologia para transformar negócios — com um método claro, não com promessa vaga de "transformação digital".
          </p>
        </div>

        {/* Grid de Valores / Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-5 bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 rounded-xl transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase bg-slate-900 px-2 py-0.5 rounded border border-slate-800 inline-block mb-3">
                  {value.tag}
                </span>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}