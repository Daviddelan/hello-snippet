"use client"

import { useState } from "react"
import { Category } from "@/types"
import { getEventsByCategory } from "@/lib/data"
import CategoryFilters from "@/components/category-filters"
import EventGrid from "@/components/event-grid"

export default function ClientSideEvents() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")
  const events = getEventsByCategory(selectedCategory)
  
  return (
    <>
      <CategoryFilters 
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      <EventGrid events={events} />
    </>
  )
}