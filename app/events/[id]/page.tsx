import EventDetail from "@/components/event-detail"
import { getEventById, getAllEvents } from "@/lib/data"
import { notFound } from "next/navigation"

interface EventPageProps {
  params: {
    id: string
  }
}

// Generate static params for all event IDs
export async function generateStaticParams() {
  const events = getAllEvents()
  
  return events.map((event) => ({
    id: event.id,
  }))
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventById(params.id)
  
  if (!event) {
    notFound()
  }
  
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 min-h-screen py-8">
      <EventDetail event={event} />
    </div>
  )
}