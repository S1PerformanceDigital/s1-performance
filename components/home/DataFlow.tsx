import React from "react";

export default function DataFlow() {
  const tools = [
    "CRM",
    "ERP",
    "WhatsApp",
    "Meta Ads",
    "Google Ads",
    "Financeiro",
    "Planilhas",
    "E-commerce",
  ];

  const metrics = [
    {
      title: "Health Score",
      value: "91",
      subtitle: "Excelente",
    },
    {
      title: "Conversão",
      value: "+24%",
      subtitle: "Últimos 30 dias",
    },
    {
      title: "IA S1",
      value: "3",
      subtitle: "Insights ativos",
    },
    {
      title: "Alertas",
      value: "2",
      subtitle: "Prioridades",
    },
  ];

  return (
    <section
      id="problema"
      className="relative overflow-hidden border-t border-white/5 bg-[#090F1E] py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,132,255,.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0A84FF]">
            Conectando toda a operação
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Sua operação já possui
            <br />
            <span className="text-[#0A84FF]">
              todas as respostas.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            O problema é que elas estão espalhadas entre diferentes sistemas,
            planilhas e equipes. O Sistema S1 conecta tudo isso em um único
            Centro de Decisão.
          </p>
        </div>

        {/* Fluxo */}

        <div className="mt-24 grid items-center gap-10 lg:grid-cols-3">
          {/* Operação Fragmentada */}

          <div className="rounded-[30px] border border-white/10 bg-[#111C2E]/60 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                Operação Fragmentada
              </h3>

              <div className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                Antes
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-white transition hover:border-[#0A84FF]/40 hover:bg-[#0A84FF]/10"
                >
                  {tool}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-red-500/10 bg-red-500/5 p-5">
              <p className="text-sm leading-7 text-slate-400">
                Cada sistema possui uma parte da informação. Nenhum deles
                apresenta uma visão completa da operação.
              </p>
            </div>
          </div>

          {/* Sistema */}

          <div className="relative flex flex-col items-center">
            <div className="absolute h-80 w-80 rounded-full bg-[#0A84FF]/20 blur-[140px]" />

            <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/10 shadow-[0_0_80px_rgba(10,132,255,.25)]">
              <span className="text-xs uppercase tracking-[0.35em] text-[#0A84FF]">
                Sistema
              </span>

              <h3 className="mt-2 text-5xl font-black text-white">
                S1
              </h3>

              <p className="mt-5 max-w-[160px] text-center text-sm leading-6 text-slate-300">
                Conecta dados.
                <br />
                Gera decisões.
              </p>
            </div>

            <div className="mt-10 max-w-xs text-center text-sm leading-7 text-slate-400">
              Pessoas, processos, tecnologia e Inteligência Artificial
              trabalhando em conjunto para transformar informações em decisões
              estratégicas.
            </div>
          </div>

          {/* Centro de Decisão */}

          <div className="rounded-[30px] border border-[#0A84FF]/20 bg-[#111C2E]/70 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                Centro de Decisão
              </h3>

              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Depois
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {metrics.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-[#49A6FF]">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#0A84FF]/20 bg-[#0A84FF]/10 p-6">
              <p className="text-sm font-semibold text-white">
                Resultado
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Toda a empresa passa a trabalhar com os mesmos indicadores,
                prioridades e objetivos. As decisões deixam de ser baseadas em
                percepção e passam a ser orientadas por dados.
              </p>
            </div>
          </div>
        </div>

        {/* Benefícios */}

        <div className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
          <div className="grid gap-8 md:grid-cols-5">
            {[
              "Visão única da operação",
              "Indicadores em tempo real",
              "Integrações automáticas",
              "IA analisando todo o negócio",
              "Ciclo DECIDE guiando prioridades",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A84FF]/15 text-[#0A84FF]">
                  ✓
                </div>

                <span className="text-sm leading-6 text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}