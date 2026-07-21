export default function Problems() {
  return (
    <section className="bg-[#08111F] py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400">
            O problema
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white leading-tight">
            Empresas que tomam decisões
            <br />
            baseadas em <span className="text-red-400">opinião</span>
            <br />
            crescem por acaso.
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/70">
            Sem indicadores confiáveis, gestores acabam decidindo com base em
            feeling, experiência ou achismos. O resultado é desperdício de
            dinheiro, baixa previsibilidade e crescimento inconsistente.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 text-4xl">📉</div>

            <h3 className="text-2xl font-semibold text-white">
              Decisões no escuro
            </h3>

            <p className="mt-4 leading-8 text-white/60">
              Sem métricas claras, cada decisão aumenta o risco do negócio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 text-4xl">💸</div>

            <h3 className="text-2xl font-semibold text-white">
              Investimentos desperdiçados
            </h3>

            <p className="mt-4 leading-8 text-white/60">
              Marketing, vendas e operação consomem recursos sem gerar o retorno esperado.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 text-4xl">📊</div>

            <h3 className="text-2xl font-semibold text-white">
              Falta de previsibilidade
            </h3>

            <p className="mt-4 leading-8 text-white/60">
              Crescimento depende da sorte, e não de um processo baseado em dados.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}