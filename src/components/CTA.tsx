"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";


export default function CTA() {
    return (
        <section
            id="contact"
            className="
    relative
    overflow-hidden
    py-40 px-6 md:px-20
    flex items-center justify-center
    bg-[#0b0f0d]
  "
        >

            {/* SOFT VIGNETTE */}
            <div className="absolute inset-0 bg-black/30" />

            {/* GOLD AURA */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,178,106,0.08),transparent_65%)]" />

            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 max-w-3xl text-center"
            >
                {/* ICON */}
                <div className="mx-auto mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-accent-gold/30 bg-accent-gold/10 backdrop-blur">
                    <Mail className="h-6 w-6 text-accent-gold" />
                </div>

                {/* EYEBROW */}
                <span className="block text-xs tracking-[0.35em] text-accent-gold/80 uppercase">
                    The Final Chapter
                </span>

                {/* TITLE */}
                <h2 className="mt-6 text-4xl md:text-5xl font-heading font-bold text-text-light">
                    Let Our Story Begin.
                </h2>

                {/* DESC */}
                <p className="mt-6 text-lg text-text-dark-secondary leading-relaxed">
                    The journey awaits new narratives. Reach out to weave the next great
                    digital saga together.
                </p>

                {/* BUTTON */}
                <a
                    href="mailto:asstroboyz@gmail.com?subject=Project%20Collaboration"
                    className="
    group inline-flex mt-14 h-14 px-12
    items-center justify-center gap-3
    rounded-full
    border border-accent-gold/40
    bg-accent-gold/10
    text-accent-gold font-semibold
    backdrop-blur
    transition-all duration-300
    hover:bg-accent-gold
    hover:text-background-dark
  "
                >
                    Compose a Message →
                </a>

            </motion.div>
        </section>
    );
}
