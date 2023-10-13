import { Footer } from "@/components/Footer";
import { About } from "../components/About";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <main className="font-satoshi">
      <Header />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Footer />
    </main>
  );
}
