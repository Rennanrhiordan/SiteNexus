"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Globe,
  Smartphone,
  ArrowUpRight,
  Webhook,
  BarChart3,
  Palette,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Bot,
    accentColor: "blue",
    badge: "IA & Automação",
    title: "Agentes de IA & Automação Inteligente",
    description:
      "Agentes conversacionais com suporte humanizado 24/7, fluxos de automação complexos e integração com qualquer API ou sistema legado da sua empresa.",
    features: [
      { icon: Webhook, text: "Integração via REST, GraphQL & Webhooks" },
      { icon: Bot, text: "Agentes com memória e raciocínio contextual" },
    ],
    gradient: "from-blue-600/20 to-blue-900/5",
    borderHover: "hover:border-blue-500/30",
    glow: "group-hover:shadow-blue-900/30",
    tags: ["LLMs", "RAG", "OpenAI", "Langchain"],
  },
  {
    icon: Globe,
    accentColor: "violet",
    badge: "Web & Sistemas",
    title: "Sistemas Web & Software Sob Medida",
    description:
      "Plataformas SaaS, ERPs e dashboards analíticos construídos com arquitetura limpa, focados em escalabilidade horizontal e zero downtime.",
    features: [
      { icon: BarChart3, text: "Dashboards em tempo real com WebSockets" },
      { icon: Globe, text: "Arquitetura microservices e cloud-native" },
    ],
    gradient: "from-violet-600/20 to-violet-900/5",
    borderHover: "hover:border-violet-500/30",
    glow: "group-hover:shadow-violet-900/30",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    icon: Smartphone,
    accentColor: "cyan",
    badge: "Mobile",
    title: "Aplicativos Mobile iOS & Android",
    description:
      "Apps nativos e cross-platform com UX/UI premium, performance nativa e integrações com sensores, câmera, GPS e serviços em nuvem.",
    features: [
      { icon: Palette, text: "Design System exclusivo e UX pesquisado" },
      { icon: Smartphone, text: "Animações 60fps com Reanimated 3" },
    ],
    gradient: "from-cyan-600/20 to-cyan-900/5",
    borderHover: "hover:border-cyan-500/30",
    glow: "group-hover:shadow-cyan-900/30",
    tags: ["React Native", "Expo", "Swift", "Kotlin"],
  },
];

const colorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10",
  violet: "text-violet-400 bg-violet-500/10",
  cyan: "text-cyan-400 bg-cyan-500/10",
};

const tagColorMap: Record<string, string> = {
  blue: "border-blue-500/20 text-blue-400/70",
  violet: "border-violet-500/20 text-violet-400/70",
  cyan: "border-cyan-500/20 text-cyan-400/70",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ServicesSection() {
  return (
    <section id="servicos" className="relative py-32 px-6">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="violet" className="mb-5">
            O que entregamos
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight">
            Serviços de{" "}
            <span className="text-gradient">alto impacto</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Cada solução é arquitetada do zero para o seu contexto. Nada de templates. Tudo de engenharia.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const iconStyle = colorMap[service.accentColor];
            const tagStyle = tagColorMap[service.accentColor];

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`group relative rounded-2xl border border-white/6 bg-gradient-to-br ${service.gradient} p-8 overflow-hidden cursor-default ${service.borderHover} transition-all duration-500 hover:shadow-2xl ${service.glow}`}
              >
                {/* Top inner glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${iconStyle} mb-6`}>
                  <Icon size={22} />
                </div>

                {/* Badge */}
                <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                  {service.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map(({ icon: FIcon, text }, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <FIcon size={14} className="text-white/30 mt-0.5 shrink-0" />
                      <span className="text-white/50 text-sm">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border ${tagStyle} font-mono`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-white/30" />
                </div>

                {/* Bottom border glow on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
