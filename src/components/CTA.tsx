
"use client";

import { Chip } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const LOCAL_IMAGE = "/foto/me.jpg";
const FALLBACK_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDloz2NUJXREihx1k3tqDVYPXpY27Hs-y4iS4jqTiuFyDZo8UBuw_ZuXMWwtrceopxapUPxuZZZUKn6CceFH_Jz-tKzvUPp76nzA5QxnRWk18KT59Grs7TOTOcMMkODYIAqsv9HKd4_hQie4wH-rr3YBmq11k5ksPb0Tm7GmqaWChBqcxqCvcWGQfdq8EZMKIiRfbAibV1oDVBPE2UFHRq9EJckQHLHplXqZa2rsK_zwEwb555E8q2hQF9iqclZB8qa6pnKLllYhVA";

function InputWave({ children }: { children: React.ReactNode }) {
  const [isWave, setIsWave] = useState(false);

  const handleClick = () => {
    setIsWave(true);
    setTimeout(() => setIsWave(false), 1000);
  };

  return (
    <div className="relative group" onClick={handleClick}>
      {children}

      {/* underline base */}
      <span className="pointer-events-none absolute left-0 bottom-0 h-[1px] w-full bg-white/20" />

      <motion.svg
        className="pointer-events-none absolute left-0 bottom-0 w-full h-[2px]"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isWave ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      >
        <motion.path
          d={isWave ? "M0,1 Q25,0 50,1 T100,1" : "M0,1 L100,1"}
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          filter="drop-shadow(0 0 12px rgba(212,175,55,0.65))"
          animate={{ d: isWave ? "M0,1 Q25,0 50,1 T100,1" : "M0,1 L100,1" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.svg>

    </div>
  );
}
export default function ContactSection() {
  const [img, setImg] = useState(FALLBACK_IMAGE);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const i = new Image();
    i.src = LOCAL_IMAGE;
    i.onload = () => setImg(LOCAL_IMAGE);
    i.onerror = () => setImg(FALLBACK_IMAGE);
  }, []);

  const handleSubmit = () => {
    const name = (document.querySelector('input[placeholder="Your name"]') as HTMLInputElement)?.value;
    const email = (document.querySelector('input[placeholder="Your email"]') as HTMLInputElement)?.value;
    const subject = (document.querySelector('input[placeholder="Subject"]') as HTMLInputElement)?.value;
    const message = (document.querySelector('textarea') as HTMLTextAreaElement)?.value;

    const mailto = `
mailto:yourgmail@gmail.com
?subject=${encodeURIComponent(subject || "Contact from portfolio")}
&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}
  `;

    window.location.href = mailto;
  };




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
                onClick={() => handleSubmit()}
                className="
    cursor-pointer
    bg-transparent
    border border-accent-gold/50
    text-accent-gold
    hover:bg-accent-gold hover:text-white
    transition-all
    px-6 py-3
    rounded-full
    flex items-center gap-2
  "
              >
                <Send size={16} />
                Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
