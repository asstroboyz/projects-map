// import { tools, Tool } from "@/lib/tools";

// export default function Tools() {
//   return (
//     <section
//       id="skills"
//       className="py-32 relative bg-[linear-gradient(to_bottom_right,rgba(27,38,36,0.8),rgba(16,16,16,0.8))]"
//     >
//       <div className="max-w-[1400px] w-full mx-auto px-6 md:px-20">

//         {/* Header */}
//         <div className="text-center mb-16 max-w-2xl mx-auto">
//           <span className="text-accent-gold tracking-widest text-sm uppercase">
//             The Weaver&apos;s Tools
//           </span>
//           <h2 className="text-5xl font-heading font-bold mt-4">
//             Languages of Creation
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 justify-items-center">

//           {tools.map((tool: Tool) => (
//             <div
//               key={tool.title}
//               className="flex flex-col items-center text-center group"
//             >
//               {/* Icon */}
//               <div
//                 className={`
//                   size-24 flex items-center justify-center rounded-full
//                   border border-border-subtle mb-3 transition
//                   group-hover:scale-110 group-hover:shadow-lg
//                   ${tool.title === "GitHub" ? "bg-white" : "bg-block-bg"}
//                 `}
//               >
//                 <img
//                   src={tool.icon}
//                   alt={tool.title}
//                   className="h-10 w-10 object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-lg md:text-xl font-heading font-bold">
//                 {tool.title}
//               </h3>

//               {/* Desc (desktop only) */}
//               <p className="hidden md:block text-text-dark-secondary text-sm max-w-xs mt-2">
//                 {tool.desc}
//               </p>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { tools } from "@/lib/tools";

/* ===========================
   Geometry helper
=========================== */
function intersectRect(
  angle: number,
  cx: number,
  cy: number,
  hw: number,
  hh: number,
  inset = 0.6
) {
  const dx = Math.cos(angle);
  const dy = Math.sin(angle);

  const tx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
  const ty = dy !== 0 ? hh / Math.abs(dy) : Infinity;

  const t = Math.min(tx, ty) - inset;

  return {
    x: cx + dx * t,
    y: cy + dy * t,
  };
}

