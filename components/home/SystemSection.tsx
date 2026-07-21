const steps = [
  {
    letter: "D",
    title: "Diagnosticar",
    description:
      "Entendemos o cenário atual da empresa e identificamos os principais gargalos.",
  },
  {
    letter: "E",
    title: "Estruturar",
    description:
      "Organizamos indicadores, processos e metas para criar uma base sólida.",
  },
  {
    letter: "C",
    title: "Conectar",
    description:
      "Integramos todas as fontes de dados em um único ecossistema.",
  },
  {
    letter: "I",
    title: "Interpretar",
    description:
      "Transformamos dados em insights acionáveis para a gestão.",
  },
  {
    letter: "D",
    title: "Decidir",
    description:
      "Apoiamos decisões com clareza, previsibilidade e prioridade.",
  },
  {
    letter: "E",
    title: "Evoluir",
    description:
      "Medimos resultados e refinamos continuamente o sistema.",
  },
];

export default function SystemSection() {
  return (
    <section className="bg-[#08111F] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-5 py-2 text-sm font-medium text-[#49A6FF]">
            Sistema S1®
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
            Um sistema para transformar
            <span className="block text-[#0A84FF]">
              dados em decisões.
            </span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/60">
            O Sistema S1 é implantado dentro da operação da empresa e segue um
            processo contínuo de evolução chamado <strong className="text-white">Ciclo DECIDE®</strong>.
          </p>

        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {steps.map((step) => (

            <div
              key={step.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0A84FF]/30 hover:bg-white/[0.07]"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A84FF]/10 text-2xl font-bold text-[#49A6FF]">
                {step.letter}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-white/60">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}