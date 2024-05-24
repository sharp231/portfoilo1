import { useEffect, useRef } from "react";
import { Links, LiveReload, Meta,  Scripts, ScrollRestoration } from "@remix-run/react";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Outlet

export default function App() {
  const time = useRef(0.4);
  const value = useRef(0.4);
  const parentRef = useRef<HTMLElement | null>(null);
  const childRefs = useRef<HTMLElement[]>([]);

  const scrollAnimation = () => {
    const parent = parentRef.current;
    if (parent) {
      const elePos = parent.offsetTop;
      const scroll = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scroll > elePos - windowHeight && !parent.classList.contains("play")) {
        childRefs.current.forEach((child, index) => {
          if (!child.classList.contains("fadeUp")) {
            parent.classList.add("play");
            child.style.animationDelay = `${value.current}s`;
            child.classList.add("fadeUp");
            value.current += time.current;
            if (index === childRefs.current.length - 1) {
              parent.classList.remove("play");
            }
          }
        });
      } else {
        childRefs.current.forEach((child) => {
          child.classList.remove("fadeUp");
        });
        value.current = time.current;
      }
    }
  };

  useEffect(() => {
    const parent = document.querySelector<HTMLElement>(".delayScroll");
    if (parent) {
      parentRef.current = parent;
      childRefs.current = Array.from(parent.children) as HTMLElement[];
      scrollAnimation();
      window.addEventListener("scroll", scrollAnimation);
    }

    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <MainContent />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
