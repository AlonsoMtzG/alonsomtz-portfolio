import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="font-clashDisplay px-7 md:px-14 relative overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
