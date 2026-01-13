export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background-dark/80">
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
        <span className="text-accent-gold font-heading font-bold">
          Risdandi Ganda Gunawan
        </span>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-accent-gold">About</a>
          <a href="#skills" className="hover:text-accent-gold">Skills</a>
          <a href="#projects" className="hover:text-accent-gold">Projects</a>
          <a href="#contact" className="hover:text-accent-gold">Contact</a>
        </div>
      </nav>
    </header>
  );
}
