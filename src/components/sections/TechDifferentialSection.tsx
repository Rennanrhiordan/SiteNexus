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
    title: "Arquitetura Limpa",
    desc: "SOLID, DDD e Clean Architecture como base. Código que evolui sem acumular dívida técnica.",
    color: "blue",
  },
  {
    icon: Lock,
    title: "Segurança por Design",
    desc: "Autenticação JWT/OAuth 2.0, criptografia em repouso e em trânsito, OWASP Top 10 mitigado.",
    color: "violet",
  },
  {
    icon: GitBranch,
    title: "APIs Robustas",
    desc: "REST e GraphQL versionadas, documentação OpenAPI, rate limiting e circuit breakers nativos.",
    color: "cyan",
  },
  {
    icon: ServerCog,
    title: "Infraestrutura Cloud",
    desc: "IaC com Terraform, CI/CD automatizado, auto-scaling e monitoramento 24/7 com alertas.",
    color: "blue",
  },
  {
    icon: TestTube,
    title: "Testes & Qualidade",
    desc: "Cobertura 80%+ com unit, integration e e2e tests. Pipelines que garantem zero regressão.",
    color: "violet",
  },
  {
    icon: Zap,
    title: "Performance Obsessiva",
    desc: "Otimizações de banco, caching inteligente com Redis e Web Vitals como KPIs de produto.",
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
            Engenharia de Software{" "}
            <span className="text-gradient">de verdade.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed">
            Não vendemos horas. Vendemos responsabilidade técnica. Cada linha de código
            segue princípios que garantem que seu sistema rode em produção com confiança —
            hoje e daqui a 5 anos.
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
