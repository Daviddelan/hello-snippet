"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Event } from "@/types"
import Link from "next/link"

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

  const currentEvent = events[currentIndex]

  return (
    <div className="relative h-[400px] overflow-hidden rounded-b-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-300 dark:from-blue-900 dark:to-purple-800" />
      
      {/* Event slide */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Slideshow</h1>
        
        {/* Navigation dots */}
        <div className="flex space-x-2 mb-6">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-primary w-5" 
                  : "bg-primary/50 hover:bg-primary/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">
          <Link href={`/events/${currentEvent.id}`}>
            <Button className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
              Explore Event
            </Button>
          </Link>
        </div>
      </div>

      {/* Slideshow navigation */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}