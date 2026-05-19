import { motion } from "motion/react";
import { staggerContainer, scaleIn } from "../animations";

interface BentoCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const cards: BentoCard[] = [
  {
    title: "React",
    description: "Компонентная архитектура, хуки, серверные компоненты",
    icon: <ReactIcon />,
    className: "md:col-span-2",
  },
  {
    title: "TypeScript",
    description: "Строгая типизация, zero any, надёжный код",
    icon: <TypeScriptIcon />,
  },
  {
    title: "Tailwind CSS",
    description: "Утилитарный подход, кастомные дизайн-системы",
    icon: <TailwindIcon />,
  },
  {
    title: "Скорость",
    description: "Lighthouse 95+, оптимизация бандла, lazy loading",
    icon: <SpeedIcon />,
    className: "md:col-span-2",
  },
  {
    title: "Анимации",
    description: "Motion, spring-физика, микро-интерактив",
    icon: <AnimationIcon />,
  },
  {
    title: "Адаптив",
    description: "Mobile-first, любые экраны от 320px до 4K",
    icon: <ResponsiveIcon />,
  },
];

export function BentoGrid() {
  return (
    <section className="bg-slate-950 py-24 px-4 md:px-8">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        Мой Стек & Преимущества
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className={`group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm overflow-hidden ${card.className ?? ""}`}
            variants={scaleIn}
            whileHover={{ scale: 1.02, borderColor: "rgba(99,102,241,0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="mb-4 text-indigo-400 group-hover:text-emerald-400 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ReactIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="group-hover:rotate-180 transition-transform duration-700"
    >
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </motion.svg>
  );
}

function TypeScriptIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.4 }}
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M12 8v8M9 8h6M14 14.5c0 1.38-1.12 1.5-1.5 1.5s-1.5-.12-1.5-1.5 1.12-1.5 1.5-1.5 1.5.12 1.5 1.5z" />
    </motion.svg>
  );
}

function TailwindIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      whileHover={{ x: [0, 3, -3, 0] }}
      transition={{ duration: 0.5 }}
    >
      <path d="M6.5 9.5c1.5-3 4-4 7.5-3-1 2-0.5 3.5 1.5 4-3 1-4.5 3-3 6-1.5-2-4-3-6-1.5 1-2 0.5-3.5-1.5-4 3-1 4.5-3 1.5-1.5z" />
    </motion.svg>
  );
}

function SpeedIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <motion.path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [0, 1] }}
        transition={{ duration: 0.6 }}
      />
    </motion.svg>
  );
}

function AnimationIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <circle cx="12" cy="12" r="7" opacity="0.5" />
      <circle cx="12" cy="12" r="10" opacity="0.25" />
    </motion.svg>
  );
}

function ResponsiveIcon() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      whileHover={{ scale: [1, 0.9, 1.1, 1] }}
      transition={{ duration: 0.5 }}
    >
      <rect x="2" y="4" width="20" height="12" rx="2" />
      <rect x="7" y="18" width="10" height="2" rx="1" />
      <path d="M9 16v2M15 16v2" />
    </motion.svg>
  );
}
