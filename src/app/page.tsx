import Container from "@/components/common/Container";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import Experience from "@/components/landing/Experience";
import Certifications from "@/components/landing/Certifications";
import Contact from "@/components/landing/Contact";

export default function HomePage() {
  return (
    <Container className="pt-6 pb-16 sm:pt-8">
      <div className="space-y-12 sm:space-y-14">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Certifications />
        <Contact />
      </div>
    </Container>
  );
}