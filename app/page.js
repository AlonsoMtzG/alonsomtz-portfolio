import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="font-satoshi px-14 h-screen relative">
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
