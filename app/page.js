import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <main className="font-clashDisplay px-14 h-screen relative">
      <Header />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
