"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: "shine" | "slide-up" | "gradient";
}

export function AnimatedText({ text, className, variant = "shine" }: AnimatedTextProps) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const variants = {
    shine:
      "animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#94a3b8,55%,#e2e8f0)] bg-[length:250%_100%]",
    "slide-up":
      "translate-y-[20px] opacity-0 transition-all duration-700 ease-out data-[state=visible]:translate-y-0 data-[state=visible]:opacity-100",
    gradient:
      "bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white animate-gradient",
  };

  return (
    <span ref={spanRef} className={cn(variants[variant], className)} data-state="hidden">
      {text}
    </span>
  );
}
