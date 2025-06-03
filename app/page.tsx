import HeroSlideshow from "@/components/hero-slideshow"
import { getFeaturedEvents } from "@/lib/data"
import { Suspense } from "react"
import ClientSideEvents from "@/components/client-side-events"

export default function Home() {
  const featuredEvents = getFeaturedEvents()
  
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 min-h-screen">
      <HeroSlideshow events={featuredEvents} />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading events...</div>}>
          <ClientSideEvents />
        </Suspense>
      </div>
    </div>
  )
}