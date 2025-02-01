"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ 
  children, 
  className,
  delay = 0 
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.setAttribute('data-state', 'visible')
            }, delay)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={sectionRef}
      className={cn(
        "translate-y-[50px] opacity-0 transition-all duration-1000 ease-out",
        "data-[state=visible]:translate-y-0 data-[state=visible]:opacity-100",
        className
      )}
      data-state="hidden"
    >
      {children}
    </div>
  )
} 