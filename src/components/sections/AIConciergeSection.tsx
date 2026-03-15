"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, Sparkles, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const demoConversation = [
  {
    role: "bot" as const,
    content:
      "Olá! Sou o agente de IA da NexusCore. Como posso ajudar sua empresa hoje? 🚀",
    delay: 0,
  },
  {
    role: "user" as const,
    content: "Preciso automatizar o atendimento ao cliente no WhatsApp",
    delay: 1200,
  },
  {
    role: "bot" as const,
    content:
      "Perfeito! Posso integrar um agente conversacional com a API do WhatsApp Business. Ele aprende com seus dados, responde 24/7 e escala seu atendimento sem custo fixo adicional. Quer ver um demo?",
    delay: 2800,
  },
  {
    role: "user" as const,
    content: "Sim! E pode integrar com meu CRM atual?",
    delay: 4800,
  },
  {
    role: "bot" as const,
    content:
      "Sim! Integramos com Salesforce, HubSpot, Pipedrive ou qualquer CRM via REST API. O agente atualiza registros em tempo real, cria tickets e aciona seu time humano quando necessário. ✅",
    delay: 6200,
  },
];

const quickActions = [
  "Automatizar atendimento",
  "Criar sistema web",
  "Desenvolver app mobile",
  "Integrar IA ao meu negócio",
];

export function AIConciergeSection() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleMessages, isTyping]);

  const startDemo = () => {
    if (hasStarted) return;
    setHasStarted(true);
    runConversation();
  };

  const runConversation = () => {
    demoConversation.forEach((msg, i) => {
      // Show typing indicator before bot messages
      if (msg.role === "bot") {
        setTimeout(() => setIsTyping(true), msg.delay - 400 > 0 ? msg.delay - 400 : 0);
      }
      setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(i + 1);
      }, msg.delay + 600);
    });
  };

  return (
    <section id="ia-demo" className="relative py-32 px-6">
      {/* BG */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="violet" className="mb-5">
              IA Concierge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Seus agentes de IA{" "}
              <span className="text-gradient">trabalhando enquanto você dorme.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mb-8">
              Projetamos agentes que não apenas respondem — eles entendem contexto,
              tomam decisões e integram com todos os seus sistemas. Suporte humanizado,
              geração de leads e automação de processos em um único agente.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Memória conversacional de longo prazo",
                "Handoff inteligente para time humano",
                "Analytics de conversas e insights automáticos",
                "Deploy em WhatsApp, Webchat, Slack ou Telegram",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3"
                >
                  <ChevronRight size={14} className="text-blue-400 shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Quero um agente personalizado
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>

          {/* Right: Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onViewportEnter={startDemo}
            className="relative"
          >
            {/* Glow behind chat */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-violet-600/10 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl border border-white/8 overflow-hidden bg-[#0c0c0c]">
              {/* Chat header */}
              <div className="px-5 py-4 border-b border-white/6 flex items-center gap-3 bg-white/2">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0c0c0c]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">NexusAgent</div>
                  <div className="text-xs text-green-400">Online agora</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <Sparkles size={14} className="text-violet-400" />
                  <span className="text-xs text-violet-400 font-medium">IA Ativa</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 h-[360px] overflow-y-auto scrollbar-thin space-y-4 flex flex-col">
                <AnimatePresence>
                  {demoConversation.slice(0, visibleMessages).map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      {/* Avatar */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                          msg.role === "bot"
                            ? "bg-gradient-to-br from-blue-500 to-violet-600"
                            : "bg-white/10"
                        }`}
                      >
                        {msg.role === "bot" ? (
                          <Bot size={12} className="text-white" />
                        ) : (
                          <User size={12} className="text-white/70" />
                        )}
                      </div>
                      {/* Bubble */}
                      <div
                        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "bot"
                            ? "bg-white/5 text-white/80 rounded-tl-sm"
                            : "bg-blue-600/20 border border-blue-500/20 text-white/80 rounded-tr-sm"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shrink-0">
                        <Bot size={12} className="text-white" />
                      </div>
                      <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            className="w-1.5 h-1.5 bg-white/40 rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              repeat: Infinity,
                              duration: 1.2,
                              delay: dot * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>

              {/* Quick actions */}
              {visibleMessages === 0 && (
                <div className="px-5 pb-3 flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action}
                      onClick={startDemo}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/8 text-white/50 hover:border-blue-500/30 hover:text-white/70 transition-colors"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-4 py-4 border-t border-white/5 flex gap-3 items-center bg-white/1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-white/5 rounded-xl px-4 py-2.5 text-sm text-white/70 placeholder:text-white/25 border border-white/6 focus:outline-none focus:border-blue-500/30 transition-colors"
                />
                <button className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors shrink-0">
                  <Send size={14} className="text-white" />
                </button>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
              Demo ao vivo
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
