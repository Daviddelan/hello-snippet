"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
    date: string;
    category: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
        className
      )}
    >
      {items.map((item) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block w-full"
        >
          <div className="relative h-0 pb-[75%] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm text-white mb-1">{item.date}</p>
              <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                {item.title}
              </h3>
              <span className="inline-block bg-primary/90 px-2 py-0.5 text-white text-sm rounded">
                {item.category}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};