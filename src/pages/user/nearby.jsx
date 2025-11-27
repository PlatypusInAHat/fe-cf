"use client"

import { useState } from "react"
import { MapPin, Star, ArrowLeft, Map } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const MOCK_NEARBY_CAFES = [
  {
    id: 1,
    name: "Modern Cafe",
    distance: "150m",
    walkTime: "6分",
    rating: 4.5,
    reviews: 128,
    image: "/modern-cafe.png",
    priceRange: "¥800-2000",
    area: "Shibuya",
  },
  {
    id: 2,
    name: "Starlight Cafe",
    distance: "320m",
    walkTime: "12分",
    rating: 4.2,
    reviews: 95,
    image: "/starlight-cafe.jpg",
    priceRange: "¥600-1500",
    area: "Shibuya",
  },
  {
    id: 3,
    name: "Blue Moon Cafe",
    distance: "580m",
    walkTime: "18分",
    rating: 4.8,
    reviews: 156,
    image: "/blue-moon-cafe.jpg",
    priceRange: "¥1000-2500",
    area: "Shibuya",
  },
]

export default function NearByCafesPage() {
  const [selectedDistance, setSelectedDistance] = useState("2")
  const currentLocation = "Shibuya, Tokyo"

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/user/dashboard">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Nearby Cafes</h1>
            <p className="text-sm text-muted-foreground mt-1">{currentLocation}</p>
          </div>
        </div>

        {/* Location & Distance Selection */}
        <Card className="p-6 mb-6 bg-card">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Current Location: {currentLocation}</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Distance Range</label>
              <div className="flex gap-2">
                {["1", "2", "5", "10"].map((distance) => (
                  <Button
                    key={distance}
                    variant={selectedDistance === distance ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDistance(distance)}
                    className={`${selectedDistance === distance ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    {distance}km
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <MapPin className="w-4 h-4 mr-2" />
              Get Current Location
            </Button>
          </div>
        </Card>

        {/* Map Placeholder & List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-96 bg-card flex items-center justify-center border-2 border-dashed">
              <div className="text-center">
                <Map className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">Map View</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {MOCK_NEARBY_CAFES.length} cafes within {selectedDistance}km
                </p>
              </div>
            </Card>
          </div>

          {/* Nearby Cafes List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">{MOCK_NEARBY_CAFES.length} Cafes Found</h2>
            {MOCK_NEARBY_CAFES.map((cafe) => (
              <Card key={cafe.id} className="p-4 bg-card hover:shadow-lg transition-shadow">
                <img
                  src={cafe.image || "/placeholder.svg"}
                  alt={cafe.name}
                  className="w-full h-24 object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-foreground mb-1">{cafe.name}</h3>

                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(cafe.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    {cafe.rating} ({cafe.reviews})
                  </span>
                </div>

                <div className="space-y-1 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span>
                      {cafe.distance} ({cafe.walkTime})
                    </span>
                  </div>
                  <div>Price: {cafe.priceRange}</div>
                </div>

                <div className="flex gap-2">
                  <Link href={`/user/cafes/${cafe.id}`} className="flex-1">
                    <Button variant="outline" className="w-full text-xs bg-transparent">
                      Details
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-1/3 text-xs bg-transparent">
                    <Map className="w-3 h-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
