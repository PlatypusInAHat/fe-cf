"use client"

import { useState } from "react"
import { Tag, MapPin, Calendar, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const MOCK_PROMOTIONS = [
  {
    id: 1,
    cafeName: "Modern Cafe",
    discount: "Coffee 20% OFF",
    discountType: "percentage",
    period: "2025-10-01 ~ 2025-10-31",
    area: "Shibuya",
  },
  {
    id: 2,
    cafeName: "Starlight Cafe",
    discount: "Cake Set ¥500 OFF",
    discountType: "fixed",
    period: "2025-10-15 ~ 2025-11-15",
    area: "Shinjuku",
  },
  {
    id: 3,
    cafeName: "Blue Moon Cafe",
    discount: "Dessert Free",
    discountType: "free",
    period: "2025-10-20 ~ 2025-11-20",
    area: "Minato",
  },
  {
    id: 4,
    cafeName: "Modern Cafe",
    discount: "Pastry Bundle 30% OFF",
    discountType: "percentage",
    period: "2025-11-01 ~ 2025-11-30",
    area: "Shibuya",
  },
]

export default function PromotionsPage() {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filterArea, setFilterArea] = useState("")
  const [filterType, setFilterType] = useState("")
  const [sortBy, setSortBy] = useState("newest")

  const filteredPromotions = MOCK_PROMOTIONS.filter(
    (p) =>
      searchKeyword === "" ||
      p.cafeName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      p.discount.toLowerCase().includes(searchKeyword.toLowerCase()),
  )
    .filter((p) => filterArea === "" || p.area === filterArea)
    .filter((p) => filterType === "" || p.discountType === filterType)
    .sort((a, b) => {
      if (sortBy === "newest") return 0
      if (sortBy === "discount-high") {
        const aVal = Number.parseInt(a.discount.match(/\d+/)?.[0] || "0")
        const bVal = Number.parseInt(b.discount.match(/\d+/)?.[0] || "0")
        return bVal - aVal
      }
      return 0
    })

  const getDiscountBadge = (type) => {
    const colors = {
      percentage: "bg-red-100 text-red-800",
      fixed: "bg-blue-100 text-blue-800",
      free: "bg-green-100 text-green-800",
    }
    return colors[type] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/user/dashboard">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Promotions & Discounts</h1>
        </div>

        {/* Search & Filter Section */}
        <Card className="p-6 mb-6 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by cafe or promotion..."
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
              <label className="block text-sm font-medium text-foreground mb-2">Discount Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">All types</option>
                <option value="percentage">Percentage OFF</option>
                <option value="fixed">Fixed Amount OFF</option>
                <option value="free">Free Service</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="newest">Newest First</option>
                <option value="discount-high">Highest Discount</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Promotions List */}
        <div className="space-y-4">
          {filteredPromotions.length === 0 ? (
            <Card className="p-12 text-center bg-card">
              <Tag className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No promotions match your criteria.</p>
            </Card>
          ) : (
            filteredPromotions.map((promo) => (
              <Card
                key={promo.id}
                className="p-6 bg-card hover:shadow-lg transition-shadow border-l-4 border-l-primary"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{promo.cafeName}</h3>
                    <div
                      className={`inline-block px-3 py-1 rounded text-sm font-medium ${getDiscountBadge(promo.discountType)}`}
                    >
                      {promo.discount}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{promo.period}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{promo.area}</span>
                  </div>

                  <div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
