// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";



// const LOCAL_IMAGE = "/foto/me.jpg";
// const FALLBACK_IMAGE =
//   "https://lh3.googleusercontent.com/aida-public/AB6AXuDloz2NUJXREihx1k3tqDVYPXpY27Hs-y4iS4jqTiuFyDZo8UBuw_ZuXMWwtrceopxapUPxuZZZUKn6CceFH_Jz-tKzvUPp76nzA5QxnRWk18KT59Grs7TOTOcMMkODYIAqsv9HKd4_hQie4wH-rr3YBmq11k5ksPb0Tm7GmqaWChBqcxqCvcWGQfdq8EZMKIiRfbAibV1oDVBPE2UFHRq9EJckQHLHplXqZa2rsK_zwEwb555E8q2hQF9iqclZB8qa6pnKLllYhVA";


// export default function Hero() {

//   const [bgImage, setBgImage] = useState(FALLBACK_IMAGE);

//   useEffect(() => {
//     const img = new Image();
//     img.src = LOCAL_IMAGE;

//     img.onload = () => setBgImage(LOCAL_IMAGE);
//     img.onerror = () => setBgImage(FALLBACK_IMAGE);
//   }, []);
//   return (
//     <section
//       id="journey"
//       className="min-h-screen flex items-center relative px-6 md:px-20 pt-24"
//     >
//       {/* background blur */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
//         style={{ backgroundImage: `url("${bgImage}")` }}
//       />

//       <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
//         {/* LEFT */}
//         <div className="flex flex-col gap-6 text-center md:text-left">
//           <span className="text-accent-gold tracking-widest text-sm uppercase">
//             The Narrative Unfurls
//           </span>

//           <h1 className="text-6xl md:text-8xl font-heading font-bold">
//             Weaving <br />
//             <span className="text-accent-gold">Digital Destinies.</span>
//           </h1>

//           <p className="text-text-dark-secondary text-xl max-w-xl">
//             I am a System Weaver, crafting intricate digital ecosystems where
//             code flows like narrative.
//           </p>

//           <div className="flex gap-4 justify-center md:justify-start">
//             <button className="h-14 px-8 bg-accent-gold text-background-dark font-bold rounded-lg hover:scale-105 transition">
//               Begin the Tale
//             </button>
//             <button className="h-14 px-8 border border-border-subtle rounded-lg hover:bg-block-bg transition">
//               Read My Chronicle
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative w-full max-w-[420px] mx-auto -rotate-3 hover:rotate-0 transition">
//           <div className="absolute inset-0 bg-block-bg rounded-xl -rotate-6 scale-105" />
//           {/* <div
//             className="relative aspect-[4/5] rounded-xl bg-cover bg-center border border-border-subtle"
//             style={{ backgroundImage: `url("${bgImage}")` }}
//           /> */}
//           <motion.div
//             drag
//             dragElastic={0.35}
//             dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98, cursor: "grabbing" }}
//             animate={{ rotate: [-1, 1, -1] }}
//             transition={{
//               type: "spring",
//               stiffness: 200,
//               damping: 18,
//               mass: 0.6,
//               rotate: {
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 duration: 6,
//                 ease: "easeInOut",
//               },
//             }}
//             className="relative aspect-[4/5] rounded-xl bg-cover bg-center border border-border-subtle cursor-grab"
//             style={{ backgroundImage: `url("${bgImage}")` }}
//           />

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOCAL_IMAGE = "/foto/me.jpg";
const FALLBACK_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDloz2NUJXREihx1k3tqDVYPXpY27Hs-y4iS4jqTiuFyDZo8UBuw_ZuXMWwtrceopxapUPxuZZZUKn6CceFH_Jz-tKzvUPp76nzA5QxnRWk18KT59Grs7TOTOcMMkODYIAqsv9HKd4_hQie4wH-rr3YBmq11k5ksPb0Tm7GmqaWChBqcxqCvcWGQfdq8EZMKIiRfbAibV1oDVBPE2UFHRq9EJckQHLHplXqZa2rsK_zwEwb555E8q2hQF9iqclZB8qa6pnKLllYhVA";

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

            <form className="mt-12 space-y-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold"
              />
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold resize-none"
              />

              <button
                type="submit"
                className="
                  mt-8 inline-flex h-12 px-12 items-center justify-center
                  rounded-full border border-accent-gold/40
                  text-accent-gold font-semibold
                  transition-all hover:bg-accent-gold hover:text-white
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
