"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle, CheckCircle } from "lucide-react";

export function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with your preferred backend/form service
    setSubmitted(true);
  };

  return (
    <section id="contato" className="relative py-32 px-6">
      {/* BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/8 rounded-full blur-[130px]" />
        <div className="absolute inset-0 ambient-grid opacity-15" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Pronto para escalar com{" "}
            <span className="text-gradient">engenharia real?</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Agende uma consultoria técnica de 45 min. Analisamos seu cenário,
            mapeamos as oportunidades e apresentamos um plano de ação concreto — sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: Calendar,
                title: "Sessão de 45 minutos",
                desc: "Chamada de vídeo com um engenheiro sênior dedicado ao seu caso.",
              },
              {
                icon: MessageCircle,
                title: "Análise personalizada",
                desc: "Mapeamento dos seus sistemas, gargalos e oportunidades de IA.",
              },
              {
                icon: CheckCircle,
                title: "Plano de ação",
                desc: "Roadmap técnico com estimativas reais de prazo e investimento.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm mb-1">{title}</div>
                  <div className="text-white/40 text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}

            {/* Social proof */}

          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-white/8 bg-white/2 p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">
                      Nome completo
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="João Silva"
                      className="w-full bg-white/4 rounded-xl px-4 py-3 text-sm text-gray-400 placeholder:text-gray-500 border border-white/8 focus:outline-none focus:border-blue-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">
                      E-mail corporativo
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="joao@empresa.com.br"
                      className="w-full bg-white/4 rounded-xl px-4 py-3 text-sm text-gray-400 placeholder:text-gray-500 border border-white/8 focus:outline-none focus:border-blue-500/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">
                      Desafio ou projeto
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Descreva brevemente o que você precisa construir ou resolver..."
                      className="w-full bg-white/4 rounded-xl px-4 py-3 text-sm text-gray-400 placeholder:text-gray-500 border border-white/8 focus:outline-none focus:border-blue-500/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-xl transition-all duration-200 group shadow-lg shadow-violet-900/20"
                  >
                    Agendar Consultoria Gratuita
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <p className="text-center text-white/25 text-xs">
                    Sem compromisso • Resposta em até 24h
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5">
                    <CheckCircle size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Mensagem recebida!</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                    Nossa equipe técnica entrará em contato em até 24 horas para agendar sua consultoria.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
