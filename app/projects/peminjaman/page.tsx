"use client";

import { useEffect, useRef } from "react";


type Drop = { x: number; y: number; vy: number; length: number };
type Splash = { x: number; y: number; vx: number; vy: number; life: number };
type Ripple = { x: number; y: number; radius: number; life: number };


function RainCanvas({ groundOffset }: { groundOffset: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drops = useRef<Drop[]>([]);
  const splashes = useRef<Splash[]>([]);
  const ripples = useRef<Ripple[]>([]);

  const wind = useRef(0);
  const lastTime = useRef(0);
  const puddleLevel = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = 0;
    let height = 0;

    /* ===== RESIZE ===== */
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.visualViewport?.height ?? window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drops.current = Array.from({ length: Math.floor(width / 14) }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: 220 + Math.random() * 180,
        length: 10 + Math.random() * 14,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    /* ===== WIND CONTROL (DESKTOP) ===== */
    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const center = width / 2;
      wind.current = ((e.clientX - center) / center) * 120;
    };
    window.addEventListener("mousemove", onMouseMove);

    const groundY = () => height - groundOffset - puddleLevel.current;

    /* ===== LOOP ===== */
    const animate = (t: number) => {
      const dt = Math.min((t - lastTime.current) / 1000, 0.033);
      lastTime.current = t;

      /* 🌬️ AUTO DRIFT (MOBILE) */
      if (window.innerWidth < 768) {
        wind.current = Math.sin(t * 0.0003) * 60;
      }

      ctx.clearRect(0, 0, width, height);

      /* ===== RAIN ===== */
      ctx.strokeStyle = "rgba(180,200,255,0.45)";
      ctx.lineWidth = 1;

      drops.current.forEach((d) => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + wind.current * 0.05, d.y + d.length);
        ctx.stroke();

        d.y += d.vy * dt;
        d.x += wind.current * dt;

        // wrap horizontal
        if (d.x < -20) d.x = width + 20;
        if (d.x > width + 20) d.x = -20;

        if (d.y > groundY()) {
          /* RIPPLE */
          ripples.current.push({
            x: d.x,
            y: groundY(),
            radius: 2,
            life: 1,
          });

          puddleLevel.current = Math.min(puddleLevel.current + 0.015, 22);

          d.y = -20;
          d.x = Math.random() * width;
        }
      });

      /* ===== RIPPLE DRAW ===== */
      ripples.current.forEach((r, i) => {
        r.radius += 40 * dt;
        r.life -= dt;

        ctx.strokeStyle = `rgba(160,180,220,${r.life * 0.4})`;
        ctx.beginPath();
        ctx.ellipse(
          r.x,
          r.y,
          r.radius * 1.6,
          r.radius * 0.4,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();

        if (r.life <= 0) ripples.current.splice(i, 1);
      });

      /* ===== PUDDLE ===== */
      ctx.fillStyle = "rgba(20,30,50,0.35)";
      ctx.fillRect(
        0,
        height - groundOffset - puddleLevel.current,
        width,
        puddleLevel.current
      );

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [groundOffset]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
export default function PeminjamanPage() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${vh * 0.01}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    window.visualViewport?.addEventListener("resize", setVH);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const GROUND_OFFSET = isMobile ? 72 : 110;

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black text-white"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      <RainCanvas groundOffset={GROUND_OFFSET} />

      {/* GROUND */}
      <div
        style={{ height: GROUND_OFFSET }}
        className="
    absolute bottom-0 left-0 right-0 z-[5]
    bg-gradient-to-t from-black/95 via-black/60 to-transparent
  "
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 pt-14 pb-40">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Modul Peminjaman</h1>
          <p className="text-slate-400 mb-14">
            Pilih peran untuk melanjutkan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="animate-float [animation-delay:0s]">
              <RoleCard
                title="Admin"
                desc="Kelola data, persetujuan, dan pengembalian"
                href="/projects/peminjaman/admin"
                icon="🛠️"
              />
            </div>

            <div className="animate-float [animation-delay:1.2s]">
              <RoleCard
                title="Guru"
                desc="Approval peminjaman dan monitoring"
                href="/projects/peminjaman/guru"
                icon="👨‍🏫"
              />
            </div>

            <div className="animate-float [animation-delay:2.4s]">
              <RoleCard
                title="Siswa"
                desc="Ajukan dan lihat status peminjaman"
                href="/projects/peminjaman/siswa"
                icon="🎒"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

/* ===============================
   🧩 CARD
================================ */
function RoleCard({
  title,
  icon,
  ghost,
  href,
  desc,
}: {
  title: string;
  icon: string;
  desc?: string;
  href?: string;
  ghost?: boolean;
}) {
  const Wrapper: any = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={`
        group block rounded-2xl p-6 border border-white/10 backdrop-blur
        transition-transform duration-500
        ${ghost
          ? "bg-white/5"
          : "bg-white/10 hover:-translate-y-2 hover:scale-[1.01]"
        }
      `}
    >
      <div className="text-3xl mb-4 transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      {desc && <p className="text-sm text-slate-400 mt-1">{desc}</p>}
    </Wrapper>
  );
}
