'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Minha empresa não tem "dados organizados". Isso é um problema?',
    answer: 'Não — é exatamente o ponto de partida do Diagnóstico. A etapa "Estruturar" do Ciclo DECIDE existe justamente para colocar ordem na casa e construir uma base sólida para medir.',
  },
  {
    question: 'Isso é consultoria ou tecnologia?',
    answer: 'É as duas coisas dentro de um sistema só: metodologia (Ciclo DECIDE), governança de dados e execução prática, com decisões e responsáveis definidos.',
  },
  {
    question: 'Quanto tempo até eu ver resultado?',
    answer: 'Os primeiros ganhos (quick wins) já são identificados na etapa de Diagnóstico — antes mesmo do projeto começar oficialmente.',
  },
  {
    question: 'Preciso trocar todas as minhas ferramentas?',
    answer: 'Não necessariamente. Conectamos o que sua empresa já utiliza sempre que possível, substituindo apenas onde houver real ganho de eficiência.',
  },
  {
    question: 'Minha empresa não usa muito "sistema" no dia a dia. O Sistema S1 funciona para mim?',
    answer: 'Sim. Qualquer ponto de contato com o cliente ou com a operação gera dados — de um CRM avançado até planilhas simples de controle. O Diagnóstico serve justamente para mapear o que existe e como conectar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white px-4 border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tire suas dúvidas antes de dar o próximo passo
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Respostas diretas para as principais dúvidas sobre como o Sistema S1 funciona.
          </p>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-base md:text-lg text-white">
                    {faq.question}
                  </span>
                  <span className="text-blue-400 font-bold text-xl flex-shrink-0 transition-transform duration-200">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-300 text-sm md:text-base leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}