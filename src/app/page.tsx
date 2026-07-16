"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4 sm:px-6">
      {/* fundo ambiente — contido no html/body overflow-x:hidden */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#ffffff_0%,var(--color-paper)_55%,var(--color-mist)_100%)]" />

        <motion.svg
          className="absolute right-[-10%] top-[-8%] h-[50vmax] w-[50vmax] max-h-[520px] max-w-[520px] opacity-50 blur-[6px]"
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
            d="M 120 60 C 60 60,40 130,90 160 C 140 190,150 260,200 260 C 260 260,260 180,200 170 C 150 162,150 90,210 70 C 280 47,340 100,320 170 C 300 240,220 260,200 330"
            fill="none" stroke="url(#loopGradient)" strokeWidth="34" strokeLinecap="round"
          />
        </motion.svg>

        <div className="absolute -bottom-20 -left-20 h-[35vmax] w-[35vmax] max-h-[360px] max-w-[360px] rounded-full bg-turquoise/20 blur-[80px]" />
        <div className="absolute bottom-[8%] right-[6%] h-32 w-32 rounded-full bg-lime/20 blur-[60px]" />
        <div className="absolute left-[10%] top-[16%] h-20 w-20 rounded-full bg-coral/18 blur-[50px]" />
      </div>

      {/* card Liquid Glass */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-[440px] text-center px-6 py-9 sm:px-10 sm:py-11"
        style={{
          borderRadius: "1.75rem",
          background: "linear-gradient(145deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.38) 100%)",
          backdropFilter: "blur(32px) saturate(1.6)",
          WebkitBackdropFilter: "blur(32px) saturate(1.6)",
          border: "1px solid rgba(255,255,255,0.85)",
          boxShadow: [
            "0 2px 0 0 rgba(255,255,255,0.9) inset",
            "0 -1px 0 0 rgba(255,255,255,0.3) inset",
            "1px 0 0 0 rgba(255,255,255,0.5) inset",
            "-1px 0 0 0 rgba(255,255,255,0.5) inset",
            "0 28px 70px -16px rgba(102,0,144,0.20)",
            "0 6px 24px -6px rgba(70,201,204,0.12)",
          ].join(", "),
        }}
      >
        {/* brilho de refração */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ borderRadius: "1.75rem 1.75rem 0 0", background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.9) 50%, transparent 90%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-4 top-0 h-7 opacity-50"
          style={{ borderRadius: "1.75rem 1.75rem 0 0", background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)" }}
        />

        <motion.div variants={item} className="flex justify-center">
          <Image
            src="/logo-conecta-amve.webp"
            alt="Conecta AMVE"
            width={240}
            height={126}
            priority
            className="h-auto w-[160px] sm:w-[190px]"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1"
          style={{
            background: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 1px 0 0 rgba(255,255,255,0.8) inset",
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/60">Em breve</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-5 font-[family-name:var(--font-display)] text-[22px] font-semibold leading-[1.18] tracking-tight text-ink sm:text-[27px]"
        >
          Estamos preparando algo incrível.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-3 max-w-xs text-[13px] leading-relaxed text-ink/52 sm:text-[14px]"
        >
          O novo portal do Programa Conecta AMVE está sendo desenvolvido para
          conectar pessoas, ideias, inovação e oportunidades em todo o Vale
          Europeu. Em breve teremos novidades.
        </motion.p>

        <motion.div variants={item} className="mt-7">
          <Button
            variant="muted"
            size="lg"
            disabled
            className="cursor-not-allowed text-[13px]"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.8)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.9) inset",
              borderRadius: "999px",
              height: "40px",
            }}
          >
            <Lock className="h-3.5 w-3.5" strokeWidth={2} />
            Volte em breve
          </Button>
        </motion.div>
      </motion.div>

      <p className="mt-8 text-center text-[11px] text-ink/30">
        © Programa Conecta AMVE • Em construção
      </p>
    </main>
  );
}