/* ===========================
   Component
=========================== */
export default function Tools() {
  const CENTER = 50;
  const NODE_RADIUS = 32;

  /* ===========================
     DESKTOP (RADIAL)
  =========================== */
  const DesktopRadial = () => (
    <div className="hidden lg:flex w-full justify-center">
      <div className="relative w-full max-w-[900px] aspect-square">

        {/* SVG CONNECTIONS */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {tools.map((_, i) => {
            const angle =
              (i / tools.length) * Math.PI * 2 - Math.PI / 2;

            const start = intersectRect(
              angle,
              50,
              50,
              18,
              8,
              0.6
            );

            const end = {
              x: 50 + Math.cos(angle) * NODE_RADIUS,
              y: 50 + Math.sin(angle) * NODE_RADIUS,
            };

            const mid = {
              x:
                50 +
                Math.cos(angle) * 22 +
                Math.cos(angle + Math.PI / 2) * 3,
              y:
                50 +
                Math.sin(angle) * 22 +
                Math.sin(angle + Math.PI / 2) * 3,
            };

            return (
              <path
                d={`M ${start.x},${start.y} Q ${mid.x},${mid.y} ${end.x},${end.y}`}
                stroke="rgba(255,215,0,0.32)"
                strokeWidth="0.35"
                fill="none"
                strokeDasharray="1.2 1.8"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="6"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>


            );
          })}
        </svg>

        {/* CENTER NODE */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="px-10 py-6 rounded-xl text-center bg-black/40 border border-white/30 shadow-[0_0_80px_rgba(255,215,0,0.18)]">
            <h2 className="text-4xl font-bold">Technologies</h2>
            <p className="text-sm text-white/70">I Work With</p>
          </div>
        </div>

        {/* ORBIT NODES */}
        {tools.map((tool, i) => {
          const angle =
            (i / tools.length) * Math.PI * 2 - Math.PI / 2;
          const x = CENTER + Math.cos(angle) * NODE_RADIUS;
          const y = CENTER + Math.sin(angle) * NODE_RADIUS;

          return (
            <div
              key={tool.title}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="flex flex-col items-center">
                <div className={`size-24 rounded-full flex items-center justify-center bg-black/50 border border-white/30  ${tool.title === "GitHub" ? "bg-white" : "bg-block-bg"}`}>
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-semibold text-center">
                  {tool.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  /* ===========================
     MOBILE (GRID)
  =========================== */
  const MobileGrid = () => (
    <div className="lg:hidden px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Technologies</h2>
        <p className="text-sm text-white/70">I Work With</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="flex flex-col items-center text-center p-4 rounded-xl bg-black/40 border border-white/20"
          >
            <div className={`size-16 rounded-full flex items-center justify-center border border-white/30 bg-black/50 mb-3  ${tool.title === "GitHub" ? "bg-white" : "bg-block-bg"}`}>
              <img
                src={tool.icon}
                alt={tool.title}
                className="h-8 w-8 object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold">{tool.title}</h3>
            <p className="text-xs text-white/60 mt-1">
              {tool.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  /* ===========================
     RENDER
  =========================== */
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      <DesktopRadial />
      <MobileGrid />
    </section>
  );
}
// "use client";

// import { tools, Tool } from "@/lib/tools";

// export default function Tools() {
//   const CENTER = 50;        // %
//   const RADIUS = 35;        // jarak node
//   const INNER_STOP = 12;    // jarak dari pusat (keluar kotak)
//   const OUTER_STOP = 32;    // jarak sebelum node (biar gak nabrak)
//   const WAVE = 3;           // intensitas gelombang


//   function intersectRect(
//     angle: number,
//     cx: number,
//     cy: number,
//     hw: number,
//     hh: number,
//     inset = 0.6 // << ini kuncinya
//   ) {
//     const dx = Math.cos(angle);
//     const dy = Math.sin(angle);

//     const tx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
//     const ty = dy !== 0 ? hh / Math.abs(dy) : Infinity;

//     const t = Math.min(tx, ty) - inset;

//     return {
//       x: cx + dx * t,
//       y: cy + dy * t,
//     };
//   }


//   return (
//     <section
//       id="skills"
//       className="
//     relative min-h-screen
//     flex items-center justify-center
//     bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06),transparent_65%)]
//   "
//     >

//       <div
//         className="
//     relative
//     w-full max-w-[900px]
//     aspect-square
//   "
//       >


//         {/* CENTER NODE */}
//         <div
//           className="
//     absolute left-1/2 top-1/2
//     -translate-x-1/2 -translate-y-1/2
//     z-10
//   "
//         >
//           <div
//             className="
//       px-6 sm:px-10 py-4 sm:py-6
//       rounded-xl
//       text-center
//       bg-block-bg
//       border border-border-subtle
//       shadow-[0_0_80px_rgba(255,215,0,0.18)]
//     "
//           >
//             <h2 className="text-2xl sm:text-4xl font-heading font-bold">
//               Languages
//             </h2>
//             <p className="text-sm sm:text-base text-text-dark-secondary">
//               of Creation
//             </p>
//           </div>
//         </div>


//         {/* CONNECTION LINES */}
//         <svg
//           viewBox="0 0 100 100"
//           className="absolute inset-0 w-full h-full pointer-events-none"
//         >
//           {tools.map((_, i) => {
//             const angle =
//               (i / tools.length) * Math.PI * 2 - Math.PI / 2;

//             const start = intersectRect(
//               angle,
//               50,
//               50,
//               18,
//               8,
//               0.6
//             );

//             const end = {
//               x: 50 + Math.cos(angle) * 32,
//               y: 50 + Math.sin(angle) * 32,
//             };

//             const mid = {
//               x:
//                 50 +
//                 Math.cos(angle) * 22 +
//                 Math.cos(angle + Math.PI / 2) * 3,
//               y:
//                 50 +
//                 Math.sin(angle) * 22 +
//                 Math.sin(angle + Math.PI / 2) * 3,
//             };

//             return (
//               <path
//                 key={i}
//                 d={`M ${start.x},${start.y} Q ${mid.x},${mid.y} ${end.x},${end.y}`}
//                 stroke="rgba(255,215,0,0.32)"
//                 strokeWidth="0.35"
//                 fill="none"
//                 strokeDasharray="1.2 1.8"
//                 strokeDashoffset="0.8"
//                 strokeLinecap="round"
//               />
//             );
//           })}
//         </svg>

//         {/* TOOL NODES */}
//         {tools.map((tool, i) => {
//           const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
//           const x = CENTER + Math.cos(angle) * RADIUS;
//           const y = CENTER + Math.sin(angle) * RADIUS;

//           return (
//             <div
//               key={tool.title}
//               className="absolute"
//               style={{
//                 left: `${x}%`,
//                 top: `${y}%`,
//                 transform: "translate(-50%, -50%)",
//               }}
//             >
//               <div className="group flex flex-col items-center">
//                 <div
//                   className={`
//             size-20 sm:size-24
//             rounded-full
//             flex items-center justify-center
//             bg-block-bg
//             border border-border-subtle
//             transition-all duration-300
//             group-hover:scale-110
//             group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
//              ${tool.title === "GitHub" ? "bg-white" : "bg-block-bg"}
//           `}
//                 >
//                   <img
//                     src={tool.icon}
//                     alt={tool.title}
//                     className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
//                   />
//                 </div>

//                 <span className="mt-2 text-xs sm:text-sm font-semibold text-center">
//                   {tool.title}
//                 </span>
//               </div>
//             </div>
//           );
//         })}

//       </div>
//     </section>
//   );
// }
