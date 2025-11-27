"use client"
import { ArrowLeft, Edit2, Star, MapPin, Phone, Clock } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const MOCK_CAFE = {
  id: 1,
  name: "Modern Cafe",
  owner: "Owner A",
  status: "Operating",
  address: "Tokyo, Shibuya Ward 1-2-3",
  phone: "090-1234-5678",
  hours: "9:00 - 20:00",
  description: "A cozy cafe with high-quality coffee and handmade sweets.",
  image: "/modern-cafe-interior.png",
  rating: 4.6,
  reviewCount: 124,
  registerDate: "2025-01-15",
}

const REVIEWS = [
  {
    id: 1,
    author: "User123",
    date: "2025-10-15",
    rating: 5,
    comment: "Excellent coffee and atmosphere!",
  },
  {
    id: 2,
    author: "CoffeeAddict",
    date: "2025-10-10",
    rating: 4,
    comment: "Good service and nice decor.",
  },
]

export default function AdminCafeDetailPage({ params }) {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/admin/cafes">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>

        {/* Cafe Info */}
        <Card className="p-6 mb-6 bg-card">
          <img
            src={MOCK_CAFE.image || "/placeholder.svg"}
            alt={MOCK_CAFE.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{MOCK_CAFE.name}</h1>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                  {MOCK_CAFE.status}
                </span>
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
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Owner</p>
                <p className="text-lg font-semibold text-foreground">{MOCK_CAFE.owner}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Registration Date</p>
                <p className="text-lg font-semibold text-foreground">{MOCK_CAFE.registerDate}</p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(MOCK_CAFE.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="text-lg font-semibold text-foreground">
                  {MOCK_CAFE.rating}/5.0 ({MOCK_CAFE.reviewCount})
                </span>
              </div>

              <p className="text-muted-foreground">{MOCK_CAFE.description}</p>
            </div>
          </div>
        </Card>

        {/* Reviews */}
        <Card className="p-6 bg-card">
          <h2 className="text-xl font-bold text-foreground mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {REVIEWS.map((review) => (
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
