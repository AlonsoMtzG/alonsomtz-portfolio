"use client";
import { useEffect, useRef, useState } from "react";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  const divsRefs = [useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0; // Guardará la última posición de scroll
    const animationDuration = 300; // Duración de la animación en milisegundos

    const updateIndicatorPosition = () => {
      const bigElementTop = window.innerHeight * 0.1;
      const bigElementBottom = window.innerHeight * 0.9;

      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const scrollingDown = currentScrollTop > lastScrollTop;
      lastScrollTop = currentScrollTop;

      if (divsRefs[currentSection] && divsRefs[currentSection].current) {
        const targetRect =
          divsRefs[currentSection].current.getBoundingClientRect();

        // Si estamos desplazándonos hacia abajo
        if (scrollingDown && targetRect.bottom < bigElementTop) {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentSection((prev) =>
              Math.min(prev + 1, divsRefs.length - 1)
            );
            setIsAnimating(false);
          }, animationDuration);
        }
        // Si estamos desplazándonos hacia arriba
        else if (!scrollingDown && targetRect.top > bigElementBottom) {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentSection((prev) => Math.max(prev - 1, 0));
            setIsAnimating(false);
          }, animationDuration);
        }

        // Actualización de la posición del indicador
        const newTopPosition = (targetRect.top / window.innerHeight) * 80;

        // Establece los límites para el indicador
        const adjustedTop = Math.max(0, Math.min(newTopPosition, 80 - 1));
        setIndicatorTop(adjustedTop);
      }
    };

    window.addEventListener("scroll", updateIndicatorPosition);
    updateIndicatorPosition(); // Establecer la posición inicial

    return () => {
      window.removeEventListener("scroll", updateIndicatorPosition);
    };
  }, [currentSection]);

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
      <About divRef={divsRefs[0]} />
      <Projects divRef={divsRefs[1]} />
      <Footer />
    </main>
  );
}
