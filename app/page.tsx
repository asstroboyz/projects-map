import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Tools />
      <Projects />
      {/* <TechStack /> */}
      <CTA />
      <Footer />
    </>
  );
}
