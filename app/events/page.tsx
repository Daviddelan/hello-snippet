import { Suspense } from "react"
import ClientSideEvents from "@/components/client-side-events"

export default function EventsPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">All Events</h1>
        
        <Suspense fallback={<div>Loading events...</div>}>
          <ClientSideEvents />
        </Suspense>
      </div>
    </div>
  )
}