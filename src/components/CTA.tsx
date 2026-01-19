
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOCAL_IMAGE = "/foto/me.jpg";
const FALLBACK_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDloz2NUJXREihx1k3tqDVYPXpY27Hs-y4iS4jqTiuFyDZo8UBuw_ZuXMWwtrceopxapUPxuZZZUKn6CceFH_Jz-tKzvUPp76nzA5QxnRWk18KT59Grs7TOTOcMMkODYIAqsv9HKd4_hQie4wH-rr3YBmq11k5ksPb0Tm7GmqaWChBqcxqCvcWGQfdq8EZMKIiRfbAibV1oDVBPE2UFHRq9EJckQHLHplXqZa2rsK_zwEwb555E8q2hQF9iqclZB8qa6pnKLllYhVA";

function InputWave({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      {children}

      {/* underline base */}
      <span className="pointer-events-none absolute left-0 bottom-0 h-[1px] w-full bg-white/20" />

      <span
        className="
    pointer-events-none
    absolute left-0 bottom-0
    h-[2px] w-full
    transform origin-center scale-x-0
    bg-accent-gold
    shadow-[0_0_12px_rgba(212,175,55,0.65)]
    transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]
    group-focus-within:scale-x-100
  "
      />

    </div>
  );
}
export default function ContactSection() {
  const [img, setImg] = useState(FALLBACK_IMAGE);

  useEffect(() => {
    const i = new Image();
    i.src = LOCAL_IMAGE;
    i.onload = () => setImg(LOCAL_IMAGE);
    i.onerror = () => setImg(FALLBACK_IMAGE);
  }, []);




  return (
    <section
      id="contact"
      className="relative bg-[#0b0f0d] py-32 px-6 md:px-20 overflow-hidden"
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(203,178,106,0.08),transparent_65%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* ================= LEFT : DRAGGABLE LANYARD + CARD ================= */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              drag
              dragElastic={0.35}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing", scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              animate={{ rotate: [-2.5, 2.5, -2.5] }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
                mass: 0.6,
                rotate: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 7,
                  ease: "easeInOut",
                },
              }}
              style={{ transformOrigin: "top center" }}
              className="relative cursor-grab select-none"
            >
              {/* LANYARD (pita) */}
              <div className="absolute -top-44 left-1/2 -translate-x-1/2 flex flex-col items-center">
                {/* pita lanyard */}
                <div className="w-7 h-44 bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-sm shadow-md" />

                {/* jahitan/strip kecil biar berasa lanyard */}
                <div className="absolute top-0 w-[2px] h-44 bg-white/10" />

                {/* connector */}
                <div className="w-4 h-4 rounded-full bg-neutral-700 mt-2 shadow" />
                <div className="w-6 h-[6px] rounded-full bg-neutral-800 mt-1" />
              </div>

              {/* CARD */}
              <div
                className="
                  mt-4
                  w-[260px]
                  rounded-xl
                  overflow-hidden
                  border border-white/10
                  bg-black
                  shadow-[0_40px_90px_rgba(0,0,0,0.7)]
                "
              >
                <div
                  className="w-full h-[320px] bg-cover bg-center"
                  style={{ backgroundImage: `url("${img}")` }}
                />

                <div className="p-4 bg-black/70">
                  <p className="text-sm font-semibold text-white">
                    Risdandi Ganda Gunawan
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    Software Engineer · Creator
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT : FORM ================= */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Contact
            </h2>

            <p className="mt-4 text-white/60 max-w-md">
              Got a project, idea, or just want to talk? Let’s start.
            </p>

            <form className="mt-12 space-y-8">
              <InputWave>
                <input
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full bg-transparent py-3 pb-4
                    text-white
                    placeholder:text-white/40
                    focus:outline-none
                  "
                />
              </InputWave>

              <InputWave>
                <input
                  type="email"
                  placeholder="Your email"
                  className="
                    w-full bg-transparent py-3 pb-4
                    text-white
                    placeholder:text-white/40
                    focus:outline-none
                  "
                />
              </InputWave>

              <InputWave>
                <input
                  type="text"
                  placeholder="Subject"
                  className="
                    w-full bg-transparent py-3 pb-4
                    text-white
                    placeholder:text-white/40
                    focus:outline-none
                  "
                />
              </InputWave>

              <InputWave>
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="
                    w-full bg-transparent py-3 pb-4
                    text-white
                    placeholder:text-white/40
                    focus:outline-none resize-none
                  "
                />
              </InputWave>

              <button
                type="submit"
                className="
                  mt-8 inline-flex h-12 px-12 items-center justify-center
                  rounded-full border border-accent-gold/40
                  text-accent-gold font-semibold
                  transition-all hover:bg-accent-gold hover:text-black
                "
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
