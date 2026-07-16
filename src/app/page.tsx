"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Lock } from "lucide-react";

import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 sm:py-24">
      {/* ambiente — laço abstrato inspirado na curva do "n" do logotipo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,var(--color-paper)_55%,var(--color-mist)_100%)]" />

        <motion.svg
          className="absolute -right-[18%] -top-[12%] h-[62vh] w-[62vh] opacity-[0.55] blur-[6px] sm:h-[75vh] sm:w-[75vh]"
          viewBox="0 0 400 400"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <defs>
            <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-lime)" />
              <stop offset="35%" stopColor="var(--color-turquoise)" />
              <stop offset="65%" stopColor="var(--color-coral)" />
              <stop offset="100%" stopColor="var(--color-purple)" />
            </linearGradient>
          </defs>
          <path
            d="M 120 60
               C 60 60, 40 130, 90 160
               C 140 190, 150 260, 200 260
               C 260 260, 260 180, 200 170
               C 150 162, 150 90, 210 70
               C 280 47, 340 100, 320 170
               C 300 240, 220 260, 200 330"
            fill="none"
            stroke="url(#loopGradient)"
            strokeWidth="34"
            strokeLinecap="round"
          />
        </motion.svg>

        <div className="absolute -bottom-24 -left-24 h-[42vh] w-[42vh] rounded-full bg-turquoise/25 blur-[90px]" />
        <div className="absolute bottom-[8%] right-[8%] h-40 w-40 rounded-full bg-lime/25 blur-[70px]" />
        <div className="absolute left-[12%] top-[18%] h-24 w-24 rounded-full bg-coral/20 blur-[60px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-lg rounded-[2rem] border border-white/70 bg-white/55 px-8 py-12 text-center shadow-[0_30px_80px_-30px_rgba(102,0,144,0.25)] backdrop-blur-2xl sm:px-12 sm:py-14"
      >
        <motion.div variants={item} className="flex justify-center">
          <Image
            src="/logo-conecta-amve.webp"
            alt="Conecta AMVE"
            width={280}
            height={148}
            priority
            className="h-auto w-[190px] sm:w-[220px]"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Em breve
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 font-[family-name:var(--font-display)] text-[28px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[34px]"
        >
          Estamos preparando algo incrível.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-ink/55 sm:text-base"
        >
          O novo portal do Programa Conecta AMVE está sendo desenvolvido para
          conectar pessoas, ideias, inovação e oportunidades em todo o Vale
          Europeu. Em breve teremos novidades.
        </motion.p>

        <motion.div variants={item} className="mt-9">
          <Button variant="muted" size="lg" disabled className="cursor-not-allowed">
            <Lock className="h-4 w-4" strokeWidth={2} />
            Volte em breve
          </Button>
        </motion.div>
      </motion.div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs text-ink/35">
        © Programa Conecta AMVE • Em construção
      </p>
    </main>
  );
}
