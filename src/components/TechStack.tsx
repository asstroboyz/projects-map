"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/techStack";

export default function TechStack() {
  return (
    <section className="py-20 px-6 md:px-20 border-t border-border-subtle">
      <div className="max-w-[1400px] mx-auto">
        <h3 className="text-sm uppercase tracking-widest text-text-dark-secondary mb-10">
          🛠 Tools & Technologies
        </h3>

        <div className="flex flex-wrap gap-10 items-center">
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition"
            >
              <img
                src={t.icon}
                alt={t.name}
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-medium">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
