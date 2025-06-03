import { Event } from "@/types"
import { formatDate } from "@/lib/utils"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

interface EventDetailProps {
  event: Event
}

export default function EventDetail({ event }: EventDetailProps) {
  if (!event) return null

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div 
        className="h-[300px] md:h-[400px] rounded-lg bg-cover bg-center mb-8 relative"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="inline-block bg-primary px-3 py-1 text-white text-sm font-semibold rounded-full mb-2">
            {event.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{event.title}</h1>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
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
        <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
        <p className="text-lg">{event.description}</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
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