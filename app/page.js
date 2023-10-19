import { About } from "@/components/About";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
// import { Building } from "@/components/Building";

export default function Home() {
  return (
    <main className="font-satoshi px-14">
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
