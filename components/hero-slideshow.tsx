"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Event } from "@/types"
import Link from "next/link"
import Image from "next/image"

interface HeroSlideshowProps {
  events: Event[]
}

export default function HeroSlideshow({ events }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + events.length) % events.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  if (!events.length) return null

  const currentEvent = events[currentIndex]

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="relative w-full">
        <div className="relative aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.5/1]">
          <Image
            src={currentEvent.image}
            alt={currentEvent.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Event content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <span className="inline-block bg-primary px-4 py-1 rounded-full text-sm font-semibold text-white mb-4">
          {currentEvent.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
          {currentEvent.title}
        </h1>
        <p className="text-lg text-white/90 mb-6 max-w-2xl">
          {currentEvent.description}
        </p>
      </div>

      {/* Explore Event button */}
      <div className="absolute bottom-8 right-8">
        <Link href={`/events/${currentEvent.id}`}>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Explore Event
          </Button>
        </Link>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-8 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === currentIndex 
                ? "bg-white w-5" 
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}