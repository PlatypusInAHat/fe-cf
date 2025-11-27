"use client"

import { Star, MapPin, Clock, Phone } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CafeCard({
  id,
  name,
  image,
  rating,
  reviewCount,
  address,
  hours,
  phone,
  href,
  variant = "default",
}) {
  if (variant === "compact") {
    return (
      <Card className="p-3 bg-card hover:shadow-lg transition-shadow">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-20 object-cover rounded mb-2" />
        <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground">{rating}</span>
        </div>
        <Link href={href}>
          <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
            View
          </Button>
        </Link>
      </Card>
    )
  }

  if (variant === "minimal") {
    return (
      <Link href={href}>
        <div className="flex gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
          <img src={image || "/placeholder.svg"} alt={name} className="w-16 h-16 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-sm">{name}</h3>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-1">{address}</p>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviewCount})
          </span>
        </div>

        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex gap-2 items-start">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{address}</span>
          </div>
          {hours && (
            <div className="flex gap-2 items-center">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{hours}</span>
            </div>
          )}
          {phone && (
            <div className="flex gap-2 items-center">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{phone}</span>
            </div>
          )}
        </div>

        <Link href={href}>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">View Details</Button>
        </Link>
      </div>
    </Card>
  )
}
