"use client"

import { Event } from "@/types"
import { HoverEffect } from "./ui/card-hover-effect"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { formatDate } from "@/lib/utils"

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

  const formattedEvents = visibleEvents.map(event => ({
    ...event,
    date: formatDate(event.date),
    link: `/events/${event.id}`
  }))

  return (
    <div className="flex flex-col items-center">
      <HoverEffect items={formattedEvents} />
      
      {showCount < events.length && (
        <Button 
          onClick={loadMoreEvents}
          className="my-6 px-8"
        >
          More Events
        </Button>
      )}
    </div>
  )
}