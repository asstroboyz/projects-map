"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section
            id="epilogue"
            className="py-32 px-6 md:px-20 bg-accent-green/10 relative"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
            >
                <span className="text-accent-gold tracking-widest text-sm uppercase">
                    The Final Chapter
                </span>

                <h2 className="text-5xl font-heading font-bold mt-4">
                    Let Our Story Begin.
                </h2>

                <p className="text-text-dark-secondary text-xl mt-4">
                    Reach out to weave the next great digital saga together.
                </p>

                <a
                    href="mailto:asstroboyz@gmail.com?subject=Project%20Collaboration"
                    className="
    inline-flex mt-10 h-16 px-14
    items-center justify-center
    rounded-lg bg-accent-gold
    text-background-dark font-bold
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(203,178,106,0.5)]
    transition
  "
                >
                    Compose a Message →
                </a>

            </motion.div>
        </section>
    );
}
