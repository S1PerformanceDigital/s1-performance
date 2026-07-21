import React from "react";

export default function Capabilities() {
  const pillars = [
    {
      title: "Diagnóstico",
      desc: "Mapeamos processos, pessoas, sistemas e indicadores para entender a operação como um todo.",
    },
    {
      title: "Integração",
      desc: "Conectamos CRM, ERP, Marketing, Financeiro e demais ferramentas em uma única estrutura.",
    },
    {
      title: "Indicadores",
      desc: "Criamos métricas e dashboards que mostram exatamente onde agir e como medir resultados.",
    },
    {
      title: "Automações",
      desc: "Eliminamos tarefas repetitivas para aumentar produtividade e reduzir erros operacionais.",
    },
  ];

  return (
    <section
      id="tecnologia"
      className="py-24 bg-[#090F1E] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}

          <div>

            <span className="text-xs uppercase tracking-[0.35em] text-[#0A84FF] font-semibold">
              Sistema S1
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white leading-tight">
              Muito além de dashboards
              <span className="text-[#0A84FF]"> e integrações.</span>
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Mais do que implantar ferramentas, estruturamos a forma como sua
              empresa opera, mede resultados e toma decisões. O Sistema S1 reúne
              tudo o que é necessário para transformar uma operação fragmentada
              em uma operação orientada por dados.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">

              {pillars.map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.desc}
                  </p>
                </div>

              ))}

            </div>

          </div>

          {/* Arquitetura */}

          <div className="rounded-3xl border border-white/10 bg-[#111C2E] p-8 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-[#0A84FF]/10 blur-3xl rounded-full" />

            <h3 className="text-white text-xl font-bold">
              Como o Sistema S1 atua
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Centralizando toda a operação em um único fluxo de gestão.
            </p>

            <div className="mt-10 space-y-6">

              <div className="grid grid-cols-3 gap-3">

                {[
                  "CRM",
                  "ERP",
                  "Marketing",
                  "Financeiro",
                  "Atendimento",
                  "E-commerce",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm text-white"
                  >
                    {item}
                  </div>

                ))}

              </div>

              <div className="flex justify-center text-[#0A84FF] text-3xl">
                ↓
              </div>

              <div className="rounded-2xl border border-[#0A84FF]/30 bg-[#0A84FF]/10 p-6 text-center">

                <p className="text-xs uppercase tracking-[0.3em] text-[#0A84FF]">
                  Sistema S1
                </p>

                <h4 className="mt-3 text-2xl font-bold text-white">
                  Centro de Decisão
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Processos, indicadores, integrações e metodologia trabalhando
                  juntos para apoiar decisões estratégicas.
                </p>

              </div>

              <div className="flex justify-center text-[#0A84FF] text-3xl">
                ↓
              </div>

              <div className="grid grid-cols-2 gap-3">

                {[
                  "Dashboards",
                  "KPIs",
                  "Ciclo DECIDE",
                  "Performance",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 py-3 text-center text-sm text-emerald-300"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}