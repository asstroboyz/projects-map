"use client";

import { cubicBezier, motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { FaArrowCircleRight } from "react-icons/fa";

/* ===========================
   Motion Variants
=========================== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const cinematicEase = cubicBezier(0.16, 1, 0.3, 1);
const card = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: cinematicEase, // cinematic easing
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative py-32 px-6 md:px-20
        bg-gradient-to-b from-black via-[#0b0f0e] to-black
        overflow-hidden
      "
    >
      <div className="max-w-[1400px] w-full mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 max-w-3xl"
        >
          <span className="text-accent-gold text-sm uppercase tracking-widest">
            Tales of Creation
          </span>

          <h2 className="text-5xl md:text-6xl font-heading font-bold mt-4">
            Forged Digital Realms
          </h2>

          <p className="mt-6 text-text-dark-secondary max-w-xl">
            Each project is a narrative woven into the fabric of the digital
            world — transforming complexity into elegant, purposeful systems.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          {projects.map((p) => (
            <motion.article
              key={p.slug}
              variants={card}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group block h-full"
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateX: 2,
                    rotateY: -2,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="
                    relative h-full rounded-3xl overflow-hidden
                    border border-border-subtle
                    bg-block-bg
                    shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-72 overflow-hidden">
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* TAG */}
                    <span className="
                      absolute top-5 left-5
                      text-xs uppercase tracking-widest
                      px-4 py-1.5 rounded-full
                      bg-black/60 backdrop-blur
                      border border-border-subtle
                      text-accent-gold
                    ">
                      {p.tag}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-10 flex flex-col h-full">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      {p.title}
                    </h3>

                    <p className="text-text-dark-secondary grow leading-relaxed">
                      {p.desc}
                    </p>

                    <motion.span
                      className="mt-10 inline-flex items-center gap-3 text-accent-gold font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                    >
                      Explore the Realm
                      <FaArrowCircleRight className="text-white transition group-hover:translate-x-1" />
                    </motion.span>
                  </div>

                  {/* HOVER GLOW */}
                  <div className="
                    pointer-events-none absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition duration-700
                    bg-[radial-gradient(ellipse_at_top,rgba(255,215,128,0.12),transparent_60%)]
                  " />
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(255,215,128,0.05),transparent_65%)]
      " />
    </section>
  );
}
