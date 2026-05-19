import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { staggerContainer, fadeUp } from "../animations";

interface ServiceItem {
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    title: "Адаптивная вёрстка",
    description:
      "Pixel-perfect реализация макетов из Figma. Mobile-first подход, поддержка всех экранов от 320px до 4K. Семантическая HTML-разметка, SEO-оптимизация, кроссбраузерность.",
  },
  {
    title: "Чистый код",
    description:
      "TypeScript strict mode, компонентная архитектура, кастомные хуки. Код, который легко поддерживать и масштабировать. Без any, без хаков, без технического долга.",
  },
  {
    title: "Премиальные анимации",
    description:
      "Spring-физика, stagger-эффекты, микро-интерактив на каждом элементе. Плавные переходы между страницами, scroll-анимации, hover-отклики. Ваш сайт будет чувствоваться живым.",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-950 py-24 px-4 md:px-8">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        Что вы получите
      </motion.h2>

      <motion.div
        className="max-w-2xl mx-auto space-y-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-semibold text-white">
                {service.title}
              </span>
              <motion.span
                className="text-indigo-400 text-2xl ml-4 flex-shrink-0"
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
