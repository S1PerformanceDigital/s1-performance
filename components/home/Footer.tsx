export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08111F]">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-8 py-10 text-center lg:flex-row lg:text-left">

        <div>

          <h3 className="text-2xl font-bold tracking-tight text-white">
            S1
          </h3>

          <p className="mt-3 max-w-md text-white/50">
            Sistema de Performance Orientada por Dados para empresas que querem
            crescer com previsibilidade.
          </p>

        </div>

        <div className="text-center lg:text-right">

          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            Contato
          </p>

          <a
            href="mailto:contato@s1performance.com.br"
            className="mt-3 block text-lg text-white transition hover:text-[#49A6FF]"
          >
            s1performancedigital@gmail.com
          </a>

          <p className="mt-6 text-sm text-white/30">
            © {new Date().getFullYear()} S1 Performance Digital.
            <br />
            Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  );
}