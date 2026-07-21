const sources = [
  "Meta Ads",
  "Google Ads",
  "CRM",
  "ERP",
  "Financeiro",
  "Comercial",
  "Marketplace",
  "WhatsApp",
  "IA",
];

export default function DataFlow() {
  return (
    <section className="relative overflow-hidden bg-[#0B1326] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-5 py-2 text-sm font-medium text-[#49A6FF]">
            O desafio das empresas
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">

            Toda empresa gera
            <span className="block text-[#0A84FF]">
              dados.
            </span>

            <span className="mt-4 block">
              Poucas conseguem transformá-los em decisões.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/60">
            Informações espalhadas geram retrabalho, desperdício e decisões
            lentas. O Sistema S1 organiza tudo isso em uma única visão para que
            sua empresa cresça com previsibilidade.
          </p>

        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">

          {sources.map((source) => (
            <div
              key={source}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/80 transition hover:border-[#0A84FF]/30 hover:bg-white/10"
            >
              {source}
            </div>
          ))}

        </div>

        <div className="mt-16 flex flex-col items-center">

          <div className="text-5xl text-[#0A84FF]">
            ↓
          </div>

          <div className="mt-6 rounded-3xl border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-10 py-8">

            <p className="text-sm uppercase tracking-[0.3em] text-[#49A6FF]">
              Sistema S1®
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Ciclo DECIDE®
            </h3>

          </div>

          <div className="mt-6 text-5xl text-[#0A84FF]">
            ↓
          </div>

          <div className="mt-6 text-center">

            <h3 className="text-4xl font-bold text-white">
              Decisões Inteligentes
            </h3>

            <p className="mt-4 text-lg text-white/60">
              Crescimento previsível começa com decisões baseadas em dados.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}