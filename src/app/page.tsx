"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden px-4 py-16 sm:px-6 sm:py-24">
      {/* fundo ambiente */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,var(--color-paper)_55%,var(--color-mist)_100%)]" />

        <motion.svg
          className="absolute -right-[12%] -top-[10%] h-[55vh] w-[55vh] opacity-[0.50] blur-[6px] sm:h-[68vh] sm:w-[68vh]"
          viewBox="0 0 400 400"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <defs>
            <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="var(--color-lime)" />
              <stop offset="35%"  stopColor="var(--color-turquoise)" />
              <stop offset="65%"  stopColor="var(--color-coral)" />
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

      {/* card Liquid Glass */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-md px-7 py-11 text-center sm:max-w-lg sm:px-12 sm:py-14"
        style={{
          borderRadius: "2rem",
          background: "linear-gradient(145deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.38) 100%)",
          backdropFilter: "blur(32px) saturate(1.6)",
          WebkitBackdropFilter: "blur(32px) saturate(1.6)",
          border: "1px solid rgba(255,255,255,0.85)",
          boxShadow: [
            "0 2px 0 0 rgba(255,255,255,0.9) inset",
            "0 -1px 0 0 rgba(255,255,255,0.3) inset",
            "1px 0 0 0 rgba(255,255,255,0.5) inset",
            "-1px 0 0 0 rgba(255,255,255,0.5) inset",
            "0 32px 80px -20px rgba(102,0,144,0.22)",
            "0 8px 32px -8px rgba(70,201,204,0.15)",
          ].join(", "),
        }}
      >
        {/* brilho interno topo — simula refração */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[2rem]"
          style={{ background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.9) 50%, transparent 90%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-4 top-0 h-8 rounded-t-[2rem] opacity-60"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)" }}
        />

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
          className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          style={{
            background: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 1px 0 0 rgba(255,255,255,0.8) inset, 0 2px 8px rgba(102,0,144,0.08)",
          }}
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
          <Button
            variant="muted"
            size="lg"
            disabled
            className="cursor-not-allowed"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.8)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.9) inset",
            }}
          >
            <Lock className="h-4 w-4" strokeWidth={2} />
            Volte em breve
          </Button>
        </motion.div>
      </motion.div>

      {/* rodapé no fluxo — não absoluto */}
      <p className="mt-10 text-center text-xs text-ink/35">
        © Programa Conecta AMVE • Em construção
      </p>
    </main>
  );
}
