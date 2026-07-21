export default function SystemPreview() {
  const insights = [
    {
      title: "Maior Gargalo",
      value: "Tempo de resposta",
      status: "-18%",
    },
    {
      title: "Próxima Prioridade",
      value: "Qualificação CRM",
      status: "Alta",
    },
    {
      title: "Health Score",
      value: "91%",
      status: "Excelente",
    },
    {
      title: "IA S1",
      value: "3 Insights",
      status: "Novo",
    },
  ];

  return (
    <div className="relative">

      <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#0A84FF]/20 blur-[180px]" />

      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111C2E]/95 backdrop-blur-xl shadow-2xl">

        {/* Header */}

        <div className="border-b border-white/10 p-6">

          <div className="flex items-center justify-between">

            <div>

              <span className="text-xs uppercase tracking-[0.35em] text-[#0A84FF]">
                Sistema S1
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Painel Estratégico
              </h2>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">

              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-xs text-emerald-400 font-semibold">
                Operação Online
              </span>

            </div>

          </div>

        </div>

        {/* Ciclo Decide */}

        <div className="p-6">

          <div className="rounded-2xl border border-[#0A84FF]/20 bg-[#0A84FF]/5 p-5">

            <div className="flex justify-between">

              <div>

                <p className="text-xs uppercase tracking-widest text-[#49A6FF]">
                  Ciclo DECIDE
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  Interpretar
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  A IA identificou oportunidades para aumentar a conversão da
                  operação.
                </p>

              </div>

              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0A84FF]/15 border border-[#0A84FF]/20 text-[#0A84FF] font-bold text-lg">

                67%

              </div>

            </div>

            <div className="mt-5 h-2 rounded-full bg-white/10">

              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#0A84FF] to-[#58B8FF]" />

            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-4 px-6">

          {insights.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >

              <p className="text-xs uppercase tracking-wide text-slate-500">
                {item.title}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.value}
              </h3>

              <span className="mt-3 inline-flex rounded-full bg-[#0A84FF]/10 px-2 py-1 text-xs text-[#49A6FF]">
                {item.status}
              </span>

            </div>

          ))}

        </div>

        {/* IA */}

        <div className="p-6">

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">

            <div className="flex items-center gap-3">

              <div className="h-10 w-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">

                🤖

              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  Insight da IA
                </p>

                <p className="text-xs text-slate-400">
                  Detectamos uma queda de 12% na conversão após o aumento do
                  tempo médio de resposta comercial.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}