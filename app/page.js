import { Building } from "@/components/Building";

export default function Home() {
  return (
    <main className="font-satoshi">
      {/* <Header />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Footer /> */}
      {/* Delete when ending build  */}
      <div className="h-[100dvh] flex justify-center items-center bg-[url('/1.png')] bg-cover">
        <Building />
      </div>
    </main>
  );
}
