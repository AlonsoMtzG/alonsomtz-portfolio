"use client";
import { useState } from "react";

import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingUI } from "@/components/FloatingUI";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <main className="font-satoshi px-14 h-screen relative">
      <FloatingUI currentSection={currentSection} />
      <Header />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
