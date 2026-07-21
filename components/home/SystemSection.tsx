import React from 'react';

const steps = [
  {
    letter: 'D',
    title: 'Diagnosticar',
    question: 'Onde estamos hoje?',
    description: 'Mergulhamos na operação real da sua empresa. Identificamos gargalos, inconsistências e as primeiras oportunidades de ganho rápido (quick wins).'
  },
  {
    letter: 'E',
    title: 'Estruturar',
    question: 'Estamos preparados para medir?',
    description: 'Organizamos processos, integrações, indicadores e a governança dos dados antes de tomar decisões.'
  },
  {
    letter: 'C',
    title: 'Conectar',
    question: 'Todas as informações estão conversando entre si?',
    description: 'Centralizamos os dados e construímos uma visão única da operação. Fim do "cada área com sua própria verdade".'
  },
  {
    letter: 'I',
    title: 'Interpretar',
    question: 'O que os dados estão nos dizendo?',
    description: 'Transformamos dados em insights. Onde o número vira sentido e as prioridades reais ficam evidentes.'
  },
  {
    letter: 'D',
    title: 'Decidir',
    question: 'Qual é a próxima decisão que mais gera impacto?',
    description: 'Definimos ações, responsáveis e metas com base em evidências. Decisão com dono e prazo.'
  },
  {
    letter: 'E',
    title: 'Evoluir',
    question: 'O que aprendemos e qual é o próximo nível?',
    description: 'Executamos, validamos os resultados e iniciamos um novo ciclo. Performance é ritmo.'
  }
];

export default function SystemSection() {
  return (
    <section className="py-20 bg-slate-900 text-white px-4" id="ciclo">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">A METODOLOGIA S1</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Conheça o Ciclo DECIDE</h2>
          <p className="mt-4 text-gray-400">
            Seis etapas. Um ciclo contínuo. Resultado desde o primeiro passo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl relative">
              <span className="text-4xl font-black text-blue-500/30 absolute top-4 right-4">{step.letter}</span>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm text-blue-400 italic my-2">{step.question}</p>
              <p className="text-gray-300 text-sm mt-3">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <blockquote className="text-xl font-semibold text-gray-200 italic">
            "O Sistema S1 existe para que sua empresa DECIDA com confiança."
          </blockquote>
        </div>
      </div>
    </section>
  );
}