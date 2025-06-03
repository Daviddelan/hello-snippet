"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 md:px-6 border-b">
      <div className="h-full py-2">
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/HelloSnippet"
            alt="HelloSnippet Logo"
            width={180}
            height={64}
            className="h-full w-auto"
            priority
          />
        </Link>
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