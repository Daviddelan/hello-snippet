"use client"

import { Category } from "@/types"
import { Button } from "@/components/ui/button"

interface CategoryFiltersProps {
  selectedCategory: Category
  onChange: (category: Category) => void
}

const categories: Category[] = ["All", "Fest", "Music", "Church", "Play", "Cars", "Party", "Conference"]

export default function CategoryFilters({ selectedCategory, onChange }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-6">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onChange(category)}
          variant={selectedCategory === category ? "default" : "outline"}
          className="rounded-full px-6"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}