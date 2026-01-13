export default function Hero() {
  return (
    <section
      id="journey"
      className="min-h-screen flex items-center relative px-6 md:px-20 pt-24"
    >
      {/* background blur */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDloz2NUJXREihx1k3tqDVYPXpY27Hs-y4iS4jqTiuFyDZo8UBuw_ZuXMWwtrceopxapUPxuZZZUKn6CceFH_Jz-tKzvUPp76nzA5QxnRWk18KT59Grs7TOTOcMMkODYIAqsv9HKd4_hQie4wH-rr3YBmq11k5ksPb0Tm7GmqaWChBqcxqCvcWGQfdq8EZMKIiRfbAibV1oDVBPE2UFHRq9EJckQHLHplXqZa2rsK_zwEwb555E8q2hQF9iqclZB8qa6pnKLllYhVA")',
        }}
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
        {/* LEFT */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <span className="text-accent-gold tracking-widest text-sm uppercase">
            The Narrative Unfurls
          </span>

          <h1 className="text-6xl md:text-8xl font-heading font-bold">
            Weaving <br />
            <span className="text-accent-gold">Digital Destinies.</span>
          </h1>

          <p className="text-text-dark-secondary text-xl max-w-xl">
            I am a System Weaver, crafting intricate digital ecosystems where
            code flows like narrative.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <button className="h-14 px-8 bg-accent-gold text-background-dark font-bold rounded-lg hover:scale-105 transition">
              Begin the Tale
            </button>
            <button className="h-14 px-8 border border-border-subtle rounded-lg hover:bg-block-bg transition">
              Read My Chronicle
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-[420px] mx-auto -rotate-3 hover:rotate-0 transition">
          <div className="absolute inset-0 bg-block-bg rounded-xl -rotate-6 scale-105" />
          <div
            className="relative aspect-[4/5] rounded-xl bg-cover bg-center border border-border-subtle"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDloz2NUJXREihx1k3tqDVYPXpY27Hs-y4iS4jqTiuFyDZo8UBuw_ZuXMWwtrceopxapUPxuZZZUKn6CceFH_Jz-tKzvUPp76nzA5QxnRWk18KT59Grs7TOTOcMMkODYIAqsv9HKd4_hQie4wH-rr3YBmq11k5ksPb0Tm7GmqaWChBqcxqCvcWGQfdq8EZMKIiRfbAibV1oDVBPE2UFHRq9EJckQHLHplXqZa2rsK_zwEwb555E8q2hQF9iqclZB8qa6pnKLllYhVA")',
            }}
          />
        </div>
      </div>
    </section>
  );
}
