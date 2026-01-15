export default function PeminjamanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black text-white px-6 py-10">
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
      className={`
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-white/5 backdrop-blur
        p-6 transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      `}
    >
      {/* GLOW */}
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br ${glow}
          transition-opacity duration-300
        `}
      />

      {/* CONTENT */}
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
