import { tools, Tool } from "@/lib/tools";

export default function Tools() {
  return (
    <section
      id="skills"
      className="py-32 relative bg-[linear-gradient(to_bottom_right,rgba(27,38,36,0.8),rgba(16,16,16,0.8))]"
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-20">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-accent-gold tracking-widest text-sm uppercase">
            The Weaver&apos;s Tools
          </span>
          <h2 className="text-5xl font-heading font-bold mt-4">
            Languages of Creation
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 justify-items-center">

          {tools.map((tool: Tool) => (
            <div
              key={tool.title}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon */}
              <div
                className={`
                  size-24 flex items-center justify-center rounded-full
                  border border-border-subtle mb-3 transition
                  group-hover:scale-110 group-hover:shadow-lg
                  ${tool.title === "GitHub" ? "bg-white" : "bg-block-bg"}
                `}
              >
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-heading font-bold">
                {tool.title}
              </h3>

              {/* Desc (desktop only) */}
              <p className="hidden md:block text-text-dark-secondary text-sm max-w-xs mt-2">
                {tool.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
