"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  GitBranch,
  Lock,
  Zap,
  ServerCog,
  TestTube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Tecnologia Escalável",
    desc: "Sistemas que acompanham o crescimento da sua empresa sem precisar de refação. O seu investimento está protegido e pronto para o futuro.",
    color: "blue",
  },
  {
    icon: Lock,
    title: "Segurança e Conformidade",
    desc: "Proteção absoluta de dados e total conformidade com a LGPD. Blinde a reputação da sua empresa contra riscos e vazamentos.",
    color: "violet",
  },
  {
    icon: GitBranch,
    title: "Conexão e Automação",
    desc: "Conectamos sua IA com WhatsApp, CRMs e bancos de dados. Automatize tarefas manuais, reduza custos operacionais e venda no piloto automático.",
    color: "cyan",
  },
  {
    icon: ServerCog,
    title: "Estabilidade Garantida",
    desc: "Sistemas robustos operando 24/7. Sua empresa sempre de portas abertas para vender e atender, sem quedas ou interrupções.",
    color: "blue",
  },
  {
    icon: TestTube,
    title: "Software de Alta Confiança",
    desc: "Código testado e validado para garantir zero dor de cabeça. Entregamos uma experiência perfeita que retém e fideliza seus usuários.",
    color: "violet",
  },
  {
    icon: Zap,
    title: "Velocidade que Vende",
    desc: "Aplicações ultrarrápidas com carregamento instantâneo. Cada segundo a menos na tela de loading é mais conversão no seu caixa.",
    color: "cyan",
  },
];

const colorClasses: Record<string, { icon: string; border: string; glow: string }> = {
  blue: {
    icon: "text-blue-400 bg-blue-500/10",
    border: "hover:border-blue-500/25",
    glow: "hover:shadow-blue-900/20",
  },
  violet: {
    icon: "text-violet-400 bg-violet-500/10",
    border: "hover:border-violet-500/25",
    glow: "hover:shadow-violet-900/20",
  },
  cyan: {
    icon: "text-cyan-400 bg-cyan-500/10",
    border: "hover:border-cyan-500/25",
    glow: "hover:shadow-cyan-900/20",
  },
};

export function TechDifferentialSection() {
  return (
    <section id="diferenciais" className="relative py-32 px-6">
      {/* BG */}
      <div className="absolute inset-0 ambient-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <Badge variant="blue" className="mb-5">
            Diferencial Técnico
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Tecnologia que{" "}
            <span className="text-gradient">gera resultados.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Não vendemos tecnologia, vendemos crescimento. Nossas soluções são
            construídas para garantir que sua empresa opere com máxima
            eficiência, segurança e escala, hoje e no futuro.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const c = colorClasses[pillar.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group card-glass rounded-xl p-6 border border-white/5 transition-all duration-300 hover:shadow-xl ${c.border} ${c.glow} cursor-default`}
              >
                <div className={`inline-flex p-2.5 rounded-lg ${c.icon} mb-5`}>
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{pillar.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl border border-blue-500/15 bg-gradient-to-r from-blue-950/30 to-violet-950/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                Revisão técnica gratuita do seu sistema atual
              </p>
              <p className="text-white/40 text-sm">
                Identificamos gargalos, débitos técnicos e oportunidades de automação com IA.
              </p>
            </div>
            <button
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar Revisão
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
