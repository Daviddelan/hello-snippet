"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 md:px-6 border-b bg-[#5E3B9C]">
      <div>
        <Link href="/" className="flex items-center">
          <Image
            src="/HelloSnippet"
            alt="HelloSnippet Logo"
            width={150}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/events">
          <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">Events</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10">Contact</Button>
        </Link>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white hover:text-white/80 hover:bg-white/10"
        >
          {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </Button>
      </div>
    </nav>
  )
}