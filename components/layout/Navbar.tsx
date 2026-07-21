import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#08111F]/70 px-6 py-4 backdrop-blur-2xl">

        {/* Logo */}
        <a href="#" className="flex items-center gap-4">
          <Image
            src="/logo-s1.png"
            alt="S1 Performance"
            width={46}
            height={46}
            priority
          />

          <div className="leading-tight">
            <h2 className="text-lg font-semibold text-white">
              S1 Performance
            </h2>

            <p className="text-sm text-white/55">
              Transformação Digital
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#metodo"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Método
          </a>

          <a
            href="#servicos"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Serviços
          </a>

          <a
            href="#cases"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Cases
          </a>

          <a
            href="#contato"
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Contato
          </a>
        </nav>

        {/* CTA */}
        <button className="group flex items-center gap-2 rounded-xl bg-[#0A84FF] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#2494ff] hover:shadow-[0_0_35px_rgba(10,132,255,.45)]">
          Agendar Diagnóstico

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </header>
  );
}