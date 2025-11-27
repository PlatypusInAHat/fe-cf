"use client"
import { ArrowLeft, Edit2, Star, MapPin, Phone, Clock, BarChart3 } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const MOCK_CAFE = {
  id: 1,
  name: "Modern Cafe",
  status: "Operating",
  address: "Tokyo, Shibuya Ward 1-2-3",
  phone: "090-1234-5678",
  hours: "9:00 - 20:00",
  description: "A cozy cafe with high-quality coffee and handmade sweets.",
  image: "/modern-cafe-interior.png",
  rating: 4.6,
  reviewCount: 124,
  favoriteCount: 85,
}

const WEEKLY_VISITORS = [
  { day: "Mon", visitors: 120 },
  { day: "Tue", visitors: 150 },
  { day: "Wed", visitors: 130 },
  { day: "Thu", visitors: 160 },
  { day: "Fri", visitors: 200 },
  { day: "Sat", visitors: 240 },
  { day: "Sun", visitors: 180 },
]

const RECENT_REVIEWS = [
  {
    id: 1,
    author: "User123",
    date: "2025-10-15",
    rating: 5,
    comment: "Great coffee and cozy atmosphere!",
  },
  {
    id: 2,
    author: "CoffeeAddict",
    date: "2025-10-10",
    rating: 4,
    comment: "Good pastries but a bit crowded.",
  },
]

export default function CafeDetailPage({ params }) {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/owner/dashboard">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Cafe
          </Button>
        </div>

        {/* Cafe Info Card */}
        <Card className="p-6 mb-6 bg-card">
          <img
            src={MOCK_CAFE.image || "/placeholder.svg"}
            alt={MOCK_CAFE.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{MOCK_CAFE.name}</h1>
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-medium mb-4">
                {MOCK_CAFE.status}
              </div>

              <div className="space-y-3 text-foreground">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{MOCK_CAFE.address}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{MOCK_CAFE.phone}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{MOCK_CAFE.hours}</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-6">{MOCK_CAFE.description}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(MOCK_CAFE.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-lg font-semibold text-foreground">{MOCK_CAFE.rating}/5.0</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-background rounded-lg">
                    <div className="text-sm text-muted-foreground">Reviews</div>
                    <div className="text-2xl font-bold text-foreground">{MOCK_CAFE.reviewCount}</div>
                  </div>
                  <div className="p-3 bg-background rounded-lg">
                    <div className="text-sm text-muted-foreground">Favorites</div>
                    <div className="text-2xl font-bold text-foreground">{MOCK_CAFE.favoriteCount}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Weekly Visitors Chart */}
        <Card className="p-6 mb-6 bg-card">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Weekly Visitors
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={WEEKLY_VISITORS}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitors" fill="#8b6f47" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Recent Reviews */}
        <Card className="p-6 bg-card">
          <h2 className="text-xl font-bold text-foreground mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {RECENT_REVIEWS.map((review) => (
              <div key={review.id} className="p-4 border border-input rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">{review.author}</h3>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>

                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
