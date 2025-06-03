"use client"

import { Event } from "@/types"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

interface EventGridProps {
  events: Event[]
}

export default function EventGrid({ events }: EventGridProps) {
  const [visibleEvents, setVisibleEvents] = useState<Event[]>([])
  const [showCount, setShowCount] = useState(8)

  useEffect(() => {
    setVisibleEvents(events.slice(0, showCount))
  }, [events, showCount])

  const loadMoreEvents = () => {
    setShowCount(prev => Math.min(prev + 4, events.length))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {visibleEvents.map((event) => (
          <Link 
            key={event.id} 
            href={`/events/${event.id}`}
            className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 bg-card">
              <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm mb-2">
                {event.category}
              </span>
              <h3 className="font-semibold text-lg mb-1 line-clamp-1 text-foreground">{event.title}</h3>
              <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                {event.description}
              </p>
              <div className="flex items-center justify-between text-sm text-foreground">
                <span>{formatDate(event.date)}</span>
                <span className="text-primary">{event.location}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {showCount < events.length && (
        <Button 
          onClick={loadMoreEvents}
          className="mt-8"
        >
          Load More Events
        </Button>
      )}
    </div>
  )
}