"use client";

import { cubicBezier, motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { FaArrowCircleRight } from "react-icons/fa";


const smoothEase = cubicBezier(0.4, 0, 0.2, 1);
const cinematicEase = cubicBezier(0.16, 1, 0.3, 1);

function AnimatedLine({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={{ hidden: {}, show: {} }} className={className}>
      {children}
    </motion.div>
  );
}


const wordContainer = {

  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordReveal = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    color: "rgba(255,255,255,0.25)",
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    color: "rgba(255,255,255,0.95)",
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};
const headingReveal = {
  ...wordReveal,
  show: {
    ...wordReveal.show,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const bodyReveal = {
  ...wordReveal,
  show: {
    ...wordReveal.show,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

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
      ease: cinematicEase,
    },
  },
};
const lineContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};


function RevealText({
  text,
  variant = wordReveal,
}: {
  text: string;
  variant?: any;
}) {
  return (
    <motion.span variants={wordContainer} className="inline-block">
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={variant}
          className="inline-block mr-[0.25em] will-change-[filter,opacity]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}



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

        {/* ===== HEADER ===== */}
        <motion.div
          variants={lineContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2, margin: "-120px" }}
          className="mb-8 max-w-2xl"
        >
          <AnimatedLine>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              <RevealText
                text="Systems Built for Real Use"
                variant={headingReveal}
              />
            </h2>
          </AnimatedLine>

          <AnimatedLine className="mt-6">
            <RevealText
              text="I design and build software meant to live in production."
              variant={bodyReveal}
            />
          </AnimatedLine>

          <AnimatedLine>
            <RevealText
              text="Systems that prioritize clarity over complexity,"
              variant={bodyReveal}
            />
          </AnimatedLine>

          <AnimatedLine>
            <RevealText
              text="structure over shortcuts,"
              variant={bodyReveal}
            />
          </AnimatedLine>

          <AnimatedLine>
            <RevealText
              text="and long-term maintainability over quick wins."
              variant={bodyReveal}
            />
          </AnimatedLine>

          <AnimatedLine>
            <RevealText
              text="Each project is shaped by real constraints, real users, and real operational needs."
              variant={bodyReveal}
            />
          </AnimatedLine>
        </motion.div>



        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          {projects.map((p) => (
            <motion.article key={p.slug} variants={card}>
              <Link href={`/projects/${p.slug}`} className="group block h-full">
                <motion.div
                  whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <span className="absolute top-5 left-5 text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-black/60 backdrop-blur border border-border-subtle text-accent-gold">
                      {p.tag}
                    </span>
                  </div>

                  
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
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(ellipse_at_top,rgba(255,215,128,0.12),transparent_60%)]" />
                </motion.div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,128,0.05),transparent_65%)]" />
    </section>
  );
}
