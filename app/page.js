"use client";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const rect1 = div1Ref.current.getBoundingClientRect();
      const rect2 = div2Ref.current.getBoundingClientRect();

      const bigElementTop = window.innerHeight * 0.1; // Está posicionado a 10vh desde la parte superior
      const bigElementBottom = window.innerHeight * 0.9; // 80vh de altura

      // Si el div1 está en la pantalla y no ha alcanzado el borde superior del elemento grande
      if (rect1.top >= bigElementTop && rect1.bottom <= bigElementBottom) {
        setIndicatorTop((rect1.top / window.innerHeight) * 80);
      } else if (rect1.bottom < bigElementTop) {
        // Cuando el div1 pasa el borde superior del elemento grande
        setIsAnimating(true);
        setTimeout(() => {
          setIndicatorTop((rect2.top / window.innerHeight) * 80);
          setIsAnimating(false);
        }, 200); // Duración de la animación (300ms aquí)
      }

      // Ajusta los límites del indicador para que no salga del elemento grande
      if (indicatorTop < 0) {
        setIndicatorTop(0);
      } else if (indicatorTop > 80 - 1) {
        setIndicatorTop(80 - 1);
      }
    };

    window.addEventListener("scroll", updateIndicatorPosition);
    updateIndicatorPosition(); // Establecer la posición inicial

    return () => {
      window.removeEventListener("scroll", updateIndicatorPosition);
    };
  }, [indicatorTop]);

  return (
    <main className="font-satoshi px-14 h-screen relative">
      <div
        style={{
          position: "fixed",
          top: "10vh",
          right: "3.5rem",
          width: "4rem",
          height: "80vh",
          background: "white",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: `${indicatorTop}vh`,
            left: isAnimating ? "0px" : "-30px",
            transition: "left 0.3s ease-in-out",
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="white"></path>
          </svg>
        </div>
      </div>
      <Header />
      <About section1Ref={section1Ref} div1Ref={div1Ref} />
      <Projects section2Ref={section2Ref} div2Ref={div2Ref} />
      <Footer />
    </main>
  );
}
