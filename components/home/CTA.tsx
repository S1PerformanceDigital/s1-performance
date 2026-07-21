export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B1326] py-32">

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0A84FF]/15 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 px-10 py-20 text-center backdrop-blur-xl">

        <span className="rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/10 px-5 py-2 text-sm font-medium text-[#49A6FF]">
          Próximo passo
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
          Vamos implantar o
          <span className="block text-[#0A84FF]">
            Sistema S1®
          </span>

          na sua empresa.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-white/60">
          Agende um diagnóstico estratégico e descubra como transformar dados,
          processos e tecnologia em um sistema de gestão orientado por decisões.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-xl bg-[#0A84FF] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#2394ff]">
            Agendar Diagnóstico
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
            Conhecer o Sistema
          </button>

        </div>

      </div>

    </section>
  );
}