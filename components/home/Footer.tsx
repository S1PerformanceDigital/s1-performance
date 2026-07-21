import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Bloco Superior: Logo/Propósito e Links Rápidos */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-slate-800/60">
          
          {/* Identidade e Propósito */}
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-wider text-white">S1</span>
              <span className="text-xs text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                PERFORMANCE
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Acelerar empresas através de dados, inteligência e execução.
            </p>
          </div>

          {/* Payoff da Marca */}
          <div className="text-xs font-mono tracking-widest text-gray-400 uppercase flex flex-wrap gap-2 md:gap-3">
            <span>DADOS</span>
            <span className="text-blue-500">·</span>
            <span>INTELIGÊNCIA</span>
            <span className="text-blue-500">·</span>
            <span>DECISÕES</span>
            <span className="text-blue-500">·</span>
            <span>CRESCIMENTO</span>
          </div>

        </div>

        {/* Bloco Inferior: Direitos Autorais e Créditos */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            © {currentYear} S1 Performance Digital. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="#diagnostico" className="hover:text-gray-300 transition-colors">
              Diagnóstico
            </a>
            <a href="#faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </a>
            <a href="#contato" className="hover:text-gray-300 transition-colors">
              Contato
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}