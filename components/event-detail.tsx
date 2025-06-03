import { Event } from "@/types"
import { formatDate } from "@/lib/utils"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

interface EventDetailProps {
  event: Event
}

export default function EventDetail({ event }: EventDetailProps) {
  if (!event) return null

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="relative w-full rounded-lg overflow-hidden mb-8">
        <div className="relative aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.5/1]">
          <Image 
            src={event.image}
            alt={event.title}
            fill
            className="object-contain bg-black/95"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-2">
            {event.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{event.title}</h1>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8 text-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span>{formatDate(event.date)}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>{event.location}</span>
        </div>
        
        <Button>Register Now</Button>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">About This Event</h2>
        <p className="text-lg text-foreground">{event.description}</p>
      </div>
      
      <div className="mt-8 flex justify-between items-center">
        <Link href="/events">
          <Button variant="outline">Back to Events</Button>
        </Link>
        <Button>Share Event</Button>
      </div>
    </div>
  )
}