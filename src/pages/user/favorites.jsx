"use client"

import { useState } from "react"
import { Heart, MapPin, Star, Phone, Clock, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const MOCK_FAVORITES = [
  {
    id: 1,
    name: "Modern Cafe",
    rating: 4.5,
    reviews: 128,
    address: "Tokyo, Shibuya Ward 1-2-3",
    hours: "9:00 - 20:00",
    phone: "090-1234-5678",
    image: "/modern-cafe-interior.png",
  },
  {
    id: 2,
    name: "Starlight Cafe",
    rating: 4.2,
    reviews: 95,
    address: "Tokyo, Shinjuku Ward 4-5-6",
    hours: "8:00 - 22:00",
    phone: "090-9876-5432",
    image: "/starlight-cafe.jpg",
  },
  {
    id: 3,
    name: "Blue Moon Cafe",
    rating: 4.8,
    reviews: 156,
    address: "Tokyo, Minato Ward 7-8-9",
    hours: "10:00 - 18:00",
    phone: "090-5555-6666",
    image: "/blue-moon-cafe.jpg",
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(MOCK_FAVORITES)
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filterArea, setFilterArea] = useState("")
  const [filterRating, setFilterRating] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  const filteredCafes = favorites
    .filter((c) => searchKeyword === "" || c.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    .filter((c) => filterArea === "" || c.address.includes(filterArea))
    .filter((c) => filterRating === "" || c.rating >= Number.parseFloat(filterRating))
    .sort((a, b) => {
      if (sortBy === "recent") return 0
      if (sortBy === "rating-high") return b.rating - a.rating
      if (sortBy === "rating-low") return a.rating - b.rating
      if (sortBy === "name-asc") return a.name.localeCompare(b.name)
      return 0
    })

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id))
  }

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
            <h1 className="text-3xl font-bold text-foreground">My Favorites</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {favorites.length} cafe{favorites.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Search & Filter Section */}
        <Card className="p-6 mb-6 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by cafe name..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Area</label>
              <select
                value={filterArea}
                onChange={(e) => setFilterArea(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All areas</option>
                <option value="Shibuya">Shibuya</option>
                <option value="Shinjuku">Shinjuku</option>
                <option value="Minato">Minato</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Minimum Rating</label>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All ratings</option>
                <option value="4">4 stars and up</option>
                <option value="3">3 stars and up</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="recent">Recently Added</option>
                <option value="rating-high">Highest Rating</option>
                <option value="rating-low">Lowest Rating</option>
                <option value="name-asc">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Favorites Grid */}
        {filteredCafes.length === 0 ? (
          <Card className="p-12 text-center bg-card">
            <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">
              {favorites.length === 0
                ? "No favorites yet. Start adding your favorite cafes!"
                : "No cafes match your filters."}
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCafes.map((cafe) => (
              <Card key={cafe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={cafe.image || "/placeholder.svg"}
                    alt={cafe.name}
                    className="w-full h-40 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => handleRemoveFavorite(cafe.id)}
                  >
                    <Heart className="w-5 h-5 fill-primary text-primary" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{cafe.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(cafe.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {cafe.rating} ({cafe.reviews})
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex gap-2 items-start">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{cafe.address}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{cafe.hours}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{cafe.phone}</span>
                    </div>
                  </div>

                  <Link href={`/user/cafes/${cafe.id}`}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
