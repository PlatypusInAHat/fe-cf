"use client"

import { Star } from "lucide-react"

export function RatingDisplay({ rating, reviewCount, size = "md", showCount = true }) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
      <span className={`font-semibold text-foreground ${textSizes[size]}`}>{rating.toFixed(1)}</span>
      {showCount && reviewCount !== undefined && (
        <span className={`text-muted-foreground ${textSizes[size]}`}>({reviewCount})</span>
      )}
    </div>
  )
}
