import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <section className="mb-20">
        <span className="text-xs uppercase tracking-widest text-accent-gold">
          {project.tag}
        </span>

        <h1 className="text-5xl font-heading font-bold mt-4">
          {project.title}
        </h1>

        <p className="text-text-dark-secondary max-w-2xl mt-6">
          {project.desc}
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href={project.repo}
            target="_blank"
            className="px-6 py-3 rounded-lg bg-accent-gold text-black font-semibold"
          >
            View Repository
          </a>

          <Link
            href="/#contact"
            className="px-6 py-3 rounded-lg border border-border-subtle"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* IMAGE / SHOWCASE */}
      <section className="rounded-2xl overflow-hidden border border-border-subtle">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover"
        />
      </section>
    </main>
  );
}
