import { About } from "../components/About";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className="font-satoshi">
      <Header />
      <Divider />
      <About />
      <Divider />
    </main>
  );
}
