"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 md:px-6 border-b">
      <div>
        <Link href="/" className="text-xl font-bold">EventHub</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/events">
          <Button variant="ghost">Events</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </Button>
      </div>
    </nav>
  )
}