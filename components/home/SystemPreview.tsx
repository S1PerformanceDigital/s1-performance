export default function SystemPreview() {
  const metrics = [
    {
      title: "Receita",
      value: "R$ 2,48M",
      change: "+23%",
    },
    {
      title: "Conversão",
      value: "24,6%",
      change: "+8%",
    },
    {
      title: "ROI",
      value: "5.8x",
      change: "+31%",
    },
    {
      title: "Eficiência",
      value: "91%",
      change: "+5%",
    },
  ];

  return (
    <div className="relative">

      <div className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-[#0A84FF]/20 blur-[160px]" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111C2E]/90 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0A84FF]/30">

        {/* Header */}

        <div className="border-b border-white/10 px-6 py-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#0A84FF]">
                Sistema S1®
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white">
                Painel Estratégico
              </h2>

            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5">

              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-xs font-medium text-emerald-400">
                Online
              </span>

            </div>

          </div>

        </div>

        {/* Ciclo */}

        <div className="px-6 pt-6">

          <div className="rounded-2xl border border-[#0A84FF]/15 bg-[#0A84FF]/5 p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs uppercase tracking-widest text-[#49A6FF]">
                  Ciclo DECIDE®
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  Interpretar
                </h3>

                <p className="mt-1 text-sm text-white/50">
                  Transformando dados em insights estratégicos.
                </p>

              </div>

              <div className="rounded-full bg-[#0A84FF]/15 px-3 py-2 text-sm font-medium text-[#49A6FF]">
                67%
              </div>

            </div>

            <div className="mt-5 h-2 rounded-full bg-white/10">

              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#0A84FF] to-[#53B4FF]" />

            </div>

          </div>

        </div>

        {/* Indicadores */}

        <div className="grid grid-cols-2 gap-3 p-6">

          {metrics.map((metric) => (

            <div
              key={metric.title}
              className="rounded-2xl border border-white/5 bg-white/5 p-4"
            >

              <p className="text-xs uppercase tracking-wide text-white/50">
                {metric.title}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {metric.value}
              </h3>

              <span className="mt-2 inline-block text-sm font-medium text-emerald-400">
                {metric.change}
              </span>

            </div>

          ))}

        </div>

        {/* Chart */}

        <div className="px-6 pb-6">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-white/60">
              Performance
            </span>

            <span className="text-sm text-emerald-400">
              +23%
            </span>

          </div>

          <div className="relative flex h-32 items-end gap-2 overflow-hidden rounded-2xl bg-white/5 p-4">

            {[22, 35, 28, 46, 55, 68, 88].map((height, index) => (

              <div
                key={index}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-[#0A84FF] to-[#5AB8FF]"
                style={{
                  height: `${height}%`,
                }}
              />

            ))}

            <div className="absolute left-4 right-4 top-1/2 border-t border-dashed border-white/10" />

          </div>

        </div>

      </div>

    </div>
  );
}