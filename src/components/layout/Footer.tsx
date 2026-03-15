"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Linkedin, Zap, ArrowUpRight } from "lucide-react";

const links = {
  services: [
    { label: "Agentes de IA", href: "#servicos" },
    { label: "Sistemas Web", href: "#servicos" },
    { label: "Apps Mobile", href: "#servicos" },
  ],
  company: [
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Demo IA", href: "#ia-demo" },
    { label: "Contato", href: "#contato" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap size={16} className="text-white fill-white" />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Nexus<span className="text-gradient">Core</span>
              </span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Software House especializada em Engenharia Avançada, Inteligência Artificial e
              sistemas que escalam com o seu negócio.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                {
                  icon: Instagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:contato@nexuscore.dev",
                  label: "E-mail",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/8 bg-white/3 flex items-center justify-center text-white/40 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links: services */}
          <div>
            <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Serviços
            </div>
            <ul className="space-y-3">
              {links.services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    {label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: company */}
          <div>
            <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Empresa
            </div>
            <ul className="space-y-3">
              {links.company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    {label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:contato@nexuscore.dev"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  contato@nexuscore.dev
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} NexusCore Engenharia de Software. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {["Privacidade", "Termos"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/20 text-xs hover:text-white/40 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
