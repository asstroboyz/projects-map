"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-black via-[#0b0f0e] to-black"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group relative block h-full"
              >
                <div
                  className="
                    relative h-full rounded-2xl overflow-hidden
                    border border-border-subtle
                    bg-block-bg
                    transition-all duration-500
                    group-hover:-translate-y-2
                    group-hover:shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="
                        h-full w-full object-cover
                        transition duration-700
                        group-hover:scale-105
                        group-hover:opacity-90
                      "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge */}
                    <span className="absolute top-4 left-4 text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 border border-border-subtle text-accent-gold">
                      {p.tag}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex flex-col h-full">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                      {p.title}
                    </h3>

                    <p className="text-text-dark-secondary grow">
                      {p.desc}
                    </p>

                    <span className="mt-8 inline-flex items-center gap-2 text-accent-gold font-medium">
                      Explore the Realm
                      <span className="transition group-hover:translate-x-1">
                        <FaArrowCircleRight color="white"/>
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,128,0.05),transparent_60%)]" />
    </section>
  );
}
