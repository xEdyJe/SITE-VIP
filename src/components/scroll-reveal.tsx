import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  animation?: "fade-up" | "fade-in" | "scale-up" | "clip-reveal";
  className?: string;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 1200,
  animation = "fade-up",
  className = "",
  as: Component = "div",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fallback: force visibility after 600ms if observer fails to trigger (e.g. hydration/scrolling issues)
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(timeoutId);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // trigger when 5% visible
        rootMargin: "0px 0px -80px 0px", // trigger slightly before entering viewport
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const styles = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <Component
      ref={elementRef}
      style={styles}
      className={`reveal-base reveal-${animation} ${isVisible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
