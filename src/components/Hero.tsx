import { motion } from "motion/react";
import { staggerContainer, fadeUp } from "../animations";

const words = ["Cyclik_227"];
const subtitle = "Фронтенд-разработчик | React & TypeScript";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-violet-500/15 blur-[100px] translate-x-32 -translate-y-16" />
      </div>

      <motion.div
        className="relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white tracking-tight"
          variants={fadeUp}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent"
              variants={fadeUp}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl mx-auto"
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>

        <motion.a
          href="https://kwork.ru/user/cyclik_227"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-semibold text-lg shadow-lg shadow-emerald-500/25 cursor-pointer"
          variants={fadeUp}
          whileHover={{ scale: 1.04, boxShadow: "0 20px 40px rgba(16,185,129,0.3)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Заказать разработку
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-2.5 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
