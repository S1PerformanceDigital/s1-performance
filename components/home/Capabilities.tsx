const capabilities = [
  "Business Intelligence",
  "RevOps",
  "Inteligência Artificial",
  "Automações",
  "Integrações",
  "Dashboards Estratégicos",
];

const benefits = [
  "Todos os sistemas conectados",
  "Uma única fonte da verdade",
  "Decisões orientadas por dados",
  "Escalabilidade com previsibilidade",
];

export default function Capabilities() {
  return (
    <section className="bg-[#0B1326] py-32">

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

        {/* Esquerda */}

        <div>

          <span className="rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-5 py-2 text-sm font-medium text-[#49A6FF]">
            Capacidades do Sistema
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
            Não entregamos
            <span className="block text-[#0A84FF]">
              ferramentas.
            </span>

            Implementamos um sistema completo de performance.
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/60">
            Business Intelligence, IA, RevOps, integrações e automações fazem
            parte do Sistema S1®. Cada componente trabalha em conjunto para
            transformar dados em decisões consistentes.
          </p>

          <div className="mt-12 space-y-5">

            {benefits.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  ✓
                </div>

                <span className="text-lg text-white/80">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Direita */}

        <div className="relative flex items-center justify-center">

          <div className="absolute h-[440px] w-[440px] rounded-full bg-[#0A84FF]/10 blur-[120px]" />

          <div className="relative h-[420px] w-[420px]">

            {/* Centro */}

            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-[#0A84FF]/30 bg-[#0A84FF]/10 backdrop-blur-xl">

              <div className="text-center">

                <p className="text-xs uppercase tracking-[0.3em] text-[#49A6FF]">
                  Sistema
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  S1
                </h3>

              </div>

            </div>

            {[
              { x: "50%", y: "0%" },
              { x: "100%", y: "50%" },
              { x: "50%", y: "100%" },
              { x: "0%", y: "50%" },
              { x: "18%", y: "18%" },
              { x: "82%", y: "82%" },
            ].map((pos, index) => (

              <div
                key={capabilities[index]}
                className="absolute"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-[#0A84FF]/30 hover:bg-white/10">

                  <span className="text-sm font-medium text-white">
                    {capabilities[index]}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}