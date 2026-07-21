import SystemPreview from "./SystemPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#08111F]">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full bg-[#0A84FF]/10 blur-[220px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-20 px-8 py-24 lg:grid-cols-[1.05fr_.95fr]">

        {/* Texto */}
        <div className="max-w-xl">

          <span className="inline-flex items-center rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-5 py-2 text-sm font-medium text-[#49A6FF] backdrop-blur">
            Sistema S1® • Performance Orientada por Dados
          </span>

          <h1 className="mt-8 text-[58px] font-bold leading-[1] tracking-[-0.04em] text-white">

            Sua empresa
            <br />

            já gera
            <span className="text-[#0A84FF]">
              {" "}dados.
            </span>

            <br />
            <br />

            O Sistema S1
            <br />

            transforma isso
            <br />

            em decisões.

          </h1>

          <p className="mt-8 text-lg leading-8 text-white/65">

            Implementamos um sistema de performance orientado por dados
            utilizando o <strong className="text-white">Ciclo DECIDE®</strong>,
            conectando pessoas, processos e tecnologia para gerar decisões
            mais inteligentes e crescimento previsível.

          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-xl bg-[#0A84FF] px-8 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#1C90FF]">
              Agendar Diagnóstico
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
              Conhecer o Sistema
            </button>

          </div>

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "BI",
              "RevOps",
              "IA",
              "Automações",
              "Dashboards",
              "Integrações",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* Preview */}

        <div className="flex justify-center lg:justify-end">

          <div
            className="origin-center scale-[0.82]"
            style={{
              transform:
                "perspective(1800px) rotateY(-10deg) rotateX(4deg) scale(.82)",
            }}
          >
            <SystemPreview />
          </div>

        </div>

      </div>

    </section>
  );
}