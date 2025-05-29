"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  threshold?: number
}

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 100,
  threshold = 0.1,
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              style={{
                transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 40px, 0)",
                opacity: isVisible ? 1 : 0,
                transition: `all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * staggerDelay}ms`,
                willChange: "transform, opacity",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
