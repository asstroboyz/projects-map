"use client";

import {
  motion,
  useScroll,
  useTransform,
  cubicBezier,
} from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

/* ======================
   EASING
====================== */
const smoothEase = cubicBezier(0.4, 0, 0.2, 1);
const cinematicEase = cubicBezier(0.16, 1, 0.3, 1);

/* ======================
   SCROLL DIRECTION
====================== */
function useScrollDirection() {
  const lastY = useRef(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setDirection(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}

/* ======================
   HEADER LINE
====================== */
function RevealLine({
  text,
  index,
  total,
  direction,
}: {
  text: string;
  index: number;
  total: number;
  direction: "up" | "down";
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const order =
    direction === "down" ? index : total - index - 1;

  const start = order * 0.12;
  const end = start + 0.35;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(255,255,255,0.35)", "rgba(255,255,255,0.95)"]
  );

  const blur = useTransform(
    scrollYProgress,
    [start, end],
    ["blur(6px)", "blur(0px)"]
  );

  return (
    <motion.p
      ref={ref}
      style={{ color, filter: blur }}
      className="leading-relaxed will-change-[filter,color]"
    >
      {text}
    </motion.p>
  );
}

/* ======================
   CARD ANIMATION
====================== */
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

/* ======================
   PAGE
====================== */
export default function Projects() {
  const direction = useScrollDirection();

  const lines = [
    "I design and build software meant to live in production.",
    "Systems that prioritize clarity over complexity,",
    "structure over shortcuts,",
    "and long-term maintainability over quick wins.",
    "Each project is shaped by real constraints, real users, and real operational needs.",
  ];

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
        <div className="mb-20 max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Systems Built for Real Use
          </h2>

          {lines.map((text, i) => (
            <RevealLine
              key={i}
              text={text}
              index={i}
              total={lines.length}
              direction={direction}
            />
          ))}
        </div>

        {/* ===== PROJECT CARDS ===== */}
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

                  {/* CONTENT */}
                  <div className="p-10 flex flex-col h-full">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      {p.title}
                    </h3>

                    <p className="text-text-dark-secondary grow leading-relaxed">
                      {p.desc}
                    </p>

                    <span className="mt-10 inline-flex items-center gap-3 text-accent-gold font-medium">
                      Explore the Realm
                      <FaArrowCircleRight className="text-white transition group-hover:translate-x-1" />
                    </span>
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
