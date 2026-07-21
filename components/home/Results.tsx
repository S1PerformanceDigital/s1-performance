const results = [
  {
    value: "+38%",
    title: "Eficiência Operacional",
    description:
      "Menos tempo procurando informações e mais tempo tomando decisões.",
  },
  {
    value: "-62%",
    title: "Retrabalho",
    description:
      "Processos automatizados reduzem atividades repetitivas e erros.",
  },
  {
    value: "100%",
    title: "Visão Integrada",
    description:
      "Marketing, vendas, financeiro e operação trabalhando com os mesmos dados.",
  },
  {
    value: "24/7",
    title: "Monitoramento",
    description:
      "Indicadores disponíveis em tempo real para toda a liderança.",
  },
];

export default function Results() {
  return (
    <section className="bg-[#08111F] py-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-5 py-2 text-sm font-medium text-[#49A6FF]">
            O resultado da implantação
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
            Quando todos os dados
            <span className="block text-[#0A84FF]">
              trabalham juntos,
            </span>

            sua empresa evolui mais rápido.
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/60">
            O Sistema S1® elimina silos de informação e transforma dados em uma
            vantagem competitiva para toda a empresa.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {results.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#0A84FF]/30 hover:bg-white/[0.08]"
            >

              <span className="text-6xl font-bold tracking-tight text-[#49A6FF]">
                {item.value}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-lg leading-8 text-white/60">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}