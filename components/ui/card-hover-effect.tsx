"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: string
    title: string
    description: string
    date: string
    location: string
    image: string
    link: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div
              className="h-40 w-full rounded-t-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>{item.date}</span>
              <span>{item.location}</span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full p-4 overflow-hidden bg-white border border-neutral-200 dark:bg-black dark:border-white/[0.2] group-hover:border-neutral-300 dark:group-hover:border-white/[0.3] transition duration-200",
        className
      )}
    >
      <div className="relative z-20">
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn("text-xl font-bold tracking-wide mt-2", className)}>
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3",
        className
      )}
    >
      {children}
    </p>
  )
}