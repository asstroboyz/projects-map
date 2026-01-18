"use client";

import { useEffect, useMemo } from "react";

type Drop = {
  id: number;
  left: number;
  delay: number;
  duration: number;
};

export default function PeminjamanPage() {

  const drops = useMemo<Drop[]>(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -10,
      duration: 2.5 + Math.random() * 2.5,
    }));
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black text-white">
      {/* ================= BACKGROUND HUJAN ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {drops.map((d) => (
          <span
            key={d.id}
            className="rain-drop"
            style={{
              left: `${d.left}%`,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.duration}s`,
            }}
          />
        ))}

        {/* SPLASH */}
        {drops.slice(0, 30).map((d) => (
          <span
            key={`splash-${d.id}`}
            className="rain-splash"
            style={{
              left: `${d.left}%`,
              animationDelay: `${Math.abs(d.delay)}s`,
            }}
          />
        ))}
      </div>

  
      <div className="absolute bottom-0 left-0 right-0 h-[120px] z-[5] pointer-events-none bg-gradient-to-t from-black/80 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Modul Peminjaman
            </h1>
            <p className="text-slate-400 mt-2">
              Pilih peran untuk melanjutkan ke sistem peminjaman
            </p>
          </div>

          {/* ROLE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RoleCard
              title="Admin"
              desc="Kelola data, persetujuan, dan pengembalian"
              href="/projects/peminjaman/admin"
              icon="🛠️"
              glow="from-indigo-500/30 to-indigo-700/30"
            />

            <RoleCard
              title="Guru"
              desc="Approval peminjaman dan monitoring"
              href="/projects/peminjaman/guru"
              icon="👨‍🏫"
              glow="from-emerald-500/30 to-emerald-700/30"
            />

            <RoleCard
              title="Siswa"
              desc="Ajukan dan lihat status peminjaman"
              href="/projects/peminjaman/siswa"
              icon="🎒"
              glow="from-amber-500/30 to-amber-700/30"
            />
          </div>
        </div>
      </div>

    
      <style jsx global>{`
        .rain-drop {
          position: absolute;
          top: -40px;
          width: 2px;
          height: 24px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.9),
            rgba(255, 255, 255, 0.15)
          );
          animation: rain-fall linear infinite;
        }

        @keyframes rain-fall {
          to {
            transform: translateY(calc(100vh - 140px));
          }
        }

        .rain-splash {
          position: absolute;
          bottom: 120px;
          width: 14px;
          height: 6px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          opacity: 0;
          animation: splash 1.6s ease-out infinite;
        }

        @keyframes splash {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

function RoleCard({
  title,
  desc,
  href,
  icon,
  glow,
}: {
  title: string;
  desc: string;
  href: string;
  icon: string;
  glow: string;
}) {
  return (
    <a
      href={href}
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur
        p-6 transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
   
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br ${glow}
          transition-opacity duration-300
        `}
      />

   
      <div className="relative z-10">
        <div className="text-3xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-slate-400 mt-1">{desc}</p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm text-indigo-400 group-hover:text-indigo-300">
          Masuk
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
