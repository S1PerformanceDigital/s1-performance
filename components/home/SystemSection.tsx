import React from "react";

export default function SystemSection() {
  const steps = [
    {
      number: "01",
      letter: "D",
      title: "Diagnosticar",
      desc: "Mapeamos processos, identificamos gargalos e executamos Quick Wins.",
    },
    {
      number: "02",
      letter: "E",
      title: "Estruturar",
      desc: "Organizamos indicadores, metas e processos para criar uma base sólida.",
    },
    {
      number: "03",
      letter: "C",
      title: "Conectar",
      desc: "Integramos todos os sistemas em uma única fonte confiável.",
    },
    {
      number: "04",
      letter: "I",
      title: "Interpretar",
      desc: "Transformamos indicadores em inteligência para apoiar decisões.",
    },
    {
      number: "05",
      letter: "D",
      title: "Decidir",
      desc: "Definimos prioridades e planos de ação baseados em evidências.",
    },
    {
      number: "06",
      letter: "E",
      title: "Evoluir",
      desc: "Acompanhamos resultados e melhoramos continuamente a operação.",
    },
  ];

  return (
    <section
      id="ciclo"
      className="relative overflow-hidden border-t border-white/5 bg-[#0B1326] py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,132,255,.08),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-xs uppercase tracking-[0.35em] text-[#0A84FF] font-semibold">
            Método Proprietário
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
            O método por trás
            <br />
            do <span className="text-[#0A84FF]">Sistema S1</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            O Ciclo DECIDE transforma dados em decisões através de um processo
            contínuo de evolução da operação.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {steps.map((step) => (

            <div
              key={step.title}
              className="group rounded-[28px] border border-white/10 bg-[#111C2E]/70 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#0A84FF]/40"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs tracking-[0.3em] text-slate-500">
                  {step.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A84FF]/15 text-xl font-bold text-[#0A84FF]">
                  {step.letter}
                </div>

              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-center">

          {["Dados", "Clareza", "Decisão", "Execução", "Performance"].map(
            (item, index) => (
              <React.Fragment key={item}>
                <div className="rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-5 py-3 text-sm font-medium text-white">
                  {item}
                </div>

                {index < 4 && (
                  <span className="text-[#0A84FF] text-xl">→</span>
                )}
              </React.Fragment>
            )
          )}

        </div>

        <div className="mt-20 rounded-[32px] border border-[#0A84FF]/20 bg-gradient-to-br from-[#111C2E] to-[#0B1326] p-10 text-center">

          <span className="text-xs uppercase tracking-[0.35em] text-[#0A84FF]">
            Filosofia S1
          </span>

          <h3 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-white">
            Toda empresa gera dados.
            <br />
            <span className="text-[#0A84FF]">
              Poucas sabem transformá-los em crescimento.
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            O Ciclo DECIDE conecta pessoas, processos, tecnologia e Inteligência
            Artificial para transformar dados em clareza, clareza em decisões e
            decisões em performance.
          </p>

        </div>

      </div>
    </section>
  );
}